    "use client";
    import { useState } from 'react';
    import { ChevronDown, ChevronUp } from 'lucide-react';

    export default function FAQ() {
        const [openItems, setOpenItems] = useState<number[]>([]);

        const faqData = [
            {
                question: "What are your operating hours?",
                answer: "We are open Monday through Sunday from 12:00PM to 4:00PM (Lunch) and 6:00PM to 10:00PM (Dinner)."
            },
            {
                question: "Do you take reservations?",
                answer: "Yes, we highly recommend making reservations, especially for weekend dining. You can book online through our Dineplan, Google or in the top navigation bar of our website."
            },
            {
                question: "Do you accommodate dietary restrictions?",
                answer: "Absolutely! We offer vegetarian and vegan options. Please inform us of any dietary requirements when making your reservation."
            },
            {
                question: "Do you have parking available?",
                answer: "Parking on Dorp Street is somewhat limited, particularly during busy times, but guests are often able to find additional space on nearby Mark Street. We're happy to assist with any directions or recommendations if needed."
            },
            {
                question: "Can you host private events?",
                answer: "Yes, we offer private dining options for special occasions, corporate events, and celebrations. Please contact us to discuss your requirements and availability."
            },
            {
                question: "What is the best way to contact you?",
                answer: "You can contact us by email at info@vleispaleis.co.za or call us at +27 21 879 2356. We also have an online reservation system on our website."
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