import crypto from "crypto";

export function generateRoomSlug() {
  const base = crypto.randomUUID().split("-")[0];
  const extra = crypto.randomBytes(3).toString("hex");
  return `${base}${extra}`;
}

export function generateAccessCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function hashCode(code: string) {
  return crypto.createHash("sha256").update(code).digest("hex");
}

export function isWithinWindow(startAt: Date) {
  const now = Date.now();
  const start = startAt.getTime();
  const minWindow = start - 10 * 60 * 1000;
  const maxWindow = start + 60 * 60 * 1000;
  return now >= minWindow && now <= maxWindow;
}
