import { redirect } from "next/navigation";
import { createClient } from "@libsql/client";

import { Resend } from "resend";
import { Beta } from "@/components/emails/beta";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);
export const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export async function POST(req: Request) {
  const data = await req.formData();
  const email = data.get("email")?.toString();
  const phone = data.get("phone")?.toString();
  const cfTurnstileResponse = data.get("cf-turnstile-response") as string;
  const ip = (await headers()).get("x-forwarded-for");
  const verifyFormData = new FormData();
  verifyFormData.append(
    "secret",
    process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY as string,
  );
  verifyFormData.append("response", String(cfTurnstileResponse));
  verifyFormData.append("remoteip", String(ip));

  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

  try {
    // Verify Turnstile using Cloudflare endpoint
    const result = await fetch(url, {
      body: verifyFormData,
      method: "POST",
    });

    const outcome = await result.json();
    if (!outcome.success) {
      redirect("/?error=true");
    }
  } catch {
    redirect("/?error=true");
  }

  if (!email || !phone) {
    redirect("/?error=true");
  }

  const { error } = await resend.emails.send({
    from: "Sam <sam@armoni.studio>",
    to: ["samueleguino97@gmail.com", "sam@armoni.studio"],
    subject: "Shift: Usuario Registrado",
    react: Beta({ email, phone }),
  });
  await turso.execute({
    sql: `INSERT INTO WAITLIST (email, phone) VALUES (?, ?)`,
    args: [email, phone],
  });
  if (error) {
    redirect("/?error=true");
  }

  redirect("/?success=true");
}
