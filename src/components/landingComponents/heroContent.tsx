import { Button } from "../ui/button";
import Image from "next/image";

import playCircle from "@/src/assets/Play_Circle.png";
import heroPin from "@/src/assets/heroPic.svg";
import pinLoc from "@/src/assets/pinLocation.svg";

export default function HeroContent() {
  return (
    <div className="relative flex flex-col md:flex-row z-20">
      <div className="relative  m-auto py-[149px] px-[35px] gap-9 md:py-[288px] md:px-[100px] ">
        <h2 className="text-white font-bold text-[64px] leading-[72px] tracking-[-1%] align-middle text-center md:text-[72px] md:text-start md:leading-[92px] md:tracking-[2%] pb-3">
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
      <div className="flex px-20 md:justify-end md:items-end">
        <div className="flex flex-col justify-center items-center m-auto">
          <Image
            src={heroPin}
            height={400}
            alt="heroPin"
            className="min-h-[400px]"
          />
          <Image src={pinLoc} alt="pinLoc" />
        </div>
      </div>
    </div>
  );
}
