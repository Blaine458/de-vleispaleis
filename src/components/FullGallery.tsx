'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EMPTY_IMAGES: { src: string; alt: string }[] = [];

type FullGalleryProps = {
    images?: { src: string; alt: string }[];
};

export default function FullGallery(_props: FullGalleryProps) {
    const [images, setImages] = useState<{ src: string; alt: string }[]>(EMPTY_IMAGES);
    const [fetchDone, setFetchDone] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        let cancelled = false;
        fetch(`/api/gallery-images?_=${Date.now()}`, { cache: "no-store" })
            .then((res) => res.json())
            .then((list: unknown) => {
                if (!cancelled) {
                    setImages(Array.isArray(list) ? list : EMPTY_IMAGES);
                    setFetchDone(true);
                }
            })
            .catch(() => {
                if (!cancelled) setFetchDone(true);
            });
        return () => { cancelled = true; };
    }, []);

    const list = Array.isArray(images) ? images : EMPTY_IMAGES;
    const safeList = list ?? EMPTY_IMAGES;
    const handlePreviousImage = () => {
        setCurrentImageIndex(prev => prev === 0 ? safeList.length - 1 : prev - 1);
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prev => prev === safeList.length - 1 ? 0 : prev + 1);
    };

    if (fetchDone && safeList.length === 0) {
        return (
            <div
                className="relative w-full overflow-hidden bg-[#82212a]/5 rounded-xl flex items-center justify-center"
                style={{ height: 'clamp(50vh, 70vh, 80vh)' }}
            >
                <span className="text-[#223534]/40 text-sm font-light">No images in gallery.</span>
            </div>
        );
    }

    return (
        <div className="relative w-full overflow-hidden" style={{ height: 'clamp(50vh, 70vh, 80vh)' }}>
            <button 
                onClick={handlePreviousImage} 
                className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-40 text-white bg-[#82212a] hover:bg-[#64161d] rounded-full flex items-center justify-center transition-all"
                style={{ 
                    width: 'clamp(2.5rem, 3rem, 3.5rem)', 
                    height: 'clamp(2.5rem, 3rem, 3.5rem)' 
                }}
            >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            <div className="flex items-center justify-center h-full w-full px-4 sm:px-8 md:px-16">
                <div className="relative w-full max-w-4xl">
                    <div className="flex items-center justify-center h-full">
                        {safeList.map((image, index) => {
                            if (!image) return null;
                            const isActive = index === currentImageIndex;
                            const isPrevious = index === (currentImageIndex === 0 ? safeList.length - 1 : currentImageIndex - 1);
                            const isNext = index === (currentImageIndex === safeList.length - 1 ? 0 : currentImageIndex + 1);
                            
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
                                        priority={index === 0}
                                        unoptimized
                                        className="rounded-xl object-cover"
                                        style={{ 
                                            height: 'clamp(40vh, 60vh, 70vh)', 
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
                className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40 text-white bg-[#82212a] hover:bg-[#64161d] rounded-full flex items-center justify-center transition-all"
                style={{ 
                    width: 'clamp(2.5rem, 3rem, 3.5rem)', 
                    height: 'clamp(2.5rem, 3rem, 3.5rem)' 
                }}
            >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
        </div>
    );
}