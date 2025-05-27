import { sendSubscribeNotificationMail, sendSubscribeWelcomeMail } from "@/utils/mail";
import { forwardSubscriptionData, stringToBool } from "@/utils/misc";

export async function POST(request: Request) {
  const requiredVars = [
    "SMTP_HOST",
    "SMTP_USERNAME",
    "SMTP_PASSWORD",
    "SMTP_PORT",
    "SMTP_TLS",
    "EMAIL_RECIPIENTS"
  ];
  for (const varName of requiredVars) {
    if (process.env[varName]) continue;
    console.log(`ERROR: Missing variable '${varName}'.`);
    return new Response(JSON.stringify({}), { status: 500 });
  }

  const transport = {
    host: process.env.SMTP_HOST!,
    port: +process.env.SMTP_PORT!,
    secure: stringToBool(process.env.SMTP_TLS),
    auth: { user: process.env.SMTP_USERNAME!, pass: process.env.SMTP_PASSWORD! }
  };

  const recipientEmails = process.env
    .EMAIL_RECIPIENTS!.split(",")
    .map((mail) => mail.trim());

  const body: Record<string, string | undefined> = await request.json();
  console.log("Subscription Data: " + JSON.stringify(body));

  // Validation basique pour l'abonnement (au minimum l'email)
  if (!body.email) {
    return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
  }

  const notificationSuccess = await sendSubscribeNotificationMail(
    transport,
    recipientEmails,
    body
  );

  sendSubscribeWelcomeMail(transport, {
    language: body.language || "fr",
    email: body.email!,
    firstName: body.firstName || "",
    lastName: body.lastName || ""
  })
    .then(() => {})
    .catch(() => {});

  if (process.env.SUBSCRIBE_ENDPOINT) {
    forwardSubscriptionData(process.env.SUBSCRIBE_ENDPOINT, body)
      .then(() => {})
      .catch(() => {});
  }

  return new Response(undefined, { status: notificationSuccess ? 201 : 500 });
}
