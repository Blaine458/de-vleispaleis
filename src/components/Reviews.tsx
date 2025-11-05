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
            text: "From the range of cuts , to the meal being cooked to perfection, this has to be one of the best Steak restaurants in Stellenbosch. A great venue for all occasions from date night to a night with friends. The Staff are friendly and attentive. Keep it up Vleispaleis",
            name: "Cole H",
            source: "5 star review from TripAdvisor"
        },
        {
            text: "Very friendly and accommodating staff. We got (without reservation) a wonderful place in the courtyard. The food is super-tasty, the wine selection excellent. Very happy to come back...",
            name: "Schneeteufel",
            source: "5 star review from TripAdvisor"
        },
        {
            text: "This is a meat lovers paradise so if you love good quality exceptional steaks or meat of any kind this should be one of your choices to eat in Stellenbosch. Most of our party ordered steaks, ribs or lamb chops and every plate of food was cooked to perfection with the most delicious sauces we have tasted in a long time. Some ordered fish or vegetarian meals such as salads or vegetables and the kingklip was perfectly prepared and delicious. Service from our waiter was top quality and professional.",
            name: "Lily L",
            source: "5 star review from TripAdvisor"
        },
        {
            text: "Cozy place, waiters and staff are very friendly and polite. Quickly served, the starters came and then the fillet (the waitress's suggestion).. simply the best meat I've ever eaten in my life.",
            name: "Luiz C",
            source: "5 star review from TripAdvisor"
        },
        {
            text: "Wonderful restaurant in Stellenbosch near church st the center of town. This is a university town very busy lots of energy and many places to choose from when looking at where to eat. We chose this because the menu looked delicious and it was!!!",
            name: "Barbara S",
            source: "5 star review from TripAdvisor"
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
            <h1 className="text-6xl md:text-5xl lg:text-6xl w-full px-4 sm:px-8 lg:px-10 font-trajan text-left font-semibold mb-6 sm:mb-8 lg:mb-10">What Our Guests Say</h1>
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
        <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl w-full px-8 sm:px-8 lg:px-10 font-trajan text-left font-semibold mb-6 sm:mb-8 lg:mb-10">What Our Guests Say</h1>
        
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