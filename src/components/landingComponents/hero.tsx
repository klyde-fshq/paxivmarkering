import Image from "next/image"
import Navbar from "../navbar"

import playCircle from "@/src/assets/Play_Circle.png"
import heroBg from "@/src/assets/hero.png"
import heroBgMobile from "@/src/assets/heroBg_Mobile.png"
import pinHero from "@/src/assets/heroPic.svg"
import rectangle from "@/src/assets/Rectangle 2.svg"
import line1 from "@/src/assets/Line 1.svg"
import line2 from "@/src/assets/Line 3.svg"
import line3 from "@/src/assets/Line 4.svg"
import pinLoc from "@/src/assets/pinLocation.svg"



export default function Hero() {
  return (
    <div className="h-[1098px] lg:h-[1104px] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 max-h-[1104px] lg:max-h-[1104px] overflow-hidden">
        <Image
          src={heroBg}
          alt="Hero background"
          fill
          className="hidden lg:block object-cover object-right"
          priority
        />
        <Image
          src={heroBgMobile}
          alt="Hero background Mobile"
          fill
          className="lg:hidden object-cover object-bottom"
          priority
        />
        
        

        

        <div className="relative z-1 top-[55%] left-[-10%] sm:top-[30%] sm:left-[-100px] lg:top-[15%] lg:left-[55%] md:rotate-0 ">
          <Image src={rectangle} alt="Rectangle" className="rotate-90 lg:rotate-0 animate-fadeUp" />
          <Image src={line1} alt="Line1" className="hidden lg:block absolute left-[-200px] sm:left-[-150px] md:left-[1%] top-[10%] md:top-[5px] rotate-[13deg] md:rotate-0 animate-scaleUp"/>
          <Image src={line2} alt="Line2" className="hidden lg:block absolute left-[-1%] top-[30px] md:top-[40%] animate-scaleUp"/>
          <Image src={line3} alt="Line3" className="hidden lg:block absolute left-[690px] sm:left-[710px] md:left-[600px] top-[150px] md:top-[0%] rotate-[327deg] md:rotate-0 animate-scaleUp"/>
          <h1 className="hidden lg:block text-[#FFC657] text-[16px] rotate-[60deg] md:rotate-[270deg] absolute left-[500px] md:left-[590px] top-[250px] md:top-[50%]">
            1,208 sq ft
          </h1>
          
          <div className="absolute flex flex-col z-10 justify-center items-center top-[0] sm:top-[10%] left-[40%] lg:left-[200px] lg:top-[10%] lg:rotate-0">
            <Image src={pinHero} alt="pinHero" className="z-10" />
            <Image src={pinLoc} alt="pinLocation" className="z-10" />
            
          </div>
      </div>
      

      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-x-0 top-0 h-1/2 z-10 pointer-events-none bg-gradient-to-b from-black/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-10 pointer-events-none bg-gradient-to-t from-black to-transparent" />

      {/* Content */}       
      <div className="relative z-20 justify-between">
          <Navbar />
      </div>

      <div className="relative pt-[50px] px-[50px] lg:pt-[200px] lg:px-[100px] z-20">
        <div className="gap-[36px]">
          <h1 className="text-[52px] sm:text-[62px] text-center lg:text-start font-bold md:text-[72px] text-white animate-fadeUp">Where AI Meets Land</h1>
          <div className="flex flex-col lg:flex-row gap-[12px] md:gap-[36px]">
            <button className="bg-white px-[18px] py-[14px] gap-[8px] rounded-[8px] align-middle text-[14px] leading-[24px] animate-fadeUp" >GET STARTED FOR FREE</button>
            <button  className="flex bg-[#DBA13F] px-[18px] py-[14px] gap-[8px] rounded-[8px] align-middle text-[14px] leading-[24px] justify-center items-center animate-fadeUp" >
              <Image src={playCircle} alt="Play" className="h-[16px] w-[16px]"/>
              SEE HOW IT WORKS
            </button>
          </div>
          
        </div>

        

        
      </div>
    </div>
    
  )
}



