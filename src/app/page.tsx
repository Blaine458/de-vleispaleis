import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "De Vleispaleis steakhouse at Black Horse Centre, Dorp Street, Stellenbosch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

// Verified from the site only (Footer + FAQ). Fields with no verified
// value on the site (e.g. priceRange, postalCode) are intentionally omitted.
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "De Vleispaleis",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/vleis-logo.png`,
  telephone: "+27 21 879 2356",
  email: "info@devleispaleis.co.za",
  address: {
    "@type": "PostalAddress",
    streetAddress: "56 Dorp Street, Black Horse Centre",
    addressLocality: "Stellenbosch",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.9397682,
    longitude: 18.8545541,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "18:00",
      closes: "22:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/devleispaleis/",
    "https://www.facebook.com/DeVleispaleis/",
    "https://www.tripadvisor.co.za/Restaurant_Review-g312673-d22849807-Reviews-De_Vleispaleis-Stellenbosch_Western_Cape.html",
  ],
  servesCuisine: ["Steakhouse", "South African"],
  menu: `${SITE_URL}/menu`,
  acceptsReservations: "True",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are your operating hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are open Monday through Sunday from 12:00PM to 4:00PM (Lunch) and 6:00PM to 10:00PM (Dinner).",
      },
    },
    {
      "@type": "Question",
      name: "Do you take reservations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we highly recommend making reservations, especially for weekend dining. You can book online through our Dineplan, Google or in the top navigation bar of our website.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accommodate dietary restrictions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We offer vegetarian and vegan options. Please inform us of any dietary requirements when making your reservation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have parking available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parking on Dorp Street is somewhat limited, particularly during busy times, but guests are often able to find additional space on nearby Mark Street. We're happy to assist with any directions or recommendations if needed.",
      },
    },
    {
      "@type": "Question",
      name: "Can you host private events?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer private dining options for special occasions, corporate events, and celebrations. Please contact us to discuss your requirements and availability.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best way to contact you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact us by email at info@devleispaleis.co.za or call us at +27 21 879 2356. We also have an online reservation system on our website.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
