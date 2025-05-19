import { WelcomeEmail } from "@/emails/welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email || "john@example.com";

    const { data, error } = await resend.emails.send({
      from: "rune.design <waitlist@updates.rune.design>",
      to: [email],
      subject: "Rune Private Beta",
      react: await WelcomeEmail({ userEmail: email }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
