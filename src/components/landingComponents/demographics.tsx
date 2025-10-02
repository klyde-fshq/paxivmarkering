"use client"

import { useState } from "react"
import Occupation from "./occupation"
import WorkforceClass from "./workforceClass"
import WorkforceIndustry from "./workforceIndustry"
import Image from "next/image"
import chevron_Up from "../../assets/Chevron_Up.png"

export default function Demographics() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-gray-500 border-b-1 px-[18px] py-[20px] gap-[24px]">
            {/* Header with toggle */}
            <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h1 className="text-[24px] sm:text-[32px] tracking-[2%] align-middle">Demographics</h1>
                <Image 
                    src={chevron_Up} 
                    alt="chevron" 
                    className={`w-[24px] h-[24px] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </div>

            {/* Expandable content */}
            {isOpen && (
                <div className="mt-4 flex flex-col gap-[24px]">
                    <WorkforceClass />
                    <hr className="border-[#FFC657]" />
                    <WorkforceIndustry />
                    <hr className="border-[#FFC657]" />
                    <Occupation />
                </div>
            )}
        </div>
    )
}
