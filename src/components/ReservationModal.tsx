'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ReservationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            // Prevent scrolling on both html and body
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            // Store current scroll position
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            setIsVisible(false);
            // Restore scrolling
            const scrollY = document.body.style.top;
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            // Restore scroll position
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }
    }, [isOpen]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
        };
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!isVisible) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/50 bg-opacity-50 z-[9999] flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
            onClick={handleOverlayClick}
        >
            <div 
                className={`bg-white rounded-xl shadow-2xl max-w-4xl w-full sm:w-[90vw] md:w-[80vw] lg:w-[60vw] xl:w-[40vw] max-h-[95vh] sm:max-h-[90vh] min-h-[400px] sm:min-h-[500px] relative overflow-hidden transition-all duration-300 ${
                    isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-trajan font-bold text-[#82212a]">
                        Make a Reservation
                    </h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                    >
                        <X size={20} className="sm:w-6 sm:h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                    {/* Booking Widget Container */}
                    <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                        <div 
                            className="dineplan-widget" 
                            data-key="P3S5Wh6b" 
                            style={{
                                width: '100%',
                                maxWidth: '600px',
                                margin: '0 auto',
                                border: '1px solid #bfbfbf',
                                borderRadius: '8px',
                                overflow: 'hidden'
                            }}
                        >
                            <iframe 
                                className="dp-dframe w-full h-[500px] sm:h-[430px] border-none block" 
                                src="https://account.dineplan.com/widget/v3/P3S5Wh6b" 
                                scrolling="no" 
                                title="De Vleispaleis Reservation Widget"
                            />
                            <div 
                                className="dp-widget-footer" 
                                style={{
                                    backgroundColor: '#f5f5f5',
                                    textAlign: 'center',
                                    padding: '8px',
                                    fontSize: '10px',
                                    color: '#ccc'
                                }}
                            >
                                <a 
                                    href="https://www.dineplan.com/restaurants/de-vleispaleis" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{
                                        color: '#ccc',
                                        textDecoration: 'none'
                                    }}
                                >
                                    Powered by Dineplan
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 sm:mt-6 text-center">
                        <p className="text-xs sm:text-sm text-gray-500">
                            Need help? Call us at <span className="font-semibold text-[#82212a]">+27 21 879 2356</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
