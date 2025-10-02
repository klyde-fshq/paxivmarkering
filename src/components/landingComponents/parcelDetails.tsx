"use client"

import { useState } from "react"
import Image from "next/image"
import saleSign from "../../assets/saleSign.png"
import chevron_Up from "../../assets/Chevron_Up.png"

export default function ParcelDetails() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className="border-gray-500 border-b-1 px-[18px] py-[20px] gap-[24px]">
            {/* Header with toggle */}
            <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <h1 className="text-[24px] sm:text-[32px] tracking-[2%] align-middle">Parcel Details</h1>
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
                <div className="grid gap-[40px] lg:grid-cols-3 lg:gap-[20px] mt-4 ">
                    <div className="text-[#FFAA20]">
                        <h2 className="text-[24px]">Parcel Sq Ft</h2>
                        <h1 className="text-[38px] sm:text-[48px]">174,240 Sq Ft</h1>
                    </div>
                    <div className="text-[#FFAA20]">
                        <h2 className="text-[24px]">Current Use</h2>
                        <h1 className="text-[38px] sm:text-[48px]">Vacant Land</h1>
                    </div>
                    <div className="text-[#FFAA20]">
                        <h2 className="text-[24px]">Parcel Value</h2>
                        <div className="flex gap-[20px]">
                            <h1 className="text-[38px] sm:text-[48px]">$1,045,440</h1>
                            <Image src={saleSign} alt="saleSign" className="size-[50px] sm:size-[64px]" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
