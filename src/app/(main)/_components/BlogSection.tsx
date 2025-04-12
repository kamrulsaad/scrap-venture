import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function BlogSection() {
  return (
    <section className="bg-muted py-16">
      <div className="px-[20px] md:px-[5%] lg:px-[10%] max-w-screen-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Our Blogs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <Card className="overflow-hidden">
            <Image
              src="/assets/photos/blogs.jpg"
              alt="Plastic kabadi update"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <CardTitle className="mb-2">Plastic Scrap Prices in Dhaka – Daily Update</CardTitle>
              <p className="text-muted-foreground text-sm mb-3">
                Stay informed about plastic scrap rates in your area. With growing recycling awareness in Bangladesh, knowing market prices can help you get fair value.
              </p>
              <Link href="#" className="text-green-600 font-semibold text-sm">
                Read More →
              </Link>
            </CardContent>
          </Card>

          {/* Blog Post 2 */}
          <Card className="overflow-hidden">
            <Image
              src="/assets/photos/blogs.jpg"
              alt="Local kabadiwala"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <CardTitle className="mb-2">From Badda to Rampura: The Role of Local Scrap Vendors</CardTitle>
              <p className="text-muted-foreground text-sm mb-3">
                Local scrap collectors in Dhaka play a huge role in the circular economy. Learn how Scrap Venture helps them scale their impact.
              </p>
              <Link href="#" className="text-green-600 font-semibold text-sm">
                Read More →
              </Link>
            </CardContent>
          </Card>

          {/* Blog Post 3 */}
          <Card className="overflow-hidden">
            <Image
              src="/assets/photos/blogs.jpg"
              alt="Recycling initiative"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <CardTitle className="mb-2">Green Bangladesh Starts with You</CardTitle>
              <p className="text-muted-foreground text-sm mb-3">
                Recycling isn’t just for factories—it begins at home. Discover how your everyday scrap can help make Bangladesh greener.
              </p>
              <Link href="#" className="text-green-600 font-semibold text-sm">
                Read More →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
