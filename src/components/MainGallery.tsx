'use client';
import { useState } from 'react';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MainGallery() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const images = [
        { src: "/VleisPaleis-10.webp", alt: "Restaurant interior" },
        { src: "/VleisPaleis-7.webp", alt: "Restaurant dining" },
        { src: "/VleisPaleis-8.webp", alt: "Restaurant atmosphere" },
        { src: "/VleisPaleis-9.webp", alt: "Restaurant atmosphere" }
    ];

    const handlePreviousImage = () => {
        setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    };

    return (
        <div className="relative w-full " style={{ height: 'clamp(50vh, 70vh, 80vh)' }}>
            <button 
                onClick={handlePreviousImage} 
                className="absolute left-2 sm:left-4 md:left-[15vw] top-1/2 transform -translate-y-1/2 z-40 text-white bg-[#82212a] hover:bg-[#64161d] rounded-full flex items-center justify-center transition-all"
                style={{ 
                    width: 'clamp(44px, 3rem, 3.5rem)', 
                    height: 'clamp(44px, 3rem, 3.5rem)',
                    minWidth: '44px',
                    minHeight: '44px'
                }}
                aria-label="Previous image"
            >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            <div className="flex items-center justify-center h-full w-full px-4 sm:px-8 md:px-16">
                <div className="relative w-full max-w-4xl">
                    <div className="flex items-center justify-center h-full">
                        {images.map((image, index) => {
                            const isActive = index === currentImageIndex;
                            const isPrevious = index === (currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
                            const isNext = index === (currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
                            
                            return (
                                <div 
                                    key={index} 
                                    className={`absolute transition-all duration-500 ease-in-out ${
                                        isActive 
                                            ? 'scale-100 opacity-100 z-10' 
                                            : isPrevious || isNext
                                            ? 'scale-75 opacity-60 blur-xs'
                                            : 'scale-75 opacity-30 blur-xs'
                                    }`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={800}
                                        height={600}
                                        // Only first image needs priority
                                        priority={index === 0}
                                        loading={index === 0 ? undefined : "lazy"}
                                        quality={85}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                                        className="rounded-xl object-cover"
                                        style={{ 
                                            height: 'clamp(80vh, 50vh, 60vh)', 
                                            maxHeight: 'clamp(600px, 350px, 400px)',
                                            width: 'auto', 
                                            maxWidth: 'clamp(60vw, 80vw, 90vw)',
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            
            <button 
                onClick={handleNextImage} 
                className="absolute right-2 sm:right-4 md:right-[15vw] top-1/2 transform -translate-y-1/2 z-40 text-white bg-[#82212a] hover:bg-[#64161d] rounded-full flex items-center justify-center transition-all"
                style={{ 
                    width: 'clamp(44px, 3rem, 3.5rem)', 
                    height: 'clamp(44px, 3rem, 3.5rem)',
                    minWidth: '44px',
                    minHeight: '44px'
                }}
                aria-label="Next image"
            >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
        </div>
    );
}