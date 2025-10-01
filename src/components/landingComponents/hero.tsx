import Image from "next/image"
import Navbar from "../navbar"
import localFont from 'next/font/local'

import playCircle from "@/src/assets/Play_Circle.png"
import heroBg from "@/src/assets/hero.png"
import LogoStrip from "./logoStrip"
import pinHero from "@/src/assets/heroPic.svg"
import rectangle from "@/src/assets/Rectangle 2.svg"
import line1 from "@/src/assets/Line 1.svg"
import line2 from "@/src/assets/Line 3.svg"
import line3 from "@/src/assets/Line 4.svg"
import pinLoc from "@/src/assets/pinLocation.svg"



export default function Hero() {
  return (
    <div className="relative w-[1440px] h-[1104px] flex justify-center" >

      <div className="absolute inset-0 z-0">
        <Image src={heroBg} alt="Hero background" fill className="object-cover" priority />
      </div>

      <div className="absolute inset-x-0 top-0 h-1/2 z-10 pointer-events-none bg-gradient-to-b from-black/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-10 pointer-events-none bg-gradient-to-t from-black to-transparent" />

    <div className="relative z-20 w-full flex flex-col justify-between h-full">
      <div>
        <Navbar />
      </div>

      <div className="grid grid-cols-[1fr_0.5fr] px-20 text-white">
        <div className="mt-6">
          <h1 className="text-white text-[72px] leading-tight font-bold">
            Where AI Meets Land
          </h1>

          <div className="flex gap-6 mt-8 text-sm">
            <button
              type="button"
              className="bg-white text-black py-5 px-6 rounded-md font-semibold shadow"
            >
              GET STARTED FOR FREE
            </button>

            <button
              type="button"
              className="flex items-center gap-3 bg-yellow-500 text-black py-3 px-6 rounded-md font-semibold shadow"
            >
              <Image src={playCircle} alt="Play" width={20} height={20} />
              SEE HOW IT WORKS
            </button>
          </div>
        </div>
        <div className="self-end overflow-hidden">
          
          <Image src={pinLoc} alt="pinLocation" className="absolute z-20 left-[79.2%] top-[58%]" />
          <Image src={rectangle} alt="Rectangle" className="absolute z-0 left-[55%] top-[15%]" />
          <Image src={line1} alt="Line1" className="absolute z-0 left-[57%] top-[15%]" />
          <Image src={line2} alt="Line2" className="absolute z-0 left-[55%] top-[50%]" />
          <Image src={line3} alt="Line3" className="absolute z-0 left-[97%] top-[20%]" />
          <Image src={pinHero} alt="Rectangle" className="absolute z-20 left-[70%] top-[20%]" />
          <div className="absolute text-yellow-500 w-[83] z-20 left-[96%] top-[55%] rotate-270">1,208 sq ft</div>
        </div>
      </div>


      <div className="w-full flex justify-center self-end">
          <div className="w-[100%] bg-black/80 rounded-lg z-20">
            <LogoStrip />
          </div>
        </div>
      </div>
    </div>
    
  )
}