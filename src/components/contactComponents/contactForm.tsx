import Image from "next/image"
import Navbar from "../navbar"

import playCircle from "@/src/assets/Play_Circle.png"
import heroBg from "@/src/assets/contactBackground.svg"
import pinHero from "@/src/assets/Contact-Location.svg"
import rectangle from "@/src/assets/contactRectangle.svg"
import line1 from "@/src/assets/contact-line1.svg"
import line2 from "@/src/assets/contact-line2.svg"
import pinLoc from "@/src/assets/pinLocation.svg"



export default function ContactForm() {
  return (
    <div className="relative w-[1440px] h-[972px] flex justify-center" >

      <div className="absolute inset-0 z-0">
        <Image src={heroBg} alt="Hero background" fill className="object-cover" priority />
      </div>

      <div className="absolute inset-x-0 top-0 h-1/2 z-10 pointer-events-none bg-gradient-to-b from-black/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-10 pointer-events-none bg-gradient-to-t from-black to-transparent" />

    <div className="relative z-20 w-full flex flex-col justify-between h-full">
        <div>
            <Navbar />
        </div>

        <div className="grid grid-cols-[0.5fr_1fr] text-white">
            <div className="overflow-hidden ">
                <Image src={pinLoc} alt="pinLocation" className="absolute z-20  left-[30%] bottom-[25%]" />
                <Image src={rectangle} alt="Rectangle" className="absolute z-0 left-0 top-[35%]" />
                <Image src={line1} alt="Line1" className="absolute z-0 left-0 top-[35%]" />
                <Image src={line2} alt="Line2" className="absolute z-0 left-[20%] top-[35%]" />
                <Image src={pinHero} alt="Rectangle" className="absolute z-20 left-[20%] top-[30%]" />
            </div>

            <div className="absolute top-[185px] left-[836px] gap-[32px] bg-white w-[504px] p-[24px] rounded-[6px] z-20 text-gray-600 text-[12px] leading-[18px]">
                <div className="flex flex-col gap-[16px]">
                    <div className="grid grid-cols-2 gap-[24px]  ">
                        <div className="gap-[8px]">
                            <label htmlFor="name">First Name</label>
                            <input type="text" className="w-[100%] h-[42px] rounded-[4px] border-[1px] border-gray-400 px-[12px]"/>
                        </div>
                        <div className="gap-[8px]">
                            <label htmlFor="name">Last Name</label>
                            <input type="text" className="w-[100%] h-[42px] rounded-[4px] border-[1px] border-gray-400 px-[12px]"/>
                        </div>
                    </div>

                    <div className="gap-[8px]">
                            <label htmlFor="name">Email Address</label>
                            <input type="text" className="w-[100%] h-[42px] rounded-[4px] border-[1px] border-gray-400 px-[12px]"/>
                    </div>

                    <div className="gap-[8px]">
                            <label htmlFor="name">Phone Number</label>
                            <input type="text" className="w-[100%] h-[42px] rounded-[4px] border-[1px] border-gray-400 px-[12px]"/>
                    </div>

                    <div className="gap-[8px]">
                            <label htmlFor="name">Message</label>
                            <input type="text" className="w-[100%] h-[128px] rounded-[4px] border-[1px] border-gray-400 px-[12px]"/>
                    </div>

                    <button className="bg-yellow-400 text-white py-[14px] px-[18px] rounded-[8px] w-[127px] h-[52px]"> Send Message </button>
                </div>
            </div>


        </div>
      
      </div>
    </div>
    
  )
}