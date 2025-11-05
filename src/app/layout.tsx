import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        <script src="https://public-prod.dineplan.com/widget/dineplan.widget.min.js">
</script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Listen for messages from Dineplan iframe
                window.addEventListener('message', function(event) {
                  // Check if message is from Dineplan
                  if (event.origin.includes('dineplan.com')) {
                    // Forward booking events to the reservation modal
                    if (event.data && (
                      (typeof event.data === 'string' && (
                        event.data.includes('booking') ||
                        event.data.includes('success') ||
                        event.data.includes('confirmed')
                      )) ||
                      (typeof event.data === 'object' && (
                        event.data.type === 'booking-complete' ||
                        event.data.bookingComplete ||
                        event.data.success
                      ))
                    )) {
                      // Dispatch custom event that modal can listen to
                      window.dispatchEvent(new CustomEvent('dineplan-booking-complete', {
                        detail: event.data
                      }));
                    }
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
