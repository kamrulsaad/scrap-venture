import Image from "next/image"

export default function HowItWorks() {
  return (
    <section className="bg-background py-12">
      <div className="px-[20px] md:px-[5%] lg:px-[10%] max-w-screen-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Step 1 */}
          <div className="bg-primary/10 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <Image src="/assets/Icons/schedule.svg" alt="Schedule" width={100} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Book a Pickup</h3>
            <p className="text-muted-foreground">Submit your phone number and we’ll call to confirm a convenient pickup time.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-primary/10 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <Image src="/assets/Icons/pickup.svg" alt="Pickup" width={100} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">We Come to You</h3>
            <p className="text-muted-foreground">Our team arrives at your address and collects the recyclables right from your doorstep.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-primary/10 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <Image src="/assets/Icons/payment.svg" alt="Payment" width={100} height={80} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Get Paid Instantly</h3>
            <p className="text-muted-foreground">Receive quick, fair payments for your scrap without any hassle.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
