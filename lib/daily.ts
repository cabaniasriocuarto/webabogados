const DAILY_API_URL = "https://api.daily.co/v1";

export async function createDailyRoom({
  name,
  privacy = "private",
  properties,
}: {
  name: string;
  privacy?: "public" | "private";
  properties?: Record<string, unknown>;
}) {
  const response = await fetch(`${DAILY_API_URL}/rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
    },
    body: JSON.stringify({
      name,
      privacy,
      properties,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Daily room error: ${detail}`);
  }

  return response.json() as Promise<{ name: string; url: string }>;
}

export async function createDailyMeetingToken({
  roomName,
  exp,
}: {
  roomName: string;
  exp: number;
}) {
  const response = await fetch(`${DAILY_API_URL}/meeting-tokens`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
    },
    body: JSON.stringify({
      properties: {
        room_name: roomName,
        exp,
        enable_chat: true,
        start_video_off: false,
      },
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Daily token error: ${detail}`);
  }

  return response.json() as Promise<{ token: string; id: string }>;
}
