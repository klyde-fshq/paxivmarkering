"use client";

import { useState } from "react";
import Image from "next/image";
import chevron_Up from "../../assets/Chevron_Up.png";

export default function Ownership() {
  const [isOpen, setIsOpen] = useState(true);

  const ownershipData = [
    { title: "Name", value: ["John Doe, LLC", "John Doe"] },
    {
      title: "Email(s)",
      value: [
        "johndoe@mail.com",
        "jdoeinvestments@mail.com",
        "doefamily@mail.com",
      ],
    },
    { title: "Phone", value: ["555-123-4567", "555-987-6543", "555-246-8100"] },
  ];

  return (
    <div className="border-gray-500 border-b-1 px-[18px] py-[20px] gap-[24px]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-[24px] sm:text-[32px] tracking-[2%] align-middle">
          Ownership
        </h2>
        <Image
          src={chevron_Up}
          alt="chevron"
          className={`w-[24px] h-[24px] align-middle transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {isOpen && (
        <div className="grid md:grid-cols-3 gap-[40px] md:gap-[100px] text-[#FFAA20] mt-4">
          {ownershipData.map((item, index) => (
            <div key={index} className="gap-[10px] md:gap-[16px]">
              <h2 className="text-[24px]">{item.title}</h2>
              <div className="text-[7vw] md:text-[21px] lg:text-[26px] leading-[43px] md:leading-[40px] gap-[10px] md:gap-[16px]">
                {item.value.map((value, index) => (
                  <h2 key={index}>{value}</h2>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
