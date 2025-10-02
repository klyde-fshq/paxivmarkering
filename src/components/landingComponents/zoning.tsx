"use client"

import { useState } from "react"
import Image from "next/image"
import chevron_Up from "../../assets/Chevron_Up.png"
import zoneCode from "../../assets/zoneCode.png"
import bldgHeight from "../../assets/bldgHeight.png"
import setBackIcon from "../../assets/setback.png"
import widthLogo from "../../assets/widthLogo.png"

export default function Zoning() {
    const [isOpen, setIsOpen] = useState(true)

    const permittedUses = [
        "Manufacturing",
        "Storage",
        "Research",
        "Distribution",
        "Showroom",
        "Vehicle Services",
    ]

    return (
        <div className="border-gray-500 border-b-1 px-[18px] py-[20px] gap-[24px]">
            {/* Header with toggle */}
            <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h1 className="text-[24px] sm:text-[32px] tracking-[2%] align-middle">Zoning</h1>
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
                <div className="mt-4">
                    <div className="grid gap-[32px] md:grid-cols-3 md:gap-[20px] text-[#FFAA20]">
                        <div className="gap-[10px] md:gap-[16px]">
                            <h2 className="text-[18px] leading-[24px] md:text-[24px] md:leading-[36px]">Zone Code</h2>
                            <div className="flex gap-[24px]">
                                <h1 className="text-[56px]">L-1</h1>
                                <Image src={zoneCode} alt="zoneCode" className="w-[64px] h-[64px] align-middle" />
                            </div>
                        </div>

                        <div className="gap-[10px] md:gap-[16px]">
                            <h2 className="text-[18px] leading-[24px] md:text-[24px] md:leading-[36px]">Zone Name</h2>
                            <div className="flex gap-[24px]">
                                <h1 className="text-[38px] md:text-[48px] lg:text-[56px]">Light Industrial</h1>
                            </div>
                        </div>
                        
                        <div className="gap-[10px] md:gap-[16px]">
                            <h2 className="text-[18px] leading-[24px] md:text-[24px] md:leading-[36px]">Permitted Uses</h2>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-[20px] text-[12px] mt-4 text-center">
                                {permittedUses.map((permittedUse, index) => (
                                    <div key={index} className="gap-[8px] bg-[#FFEBBCB2] rounded-[100px] py-[6px]">
                                        <h1>{permittedUse}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-[20px] text-[#FFAA20] pt-[20px]">
                        <div className="gap-[10px]">
                            <h2 className="text-[18px] leading-[24px] md:text-[24px] md:leading-[36px]">Max Bldg. Height</h2>
                            <div className="flex gap-[16px] md:gap-[24px] my-4">
                                <h1 className="text-[38px] md:text-[56px] leading-[46px] tracking-[2%]">40 ft</h1>
                                <Image src={bldgHeight} alt="bldgHeight" className="h-[56px] w-[56px] md:w-[64px] md:h-[64px]" />
                            </div>
                        </div>
                        <div className="gap-[10px]">
                            <h2 className="text-[18px] leading-[24px] md:text-[24px] md:leading-[36px]">Min. Rear Setback</h2>
                            <div className="flex gap-[16px] md:gap-[24px] my-4">
                                <h1 className="text-[38px] md:text-[56px] leading-[46px] tracking-[2%]">10 ft</h1>
                                <Image src={setBackIcon} alt="setBackIcon" className="h-[56px] w-[56px] md:w-[64px] md:h-[64px]" />
                            </div>
                        </div>
                        <div className="gap-[10px]">
                            <h2 className="text-[18px] leading-[24px] md:text-[24px] md:leading-[36px]">Min. Lot Width</h2>
                            <div className="flex gap-[16px] md:gap-[24px] my-4">
                                <h1 className="text-[38px] md:text-[56px] leading-[46px] tracking-[2%]">40 ft</h1>
                                <Image src={widthLogo} alt="widthLogo" className="h-[56px] w-[56px] md:w-[64px] md:h-[64px]" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
