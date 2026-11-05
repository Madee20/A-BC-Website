import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
};

const LIMITS = { name: 100, company: 100, email: 254, message: 3000 };

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  // honeypot
  if (typeof body.website === "string" && body.website) {
    return NextResponse.json({ success: true });
  }

  const name = clean(body.name, LIMITS.name);
  const company = clean(body.company, LIMITS.company);
  const email = clean(body.email, LIMITS.email);
  // message keeps its line breaks, just trimmed and capped
  const message = typeof body.message === "string" ? body.message.trim().slice(0, LIMITS.message) : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Name, email, and a short message are required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ success: false, error: "Please provide a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    if (process.env.NODE_ENV === "production") {
      console.error("[contact] Email env vars missing in production.");
      return NextResponse.json(
        { success: false, error: "Something went wrong. Please try WhatsApp instead." },
        { status: 500 }
      );
    }
    // dev only: don't log personal data in production
    console.log("[contact] Dev mode, email not configured:", { name, company, email, message });
    return NextResponse.json({ success: true, note: "Logged locally." });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `A&BC Website <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `New consultation request — ${name}${company ? ` (${company})` : ""}`,
        text: [`Name: ${name}`, `Company: ${company || "—"}`, `Email: ${email}`, "", "Message:", message].join("\n"),
      }),
    });

    if (!res.ok) {
      console.error("[contact] Resend API error:", res.status, await res.text());
      return NextResponse.json(
        { success: false, error: "Failed to send message. Please try WhatsApp instead." },
        { status: 502 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try WhatsApp instead." },
      { status: 500 }
    );
  }
}