"use client";
import Image from "next/image";
import { useState } from "react";

export default function ButcheryAndDeli() {
    const [openItem, setOpenItem] = useState<number | null>(null);
    return (
        <main className="flex flex-col h-fit text-[#223534]">
            <section className="fixed flex flex-col gap-4 bg-[#fffae7] min-h-[80vh] sm:min-h-[90vh] lg:min-h-[100vh] text-[#223534] -z-10 items-start justify-end w-full py-0 px-4 sm:px-8 lg:px-30">
                <div className="flex flex-col py-0 w-full max-w-full">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] leading-none font-elsie font-bold text-[#fffae7] z-20 break-words">BUTCHERY & DELI</h1>
                </div>
                <div className="bg-black/50 absolute top-0 left-0 right-0 h-full w-full z-10"></div>
                <Image src="/VleisPaleis-29.jpg" alt="Butchery and Deli" width={1920} height={1080} className="absolute top-0 left-0 right-0 z-0 min-h-[80vh] sm:min-h-[90vh] lg:min-h-[100vh] object-cover" />
            </section>
            <section className="flex flex-col lg:flex-row gap-8 h-fit bg-[#fffae7] mt-[80vh] md:mt-[100vh] items-center relative text-[#223534] px-4 sm:px-8 lg:px-30 pt-20 sm:pt-32 lg:pt-40">
                <div className="flex flex-col gap-4 w-full lg:w-auto">
                <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-[6rem] leading-none font-elsie font-bold z-20">Artisinal <br /> Butchery</h1>
            <p className="text-base sm:text-lg font-extralight z-20 mb-8 leading-tight">You can now enjoy all of our finest AAA grade perfectly matured steak cuts for your home grill or braai…
<br />
<br />
All the cuts are matured for a minimum of 28-32 days to ensure absolute maximum flavour and succulence. Our meat lockers offer an abundant selection of hand pre-cut and vacuum packed prime cuts. We will with pleasure trim and cut any steaks to your personal size and weight requirements.
<br />
<br />
We also hand select and air cure only the very best beef Biltong in our herb & spice recipes that have been developed over 40 years.</p>
                </div>
                <Image src="/VP-Cuts.png" alt="Cuts of beef" width={1920} height={1080} className="object-cover max-h-[40vh] sm:max-h-[45vh] lg:max-h-[50vh] w-full lg:max-w-[50%]" />
            </section>
            <section className="flex flex-col gap-4 h-fit bg-[#fffae7] text-[#223534]">
            <div className="flex flex-col gap-2 px-4 sm:px-8 lg:px-30 py-12 sm:py-16 lg:py-20">
                <h2 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-elsie font-bold mb-6 sm:mb-8">Our Premium Cuts</h2>
               

                <div className={`border-b border-[#223534]/20 ${openItem === 0 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 0 ? null : 0)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 sm:w-12 sm:h-12 ${openItem === 0 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center aspect-square justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                <Image src="/1.jpg" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-elsie"
                                    style={{
                                        fontSize: '1.7rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Fillet / Tenderloin
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-4 max-w-full sm:max-w-[50%]">
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">The most tender cut of beef, located in the loin. Known for its buttery texture and mild flavor. Perfect for dishes like Beef Wellington or classic steak au poivre.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={`transition self-start sm:self-auto ${openItem === 0 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>
                <div className={`border-b border-[#223534]/20 ${openItem === 1 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 1 ? null : 1)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 sm:w-12 sm:h-12 ${openItem === 1 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center aspect-square justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                <Image src="/2.jpg" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-elsie"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Ribeye
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-4 max-w-full sm:max-w-[50%]">
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">Cut from the rib section, known for its rich marbling and robust beef flavor. Ideal for grilling or pan-searing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={`transition self-start sm:self-auto ${openItem === 1 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>

                <div className={`border-b border-[#223534]/20 ${openItem === 2 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 2 ? null : 2)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 sm:w-12 sm:h-12 ${openItem === 2 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center aspect-square justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/3.jpg" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-elsie"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Sirloin
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-4 max-w-full sm:max-w-[50%]">
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">A popular cut from the rear back of the cow, offering great flavor and tenderness at a more affordable price point.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={`transition self-start sm:self-auto ${openItem === 2 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>

                <div className={`border-b border-[#223534]/20 ${openItem === 3 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 3 ? null : 3)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 sm:w-12 sm:h-12 ${openItem === 3 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center aspect-square justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/4.jpg" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-elsie"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    T-Bone
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-4 max-w-full sm:max-w-[50%]">
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">Features both tenderloin and strip steak separated by a T-shaped bone. Offers two unique textures and flavors in one cut.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={`transition ${openItem === 3 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>

                <div className={`border-b border-[#223534]/20 ${openItem === 4 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 4 ? null : 4)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 ${openItem === 4 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/5.jpg" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-elsie"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Rump
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-4 max-w-full sm:max-w-[50%]">
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">A flavorful cut from the rear of the cow. Lean but tender when cooked properly. Popular in South African cuisine.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={`transition ${openItem === 4 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>

                <div className={`border-b border-[#223534]/20 ${openItem === 5 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 5 ? null : 5)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 ${openItem === 5 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/6.jpg" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-elsie"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Tomahawk
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-4 max-w-full sm:max-w-[50%]">
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">A dramatic ribeye cut with the entire rib bone left intact. Known for its impressive presentation and rich flavor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={`transition ${openItem === 5 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>

                <div className={`border-b border-[#223534]/20 ${openItem === 6 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 6 ? null : 6)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 ${openItem === 6 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/7.jpg" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-elsie"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Flank Steak
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 6 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-4 max-w-full sm:max-w-[50%]">
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">A lean cut from the abdominal muscles. Best marinated and grilled, perfect for fajitas and stir-fries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={`transition ${openItem === 6 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>

                <div className={`border-b border-[#223534]/20 ${openItem === 7 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 7 ? null : 7)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 ${openItem === 7 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/8.jpg" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-elsie"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Picanha
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 7 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-4 max-w-full sm:max-w-[50%]">
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">Also known as the rump cap, this cut is popular in Brazilian steakhouses. Known for its rich flavor and distinctive fat cap.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={`transition ${openItem === 7 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>

                <div className={`border-b border-[#223534]/20 ${openItem === 8 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 8 ? null : 8)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 ${openItem === 8 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/9.jpg" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-elsie"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Flat Iron
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 8 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-4 max-w-full sm:max-w-[50%]">
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">Cut from the shoulder, second only to tenderloin in tenderness. Excellent marbling and beef flavor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={`transition ${openItem === 8 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>

                <div className={`border-b border-[#223534]/20 ${openItem === 9 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 9 ? null : 9)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 ${openItem === 9 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/10.jpg" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-elsie"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Chuck Eye
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 9 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-4 max-w-full sm:max-w-[50%]">
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">Often called the "poor man's ribeye." Cut from the chuck primal, offering similar flavor to ribeye at a lower price point.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={`transition ${openItem === 9 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>

                <div className={`border-b border-[#223534]/20 ${openItem === 10 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 10 ? null : 10)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 ${openItem === 10 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/11.jpg" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-elsie"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Short Rib
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 10 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-4 max-w-full sm:max-w-[50%]">
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">Taken from the brisket, rib, plate, or chuck areas. Perfect for slow cooking and braising, resulting in rich, tender meat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={`transition ${openItem === 10 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>

                <div className={`border-b border-[#223534]/20 ${openItem === 11 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 11 ? null : 11)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 ${openItem === 11 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/12.jpg" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-elsie"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Brisket
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 11 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pb-4 max-w-full sm:max-w-[50%]">
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">A tough cut that becomes tender with slow cooking. Essential for barbecue and perfect for smoking or braising.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={`transition ${openItem === 11 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>
            </div>
            </section>
        </main>
    );
}