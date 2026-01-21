import { NextResponse } from "next/server";
import { z } from "zod";
import { createDailyRoom } from "@/lib/daily";

const schema = z.object({
  name: z.string().min(3),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const room = await createDailyRoom({
    name: parsed.data.name,
    privacy: "private",
    properties: {
      enable_knocking: true,
      start_video_off: false,
      start_audio_off: false,
    },
  });

  return NextResponse.json(room);
}
