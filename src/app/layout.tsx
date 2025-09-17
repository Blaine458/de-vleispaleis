import type { Metadata } from "next";
import { Geist, Geist_Mono, Elsie } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import LenisProvider from "@/components/LenisProvider";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Popup from "@/components/Popup";
// import ReservationModalWrapper from "@/components/ReservationModalWrapper";
// import DebugScroll from "@/components/DebugScroll";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const elsie = Elsie({
  variable: "--font-elsie",
  subsets: ["latin"],
  weight: ["400", "900"], // Elsie has regular (400) and black (900) weights
});

export const metadata: Metadata = {
  title: "De Vleispaleis - Steakhouse & Grillroom",
  description: "Experience the finest in South African cuisine at De Vleispaleis. Premium AAA grade steak cuts, artisanal butchery, and exceptional dining in Stellenbosch's wine country.",
  icons: {
    icon: '/vleis-logo.png',
    shortcut: '/vleis-logo.png',
    apple: '/vleis-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/vleis-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/vleis-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Elsie:wght@400;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${elsie.variable} antialiased`}
      >
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <Popup />
      </body>
    </html>
  );
}
