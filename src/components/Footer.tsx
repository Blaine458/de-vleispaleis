"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from 'next/dynamic';

// Lazy load ReservationModal - only needed when user clicks
const ReservationModal = dynamic(() => import('./ReservationModal'), {
  ssr: false,
});

export default function Footer() {
    const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
    
    const openReservationModal = () => setIsReservationModalOpen(true);
    const closeReservationModal = () => setIsReservationModalOpen(false);
    
    return (
        <footer className="flex flex-col h-fit sm:h-[50vh] lg:h-[60vh] bg-[#fffae7] text-[#fffae7]">
            <div className="flex flex-col sm:flex-row w-screen min-h-[60%] relative">
                <a 
                    href="https://www.google.com/maps/place/De+Vleispaleis+Steakhouse/@-33.9397682,18.8532666,18z/data=!3m1!4b1!4m6!3m5!1s0x1dcdb3778fb67b97:0x39ad5edc1a045bbd!8m2!3d-33.9397682!4d18.8545541!16s%2Fg%2F11lkx9gmwg?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-full text-2xl sm:text-3xl lg:text-4xl rounded-t-[15vh] md:rounded-tl-[15vh] lg:rounded-tl-[15vh] lg:rounded-tr-[0] font-trajan bg-[#82212a] w-full sm:w-[50%] transition-colors cursor-pointer py-8 sm:py-0"
                >
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-trajan">Location</span>
                </a>
                <button 
                    onClick={openReservationModal}
                    className="flex items-center justify-center h-full text-2xl sm:text-3xl lg:text-4xl md:rounded-tr-[15vh] sm:rounded-tr-[15vh] lg:rounded-tr-[15vh] rounded-tl-[0] sm:rounded-tl-[0] lg:rounded-tl-[0] font-trajan bg-[#82212a] w-full sm:w-[50%] cursor-pointer transition-colors py-8 sm:py-0"
                >
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-trajan">Reservation</span>
                </button>
                <Image src="/vleis-logo-white.png" alt="logo" width={60} height={60} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 " />
            </div>
            <div className="flex flex-col sm:flex-row w-screen md:min-h-[15%]">
                <Link href="https://www.google.com/maps/place/De+Vleispaleis+Steakhouse/@-33.9397682,18.8532666,18z/data=!3m1!4b1!4m6!3m5!1s0x1dcdb3778fb67b97:0x39ad5edc1a045bbd!8m2!3d-33.9397682!4d18.8545541!16s%2Fg%2F11lkx9gmwg?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center min-h-[44px] text-xs sm:text-sm font-extralight bg-[#82212a] border-y-[.5px] border-r-[0.5px] border-[#fffae7]/30 w-full sm:w-[25%] py-4 sm:py-3">
                    <p className="text-center px-2">56 Dorp Street, Black Horse Centre, Stellenbosch</p>
                </Link>
                <Link href="tel:+27218792356" className="flex items-center justify-center min-h-[44px] text-xs sm:text-sm font-extralight bg-[#82212a] border-y-[.5px] border-r-[0.5px] border-[#fffae7]/30 w-full sm:w-[25%] py-4 sm:py-3">
                    <p>+27 21 879 2356</p>
                </Link>
                <Link href="mailto:info@devleispaleis.co.za" className="flex items-center justify-center min-h-[44px] text-xs sm:text-sm font-extralight bg-[#82212a] border-y-[.5px] border-r-[0.5px] border-[#fffae7]/30 w-full sm:w-[25%] py-4 sm:py-3">
                    <p className="text-center px-2">info@devleispaleis.co.za</p>
                </Link>
                <div className="flex items-center justify-center min-h-[44px] text-xs sm:text-sm font-extralight bg-[#82212a] border-y-[.5px] border-[#fffae7]/30 w-full sm:w-[25%] py-4 sm:py-3">
                    <div className="flex gap-4 sm:gap-6 items-center">
                        <Link 
                            href="https://www.instagram.com/devleispaleis/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2 hover:opacity-70 transition-opacity"
                            aria-label="Visit our Instagram page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fffae7" className="sm:w-6 sm:h-6" aria-hidden="true">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </Link>
                        <Link 
                            href="https://www.facebook.com/DeVleispaleis/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2 hover:opacity-70 transition-opacity"
                            aria-label="Visit our Facebook page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fffae7" className="sm:w-6 sm:h-6" aria-hidden="true">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                            </svg>
                        </Link>
                        <Link 
                            href="https://www.tripadvisor.co.za/Restaurant_Review-g312673-d22849807-Reviews-De_Vleispaleis-Stellenbosch_Western_Cape.html" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2 hover:opacity-70 transition-opacity"
                            aria-label="View our TripAdvisor reviews"
                        >
                            <Image src="/tripadvisor-logo.png" alt="" width={32} height={32} className="sm:w-8 sm:h-8" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row w-screen h-full bg-[#223534] text-[#fffae7] items-center justify-between pr-4 sm:pr-30 pl-4 sm:pl-10 relative py-4 sm:py-0">
                <p className="text-xs sm:text-sm font-extralight text-center sm:text-left mb-2 sm:mb-0">© {new Date().getFullYear()} De Vleispaleis. All rights reserved.</p>
                <p className="text-xs sm:text-sm font-extralight text-center sm:text-right mb-4 sm:mb-0">Crafted by <Link href="https://www.vleispaleis.co.za" className="hover:opacity-70 transition-opacity font-bold">BitLoom</Link></p>
                <div className="hidden sm:flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] z-50 translate-y-[-50%]">
                    <Image src="/vleis-logo.png" alt="vleis-logo" width={60} height={60} className="sm:w-20 sm:h-20" />
                    <span className="text-lg sm:text-2xl font-trajan font-bold">De Vleispaleis</span>
                </div>
                {/* Mobile logo - shown only on mobile */}
                <div className="flex items-center justify-center sm:hidden mt-2">
                    <Image src="/vleis-logo.png" alt="vleis-logo" width={40} height={40} />
                    <span className="text-lg font-trajan font-bold ml-2">De Vleispaleis</span>
                </div>
            </div>
            
            {/* Reservation Modal - only render when open */}
            {isReservationModalOpen && (
                <ReservationModal 
                    isOpen={isReservationModalOpen} 
                    onClose={closeReservationModal} 
                />
            )}
        </footer>
    );
}