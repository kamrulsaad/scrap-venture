import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="bg-background py-16">
      <div className="px-[20px] md:px-[5%] lg:px-[10%] max-w-screen-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Image src="/assets/Icons/profile.png" alt="User" width={40} height={40} className="rounded-full" />
              <CardTitle>Shamima Akter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                “Very happy with Scrap Venture&apos;s service. The team came to my home in Mirpur on time and paid fairly for all the scrap. Highly recommended!”
              </p>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Image src="/assets/Icons/profile.png" alt="User" width={40} height={40} className="rounded-full" />
              <CardTitle>Hasan Mahmud</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                “As a small shop owner in Chattogram, I used to struggle to dispose of my electronics waste. Scrap Venture made the process smooth and trustworthy.”
              </p>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Image src="/assets/Icons/profile.png" alt="User" width={40} height={40} className="rounded-full" />
              <CardTitle>Farzana Rahman</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                “Loved the professionalism! They arrived with a digital scale and the whole pickup in Uttara was done in 15 minutes. No haggling—just honest service.”
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
