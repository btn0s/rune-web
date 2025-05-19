import { WelcomeEmail } from "@/emails/welcome";
import { NotificationEmail } from "@/emails/notification";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = "brendan.t.norris@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email || "john@example.com";

    // Send welcome email to the user
    const { data: welcomeData, error: welcomeError } = await resend.emails.send(
      {
        from: "rune.design <waitlist@updates.rune.design>",
        to: [email],
        subject: "Rune Private Beta",
        react: await WelcomeEmail({ userEmail: email }),
      }
    );

    if (welcomeError) {
      return Response.json({ error: welcomeError }, { status: 500 });
    }

    // Send notification email to admin
    const { error: notificationError } = await resend.emails.send({
      from: "rune.design <waitlist@updates.rune.design>",
      to: [ADMIN_EMAIL],
      subject: `New Rune Beta Signup: ${email}`,
      react: await NotificationEmail({ userEmail: email }),
    });

    if (notificationError) {
      console.error("Failed to send notification email:", notificationError);
      // Continue the flow, don't return error if only the notification fails
    }

    return Response.json(welcomeData);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
