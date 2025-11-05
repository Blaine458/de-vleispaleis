'use client';
import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ReservationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

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

    // Listen for booking completion events
    useEffect(() => {
        if (!isOpen) return;

        let previousIframeSrc = '';

        // Listen for postMessage events from the iframe
        const handleMessage = (event: MessageEvent) => {
            // Check if message is from Dineplan domain
            if (event.origin.includes('dineplan.com')) {
                // Check for booking completion indicators
                const messageData = event.data;
                if (
                    typeof messageData === 'string' && (
                        messageData.includes('booking') ||
                        messageData.includes('success') ||
                        messageData.includes('confirmed') ||
                        messageData.includes('booked')
                    ) ||
                    (typeof messageData === 'object' && (
                        messageData.type === 'booking-complete' ||
                        messageData.bookingComplete ||
                        messageData.success ||
                        messageData.event === 'booking-complete'
                    ))
                ) {
                    handleClose();
                }
            }
        };

        // Listen for iframe navigation changes (booking success might redirect)
        const checkIframeNavigation = () => {
            if (iframeRef.current) {
                try {
                    const currentSrc = iframeRef.current.src;
                    // Check if URL changed and contains success indicators
                    if (currentSrc !== previousIframeSrc) {
                        previousIframeSrc = currentSrc;
                        if (
                            currentSrc.includes('success') ||
                            currentSrc.includes('confirmed') ||
                            currentSrc.includes('thank') ||
                            currentSrc.includes('complete') ||
                            currentSrc.includes('booked')
                        ) {
                            handleClose();
                        }
                    }
                } catch (e) {
                    // Cross-origin restrictions - can't access iframe content
                }
            }
        };

        // Inject script to intercept button clicks via postMessage
        const injectClickListener = () => {
            // Create a script that listens for the booking button and sends postMessage
            const script = document.createElement('script');
            script.textContent = `
                (function() {
                    // Listen for messages from parent window
                    window.addEventListener('message', function(event) {
                        if (event.data && event.data.type === 'setup-click-listener') {
                            // Try to find and intercept the booking button
                            const setupButtonListener = () => {
                                const button = document.getElementById('make-booking');
                                if (button) {
                                    button.addEventListener('click', function() {
                                        // Send message to parent window when button is clicked
                                        if (window.parent) {
                                            window.parent.postMessage({
                                                type: 'booking-button-clicked',
                                                buttonId: 'make-booking'
                                            }, '*');
                                        }
                                    }, true);
                                } else {
                                    // Button not found yet, try again after a short delay
                                    setTimeout(setupButtonListener, 500);
                                }
                            };
                            setupButtonListener();
                        }
                    });

                    // Also try to set up listener immediately if button exists
                    setTimeout(() => {
                        const button = document.getElementById('make-booking');
                        if (button) {
                            button.addEventListener('click', function() {
                                if (window.parent) {
                                    window.parent.postMessage({
                                        type: 'booking-button-clicked',
                                        buttonId: 'make-booking'
                                    }, '*');
                                }
                            }, true);
                        }
                    }, 1000);
                })();
            `;
            
            // Try to inject into iframe (won't work due to CORS, but try anyway)
            try {
                if (iframeRef.current?.contentWindow?.document) {
                    iframeRef.current.contentWindow.document.body.appendChild(script);
                }
            } catch (e) {
                // Can't inject due to cross-origin restrictions
            }
        };

        // Listen for postMessage events
        window.addEventListener('message', handleMessage);

        // Enhanced message handler for booking button clicks
        const handleBookingClick = (event: MessageEvent) => {
            if (event.data && event.data.type === 'booking-button-clicked') {
                // Close modal after a short delay to allow booking to process
                setTimeout(() => {
                    handleClose();
                }, 1500);
            }
        };
        window.addEventListener('message', handleBookingClick);

        // Listen for custom booking complete event from global script
        const handleBookingComplete = () => {
            setTimeout(() => {
                handleClose();
            }, 1500);
        };
        window.addEventListener('dineplan-booking-complete', handleBookingComplete);

        // Check iframe navigation periodically
        const navigationInterval = setInterval(checkIframeNavigation, 500);

        // Also listen for iframe load events
        const iframe = iframeRef.current;
        if (iframe) {
            iframe.addEventListener('load', checkIframeNavigation);
            // Try to inject script after iframe loads
            iframe.addEventListener('load', injectClickListener);
        }

        // Try to inject script immediately
        setTimeout(injectClickListener, 2000);

        return () => {
            window.removeEventListener('message', handleMessage);
            window.removeEventListener('message', handleBookingClick);
            window.removeEventListener('dineplan-booking-complete', handleBookingComplete);
            clearInterval(navigationInterval);
            if (iframe) {
                iframe.removeEventListener('load', checkIframeNavigation);
                iframe.removeEventListener('load', injectClickListener);
            }
        };
    }, [isOpen]);

    // Send message to iframe to set up click listener on button
    useEffect(() => {
        if (!isOpen || !iframeRef.current) return;

        const trySetupListener = () => {
            try {
                const iframe = iframeRef.current;
                if (!iframe || !iframe.contentWindow) return;

                // Send message to iframe to set up click listener
                iframe.contentWindow.postMessage({
                    type: 'setup-click-listener',
                    buttonId: 'make-booking'
                }, '*');
            } catch (e) {
                // Cross-origin restrictions
            }
        };

        // Try multiple times as iframe content loads
        const timer1 = setTimeout(trySetupListener, 1000);
        const timer2 = setTimeout(trySetupListener, 3000);
        const timer3 = setTimeout(trySetupListener, 5000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
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
                    <div className="w-full flex justify-center items-center">
                        <div 
                            className="dineplan-widget" 
                            data-key="P3S5Wh6b" 
                        >
                            <iframe 
                                ref={iframeRef}
                                className="dp-dframe w-full h-[500px] sm:h-[430px] border-none block rounded-lg" 
                                src="https://account.dineplan.com/widget/v3/P3S5Wh6b" 
                                scrolling="no" 
                                title="De Vleispaleis Reservation Widget"
                                onLoad={() => {
                                    // Try to set up click listener when iframe loads
                                    setTimeout(() => {
                                        try {
                                            if (iframeRef.current?.contentWindow) {
                                                // Send message to iframe to intercept button clicks
                                                iframeRef.current.contentWindow.postMessage({
                                                    type: 'setup-click-listener',
                                                    buttonId: 'make-booking'
                                                }, '*');
                                            }
                                        } catch (e) {
                                            // Cross-origin restrictions
                                        }
                                    }, 1000);
                                }}
                            />
                            <div className="dp-widget-footer">
                                <a 
                                    href="https://www.dineplan.com/restaurants/de-vleispaleis" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
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
