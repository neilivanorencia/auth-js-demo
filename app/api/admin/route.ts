import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return new NextResponse("Admin route", { status: 200, statusText: "Allowed" });
  }

  return new NextResponse("Admin route", {
    status: 403,
    statusText: "Forbidden",
  });
}
