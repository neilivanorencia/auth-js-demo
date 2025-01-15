"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { getUserByEmail, getUserById } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import { SettingsSchema } from "@/schemas";
import { generateVerificationToken } from "@/lib/tokens";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "User not found" };
  }

  const dbUser = await getUserById(user.id!);

  if (!dbUser) {
    return { error: "User not found" };
  }

  if (user.isOAuth) {
    const { name, role, isTwoFactorEnabled } = values;

    await db.user.update({
      where: { id: dbUser.id },
      data: {
        name,
        role,
        isTwoFactorEnabled,
      },
    });

    return { success: "Settings updated" };
  }

  if (values.email && values.email !== user.email) {
    const existingUser = await getUserByEmail(values.email);

    if (existingUser && existingUser.id !== user.id) {
      return { error: "Email already exists" };
    }

    const verificationToken = await generateVerificationToken(values.email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );

    return { success: "Verification email sent" };
  }

  if (values.password && values.newPassword && dbUser.password) {
    const passwordsMatch = await bcrypt.compare(
      values.password,
      dbUser.password,
    );

    if (!passwordsMatch) {
      return { error: "Incorrect password" };
    }

    const hashedPassword = await bcrypt.hash(values.newPassword, 10);
    values.password = hashedPassword;
    values.newPassword = undefined as unknown as string;
  }

  await db.user.update({
    where: {
      id: dbUser.id,
    },
    data: {
      ...values,
    },
  });

  return { success: "Settings updated" };
};
