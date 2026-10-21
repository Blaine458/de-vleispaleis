import type { Metadata } from "next";
import FullGallery from "@/components/FullGallery";

export const metadata: Metadata = {
  title: "Gallery — Inside Our Stellenbosch Steakhouse",
  description:
    "Step inside De Vleispaleis: photos of our steakhouse and grillroom, artisanal butchery and dining in the heart of Stellenbosch, Cape Winelands.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | De Vleispaleis — Steakhouse Stellenbosch",
    description:
      "Photos from inside De Vleispaleis steakhouse and grillroom in Stellenbosch, Cape Winelands.",
    url: "/gallery",
  },
};

export default function Gallery() {
    return (
        <main>
            <section className="bg-[#fffae7] relative z-30 h-fit min-h-[100vh] w-full text-[#223534] pt-16 sm:py-12 md:py-16 lg:py-20">
                <h1 className="sr-only">Gallery — Inside De Vleispaleis Steakhouse in Stellenbosch</h1>
                <FullGallery />
            </section>
        </main>
    );
}