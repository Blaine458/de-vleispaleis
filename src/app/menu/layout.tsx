import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Steakhouse & Grillroom in Stellenbosch",
  description:
    "View the De Vleispaleis menu: premium AAA-grade steaks, grills, fresh seafood and South African wines at our steakhouse in Stellenbosch. Book a table.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Menu | De Vleispaleis — Steakhouse Stellenbosch",
    description:
      "Premium AAA-grade steaks, grills, fresh seafood and South African wines at De Vleispaleis in Stellenbosch.",
    url: "/menu",
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
