"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';

// Lazy load all below-the-fold components to reduce initial bundle size
const MainGallery = dynamic(() => import('@/components/MainGallery'), {
  ssr: true,
});

const Reviews = dynamic(() => import('@/components/Reviews'), {
  ssr: true,
});

const MenusSection = dynamic(() => import('@/components/MenusSection'), {
  ssr: true,
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  ssr: true,
});

// Lazy load ReservationModal - only needed when user clicks
const ReservationModal = dynamic(() => import('@/components/ReservationModal'), {
  ssr: false,
});

export default function HomeClient() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  
  const openReservationModal = () => setIsReservationModalOpen(true);
  const closeReservationModal = () => setIsReservationModalOpen(false);

  return (
    <div className="min-h-screen">
      <main className="min-h-screen relative">
       <section className="fixed flex h-[80vh] top-0 left-0 right-0 -z-10 md:h-[100vh]  sm:h-[90vh] lg:h-[100vh] justify-between items-end px-4 lg:px-30">
        <div className="flex flex-col mx-auto leading-none text-[#fffae7] w-full max-w-full"> 
          <div className="flex flex-col sm:flex-row justify-between font-semibold items-start sm:items-center w-full mb-4 sm:mb-0 sm:gap-0">
            <p className="text-sm font-trajan md:font-sans sm:text-base">Grillroom & Bar</p>
            <p className="text-sm font-trajan md:font-sans sm:text-base">Stellenbosch, South Africa</p>
          </div>
        
          <h1 
            className="font-trajan max-h-fit font-bold w-full sm:text-left break-words" 
            style={{ 
              fontSize: 'clamp(2rem, 10vw, 8rem)',
              lineHeight: '1.1',
              minHeight: 'clamp(2.2rem, 11vw, 8.8rem)',
            }}
          >
            <span className="sr-only">Steakhouse Stellenbosch — </span>DE VLEISPALEIS
          </h1>
        </div>
        <div className="absolute top-0 left-0 h-full w-full object-cover -z-[1] bg-black/50"></div>
        <Image 
          priority 
          src="/VleisPaleis-13.webp" 
          alt="De Vleispaleis steakhouse exterior at Black Horse Centre, Dorp Street, Stellenbosch" 
          width={1920} 
          height={1080} 
          quality={85}
          sizes="100vw"
          className="absolute bottom-0 left-0 grayscale contrast-125 h-full w-full object-cover object-bottom -z-10" 
        />
       </section>
       <section className="flex flex-col lg:flex-row mt-[80vh] md:mt-[100vh] gap-8 w-full h-fit bg-[#fffae7] text-[#223534] py-20 lg:py-40 pl-4 lg:pl-30">
        <div className="flex flex-col justify-between items-start font-bold lg:pr-20 w-full lg:w-1/2 px-4">
          <div className="w-16 lg:w-24 h-1 mb-6 lg:mb-8 bg-[#82212a] rounded-full"></div>
          <h2 className="text-4xl lg:text-6xl font-trajan mb-4 leading-tight"><span className="sr-only">Steakhouse Stellenbosch — </span>Dine in the heart of the Cape Winelands</h2>
          <p className="text-lg lg:text-xl leading-relaxed font-medium mb-6 lg:mb-8">
            Step into the extraordinary world of De Vleispaleis, a steakhouse Stellenbosch diners visit to savour Southern Africa&apos;s absolute finest selection of prime AAA grade steak cuts and grills. Nestled in Stellenbosch&apos;s wine country, our master chefs craft unforgettable dining experiences with exceptional cuts and world-class hospitality.
          </p>
          <button 
            onClick={openReservationModal}
            className="border-2 border-[#223534] text-[#223534] py-4 px-6 min-h-[44px] rounded-full font-semibold hover:bg-[#223534] hover:text-white transition-colors text-sm lg:text-base"
          >
            Reserve Your Table
          </button> 
        </div>
        <div className="w-full flex justify-center lg:justify-end">
          <Image 
            src="/VleisPaleis-7.webp" 
            alt="Dining room inside De Vleispaleis steakhouse in Stellenbosch" 
            width={1920} 
            height={1080} 
            loading="lazy"
            quality={85}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover max-h-[50vh] lg:max-h-[70vh] w-full rounded-l-full" 
          />
        </div>
       </section>
       <section className="relative flex flex-col gap-4 h- min-h-[100vh] bg-[#fffae7] text-[#223534] items-center justify-center lg:pb-40">
        <MainGallery />
       </section>
       <section className="flex flex-col justify-center items-center text-center gap-8 h-fit bg-[#fffae7] text-[#223534] pb-20 lg:pb-30 px-4 lg:px-8">
          <div className="max-w-4xl w-full">
            <h2 className="text-6xl lg:text-6xl font-trajan min-h-fit font-bold mb-6 lg:mb-8 text-[#223534] pt-8">Our Story</h2>
            <div className="space-y-4 lg:space-y-6">
              <p className="text-lg lg:text-xl leading-relaxed font-medium">
                Proudly located in <span className="font-bold text-[#82212a]">Dorp Street</span> in the very heart of Stellenbosch&apos;s most vibrant restaurant, café and bar precinct, De Vleispaleis is an absolute and complete celebration of South African&apos;s most favourite &quot;Sport&quot;…grilling over flames and fiery charcoal.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed font-medium">
                The owners have collectively about <span className="font-bold text-[#82212a]">40 years of experience</span> of owning and always personally managing some of the most legendary and successful Grillrooms and Steakhouses in South Africa. That experience shapes every plate at our Stellenbosch steakhouse, from the cuts we select to the way each steak is grilled over flames and fiery charcoal.
              </p>
            </div>
            <div className="mt-8 lg:mt-12 flex justify-center">
              <div className="w-16 lg:w-24 h-1 bg-[#82212a] rounded-full"></div>
            </div>
          </div>
       </section>
       <section className="flex flex-col gap-4 h-fit bg-[#fffae7] text-[#223534] pb-20 lg:pb-40">
        <Reviews />
       </section>
       <section className="flex flex-col gap-4 h-fit bg-[#fffae7] text-[#223534] pb-20 lg:pb-40">
        <MenusSection />
       </section>
       <section className="flex flex-col justify-center items-center text-center gap-8 h-fit bg-[#fffae7] text-[#223534] pb-20 lg:pb-30 px-4 lg:px-8">
          <div className="max-w-4xl w-full">
            <h2 className="text-6xl lg:text-6xl font-trajan min-h-fit font-bold mb-6 lg:mb-8 text-[#223534] pt-8">Our Premium Beef: Sourcing &amp; Quality</h2>
            <div className="space-y-4 lg:space-y-6">
              <p className="text-lg lg:text-xl leading-relaxed font-medium">
                Quality begins long before a steak reaches the grill. At our steakhouse in Stellenbosch, every cut is a premium AAA grade steak cut, hand selected to meet the standards our guests expect. Our cuts are matured for a minimum of 28–32 days to ensure absolute maximum flavour and succulence, so each steak arrives at your table tender, rich and full of character.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed font-medium">
                From fillet and sirloin to rump, picanha and meat on the bone, our kitchen works with the same prime cuts served in our butchery. It is the patience in the maturation, the care in the selection and the fire on the grill that make a steakhouse Stellenbosch guests return to — a complete celebration of grilling over flames and fiery charcoal.
              </p>
            </div>
            <div className="mt-8 lg:mt-12 flex justify-center">
              <div className="w-16 lg:w-24 h-1 bg-[#82212a] rounded-full"></div>
            </div>
          </div>
       </section>
       <section className="flex flex-col justify-center items-center text-center gap-8 h-fit bg-[#fffae7] text-[#223534] pb-20 lg:pb-30 px-4 lg:px-8">
          <div className="max-w-4xl w-full">
            <h2 className="text-6xl lg:text-6xl font-trajan min-h-fit font-bold mb-6 lg:mb-8 text-[#223534]">Butchery &amp; Deli in Stellenbosch</h2>
            <div className="space-y-4 lg:space-y-6">
              <p className="text-lg lg:text-xl leading-relaxed font-medium">
                Take the De Vleispaleis experience home. Our artisanal butchery and deli lets you enjoy our finest AAA grade, perfectly matured steak cuts on your own grill or braai. Our meat lockers offer an abundant selection of hand pre-cut and vacuum packed prime cuts, and we will with pleasure trim and cut any steaks to your personal size and weight requirements.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed font-medium">
                We also hand select and air cure only the very best beef biltong in our herb &amp; spice recipes, developed over 40 years. Visit our Butchery and Deli page to explore our premium cuts, meat on the bone and Wagyu selection before your next braai.
              </p>
            </div>
            <Link
              href="/butchery-and-deli"
              className="inline-block border-2 border-[#223534] text-[#223534] py-4 px-6 mt-8 min-h-[44px] rounded-full font-semibold hover:bg-[#223534] hover:text-white transition-colors text-sm lg:text-base"
            >
              Explore the Butchery &amp; Deli
            </Link>
          </div>
       </section>
       <section className="flex flex-col gap-4 h-fit bg-[#fffae7] text-[#223534]">
        <FAQ />
       </section>
       <section className="flex flex-col justify-center items-center text-center gap-8 h-fit bg-[#fffae7] text-[#223534] pb-20 lg:pb-40 px-4 lg:px-8">
          <div className="max-w-4xl w-full">
            <h2 className="text-6xl lg:text-6xl font-trajan min-h-fit font-bold mb-6 lg:mb-8 text-[#223534]">Visit Our Steakhouse in Stellenbosch</h2>
            <p className="text-lg lg:text-xl leading-relaxed font-medium mb-8">
              Find us at 56 Dorp Street, Black Horse Centre, in the very heart of Stellenbosch&apos;s most vibrant restaurant, café and bar precinct. Whether you are joining us for lunch, dinner or a celebration in the Cape Winelands, book your table at a steakhouse Stellenbosch locals and visitors love — and let our team take care of the rest.
            </p>
            <button
              onClick={openReservationModal}
              className="border-2 border-[#223534] text-[#223534] py-4 px-6 min-h-[44px] rounded-full font-semibold hover:bg-[#223534] hover:text-white transition-colors text-sm lg:text-base"
            >
              Book a Table
            </button>
          </div>
       </section>
       
      
      </main>
      
      {/* Reservation Modal */}
      <ReservationModal 
        isOpen={isReservationModalOpen} 
        onClose={closeReservationModal} 
      />
    </div>
  );
}
