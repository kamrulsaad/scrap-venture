"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function PickupForm() {
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Call your API or backend submission here
    console.log("Phone submitted:", phone)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border p-6 rounded-xl shadow-md w-full md:max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4 text-card-foreground">
        Schedule a Pickup
      </h2>

      <label className="block text-sm font-medium mb-1 text-muted-foreground">
        Mobile
      </label>
      <Input
        type="tel"
        placeholder="+8801XXXXXXXXX"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="mb-4"
        required
      />

      <Button type="submit" className="w-full text-lg font-bold">
        Next
      </Button>

      <p className="text-sm mt-4 text-muted-foreground">
        Facing problems? Call us at{" "}
        <span className="text-green-600 font-semibold">
          +8801234567890
        </span>
      </p>
    </form>
  )
}
