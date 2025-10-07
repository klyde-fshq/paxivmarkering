import { Button } from "../ui/button";
import Image from "next/image";

import playCircle from "@/src/assets/Play_Circle.png";
import heroPin from "@/src/assets/heroPic.svg";
import pinLoc from "@/src/assets/pinLocation.svg";

export default function HeroContent() {
  return (
    <div className="relative z-20 w-full h-full">
      {/* Text Section */}
      <div className="relative max-w-[1440px] mx-auto py-[149px] px-[35px] gap-9 md:py-[288px] md:px-[100px] z-20">
        <h2 className="text-white font-bold text-[64px] leading-[72px] tracking-[-1%] text-center md:text-[72px] md:text-start md:leading-[92px] md:tracking-[2%] pb-3">
          Where AI Meets Land
        </h2>
        <div className="flex flex-col md:flex-row gap-3 md:gap-9">
          <Button variant={"secondary"} size="md">
            GET STARTED FOR FREE
          </Button>
          <Button variant="default" size="md">
            <Image src={playCircle} alt="Play" className="h-[16px] w-[16px]" />
            SEE HOW IT WORKS
          </Button>
        </div>
      </div>

      {/* Fixed Hero Pin on Bottom-Right */}
      <div className="md:absolute md:bottom-[300px] right-0 md:right-[140px] flex flex-col justify-center items-center z-10">
        <Image
          src={heroPin}
          alt="heroPin"
          width={260}
          height={260}
          className="object-none pointer-events-none min-w-[260px] min-h-[260px]"
          loading="lazy"
          decoding="async"
        />
        <Image
          src={pinLoc}
          alt="pinLoc"
          width={80}
          height={80}
          className="object-none pointer-events-none min-w-[80px] min-h-[80px] -mt-2"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
