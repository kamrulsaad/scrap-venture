// _components/scrap-rates-grid.tsx
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const categories = [
  {
    title: "Normal Recyclables",
    items: [
      { icon: "/assets/Icons/profile.png", label: "Newspaper", price: "৳14/KG" },
      { icon: "/assets/Icons/profile.png", label: "Clothes (with scrap only)", price: "৳2/KG" },
      { icon: "/assets/Icons/profile.png", label: "Glass Bottles", price: "৳2/KG" },
      { icon: "/assets/Icons/profile.png", label: "Office Paper (A3/A4)", price: "৳14/KG" },
      { icon: "/assets/Icons/profile.png", label: "Books/Copies", price: "৳12/KG" },
      { icon: "/assets/Icons/profile.png", label: "Cartons", price: "৳8/KG" },
      { icon: "/assets/Icons/profile.png", label: "Plastic Items", price: "৳8/KG" },
      { icon: "/assets/Icons/profile.png", label: "Wires/Cables", price: "৳40/KG" },
      { icon: "/assets/Icons/profile.png", label: "E-waste (mixed)", price: "৳105/KG" },
    ]
  },
  {
    title: "Mobiles & Computers",
    items: [
      { icon: "/assets/Icons/profile.png", label: "Scrap Laptop", price: "৳300/PIECE" },
      { icon: "/assets/Icons/profile.png", label: "CRT Monitor", price: "৳150/PIECE" },
      { icon: "/assets/Icons/profile.png", label: "LCD Monitor", price: "৳20/KG" },
      { icon: "/assets/Icons/profile.png", label: "Computer CPU", price: "৳225/PIECE" },
    ]
  },
  {
    title: "Others",
    items: [
      { icon: "/assets/Icons/profile.png", label: "Bike", price: "৳2100/PIECE" },
      { icon: "/assets/Icons/profile.png", label: "Clothes (with scrap only)", price: "৳2/KG" },
      { icon: "/assets/Icons/profile.png", label: "Car", price: "৳20000/PIECE" },
    ]
  }
]

export default function ScrapRatesGrid() {
  return (
    <div className="space-y-12">
      {categories.map((category, idx) => (
        <div key={idx}>
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            {category.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {category.items.map((item, index) => (
              <Card key={index} className="p-4 text-center shadow-sm hover:shadow-md transition">
                <CardContent className="flex flex-col items-center justify-center gap-3">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <p className="text-green-600 font-semibold text-sm">{item.price}</p>
                  <p className="text-foreground text-sm font-medium text-center leading-tight">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
