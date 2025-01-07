import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth-new-verification?token=${token}`;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #333; margin-bottom: 20px;">Verify your email address</h1>
      <p style="margin-bottom: 15px;">Please click the button below to verify your email address:</p>
      <a href="${confirmLink}" 
         style="display: inline-block; padding: 12px 24px; background-color: #0070f3; color: white; 
                text-decoration: none; border-radius: 5px; margin: 20px 0;">
        Verify Email
      </a>
      <p style="margin-top: 15px;">Or copy and paste this link in your browser:</p>
      <p style="color: #666; word-break: break-all;">${confirmLink}</p>
      <p style="color: #666; margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
        If you did not request this verification, please ignore this email.
      </p>
    </div>
  `;

  const plainTextContent = `
Verify your email address

Please copy and paste the following link into your browser to verify your email address:
${confirmLink}

If you did not request this verification, please ignore this email.
`.trim();

  try {
    await resend.emails.send({
      from: "Auth.js Demo <onboarding@resend.dev>",
      to: email,
      subject: "Please confirm your email",
      html: htmlContent,
      text: plainTextContent,
    });
  } catch (error) {
    console.error("Failed to send verification email:", error);
    throw new Error("Failed to send verification email");
  }
};
