import Image from "next/image"

export default function WhyUs() {
  return (
    <section id="whyus" className="bg-primary py-14">
      <div className="px-[20px] md:px-[5%] lg:px-[10%] max-w-screen-2xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Choose Scrap Venture?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-background text-foreground p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <Image src="/icons/value.png" alt="Best Value" width={50} height={50} className="mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Top Payouts</h3>
            <p className="text-muted-foreground text-sm">Get the best price for your scrap, powered by our local recycling network.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-background text-foreground p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <Image src="/icons/easy.png" alt="Convenience" width={50} height={50} className="mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Easy Scheduling</h3>
            <p className="text-muted-foreground text-sm">Book pickups at your preferred time — right from your mobile.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-background text-foreground p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <Image src="/icons/trust.png" alt="Trust" width={50} height={50} className="mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Reliable Team</h3>
            <p className="text-muted-foreground text-sm">Trusted staff trained to provide safe, smooth pickup services every time.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-background text-foreground p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <Image src="/icons/eco.png" alt="Eco-friendly" width={50} height={50} className="mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Eco Commitment</h3>
            <p className="text-muted-foreground text-sm">We recycle with care — ensuring your waste becomes sustainable value.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
