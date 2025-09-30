'use client'

import { useState } from "react";
import Image from "next/image"
import mapping from "../assets/mapping.png"
import paxivai from "../assets/paxivAI.svg"
import oneclick from "../assets/oneClickSkip.svg"
import dealroom from "../assets/dealRoom.svg"
import offmarket from "../assets/offMarketOpportunities.svg"
import logo from "../assets/fireflyLogo.jpg"


export default function LandingSection2() {
    let [activePlatform, setActivePlatform] = useState(0)
    const platformImages = [
        mapping,
        paxivai,
        oneclick,
        dealroom,
        offmarket
    ]
    const platformDescriptions = [
        "All your data in one place—parcels, zoning, codes, ownership, utilities, elevation, wetlands, and more.",
        "Scan millions of data points in seconds. Find the right opportunities, fast.",
        "Instantly unlock ownership details, contacts, loans, sales, and more—with one click.",
        "Organize projects, data, and deals in one secure, collaborative hub.",
        "Access exclusive, hidden deals before they hit the market."
    ]

    return (
        <div className="bg-white p-[100px] gap-[10px] w-[1440px]">
            
            <h1 className="text-[48px] font-medium leading-[64px] mb-10">
                The All-In-One Property Intelligence Platform
            </h1>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[37px] items-start">
                
                
                <div className="space-y-6">
                    {[
                        "Mapping",
                        "PAXIV AI",
                        "One-Click Skip Trace",
                        "Deal Room",
                        "Off-Market Opportunities",
                    ].map((item, index) => (
                        <div key={index} className="group border-b pb-3">
                            {activePlatform === index ?
                            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePlatform(index)}>
                                {/* Logo (only left 50% visible on hover) */}
                                <div className="relative w-[26.73px] h-[24px] overflow-hidden">
                                    <Image
                                        src={logo}
                                        alt="logo"
                                        className="absolute left-0 top-0 h-full w-full object-contain opacity-100 group-hover:opacity-100 transition-opacity duration-300 [clip-path:inset(0_50%_0_0)]"
                                    />
                                </div>
                                {/* Text */}
                                <h2 className="text-[28px] md:text-[32px] leading-[40px] font-normal">
                                {item}
                                </h2>
                            </div>
                            :
                            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePlatform(index)}>
                                {/* Logo (only left 50% visible on hover) */}
                                <div className="relative w-[26.73px] h-[24px] overflow-hidden">
                                    <Image
                                        src={logo}
                                        alt="logo"
                                        className="absolute left-0 top-0 h-full w-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 [clip-path:inset(0_50%_0_0)]"
                                    />
                                </div>
                                {/* Text */}
                                <h2 className="text-[28px] md:text-[32px] leading-[40px] font-normal">
                                {item}
                                </h2>
                            </div>
                        }
                            
                        </div>
                        
                    ))}
                </div>

                



                <div className="flex flex-col gap-4 w-[498px]">
                    <Image src={platformImages[activePlatform]} alt="Property visualization" className="rounded-md shadow" />
                    <p className="text-justify text-[18px] leading-[28px]">
                        {platformDescriptions[activePlatform]}
                    </p>
                </div>
            </div>
        </div>
    )
}



// <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePlatform(item)}>
//                                 {/* Logo (only left 50% visible on hover) */}
//                                 <div className="relative w-[26.73px] h-[24px] overflow-hidden">
//                                     <Image
//                                         src={logo}
//                                         alt="logo"
//                                         className="absolute left-0 top-0 h-full w-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 [clip-path:inset(0_50%_0_0)]"
//                                     />
//                                 </div>
//                                 {/* Text */}
//                                 <h2 className="text-[28px] md:text-[32px] leading-[40px] font-normal">
//                                 {item}
//                                 </h2>
//                             </div>
                            