import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createDailyRoom } from "@/lib/daily";
import { generateAccessCode, generateRoomSlug, hashCode } from "@/lib/security";
import { sendAppointmentEmail } from "@/lib/email";

const schema = z.object({
  specialtySlug: z.string(),
  clientName: z.string().min(2),
  clientEmail: z.string().email(),
  clientPhone: z.string().min(6),
  clientMessage: z.string().optional(),
  startAt: z.string().datetime(),
  endAt: z.string().datetime(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const specialty = await prisma.specialty.findUnique({
    where: { slug: parsed.data.specialtySlug },
    include: {
      lawyers: {
        include: {
          lawyer: true,
        },
      },
    },
  });

  if (!specialty) {
    return NextResponse.json({ error: "Specialty not found" }, { status: 404 });
  }

  const assignedLawyers = specialty.lawyers.map((entry) => entry.lawyer);

  const roomSlug = generateRoomSlug();
  const roomName = `consulta-${roomSlug}`;
  const dailyRoom = await createDailyRoom({ name: roomName, privacy: "private" });
  const accessCode = generateAccessCode();
  const codeHash = hashCode(accessCode);

  const appointment = await prisma.appointment.create({
    data: {
      clientName: parsed.data.clientName,
      clientEmail: parsed.data.clientEmail,
      clientPhone: parsed.data.clientPhone,
      clientMessage: parsed.data.clientMessage,
      specialtyId: specialty.id,
      startAt: new Date(parsed.data.startAt),
      endAt: new Date(parsed.data.endAt),
      roomName: dailyRoom.name,
      roomUrl: dailyRoom.url,
      roomSlug,
      codeHash,
      lawyers: {
        create: assignedLawyers.map((lawyer) => ({
          lawyerId: lawyer.id,
        })),
      },
    },
  });

  const appointmentUrl = `${process.env.APP_URL}/sala/${appointment.roomSlug}`;

  await sendAppointmentEmail({
    to: appointment.clientEmail,
    subject: "Confirmación de consulta online",
    html: `
      <p>Hola ${appointment.clientName},</p>
      <p>Tu consulta fue agendada para el ${appointment.startAt.toLocaleString("es-AR")}.</p>
      <p>Ingresá en: <a href="${appointmentUrl}">${appointmentUrl}</a></p>
      <p>Código de acceso: <strong>${accessCode}</strong></p>
      <p>Recordatorio: la sala se habilita 10 minutos antes del turno.</p>
    `,
  });

  return NextResponse.json({
    appointmentId: appointment.id,
    roomSlug: appointment.roomSlug,
  });
}
