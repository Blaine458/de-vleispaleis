"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { Menu, X, ChevronRight } from "lucide-react";
import dynamic from 'next/dynamic';

// Lazy load ReservationModal - only needed when user clicks
const ReservationModal = dynamic(() => import('./ReservationModal'), {
  ssr: false,
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const lenis = useLenis();

  const openReservationModal = () => setIsReservationModalOpen(true);
  const closeReservationModal = () => setIsReservationModalOpen(false);

  const alwaysScrolledPages = ["/gallery"];

  useEffect(() => {
    const shouldAlwaysBeScrolled = alwaysScrolledPages.includes(pathname);

    const updateScrollState = () => {
      if (shouldAlwaysBeScrolled) {
        setIsScrolled(true);
      } else {
        const scrollTop = lenis ? lenis.scroll : (typeof window !== "undefined" ? window.scrollY : 0);
        setIsScrolled(scrollTop > 100);
      }
      if (isMobileMenuOpen) setIsVisible(true);
    };

    updateScrollState();
    if (lenis) {
      lenis.on("scroll", updateScrollState);
      return () => lenis.off("scroll", updateScrollState);
    }
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, [pathname, isMobileMenuOpen, lenis]);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };


  return (
    <>
      {/* Desktop Navbar */}
      <div className={`hidden lg:flex fixed top-0 left-0 right-0 z-50 justify-between border-none items-center py-2 px-30 mx-auto transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#fffae7] border-b-[0.5px] border-[#82212a]' 
          : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center gap-2">
          <Link 
            href="/" 
            onClick={(e) => {
              // Only prevent default if we're already on the home page
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              // If not on home page, let the default navigation happen
              // and scroll to top after navigation
              else {
                // Small delay to allow navigation to complete
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }
            }}
            className="cursor-pointer"
          >
            <Image src="/vleis-logo-white.png" alt="logo" width={80} height={80} className={`${isScrolled ? 'hidden opacity-0' : 'block opacity-100'} transition-all duration-900`}/>
            <Image src="/vleis-logo.png" alt="logo" width={80} height={80} className={`${isScrolled ? 'block opacity-100' : 'hidden opacity-0'} transition-all duration-900`}/>
          </Link>
        </div>
        <div className="flex items-center h-fit w-fit">
          <nav className="mr-20">
            <ul className={`flex items-center gap-4 h-fit w-fit font-bold transition-colors duration-300 relative ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
                <li>
                  <Link href="/butchery-and-deli" className="px-4 py-3 min-h-[44px] flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200">Butchery and Deli</Link>
                </li>
                <li>
                  <Link href="/gallery" className="px-4 py-3 min-h-[44px] flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200">Gallery</Link>
                </li>
                <li>
                  <a 
                    href="/vleispaleis-menu.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-3 min-h-[44px] flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  >
                    Menu
                  </a>
                </li>
            </ul>
          </nav>
        <div className="flex items-center gap-2">
          <button 
            onClick={openReservationModal}
            className="border-2 cursor-pointer rounded-full px-6 py-3 min-h-[44px] z-[9999] transition-colors"
            style={{
              borderColor: isScrolled ? '#223534' : 'white',
              color: isScrolled ? '#223534' : 'white',
              '--hover-bg': isScrolled ? '#223534' : 'white'
            } as React.CSSProperties & { '--hover-bg': string }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isScrolled ? '#223534' : 'white';
              e.currentTarget.style.color = isScrolled ? 'white' : '#223534';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = isScrolled ? '#223534' : 'white';
            }}
          >
            Reserve Your Table
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-2 px-4 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#fffae7] border-b-[0.5px] border-[#82212a]' 
          : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }
            closeMobileMenu();
          }}
          className="cursor-pointer"
        >
          <Image 
            src="/vleis-logo-white.png" 
            alt="logo" 
            width={60} 
            height={60} 
            className={`${isScrolled || isMobileMenuOpen ? 'hidden opacity-0' : 'block opacity-100'} transition-all duration-900`}
          />
          <Image 
            src="/vleis-logo.png" 
            alt="logo" 
            width={60} 
            height={60} 
            className={`${isScrolled || isMobileMenuOpen ? 'block opacity-100' : 'hidden opacity-0'} transition-all duration-900`}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-all duration-200 ${
            isScrolled || isMobileMenuOpen ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Sheet */}
      <div className={`lg:hidden fixed top-16 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        {/* Sheet Content */}
        <div 
          className="relative bg-[#fffae7] rounded-b-3xl overflow-hidden shadow-2xl border-t border-[#82212a]/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative top border */}
          <div className="h-1 bg-gradient-to-r from-[#82212a] via-[#82212a]/60 to-[#82212a]"></div>
          
          <div className="px-6 py-8">
            {/* Navigation Links */}
            <nav className="space-y-3">
              <Link 
                href="/butchery-and-deli" 
                onClick={closeMobileMenu}
                className="flex items-center justify-between text-xl font-bold text-[#223534] py-4 px-4 rounded-xl hover:bg-[#82212a]/10 hover:text-[#82212a] transition-all duration-300 border border-transparent hover:border-[#82212a]/20"
              >
                <span>Butchery and Deli</span>
                <ChevronRight size={20} className="text-[#82212a]/60" />
              </Link>
              <Link 
                href="/gallery" 
                onClick={closeMobileMenu}
                className="flex items-center justify-between text-xl font-bold text-[#223534] py-4 px-4 rounded-xl hover:bg-[#82212a]/10 hover:text-[#82212a] transition-all duration-300 border border-transparent hover:border-[#82212a]/20"
              >
                <span>Gallery</span>
                <ChevronRight size={20} className="text-[#82212a]/60" />
              </Link>
              <a 
                href="/De Vleispaleis Menu.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center justify-between text-xl font-bold text-[#223534] py-4 px-4 rounded-xl hover:bg-[#82212a]/10 hover:text-[#82212a] transition-all duration-300 border border-transparent hover:border-[#82212a]/20"
              >
                <span>Menu</span>
                <ChevronRight size={20} className="text-[#82212a]/60" />
              </a>
            </nav>

            {/* Reservation Button */}
            <div className="mt-8">
              <button 
                onClick={() => {
                  openReservationModal();
                  closeMobileMenu();
                }}
                className="w-full bg-[#82212a] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#64161d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Reserve Your Table
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reservation Modal */}
      <ReservationModal 
        isOpen={isReservationModalOpen} 
        onClose={closeReservationModal} 
      />
    </>
  );
}