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
    <div className="h-[1098px] md:h-[972px] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Hero background"
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-x-0 top-0 h-1/2 z-10 pointer-events-none bg-gradient-to-b from-black/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-10 pointer-events-none bg-gradient-to-t from-black to-transparent" />

      {/* Content */}       
      <div className="relative z-20 w-full justify-between">
          <Navbar />
      </div>

      <div className="relative grid md:grid-cols-[1.5fr_0.5fr] pt-[200px] px-[100px] z-20">

        

        <div className="gap-[36px]">
          <h1 className="text-[64px] font-bold md:text-[72px] text-white">Where AI Meets Land</h1>
          <div className="flex flex-col md:flex-row gap-[12px] md:gap-[36px]">
            <button className="bg-white px-[18px] py-[14px] gap-[8px] rounded-[8px] align-middle text-[14px] leading-[24px]" >GET STARTED FOR FREE</button>
            <button  className="flex bg-[#DBA13F] px-[18px] py-[14px] gap-[8px] rounded-[8px] align-middle text-[14px] leading-[24px] justify-center items-center" >
              <Image src={playCircle} alt="Play" className="h-[16px] w-[16px]"/>
              SEE HOW IT WORKS
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image src={pinHero} alt="pinHero" className="" />
          <Image src={pinLoc} alt="pinLocation" className="" />
        </div>
      </div>
    </div>
    
  )
}




{/* <div className="relative h-[1098px] md:w-[1440px] md:h-[1104px] flex justify-center overflow-hidden" >

      <div className="absolute inset-0 z-0  rotate-90 md:rotate-0 md:w-[1440px] md:h-[1104px]">
        <Image src={heroBg} alt="Hero background" fill className="object-cover" priority />
      </div>

      <div className="absolute inset-x-0 top-0 h-1/2 z-10 pointer-events-none bg-gradient-to-b from-black/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-10 pointer-events-none bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-20  flex flex-col justify-between h-full">
        <div className="w-full">
          <Navbar />
        </div>

      <div className="flex flex-col  md:grid md:grid-cols-[1fr_0.5fr] md:px-20 text-white">
        <div className="flex flex-col justify-center top-0 items-center md:items-start md:justify-start ">
          <h1 className="text-white text-center text-[64px] md:text-[72px] leading-tight font-bold">
            Where AI Meets Land
          </h1>

          <div className="flex flex-col gap-6 mt-8 text-sm md:flex-row">
            <button
              type="button"
              className="bg-white text-black py-5 px-6 rounded-md font-semibold shadow">
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

        <div className="">
          <Image src={pinLoc} alt="pinLocation" className="absolute z-20 left-[50%] top-[75%] md:left-[79.2%] md:top-[58%]" />
          <Image src={rectangle} alt="Rectangle" className="absolute z-0 left-[20%] top-[37%] rotate-90 md:rotate-0 md:left-[55%] md:top-[15%]" />
          <Image src={line1} alt="Line1" className="absolute z-0 rotate-90 left-[50%] top-[75%] md:rotate-0  md:left-[57%] md:top-[15%]" />
          <Image src={line2} alt="Line2" className="absolute z-0 rotate-90 left-[20%] top-[40%] md:rotate-0  md:left-[55%] md:top-[50%]" />
          <Image src={line3} alt="Line3" className="hidden md:block absolute z-0 rotate-90 md:rotate-0  left-[97%] top-[20%]" />
          <Image src={pinHero} alt="Hero Pin" className="absolute z-20 left-[40.5%] top-[37%] md:left-[70%] md:top-[20%]" />
          <div className="hidden md:block absolute text-[#FFAA20] w-[83] z-20 left-[96%] top-[55%] rotate-270">1,208 sq ft</div>
        </div>
      </div>


      <div className="w-full flex justify-center self-end">
          <div className="w-[100%] bg-black/80 rounded-lg z-20">
            <LogoStrip />
          </div>
        </div>
      </div>
    </div> */}