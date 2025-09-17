"use client";
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import MainGallery from "@/components/MainGallery";
import Reviews from "@/components/Reviews";
import MenusSection from "@/components/MenusSection";
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ReservationModal from '@/components/ReservationModal';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  
  const openReservationModal = () => setIsReservationModalOpen(true);
  const closeReservationModal = () => setIsReservationModalOpen(false);

  const images = [
    { src: "https://picsum.photos/800/500?random=1", alt: "Restaurant interior" },
    { src: "https://picsum.photos/800/500?random=2", alt: "Restaurant dining" },
    { src: "https://picsum.photos/800/500?random=3", alt: "Restaurant atmosphere" }
  ];

  const handlePreviousImage = (): void => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = (): void => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen">
      <main className="min-h-screen relative">
       <section className="fixed flex h-[80vh] top-0 left-0 right-0 -z-10 md:h-[100vh]  sm:h-[90vh] lg:h-[100vh] justify-between items-end px-4 lg:px-30">
        <div className="flex flex-col mx-auto leading-none text-[#fffae7] w-full max-w-full"> 
          <div className="flex flex-col sm:flex-row justify-between font-semibold items-start sm:items-center w-full gap-2 sm:gap-0">
            <p className="text-sm sm:text-base">Grillroom & Bar</p>
            <p className="text-sm sm:text-base">Stellenbosch, South Africa</p>
          </div>
        
          <h1 className="font-elsie max-h-fit font-bold w-full sm:text-left break-words" style={{ fontSize: 'clamp(2rem, 10vw, 8rem)' }}>DE VLEISPALEIS</h1>
        </div>
        <div className="absolute top-0 left-0 h-full w-full object-cover -z-[1] bg-black/50"></div>
        <Image src="/VleisPaleis-13.webp" alt="logo" width={1920} height={1080} className="absolute bottom-0 left-0 h-full w-full object-cover object-bottom -z-10" />
       </section>
       <section className="flex flex-col lg:flex-row mt-[80vh] md:mt-[100vh] gap-8 w-full h-fit bg-[#fffae7] text-[#223534] py-20 lg:py-40 pl-4 lg:pl-30">
        <div className="flex flex-col justify-between items-start font-bold lg:pr-20 w-full lg:w-1/2 px-4">
          <div className="w-16 lg:w-24 h-1 mb-6 lg:mb-8 bg-[#82212a] rounded-full"></div>
          <h3 className="text-4xl lg:text-6xl font-elsie mb-4 leading-tight">Dine in the heart of the Cape Winelands</h3>
          <p className="text-lg lg:text-xl leading-relaxed font-medium mb-6 lg:mb-8">
            Step into the extraordinary world of De Vleispaleis, where our uniquely charming ambiance invites you to savor Southern Africa's absolute finest selection of prime AAA grade steak cuts and grills. Nestled in Stellenbosch's wine country, our master chefs craft unforgettable dining experiences with exceptional cuts and world-class hospitality.
          </p>
          <button 
            onClick={openReservationModal}
            className="border-2 border-[#223534] text-[#223534] py-3 px-6 rounded-full font-semibold hover:bg-[#223534] hover:text-white transition-colors text-sm lg:text-base"
          >
            Reserve Your Table
          </button> 
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image src="/VleisPaleis-7.jpg" alt="Restaurant interior" width={1920} height={1080} className="object-cover max-h-[50vh] lg:max-h-[70vh] w-full lg:max-w-[50%] rounded-l-full" />
        </div>
       </section>
       <section className="relative flex flex-col gap-4 h-fit bg-[#fffae7] text-[#223534] pb-20 lg:pb-40">
        <MainGallery />
       </section>
       <section className="flex flex-col justify-center items-center text-center gap-8 h-fit bg-[#fffae7] text-[#223534] pb-20 lg:pb-30 px-4 lg:px-8">
          <div className="max-w-4xl w-full">
            <h2 className="text-6xl lg:text-6xl font-elsie font-bold mb-6 lg:mb-8 text-[#223534]">Our Story</h2>
            <div className="space-y-4 lg:space-y-6">
              <p className="text-lg lg:text-xl leading-relaxed font-medium">
                Proudly located in <span className="font-bold text-[#82212a]">Dorp Street</span> in the very heart of Stellenbosch's most vibrant restaurant, café and bar precinct, De Vleispaleis is an absolute and complete celebration of South African's most favourite "Sport"…grilling over flames and fiery charcoal.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed font-medium">
                The owners have collectively about <span className="font-bold text-[#82212a]">40 years of experience</span> of owning and always personally managing some of the most legendary and successful Grillrooms and Steakhouses in South Africa.
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
       <section className="flex flex-col gap-4 h-fit bg-[#fffae7] text-[#223534]">
        <FAQ />
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
