import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/LenisProvider";
import dynamic from 'next/dynamic';
import Script from "next/script";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";

// Lazy load non-critical components to reduce initial bundle size
const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true,
});

// ScrollProgress and Popup are client components that handle SSR gracefully
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), {
  loading: () => null, // Don't show anything while loading
});

const Popup = dynamic(() => import('@/components/Popup'), {
  loading: () => null, // Don't show anything while loading
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Add font-display swap
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | De Vleispaleis",
  },
  description: SITE_DESCRIPTION,
  applicationName: "De Vleispaleis",
  authors: [{ name: "De Vleispaleis" }],
  creator: "De Vleispaleis",
  publisher: "De Vleispaleis",
  category: "Restaurant",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "/",
    siteName: "De Vleispaleis",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/vleis-logo.png",
        width: 300,
        height: 300,
        alt: "De Vleispaleis logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/vleis-logo.png"],
  },
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/vleis-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/vleis-logo.png" />
        {/* Preconnect to external domains - early hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://public-prod.dineplan.com" />
        <link rel="dns-prefetch" href="https://account.dineplan.com" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XZNC33FHFL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XZNC33FHFL');
          `}
        </Script>
        {/* Dineplan: load in head before window load so their library initializes (see dineplan.widget.min.js). Avoid id="dineplan-widget" — their code treats that id as a widget root. */}
        <Script
          src="https://public-prod.dineplan.com/widget/dineplan.widget.min.js"
          strategy="beforeInteractive"
        />
        {/* Preload critical custom fonts to prevent layout shift */}
        <link
          rel="preload"
          href="/Trajan Pro 3 Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/HelveticaNeueLTCom-Lt.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* Inline critical CSS to reduce render-blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS - inline to prevent render blocking */
            body{margin:0;padding:0;max-width:100vw;line-height:1.5;font-family:var(--font-helvetica),'Helvetica Neue',Arial,sans-serif;background:#ffffff;color:#171717;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}
            html{scroll-behavior:smooth;max-width:100vw;overflow-x:hidden;height:100%}
            h1,h2,h3,h4,h5,h6{font-family:'Trajan Pro',serif;line-height:1.2;margin-top:0;margin-bottom:0.5em}
            p{font-family:var(--font-helvetica);line-height:1.6}
            .font-trajan{font-family:'Trajan Pro',serif!important;line-height:1.2}
            .font-helvetica{font-family:'Helvetica Neue',Arial,sans-serif!important;line-height:1.6}
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <Popup />
        </LenisProvider>
        <Script
          id="dineplan-message-handler"
          strategy="afterInteractive"
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
      </body>
    </html>
  );
}
