import ScrollImage from "@/components/ScrollImage";
import FullGallery from "@/components/FullGallery";
import Image from "next/image";

export default function Gallery() {
    return (
        <main>
            {/* Desktop sticky section - only for lg and above */}
            <div className="bg-[#fffae7] min-h-[250vh] hidden xl:block text-[#223534]">
            <div className="sticky top-[5vh] h-[100vh] flex flex-col items-center justify-center z-30 px-4 sm:px-8 md:px-16 lg:px-30">
                <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] leading-none font-trajan font-bold text-[#82212a] -mt-10 z-50 mb-8 text-center">GALLERY</h1>
            
                {/* Scroll Images with different scaling rates - Responsive positioning and sizing */}
                <div className="absolute top-[10%] left-[20%] sm:left-[25%] md:left-[30%] flex items-center justify-center z-20">
                    <ScrollImage 
                        src="/VleisPaleis-13.webp"
                        alt="Gallery Image 1"
                        width={150}
                        height={60}
                        maxScale={1.5}
                        scaleMultiplier={0.8}
                        className="sm:w-[200px] sm:h-[80px] md:w-[225px] md:h-[90px] lg:w-[250px] lg:h-[100px]"
                        />
                </div>
                <div className="absolute top-[50%] left-[2%] sm:left-[3%] md:left-[5%] flex items-center justify-center z-20">
                    <ScrollImage 
                        src="/VleisPaleis-8.webp"
                        alt="Gallery Image 2"
                        width={200}
                        height={75}
                        maxScale={1.2}
                        scaleMultiplier={1.2}
                        className="sm:w-[300px] sm:h-[112px] md:w-[350px] md:h-[131px] lg:w-[400px] lg:h-[150px]"
                        />
                </div>
                <div className="absolute top-[15%] left-[60%] sm:left-[65%] md:left-[70%] flex items-center justify-center z-20">
                    <ScrollImage 
                        src="/VleisPaleis-10.webp"
                        alt="Gallery Image 3"
                        width={180}
                        height={90}
                        maxScale={1.5}
                        scaleMultiplier={1.2}
                        className="sm:w-[250px] sm:h-[125px] md:w-[275px] md:h-[137px] lg:w-[300px] lg:h-[150px]"
                        />
                </div>
            </div>
                        </div>
                        {/* Mobile/Tablet section - for screens less than 1024px */}
            <div className="min-h-[80vh] -z-10 block  xl:hidden text-[#fffae7]">
            <div className="fixed top-0 left-0 w-full h-[100vh] flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-30 -z-10">
                <h1 className="text-6xl sm:text-[4rem] md:text-[5rem] lg:text-[6rem] leading-none font-trajan font-bold text-[#fffae7] -mt-10 mb-8 text-center">GALLERY</h1>
                <Image src="/VleisPaleis-7.webp" alt="De Vleispaleis" width={1920} height={1080} className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
                <div className="bg-black/50 absolute top-0 left-0 right-0 h-full w-full -z-10"></div>
             
            </div>
                        </div>
            
            {/* Content that the sticky element will stick over */}
            <section className="bg-[#fffae7] relative text-[#fffae7] px-4 h-fit w-full sm:px-8 md:px-16 lg:px-30 z-30 pt-8 sm:pt-16 md:pt-24 lg:pt-30">
                <div className="w-fit mx-auto relative h-fit px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 rounded-xl overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
                    <Image src="/VleisPaleis-18.webp" alt="De Vleispaleis" width={1920} height={1080} className="absolute top-0 left-0 w-full h-full object-cover" />
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-trajan font-bold mb-4 sm:mb-6 md:mb-8 text-[#fffae7] z-10 relative">THE BEST MOMENTS @ DE VLEISPALEIS</h2>
                    <div className="bg-black/50 absolute top-0 left-0 right-0 h-full w-full z-5"></div>
                    <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 relative z-10">From our restaurant, to our events, to our private dining experiences, we have captured the best moments at De Vleispaleis.</p>
                </div>
            </section>
            <section className="bg-[#fffae7] relative z-30 h-fit min-h-[100vh] w-full text-[#223534] py-8 sm:py-12 md:py-16 lg:py-20">
                <FullGallery />
            </section>
            
        </main>
    )
}