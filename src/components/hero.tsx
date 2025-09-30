import Image from "next/image"

import playCircle from "../../src/assets/Play_Circle.png"
import heroBg from "../../src/assets/hero.png"
import Navbar from "./navbar"

export default function Hero() {
    return (
        <div className="flex h-[1104px] w-[100%] justify-center">
            <div className="absolute ">
                <Image src={heroBg} alt="HeroBG" />
            </div>
            

            <div className="flex flex-col z-10 items-center w-[1440px]">
                <Navbar />
                <div className="flex flex-col justify-center w-[1440px]">
                    <h1 className="text-white text-7xl text-[72px] font-bold">
                        Where AI Meets Land
                    </h1>
                    <div className="flex gap-36px text-sm">
                        <button type="button">GET STARTED FOR FREE</button>
                        <button type="button" className="flex ">
                            <Image src={playCircle} alt="playCircle" />
                            SEE HOW IT WORKS
                        </button>
                    </div>
                </div>
            </div>

            <div>
                {/* Animated Landing rectangle  and pinned location*/}
            </div>
        </div>
    )
}