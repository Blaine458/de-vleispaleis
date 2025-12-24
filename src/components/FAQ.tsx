    "use client";
    import { useState } from 'react';
    import { ChevronDown, ChevronUp } from 'lucide-react';

    export default function FAQ() {
        const [openItems, setOpenItems] = useState<number[]>([]);

        const faqData = [
            {
                question: "What are your operating hours?",
                answer: "We are open Tuesday through Sunday from 5:30 PM to 10:00 PM. We are closed on Mondays for staff rest and preparation."
            },
            {
                question: "Do you take reservations?",
                answer: "Yes, we highly recommend making reservations, especially for weekend dining. You can book online through our website or call us directly."
            },
            {
                question: "Do you accommodate dietary restrictions?",
                answer: "Absolutely! We offer vegetarian, vegan, and gluten-free options. Please inform us of any dietary requirements when making your reservation."
            },
            {
                question: "What is your dress code?",
                answer: "We maintain a smart casual dress code. While we don't require formal attire, we ask guests to dress elegantly to match our sophisticated atmosphere."
            },
            {
                question: "Do you have parking available?",
                answer: "Yes, we have complimentary valet parking available for all our guests. Simply drive up to our entrance and our staff will assist you."
            },
            {
                question: "Can you host private events?",
                answer: "Yes, we offer private dining options for special occasions, corporate events, and celebrations. Please contact us to discuss your requirements and availability."
            },
            {
                question: "What is the best way to contact you?",
                answer: "You can contact us by email at info@vleispaleis.co.za or call us at +27 21 123 4567. We also have an online reservation system on our website."
            }
        ];

        const toggleItem = (index: number) => {
            setOpenItems(prev => 
                prev.includes(index) 
                    ? [] // Close all items if current one is open
                    : [index] // Open only the clicked item
            );
        };

        return (
            <div className="flex flex-col lg:flex-row gap-8 h-fit bg-[#fffae7] text-[#223534] justify-between items-start px-4 sm:px-8 lg:px-30 pb-20 lg:pb-40">
                <h2 className="text-6xl sm:text-6xl lg:text-8xl font-trajan font-bold text-center lg:text-left w-full lg:w-auto">FAQ</h2>
                <div className="flex flex-col w-full lg:w-[50%]">
                    {faqData.map((item, index) => (
                        <div key={index} className="border-b border-[#223534]/20">
                            <button
                                onClick={() => toggleItem(index)}
                                className="flex justify-between items-center py-3 sm:py-4 w-full text-left hover:cursor-pointer hover:opacity-80 transition-all duration-300"
                            >
                                <h2 className="font-semibold text-lg sm:text-xl lg:text-2xl pr-4">{item.question}</h2>
                                {openItems.includes(index) ? (
                                    <ChevronUp size={20} className="flex-shrink-0 sm:w-6 sm:h-6" />
                                ) : (
                                    <ChevronDown size={20} className="flex-shrink-0 sm:w-6 sm:h-6" />
                                )}
                            </button>
                            <div className={`h-0.5 ${openItems.includes(index) ? 'w-[20%] mb-4' : 'w-0'} transition-all duration-300 bg-[#82212a]/80`}></div>
                            <div 
                                className={`overflow-hidden transition-all duration-500 ${
                                    openItems.includes(index) 
                                        ? 'max-h-96 opacity-100' 
                                        : 'max-h-0 opacity-0'
                                }`}
                                style={{
                                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                <div className="pr-4 sm:pr-8 pb-6 mt-4">
                                    <p className="text-base sm:text-lg leading-relaxed">{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }