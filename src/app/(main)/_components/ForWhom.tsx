import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function ForWhom() {
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="px-[20px] md:px-[5%] lg:px-[10%] max-w-screen-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Households & Businesses Have Different Needs <br /> — We Serve Both!
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Households */}
          <div className="flex flex-col justify-center items-start gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">For Households</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 mt-1" />
                  <span>Flexible On-Demand Pickup at Your Door</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 mt-1" />
                  <span>Digital Weighing & Instant Confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 mt-1" />
                  <span>Safe & Verified Pickup Team</span>
                </li>
              </ul>
            </div>

            <Image
              src="/assets/graphic/household-recycle.png"
              alt="Household recycling"
              width={1500}
              height={200}
              className="hidden md:block md:max-w-xs"
            />
          </div>

          {/* Businesses */}
          <div className="flex flex-col justify-center items-start gap-6 md:text-end md:items-end">
            <div>
              <h3 className="text-2xl font-semibold mb-4">For Businesses</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 md:flex-row-reverse">
                  <CheckCircle2 className="text-green-600 mt-1" />
                  <span>Proper Billing & Documentation</span>
                </li>
                <li className="flex items-start gap-2 md:flex-row-reverse">
                  <CheckCircle2 className="text-green-600 mt-1" />
                  <span>Monthly Recycling Reports</span>
                </li>
                <li className="flex items-start gap-2 md:flex-row-reverse">
                  <CheckCircle2 className="text-green-600 mt-1" />
                  <span>Competitive Corporate Scrap Pricing</span>
                </li>
              </ul>
            </div>

            <Image
              src="/assets/graphic/business-recycle.png"
              alt="Business recycling"
              width={1500}
              height={200}
              className="hidden md:block md:max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
