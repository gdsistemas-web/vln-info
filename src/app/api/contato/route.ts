import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { sanitizeText } from "@/lib/utils";

const attempts = new Map<string, { count: number; expires: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "local";
  const now = Date.now();
  const current = attempts.get(ip);
  if (current && current.expires > now && current.count >= 5) {
    return NextResponse.json({ success: false, message: "Não foi possível enviar a mensagem." }, { status: 429 });
  }
  attempts.set(ip, { count: (current?.count ?? 0) + 1, expires: now + 10 * 60 * 1000 });

  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success || parsed.data.website) {
      return NextResponse.json({ success: false, message: "Não foi possível enviar a mensagem." }, { status: 400 });
    }
    const payload = Object.fromEntries(Object.entries(parsed.data).map(([key, value]) => [key, typeof value === "string" ? sanitizeText(value) : value]));
    void payload;
    return NextResponse.json({ success: true, message: "Mensagem enviada com sucesso." });
  } catch {
    return NextResponse.json({ success: false, message: "Não foi possível enviar a mensagem." }, { status: 500 });
  }
}
