import { Metadata } from "next";
import InfoNote from "./_components/info-note";
import ScrapRatesGrid from "./_components/scrap-rates-grid";

export const metadata: Metadata = {
  title: "Scrap Rates | Scrap Venture",
  description:
    "Check daily scrap prices for recyclable items in Bangladesh with Scrap Venture.",
};

export default function ScrapRatesPage() {
  return (
    <main className="bg-muted py-10 px-[20px] md:px-[5%] lg:px-[10%] max-w-screen-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
        Scrap Rates
      </h1>
      <InfoNote />
      <ScrapRatesGrid />
    </main>
  );
}
