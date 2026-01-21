import { NextResponse } from "next/server";
import { z } from "zod";
import { createDailyMeetingToken } from "@/lib/daily";

const schema = z.object({
  roomName: z.string().min(3),
  exp: z.number().int().positive(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const token = await createDailyMeetingToken({
    roomName: parsed.data.roomName,
    exp: parsed.data.exp,
  });

  return NextResponse.json(token);
}
