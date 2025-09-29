import Image from "next/image"

import playCircle from "../../src/assets/Play_Circle.png"

export default function Hero() {
    return (
        <div className="flex">
            <div>
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
            <div>
                {/* Animated Landing rectangle */}
            </div>
        </div>
    )
}