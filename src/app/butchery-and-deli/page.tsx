"use client";
import Image from "next/image";
import { useState } from "react";

function CutDetailBlock({
    location,
    characteristics,
    bestFor,
    temperature,
}: {
    location: string;
    characteristics: string;
    bestFor: string;
    temperature: string;
}) {
    const row = (label: string, value: string) => (
        <div className="flex flex-col sm:flex-row sm:gap-5 gap-1">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#82212a] shrink-0 sm:w-40 lg:w-44">
                {label}
            </span>
            <p className="text-sm sm:text-base lg:text-lg text-[#223534] leading-relaxed font-light">
                {value}
            </p>
        </div>
    );
    return (
        <div className="pb-4 max-w-full sm:max-w-[75%]">
            <div className="flex flex-col gap-4 pt-1">
                {row("Location", location)}
                <div className="w-[85%] h-px bg-[#223534]/10" aria-hidden />
                {row("Characteristics", characteristics)}
                <div className="w-[85%] h-px bg-[#223534]/10" aria-hidden />
                {row("Best for", bestFor)}
                <div className="w-[85%] h-px bg-[#223534]/10" aria-hidden />
                {row("Recommended temperature", temperature)}
            </div>
        </div>
    );
}

export default function ButcheryAndDeli() {
    const [openItem, setOpenItem] = useState<number | null>(null);
    return (
        <main className="flex flex-col h-fit text-[#223534]">
            <section className="fixed flex flex-col gap-4 bg-[#fffae7] min-h-[80vh] sm:min-h-[90vh] lg:min-h-[100vh] text-[#223534] -z-10 items-start justify-end w-full py-0 px-4 sm:px-8 lg:px-30">
                <div className="flex flex-col py-0 w-full max-w-full">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] leading-none font-trajan font-bold text-[#fffae7] z-20 break-words">BUTCHERY & DELI</h1>
                </div>
                <div className="bg-black/50 absolute top-0 left-0 right-0 h-full w-full z-10"></div>
                <Image priority src="/VleisPaleis-29.webp" alt="Butchery and Deli" width={1920} height={1080} className="absolute top-0 left-0 min-w-[100vw] right-0 z-0 min-h-[80vh] sm:min-h-[90vh] lg:min-h-[100vh] object-cover" />
            </section>
            <section className="flex flex-col lg:flex-row gap-8 h-fit bg-[#fffae7] mt-[80vh] md:mt-[100vh] items-center relative text-[#223534] px-4 sm:px-8 lg:px-30 pt-20 sm:pt-32 lg:pt-40">
                <div className="flex flex-col gap-4 w-full lg:w-auto">
                <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-[6rem] leading-none font-trajan font-bold z-20">Artisinal <br /> Butchery</h1>
            <p className="text-base sm:text-lg font-extralight z-20 mb-8 leading-tight">You can now enjoy all of our finest AAA grade perfectly matured steak cuts for your home grill or braai…
<br />
<br />
All the cuts are matured for a minimum of 28-32 days to ensure absolute maximum flavour and succulence. Our meat lockers offer an abundant selection of hand pre-cut and vacuum packed prime cuts. We will with pleasure trim and cut any steaks to your personal size and weight requirements.
<br />
<br />
We also hand select and air cure only the very best beef Biltong in our herb & spice recipes that have been developed over 40 years.</p>
                </div>
                <Image src="/VP-Cuts.png" alt="Cuts of beef" width={1920} height={1080} className="max-h-[40vh] sm:max-h-[45vh] lg:max-h-[50vh] w-full lg:max-w-[50%] object-contain" style={{ objectFit: 'contain' }} />
            </section>
            <section className="flex flex-col gap-4 h-fit bg-[#fffae7] text-[#223534]">
            <div className="flex flex-col gap-2 px-4 sm:px-8 lg:px-30 py-12 sm:py-16 lg:py-20">
                <h2 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-trajan font-bold mb-6 sm:mb-8">Our Premium Cuts</h2>
               

                <div className={`border-b border-[#223534]/20 ${openItem === 0 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 0 ? null : 0)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 ${openItem === 0 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center aspect-square justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                <Image src="/3.webp" alt="Fillet" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-trajan"
                                    style={{
                                        fontSize: '1.7rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Fillet
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 0 ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <CutDetailBlock
                                        location="From the loin, the most tender muscle that runs along the spine."
                                        characteristics="Buttery texture, mild flavor, very lean with minimal fat."
                                        bestFor="Beef Wellington, steak au poivre, carpaccio, tartare."
                                        temperature="125°F (52°C) for rare, 130°F (54°C) for medium-rare, 140°F (60°C) for medium."
                                    />
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
                            <div className={`w-16 h-16 ${openItem === 1 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center aspect-square justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/6.webp" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-trajan"
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
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 1 ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <CutDetailBlock
                                        location="Rear back portion of the cow, from the hip area."
                                        characteristics="Great beefy flavor, good tenderness, more affordable than fillet."
                                        bestFor="Grilling, pan-frying, stir-fry, steak sandwiches."
                                        temperature="130°F (54°C) for medium-rare, 140°F (60°C) for medium, 150°F (66°C) for medium-well."
                                    />
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
                            <div className={`w-16 h-16 ${openItem === 2 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/7.webp" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-trajan"
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
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 2 ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <CutDetailBlock
                                        location="From the hindquarter, the rear of the cow."
                                        characteristics="Lean, flavorful, popular in South African cuisine; tender when cooked properly."
                                        bestFor="Braai/grilling, roasting, stir-fry, biltong."
                                        temperature="130°F (54°C) for medium-rare, 140°F (60°C) for medium."
                                    />
                                </div>
                            </div>
                        </div>
                        <span className={`transition ${openItem === 2 ? 'rotate-180' : ''}`}>
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
                            <div className={`w-16 h-16 ${openItem === 3 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/8.webp" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-trajan"
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
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 3 ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <CutDetailBlock
                                        location="Top of the rump (rump cap), from the hindquarter."
                                        characteristics="Rich flavor, distinctive fat cap that bastes the meat, prized in Brazilian cuisine."
                                        bestFor="Grilling (churrasco-style), roasting, smoking."
                                        temperature="130°F (54°C) for medium-rare, 140°F (60°C) for medium."
                                    />
                                </div>
                            </div>
                        </div>
                        <span className={`transition ${openItem === 3 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2 px-4 sm:px-8 lg:px-30 py-12 sm:py-16 lg:py-20">
                <h2 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-trajan font-bold mb-6 sm:mb-8">Meat On The Bone</h2>
               

                <div className={`border-b border-[#223534]/20 ${openItem === 4 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 4 ? null : 4)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 ${openItem === 4 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center aspect-square justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                <Image src="/8.webp" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-trajan"
                                    style={{
                                        fontSize: '1.7rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    T-Bone
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 4 ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <CutDetailBlock
                                        location="Short loin, with both fillet and sirloin on the bone."
                                        characteristics="Rich flavor, tender texture, and a good balance of fat and lean."
                                        bestFor="Grilling, roasting, and braising."
                                        temperature="145°F (63°C) for medium-rare, 160°F (71°C) for medium, 175°F (79°C) for medium-well."
                                    />
                                </div>
                            </div>
                        </div>
                        <span className={`transition self-start sm:self-auto ${openItem === 4 ? 'rotate-180' : ''}`}>
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
                            <div className={`w-16 h-16 ${openItem === 5 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center aspect-square justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/11.webp" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-trajan"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Sirloin On The Bone
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 5 ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <CutDetailBlock
                                        location="Same as sirloin but left on the bone (hip bone)."
                                        characteristics="Enhanced flavor from the bone, juicy, good marbling."
                                        bestFor="Grilling, braai, roasting."
                                        temperature="130°F (54°C) for medium-rare, 140°F (60°C) for medium, 150°F (66°C) for medium-well."
                                    />
                                </div>
                            </div>
                        </div>
                        <span className={`transition self-start sm:self-auto ${openItem === 5 ? 'rotate-180' : ''}`}>
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
                                    <Image src="/5.webp" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-trajan"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Fillet On The Bone
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 6 ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <CutDetailBlock
                                        location="Short loin with the fillet (tenderloin) attached to the bone."
                                        characteristics="Combines tenderness of fillet with flavor from the bone."
                                        bestFor="Grilling, roasting, special occasions."
                                        temperature="125°F (52°C) for rare, 130°F (54°C) for medium-rare, 140°F (60°C) for medium."
                                    />
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
                                    <Image src="/12.webp" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-trajan"
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
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 7 ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <CutDetailBlock
                                        location="Ribeye with the full rib bone (French-trimmed) left attached."
                                        characteristics="Dramatic presentation, rich marbling, bone adds flavor and moisture."
                                        bestFor="Grilling, braai, roasting—a show-stopper cut."
                                        temperature="130°F (54°C) for medium-rare, 140°F (60°C) for medium."
                                    />
                                </div>
                            </div>
                        </div>
                        <span className={`transition ${openItem === 7 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>
            </div>
            
            <div className="flex flex-col gap-2 px-4 sm:px-8 lg:px-30 py-12 sm:py-16 lg:py-20">
                <h2 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-trajan font-bold mb-6 sm:mb-8">Wagyu</h2>
               

                <div className={`border-b border-[#223534]/20 ${openItem === 8 ? 'group' : ''}`}>
                    <button 
                        onClick={() => setOpenItem(openItem === 8 ? null : 8)}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer list-none p-3 sm:p-4 w-full text-left"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                            <div className={`w-16 h-16 ${openItem === 8 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center aspect-square justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                <Image src="/10.webp" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-trajan"
                                    style={{
                                        fontSize: '1.7rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Ribeye
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 8 ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <CutDetailBlock
                                        location="From the rib section (ribs 6–12)."
                                        characteristics="Abundant marbling (especially Wagyu), rich, buttery, intensely flavorful."
                                        bestFor="Grilling, pan-searing, minimal seasoning to highlight the meat."
                                        temperature="125°F (52°C) for rare, 130°F (54°C) for medium-rare."
                                    />
                                </div>
                            </div>
                        </div>
                        <span className={`transition self-start sm:self-auto ${openItem === 8 ? 'rotate-180' : ''}`}>
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
                            <div className={`w-16 h-16 ${openItem === 9 ? 'w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]' : ''} bg-[#82212a]/10 flex items-center aspect-square justify-center transition-all duration-500 ease-in-out overflow-hidden rounded-xl`}>
                                    <Image src="/3.webp" alt="meat cut" width={400} height={400} className="w-full h-full object-cover aspect-square"/>
                            </div>
                            <div className="flex flex-col justify-center pl-0 sm:pl-10 w-full">
                                <h3 
                                    className="text-lg sm:text-xl font-bold font-trajan"
                                    style={{
                                        fontSize: '1.75rem',
                                        marginBottom: '0.5rem',
                                        minHeight: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    Burger Patty
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === 9 ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <CutDetailBlock
                                        location="Ground/minced beef, often from chuck, brisket, or Wagyu trimmings."
                                        characteristics="Rich, juicy, high fat content for flavor and moisture."
                                        bestFor="Grilling, pan-frying, smash burgers."
                                        temperature="160°F (71°C) for well-done (ground meat food safety)."
                                    />
                                </div>
                            </div>
                        </div>
                        <span className={`transition self-start sm:self-auto ${openItem === 9 ? 'rotate-180' : ''}`}>
                            <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" className="sm:w-6 sm:h-6"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </button>
                </div>
            </div>
            </section>
        </main>
    );
}