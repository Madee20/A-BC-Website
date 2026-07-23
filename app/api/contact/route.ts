import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  stage?: string;
  message?: string;
  // honeypot field — real users never fill this in
  website?: string;
};

const STAGE_LABELS: Record<string, string> = {
  setup: "A — Setting up in KSA",
  operate: "B — Already operating, needs support",
  scale: "C — Ready to scale or raise",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, email, stage, message, website } = body;

  // honeypot: bots tend to fill every field, including hidden ones
  if (website) {
    return NextResponse.json({ success: true });
  }

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

  // If no email provider is configured yet, log the submission so nothing is lost
  // during local development, and let the request succeed.
  if (!apiKey || !toEmail) {
    console.log("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL not set — logging submission instead:", {
      name,
      company,
      email,
      stage,
      message,
    });
    return NextResponse.json({ success: true, note: "Logged locally — email provider not configured yet." });
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
        text: [
          `Name: ${name}`,
          `Company: ${company || "—"}`,
          `Email: ${email}`,
          `Stage: ${stage ? STAGE_LABELS[stage] || stage : "—"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[contact] Resend API error:", errText);
      return NextResponse.json({ success: false, error: "Failed to send message. Please try WhatsApp instead." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error sending email:", err);
    return NextResponse.json({ success: false, error: "Something went wrong. Please try WhatsApp instead." }, { status: 500 });
  }
}
