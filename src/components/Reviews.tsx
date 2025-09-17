"use client";
import { useState, useRef, useEffect } from 'react';

export default function Reviews() {
    const [isPaused, setIsPaused] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState<boolean | null>(null); // null = loading, true = touch, false = desktop
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const reviews = [
        {
            text: "Absolutely incredible dining experience! The steak was perfectly cooked and the atmosphere was warm and inviting. The staff went above and beyond to make our anniversary dinner special. We'll definitely be back!",
            name: "Sarah Mitchell",
            source: "5 star review from Google"
        },
        {
            text: "The best restaurant in town! The quality of meat is outstanding and the chef's expertise really shows. The wine selection perfectly complements each dish. Highly recommend the ribeye and the lamb chops.",
            name: "Michael Rodriguez",
            source: "5 star review from Google"
        },
        {
            text: "Exceptional service and incredible food! The attention to detail in every dish is remarkable. The sommelier's wine pairing suggestions were spot on. This place sets the standard for fine dining in the area.",
            name: "Emma Thompson",
            source: "5 star review from Google"
        },
        {
            text: "Outstanding quality and presentation! Every bite was a delight. The staff is knowledgeable and friendly, making the entire experience memorable. The dry-aged steaks are absolutely phenomenal.",
            name: "David Chen",
            source: "5 star review from Google"
        },
        {
            text: "A culinary masterpiece! The flavors are perfectly balanced and the presentation is art on a plate. The ambiance is elegant yet comfortable. This is definitely our new favorite restaurant for special occasions.",
            name: "Jennifer Walsh",
            source: "5 star review from Google"
        }
    ];

    // Detect touch device - improved detection
    useEffect(() => {
        const checkTouchDevice = () => {
            // More comprehensive touch detection
            const hasTouch = 'ontouchstart' in window || 
                           navigator.maxTouchPoints > 0 || 
                           (navigator as any).msMaxTouchPoints > 0;
            setIsTouchDevice(hasTouch);
        };
        
        // Check immediately
        checkTouchDevice();
        
        // Also check on resize
        window.addEventListener('resize', checkTouchDevice);
        return () => window.removeEventListener('resize', checkTouchDevice);
    }, []);

    // Auto-scroll control - using CSS animation for desktop only
    useEffect(() => {
        if (!isTouchDevice && scrollRef.current) {
            const scrollElement = scrollRef.current;
            if (isPaused) {
                scrollElement.style.animationPlayState = 'paused';
            } else {
                scrollElement.style.animationPlayState = 'running';
            }
        }
    }, [isPaused, isTouchDevice]);

    // Auto-scroll for mobile - using state updates
    useEffect(() => {
        if (isTouchDevice && !isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % reviews.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isTouchDevice, isPaused, reviews.length]);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (isTouchDevice) {
            touchStartX.current = e.targetTouches[0].clientX;
            setIsPaused(true);
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (isTouchDevice) {
            touchEndX.current = e.changedTouches[0].clientX;
            handleSwipe();
            setIsPaused(false);
        }
    };

    const handleSwipe = () => {
        const swipeThreshold = 50;
        const swipeDistance = touchStartX.current - touchEndX.current;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe left - next review
                setCurrentIndex(prev => (prev + 1) % reviews.length);
            } else {
                // Swipe right - previous review
                setCurrentIndex(prev => (prev - 1 + reviews.length) % reviews.length);
            }
        }
    };

    const handleMouseEnter = () => {
        if (!isTouchDevice) {
            setIsPaused(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isTouchDevice) {
            setIsPaused(false);
        }
    };

    // Show loading state while detecting device type
    if (isTouchDevice === null) {
        return (
            <>
            <h1 className="text-6xl md:text-5xl lg:text-6xl w-full px-4 sm:px-8 lg:px-10 font-elsie text-left font-semibold mb-6 sm:mb-8 lg:mb-10">What Our Guests Say</h1>
            <div className="flex overflow-x-hidden min-h-fit relative px-4 sm:px-8 lg:px-10">
                <div className="bg-gradient-to-r from-[#fffae7] to-transparent absolute left-0 top-0 min-h-full w-[10vw] sm:w-[15vw] lg:w-[20vw] z-40"></div>
                <div className="flex w-full justify-center">
                    <div className="flex flex-col min-w-[280px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] max-w-[70vw] px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 lg:py-8 border-l-3 border-[#82212a] border-opacity-50">
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
                            "{reviews[0].text}"
                        </p>
                        <p className=" select-none text-sm sm:text-base md:text-lg font-semibold opacity-60">{reviews[0].name}</p>
                        <p className=" select-none text-xs sm:text-sm font-semibold">{reviews[0].source}</p>
                    </div>
                </div>
                <div className="bg-gradient-to-l from-[#fffae7] to-transparent absolute right-0 top-0 min-h-full w-[10vw] sm:w-[15vw] lg:w-[20vw] z-40"></div>
            </div>
            </>
        );
    }

    return (
        <>
        <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl w-full px-8 sm:px-8 lg:px-10 font-elsie text-left font-semibold mb-6 sm:mb-8 lg:mb-10">What Our Guests Say</h1>
        
        {isTouchDevice ? (
            // Touch device: Simple swipe carousel with dots - separate containers
            <div className="flex flex-col items-center w-full">
                <div className="flex overflow-x-hidden h-fit relative px-4 sm:px-8 lg:px-10 w-full">
                    <div className="bg-gradient-to-r from-[#fffae7] to-transparent absolute left-0 top-0 min-h-full w-[10vw] sm:w-[15vw] lg:w-[20vw] z-40"></div>
                    <div className="flex w-full justify-center">
                        <div 
                            className="flex w-full justify-center"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className="flex flex-col min-w-[280px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] max-w-[70vw] px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 lg:py-8 border-l-3 border-[#82212a] border-opacity-50 transition-all duration-500 ease-in-out">
                                <p className=" select-none text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
                                    "{reviews[currentIndex].text}"
                                </p>
                                <p className=" select-none text-sm sm:text-base md:text-lg font-semibold opacity-60">{reviews[currentIndex].name}</p>
                                <p className=" select-none text-xs sm:text-sm font-semibold">{reviews[currentIndex].source}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-l from-[#fffae7] to-transparent absolute right-0 top-0 min-h-full w-[10vw] sm:w-[15vw] lg:w-[20vw] z-40"></div>
                </div>
                
                {/* Pagination Dots - outside the overflow container */}
                <div className="flex justify-center mt-6 space-x-2 pb-4">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'bg-[#82212a] scale-125' 
                                    : 'bg-[#82212a]/30 hover:bg-[#82212a]/50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        ) : (
            // Non-touch device: Auto-scrolling carousel
            <div className="flex overflow-x-hidden h-fit relative px-4 sm:px-8 lg:px-10">
                <div className="bg-gradient-to-r from-[#fffae7] to-transparent absolute left-0 top-0 min-h-full w-[10vw] sm:w-[15vw] lg:w-[20vw] z-40"></div>
                <div 
                    ref={scrollRef}
                    className="flex animate-scroll"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {[...reviews, ...reviews].map((review, index) => (
                        <div key={index} className="flex flex-col min-w-[280px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] max-w-[70vw] px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 lg:py-8 border-l-3 border-[#82212a] border-opacity-50 ml-4 sm:ml-6 md:ml-8 lg:ml-10">
                            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
                                "{review.text}"
                            </p>
                            <p className="text-sm sm:text-base md:text-lg font-semibold opacity-60">{review.name}</p>
                            <p className="text-xs sm:text-sm font-semibold">{review.source}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-gradient-to-l from-[#fffae7] to-transparent absolute right-0 top-0 min-h-full w-[10vw] sm:w-[15vw] lg:w-[20vw] z-40"></div>
            </div>
        )}
        </>
    );
}