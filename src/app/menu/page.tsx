"use client";

import { useEffect } from "react";
import Link from "next/link";

const pdfUrl = "/vleispaleis-menu.pdf";

export default function MenuPage() {
  // On mobile, automatically navigate straight to the PDF viewer
  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const ua = navigator.userAgent || "";
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
    if (isMobile) {
      window.location.href = pdfUrl;
    }
  }, []);

  return (
    <main className="min-h-screen h-fit bg-[#fffae7] text-[#223534]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-8 sm:py-12">
        {/* Header with title and download button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-[15vh] gap-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-trajan font-bold text-[#223534]">
            Our Menu
          </h1>
          <a
            href={pdfUrl}
            download="vleispaleis-menu.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] bg-[#82212a] text-white rounded-full font-medium tracking-wide uppercase text-sm hover:bg-[#6a1a22] transition-colors border-2 border-[#82212a]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* Desktop / tablet: inline PDF viewer */}
        <div className="hidden md:block rounded-xl overflow-hidden bg-white shadow-lg border border-[#82212a]/10">
          <iframe
            src={pdfUrl}
            title="De Vleispaleis Menu PDF"
            className="w-full h-[80vh] border-0"
          />
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            href="/#menus"
            className="text-[#82212a] font-medium hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
