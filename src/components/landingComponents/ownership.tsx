"use client"

import { useState } from "react"
import Image from "next/image"
import chevron_Up from "../../assets/Chevron_Up.png"

export default function Ownership() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className="border-gray-500 border-b-1 px-[18px] py-[20px] gap-[24px]">
            {/* Header with toggle */}
            <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h1 className="text-[24px] sm:text-[32px] tracking-[2%] align-middle">Ownership</h1>
                <Image 
                    src={chevron_Up} 
                    alt="chevron" 
                    className={`w-[24px] h-[24px] align-middle transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </div>

            {/* Expandable content */}
            {isOpen && (
                <div className="grid md:grid-cols-3 gap-[40px] md:gap-[200px] text-[#FFAA20] mt-4">
                    <div className="gap-[10px] md:gap-[16px]">
                        <h2 className="text-[24px]">Name</h2>
                        <div className="text-[25px] md:text-[21px] lg:text-[32px] leading-[43px] md:leading-[40px] gap-[10px] md:gap-[16px]">
                            <h1>John Doe, LLC</h1>
                            <h1>John Doe</h1>
                        </div>
                    </div>
                    
                    <div className="gap-[10px] md:gap-[16px]">
                        <h2 className="text-[24px]">Email(s)</h2>
                        <div className="text-[25px] md:text-[21px] lg:text-[32px] leading-[43px] md:leading-[40px] gap-[10px] md:gap-[16px]">
                            <h1>johndoe@mail.com</h1>
                            <h1>jdoeinvestments@mail.com</h1>
                            <h1>doefamily@mail.com</h1>
                        </div>
                    </div>
                    
                    <div className="gap-[10px] md:gap-[16px]">
                        <h2 className="text-[24px]">Phone</h2>
                        <div className="text-[25px] md:text-[21px] lg:text-[32px] leading-[43px] md:leading-[40px] gap-[10px] md:gap-[16px]">
                            <h1>555-123-4567</h1>
                            <h1>555-987-6543</h1>
                            <h1>555-246-8100</h1>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
