import Image from "next/image"
import Navbar from "./navbar"

import playCircle from "../assets/Play_Circle.png"
import heroBg from "../assets/hero.png"
import LogoStrip from "./logoStrip"



export default function Hero() {
  return (
    <div className="relative w-[1440px] h-[1104px] flex justify-center">
      {/* background image fills the container - z-0 so it's behind everything */}
      <div className="absolute inset-0 z-0">
        <Image src={heroBg} alt="Hero background" fill className="object-cover" priority />
      </div>

      {/* top and bottom gradients (black -> transparent toward center) */}
      <div className="absolute inset-x-0 top-0 h-1/2 z-10 pointer-events-none bg-gradient-to-b from-black/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-10 pointer-events-none bg-gradient-to-t from-black/90 to-transparent" />

      {/* content above image + gradients */}
      <div className="relative z-20 w-full flex flex-col justify-between h-full">
        <div>
          <Navbar />
        </div>

        <div className="mt-6 p-20 max-w-[720px]">
          <h1 className="text-white text-[72px] leading-tight font-bold">
            Where AI Meets Land
          </h1>

          <div className="flex gap-6 mt-8 text-sm">
            <button
              type="button"
              className="bg-white text-black py-3 px-6 rounded-md font-semibold shadow"
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

        {/* Logo strip placed at bottom via justify-between */}
        <div className="w-full flex justify-center">
          <div className="w-[100%] bg-black/0 rounded-lg py-4">
            <LogoStrip />
          </div>
        </div>
      </div>
    </div>
  )
}