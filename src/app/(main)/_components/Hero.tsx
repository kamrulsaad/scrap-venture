import Image from "next/image"
import PickupForm from "@/components/forms/PickupForm"

export default function Hero() {
  return (
    <section className="bg-muted py-10 md:py-20 md:h-[calc(100vh-100px)]">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-10 px-[20px] md:px-[5%] lg:px-[10%] max-w-screen-2xl mx-auto">
        {/* Left Text + Graphic */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-foreground">
            Sell your recyclables online with <br />{" "}
            <span className="text-primary">Scrap Venture</span>!
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-6">
            Paper - Plastics - Metals - Electronics
            <br />
            Serving you with the easiest pickup experience.
          </p>

          <Image
            src="/assets/graphic/Banner Image.png"
            alt="Scrap collection"
            width={200}
            height={50}
            className="mt-4"
          />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <PickupForm />
        </div>
      </div>
    </section>
  )
}
