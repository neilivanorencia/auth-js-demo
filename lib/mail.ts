import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/verification?token=${token}`;

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

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/reset-password?token=${token}`;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #333; margin-bottom: 20px;">Reset Your Password</h1>
      <p style="margin-bottom: 15px;">We received a request to reset your password. Click the button below to create a new password:</p>
      <a href="${resetLink}" 
         style="display: inline-block; padding: 12px 24px; background-color: #0070f3; color: white; 
                text-decoration: none; border-radius: 5px; margin: 20px 0;">
        Reset Password
      </a>
      <p style="margin-top: 15px;">Or copy and paste this link in your browser:</p>
      <p style="color: #666; word-break: break-all;">${resetLink}</p>
      <p style="color: #666; margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
        This password reset link will expire in 10 minutes. If you did not request a password reset, 
        please ignore this email and ensure your account is secure.
      </p>
      <p style="color: #666; font-size: 14px;">
        For security reasons, never share this link with anyone.
      </p>
    </div>
  `;

  const plainTextContent = `
Reset Your Password

We received a request to reset your password. To create a new password, copy and paste the following link into your browser:

${resetLink}

This password reset link will expire in 24 hours. If you did not request a password reset, please ignore this email and ensure your account is secure.

For security reasons, never share this link with anyone.
  `.trim();

  try {
    await resend.emails.send({
      from: "Auth.js Demo <onboarding@resend.dev>",
      to: email,
      subject: "Reset your password",
      html: htmlContent,
      text: plainTextContent,
    });
  } catch (error) {
    console.error("Failed to send password reset email:", error);
    throw new Error("Failed to send password reset email");
  }
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #333; margin-bottom: 20px;">Your Authentication Code</h1>
      <p style="margin-bottom: 15px;">Your two-factor authentication code is:</p>
      <div style="background-color: #f4f4f4; padding: 20px; border-radius: 5px; text-align: center; margin: 20px 0;">
        <span style="font-size: 32px; font-family: monospace; letter-spacing: 3px; color: #333;">${token}</span>
      </div>
      <p style="color: #666; margin-top: 20px;">
        This code will expire in 10 minutes. If you did not request this code, 
        please ignore this email and ensure your account is secure.
      </p>
      <p style="color: #666; font-size: 14px; margin-top: 15px;">
        For security reasons, never share this code with anyone.
      </p>
    </div>
  `;

  const plainTextContent = `
Your Authentication Code

Your two-factor authentication code is: ${token}

This code will expire in 5 minutes. If you did not request this code, please ignore this email and ensure your account is secure.

For security reasons, never share this code with anyone.
  `.trim();

  try {
    await resend.emails.send({
      from: "Auth.js Demo <onboarding@resend.dev>",
      to: email,
      subject: "Two-Factor Authentication Code",
      html: htmlContent,
      text: plainTextContent,
    });
  } catch (error) {
    console.error("Failed to send 2FA code:", error);
    throw new Error("Failed to send 2FA code");
  }
};
