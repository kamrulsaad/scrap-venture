// app/api/otp/send/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import prisma from "@/lib/prisma";
import { addMinutes } from "date-fns";

const OTP_EXPIRY_MINUTES = 5;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone, method } = body;

    if (!phone || !method) {
      return NextResponse.json(
        { success: false, error: "Missing phone or method" },
        { status: 400 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const smsMessage = `Your Scrap Venture OTP is: ${otp}. It is valid for ${OTP_EXPIRY_MINUTES} minutes.`;
    const expiresAt = addMinutes(new Date(), OTP_EXPIRY_MINUTES);

    // Save or update OTP in DB
    await prisma.otpVerification.upsert({
      where: { phone },
      update: { otp, expiresAt },
      create: { phone, otp, expiresAt },
    });

    if (method === "sms") {
      const durjoyUrl = "https://smsp.durjoysoft.com/api/sms";

      const params = {
        ApiKey: process.env.DURJOYSOFT_API_KEY,
        SenderID: process.env.DURJOYSOFT_SENDER_ID,
        number: phone,
        sms: smsMessage,
        IsUnicode: 2,
      };

      await axios.get(durjoyUrl, { params });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: "Unsupported method" },
      { status: 400 }
    );
  } catch (error) {
    console.error("OTP Send Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send OTP" },
      { status: 500 }
    );
  }
}
