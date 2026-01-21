import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createDailyMeetingToken } from "@/lib/daily";
import { hashCode, isWithinWindow } from "@/lib/security";

const schema = z.object({
  roomSlug: z.string(),
  code: z.string().length(6),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const appointment = await prisma.appointment.findUnique({
    where: { roomSlug: parsed.data.roomSlug },
  });

  if (!appointment) {
    return NextResponse.json({ error: "Sala no encontrada" }, { status: 404 });
  }

  if (!isWithinWindow(appointment.startAt)) {
    return NextResponse.json(
      { error: "Sala no habilitada" },
      { status: 403 }
    );
  }

  if (appointment.failedAttempts >= 5) {
    return NextResponse.json(
      { error: "Demasiados intentos" },
      { status: 429 }
    );
  }

  const hashed = hashCode(parsed.data.code);
  if (hashed !== appointment.codeHash) {
    await prisma.appointment.update({
      where: { id: appointment.id },
      data: { failedAttempts: appointment.failedAttempts + 1 },
    });
    return NextResponse.json({ error: "Código inválido" }, { status: 401 });
  }

  const tokenExp = Math.floor(
    (appointment.endAt.getTime() + 15 * 60 * 1000) / 1000
  );
  const token = await createDailyMeetingToken({
    roomName: appointment.roomName,
    exp: tokenExp,
  });

  await prisma.appointment.update({
    where: { id: appointment.id },
    data: {
      usedAt: appointment.usedAt ?? new Date(),
      dailyTokenId: token.id,
      failedAttempts: 0,
    },
  });

  return NextResponse.json({
    roomUrl: appointment.roomUrl,
    meetingToken: token.token,
  });
}
