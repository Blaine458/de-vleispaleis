'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

    // iOS Safari: privacy sheets / URL chrome change `visualViewport`; Dineplan fancybox can
    // otherwise size against the full document while body is scroll-locked. Publish px height for CSS.
    useEffect(() => {
        if (!isOpen) return;

        const setVisualViewportHeightVar = () => {
            const h =
                typeof window !== 'undefined' && window.visualViewport
                    ? window.visualViewport.height
                    : window.innerHeight;
            document.documentElement.style.setProperty('--dp-vv', `${h}px`);
        };

        setVisualViewportHeightVar();
        window.addEventListener('resize', setVisualViewportHeightVar);
        const vv = window.visualViewport;
        if (vv) {
            vv.addEventListener('resize', setVisualViewportHeightVar);
            vv.addEventListener('scroll', setVisualViewportHeightVar);
        }
        return () => {
            window.removeEventListener('resize', setVisualViewportHeightVar);
            if (vv) {
                vv.removeEventListener('resize', setVisualViewportHeightVar);
                vv.removeEventListener('scroll', setVisualViewportHeightVar);
            }
            document.documentElement.style.removeProperty('--dp-vv');
        };
    }, [isOpen]);

    // Listen for booking completion events
    useEffect(() => {
        if (!isOpen) return;

        const handleMessage = (event: MessageEvent) => {
            if (event.origin.includes('dineplan.com')) {
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

        const handleBookingComplete = () => {
            setTimeout(() => {
                handleClose();
            }, 1500);
        };
        window.addEventListener('message', handleMessage);
        window.addEventListener('dineplan-booking-complete', handleBookingComplete);

        return () => {
            window.removeEventListener('message', handleMessage);
            window.removeEventListener('dineplan-booking-complete', handleBookingComplete);
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

    if (!isVisible || typeof document === 'undefined') return null;

    // Portal to body so `position: fixed` is viewport-relative (Lenis uses transforms; without this,
    // Dineplan fancybox on body ties at z-index 9999 and stacks incorrectly on mobile).
    return createPortal(
        <div
            className="fixed inset-0 z-[100000] flex isolate items-center justify-center overflow-y-auto bg-black/50 p-2 sm:p-4"
            onClick={handleOverlayClick}
        >
            <div
                className={`relative max-h-[95vh] min-h-[400px] w-full max-w-4xl overflow-visible rounded-xl bg-white shadow-2xl transition-all duration-300 sm:min-h-[500px] sm:max-h-[90vh] sm:w-[90vw] md:w-[80vw] lg:w-[60vw] xl:w-[40vw] ${
                    isClosing ? 'scale-95 opacity-0' : 'opacity-100'
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between rounded-t-xl border-b border-gray-200 bg-white p-4 sm:p-6">
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

                {/* Content — Dineplan: empty div only; script injects iframe (min ~260×365px per docs) */}
                <div className="overflow-visible rounded-b-xl bg-white p-4 sm:p-6">
                    <div className="flex w-full items-center justify-center">
                        <div
                            className="dineplan-widget"
                            data-key="P3S5Wh6b"
                            style={{ minWidth: 260, minHeight: 365 }}
                        />
                    </div>

                    <div className="mt-4 text-center sm:mt-6">
                        <p className="text-xs sm:text-sm text-gray-500">
                            Need help? Call us at <span className="font-semibold text-[#82212a]">+27 21 879 2356</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
