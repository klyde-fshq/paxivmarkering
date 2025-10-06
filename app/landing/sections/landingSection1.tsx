"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import mapping from "@/src/assets/mapping.png";
import paxivai from "@/src/assets/paxivAI.svg";
import oneclick from "@/src/assets/oneClickSkip.svg";
import dealroom from "@/src/assets/dealRoom.svg";
import offmarket from "@/src/assets/offMarketOpportunities.svg";
import logo from "@/src/assets/X.png";

export default function LandingSection2() {
  let [activePlatform, setActivePlatform] = useState(0);
  const platformImages = [mapping, paxivai, oneclick, dealroom, offmarket];
  const platformDescriptions = [
    "All your data in one place—parcels, zoning, codes, ownership, utilities, elevation, wetlands, and more.",
    "Scan millions of data points in seconds. Find the right opportunities, fast.",
    "Instantly unlock ownership details, contacts, loans, sales, and more—with one click.",
    "Organize projects, data, and deals in one secure, collaborative hub.",
    "Access exclusive, hidden deals before they hit the market.",
  ];

  // Auto-advance activePlatform every 80 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePlatform((prev) => (prev + 1) % platformImages.length);
    }, 8000); // 80 seconds
    return () => clearInterval(interval);
  }, [platformImages.length]);

  return (
    <div className="bg-white">
      <div className="p-[10px] md:p-[100px] gap-[10px] m-auto max-w-[1440px]">
        <h1 className="text-[32px] md:text-[48px] font-medium leading-[64px] mb-10 text-center md:text-left">
          The All-In-One Property Intelligence Platform
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[37px]">
          <div className="space-y-6 order-last px-10 md:px-0 md:order-first ">
            {[
              "Mapping",
              "PAXIV AI",
              "One-Click Skip Trace",
              "Deal Room",
              "Off-Market Opportunities",
            ].map((item, index) => (
              <div key={index} className="group border-b pb-3">
                {activePlatform === index ? (
                  <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setActivePlatform(index)}
                  >
                    <div className="relative w-[26.73px] h-[24px] overflow-hidden">
                      <Image
                        src={logo}
                        alt="logo"
                        className="absolute left-0 top-0 h-full  object-contain opacity-100 group-hover:opacity-100 transition-opacity duration-300 [clip-path:inset(0_50%_0_0)]"
                      />
                    </div>

                    <h2 className="text-[28px] md:text-[32px] leading-[40px] font-normal">
                      {item}
                    </h2>
                  </div>
                ) : (
                  <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setActivePlatform(index)}
                  >
                    <div className="relative w-[26.73px] h-[24px] overflow-hidden">
                      <Image
                        src={logo}
                        alt="logo"
                        className="absolute left-0 top-0 h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 [clip-path:inset(0_50%_0_0)]"
                      />
                    </div>

                    <h2 className="text-[28px] md:text-[32px] leading-[40px] font-normal">
                      {item}
                    </h2>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="gap-8 px-5 lg:px-12 w-full">
            <Image
              src={platformImages[activePlatform]}
              alt="Property visualization"
              className="rounded-md shadow"
            />
            <p className="text-justify text-[18px] leading-[28px]">
              {platformDescriptions[activePlatform]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
