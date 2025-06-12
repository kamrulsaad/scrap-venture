// app/api/otp/verify/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const { phone, otp } = body;

  if (!phone || !otp) {
    return NextResponse.json(
      { success: false, error: "Missing phone or otp" },
      { status: 400 }
    );
  }

  const record = await prisma.otpVerification.findUnique({ where: { phone } });

  if (!record || record.otp !== otp) {
    return NextResponse.json(
      { success: false, error: "Invalid OTP" },
      { status: 401 }
    );
  }

  const now = new Date();
  if (record.expiresAt < now) {
    return NextResponse.json(
      { success: false, error: "OTP expired" },
      { status: 401 }
    );
  }

  // Optional: delete the OTP after use
  await prisma.otpVerification.delete({ where: { phone } });

  // Here you can create session/token/cookie for the user

  return NextResponse.json({ success: true });
}
