import Image from "next/image";
import Link from "next/link";
// Removed unused PrimaryButton import

export default function MenusSection() {
    return (
        <div className="relative min-h-screen flex items-center py-20 justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/VleisPaleis-18.webp"
                    alt="Restaurant interior with elegant dining setup"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-[#fffae7] max-w-6xl mx-auto px-8">
                <h2 className="text-6xl font-trajan font-bold mb-6">Our Menus</h2>
                <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                    Discover our carefully crafted selection of premium steaks, fresh seafood, and exquisite wines, 
                    all prepared with passion and served in an atmosphere of unparalleled elegance.
                </p>

                {/* Menu Cards */}
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Dinner Menu */}
                    <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 rounded-xl bg-[#fffae7]"></div>
                        <div className="relative p-12 text-center transition-all duration-500 group-hover:scale-105 flex flex-col h-full">
                            <div className="mb-8">
                                <h3 className="text-3xl font-trajan font-bold mb-6 text-[#223534]">Dinner Menu</h3>
                                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#82212a]/50 to-transparent mx-auto mb-6"></div>
                            </div>
                            <p className="text-lg text-[#223534] mb-auto leading-relaxed font-light">
                                Premium AAA grade steaks, fresh seafood, and signature dishes crafted by our master chefs.
                            </p>
                            <Link 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="/vleispaleis-menu.pdf"
                                className="inline-block px-8 py-4 min-h-[44px] border-[#82212a] border-2 rounded-full hover:text-white hover:bg-[#82212a] text-[#82212a] transition-all duration-300 font-medium tracking-wide uppercase text-sm mt-8 text-center"
                            >
                                View Menu
                            </Link>
                        </div>
                    </div>

                    {/* Wine Menu */}
                    <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 rounded-xl bg-[#fffae7]"></div>
                        <div className="relative p-12 text-center transition-all duration-500 group-hover:scale-105 flex flex-col h-full">
                            <div className="mb-8">
                                <h3 className="text-3xl font-trajan font-bold mb-6 text-[#223534]">Wine Selection</h3>
                                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#82212a]/50 to-transparent mx-auto mb-6"></div>
                            </div>
                            <p className="text-lg text-[#223534] mb-auto leading-relaxed font-light">
                                Curated collection of South African wines and international selections to complement your meal.
                            </p>
                            <Link 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="/vleispaleis-menu.pdf"
                                className="inline-block px-8 py-4 min-h-[44px] border-[#82212a] border-2 rounded-full hover:text-white hover:bg-[#82212a] text-[#82212a] transition-all duration-300 font-medium tracking-wide uppercase text-sm mt-8 text-center"
                            >
                                View Wines
                            </Link>
                        </div>
                    </div>

                    {/* Lunch Menu */}
                    <div className="group relative overflow-hidden">
                        <div className="absolute inset-0 rounded-xl bg-[#fffae7]"></div>
                        <div className="relative p-12 text-center transition-all duration-500 group-hover:scale-105 flex flex-col h-full">
                            <div className="mb-8">
                                <h3 className="text-3xl font-trajan font-bold mb-6 text-[#223534]">Lunch Menu</h3>
                                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#82212a]/50 to-transparent mx-auto mb-6"></div>
                            </div>
                            <p className="text-lg text-[#223534] mb-auto leading-relaxed font-light">
                                Light and flavorful options perfect for a midday meal in the heart of Stellenbosch.
                            </p>
                            <Link 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="/vleispaleis-menu.pdf"
                                className="inline-block px-8 py-4 min-h-[44px] border-[#82212a] border-2 rounded-full hover:text-white hover:bg-[#82212a] text-[#82212a] transition-all duration-300 font-medium tracking-wide uppercase text-sm mt-8 text-center"
                            >
                                View Lunch
                            </Link>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    );
}   