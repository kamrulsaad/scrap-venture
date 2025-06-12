"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function PickupForm() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, method: "sms" }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("OTP sent successfully");
        setStep("otp");
      } else {
        toast.error(data.error || "Failed to send OTP");
      }
    } catch (err) {
      console.error("OTP send error:", err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("OTP verified. Redirecting...");
        // TODO: Redirect or store session
      } else {
        toast.error(data.error || "Invalid OTP");
      }
    } catch (err) {
      console.error("Verification error:", err);
      toast.error("Verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={step === "phone" ? handleSendOtp : handleVerifyOtp}
      className="bg-card border border-border p-6 rounded-xl shadow-md w-full md:max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4 text-card-foreground">
        Schedule a Pickup
      </h2>

      {step === "phone" && (
        <>
          <Label htmlFor="phone" className="mb-1 text-muted-foreground text-sm">
            Mobile Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+8801XXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mb-4"
            required
          />
          <Button
            type="submit"
            className="w-full text-lg font-bold"
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Next"}
          </Button>
        </>
      )}

      {step === "otp" && (
        <>
          <Label htmlFor="otp" className="mb-1 text-muted-foreground text-sm">
            Enter OTP
          </Label>
          <Input
            id="otp"
            type="text"
            placeholder="6-digit code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="mb-4"
            required
          />
          <Button
            type="submit"
            className="w-full text-lg font-bold"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </Button>
        </>
      )}

      <p className="text-sm mt-4 text-muted-foreground">
        Facing problems? Call us at{" "}
        <span className="text-green-600 font-semibold">+8801234567890</span>
      </p>
    </form>
  );
}
