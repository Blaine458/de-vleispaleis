'use client';
import { useState, useEffect } from 'react';
import ReservationModal from './ReservationModal';

export default function Popup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [hasShown, setHasShown] = useState(false);
    const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
    
    const openModal = () => setIsReservationModalOpen(true);
    const closeReservationModal = () => {
        setIsReservationModalOpen(false);
        // Close the popup when the modal is closed
        handleClose();
    };

    useEffect(() => {
        // Check if popup has been shown before in this session
        const hasShownBefore = sessionStorage.getItem('popupShown');
        
        if (!hasShownBefore) {
            // Longer delay on mobile to avoid interfering with initial page load
            const isMobile = window.innerWidth < 1024;
            const delay = isMobile ? 8000 : 5000; // 8 seconds on mobile, 5 on desktop
            
            const timer = setTimeout(() => {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem('popupShown', 'true');
            }, delay);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        // Wait for animation to complete before hiding
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
        }, 300); // Match animation duration
    };

    const handleReservation = () => {
        openModal();
        // Don't close the popup - let the modal handle the interaction
        // The popup will be hidden behind the modal overlay anyway
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Desktop Popup - Bottom Left */}
            <div 
                className={`hidden lg:block fixed bottom-4 left-4 z-[9999] ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}
                role="dialog"
                aria-labelledby="popup-title"
                aria-describedby="popup-description"
            >
                <div className="bg-white rounded-xl shadow-2xl max-w-sm w-80 relative overflow-hidden border border-gray-200">
                    {/* Content */}
                    <div className="p-4">
                        {/* Header */}
                        <div className="mb-4">
                            <h2 id="popup-title" className="text-xl font-trajan font-bold text-[#82212a] mb-1">
                                Welcome to De Vleispaleis
                            </h2>
                            <p id="popup-description" className="text-sm text-gray-600">
                                Experience the finest in South African cuisine
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-2">
                            <button 
                                onClick={handleReservation}
                                className="bg-[#82212a] text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-[#64161d] transition-colors"
                            >
                                Make Reservation
                            </button>
                            <button 
                                onClick={handleClose}
                                className="border border-[#82212a] text-[#82212a] py-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-[#82212a] hover:text-white transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet Popup - Bottom Center */}
            <div 
                className={`lg:hidden fixed bottom-2 sm:bottom-4 left-2 right-2 sm:left-4 sm:right-4 z-[9999] ${isClosing ? 'animate-slide-down-mobile' : 'animate-slide-up-mobile'}`}
                role="dialog"
                aria-labelledby="popup-title-mobile"
                aria-describedby="popup-description-mobile"
            >
                <div className="bg-white rounded-xl shadow-2xl relative overflow-hidden border border-gray-200 mx-auto max-w-sm">
                    {/* Content */}
                    <div className="p-4">
                        {/* Header */}
                        <div className="mb-4">
                            <h2 id="popup-title-mobile" className="text-lg sm:text-xl font-trajan font-bold text-[#82212a] mb-1">
                                Welcome to De Vleispaleis
                            </h2>
                            <p id="popup-description-mobile" className="text-xs sm:text-sm text-gray-600">
                                Experience the finest in South African cuisine
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2">
                            <button 
                                onClick={handleReservation}
                                className="bg-[#82212a] text-white py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#64161d] transition-colors flex-1"
                            >
                                Make Reservation
                            </button>
                            <button 
                                onClick={handleClose}
                                className="border border-[#82212a] text-[#82212a] py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#82212a] hover:text-white transition-colors flex-1"
                            >
                                Close
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
