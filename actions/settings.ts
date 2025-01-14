"use server";

import * as z from "zod";
import { db } from "@/lib/db";

import { currentUser } from "@/lib/auth";
import { getUserById } from "@/data/user";
import { SettingsSchema } from "@/schemas";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser();
  if (!user) {
    return { error: "User not found" };
  }

  const dbUser = await getUserById(user.id!);
  if (!dbUser) {
    return { error: "User not found" };
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
