"use client";

import { useState } from "react";
import Image from "next/image";
import chevron_Up from "../../assets/Chevron_Up.png";
import { parcelDetails } from "../../assets/datasets/landingSection3";

export default function ParcelDetails() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-gray-500 border-b-1 px-[18px] py-[20px] gap-[24px]">
      {/* Header with toggle */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-[24px] sm:text-[32px] tracking-[2%] align-middle">
          Parcel Details
        </h1>
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
          {parcelDetails.map((item, index) => (
            <div key={index} className="text-[#FFAA20]">
              <h2 className="text-[24px]">{item.title}</h2>
              <div className="flex gap-[20px]">
                <h2 className="text-[38px] sm:text-[48px]">{item.value}</h2>
                {item.image && (
                  <Image
                    src={item.image}
                    alt="saleSign"
                    className="size-[50px] sm:size-[64px]"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
