import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Butchery & Deli — AAA-Grade Steak Cuts in Stellenbosch",
  description:
    "Our artisanal butchery and deli in Stellenbosch offers AAA-grade steak cuts matured 28–32 days, meat on the bone, Wagyu and hand-cured biltong. Take De Vleispaleis home.",
  alternates: { canonical: "/butchery-and-deli" },
  openGraph: {
    title: "Butchery & Deli | De Vleispaleis — Stellenbosch",
    description:
      "AAA-grade steak cuts matured 28–32 days, meat on the bone, Wagyu and hand-cured biltong from our artisanal butchery and deli in Stellenbosch.",
    url: "/butchery-and-deli",
  },
};

export default function ButcheryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
