import Image from "next/image";

import DHI from "@/src/assets/Logo/DHI.png";
import Capital from "@/src/assets/Logo/Capital.png";
import visionary from "@/src/assets/Logo/Visionary.png";
import wadsworth from "@/src/assets/Logo/Wadsworth.png";
import remax from "@/src/assets/Logo/Remax.png";
import backman from "@/src/assets/Logo/Backman.png";
import colewest from "@/src/assets/Logo/Colewest.png";
import fullstack from "@/src/assets/Logo/Fullstack.png";
import dakota from "@/src/assets/Logo/Dakota.png";
import clearcreek from "@/src/assets/Logo/Clearcreek.png";

export default function LogoStrip() {
  const logos = [
    { src: DHI, alt: "DHI" },
    { src: Capital, alt: "Capital" },
    { src: visionary, alt: "Visionary" },
    { src: wadsworth, alt: "Wadsworth" },
    { src: remax, alt: "Remax" },
    { src: backman, alt: "Backman" },
    { src: colewest, alt: "Colewest" },
    { src: fullstack, alt: "Fullstack" },
    { src: dakota, alt: "Dakota" },
    { src: clearcreek, alt: "Clearcreek" },
  ];

  return (
    <div className="flex  space-between gap-20px py-52px px-81px border-1 border-black border-dashed overflow-x-hidden">
      <div className="flex py-10 animate-marquee whitespace-nowrap">
        {logos.map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="px-5 w-[100%]"
          />
        ))}
        {/* Repeat logos for seamless scrolling */}
        {logos.map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="px-5 w-[100%]"
          />
        ))}
      </div>
    </div>
  );
}
