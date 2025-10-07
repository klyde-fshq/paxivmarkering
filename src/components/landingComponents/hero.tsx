import Image from "next/image";
import rectangle from "@/src/assets/Rectangle 2.svg";
import line1 from "@/src/assets/Line 1.svg";
import line2 from "@/src/assets/Line 3.svg";
import line3 from "@/src/assets/Line 4.svg";
import HeroContent from "./heroContent";

export default function Hero() {
  return (
    <div
      className="
    relative z-10 h-[1098px] lg:h-[1104px] overflow-hidden
    bg-[linear-gradient(180deg,rgba(10,10,10,0.9)_3.86%,rgba(10,10,10,0.5)_8.95%,rgba(10,10,10,0)_14.23%,rgba(10,10,10,0)_85.98%,rgba(10,10,10,0.3)_100%),linear-gradient(269.82deg,rgba(0,0,0,0)_43.22%,rgba(0,0,0,0.5)_99.85%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('../src/assets/heroBg_Mobile.png')]
    md:bg-[linear-gradient(180deg,rgba(10,10,10,0.9)_3.86%,rgba(10,10,10,0.5)_8.95%,rgba(10,10,10,0)_14.23%,rgba(10,10,10,0)_85.98%,rgba(10,10,10,0.3)_100%),linear-gradient(269.82deg,rgba(0,0,0,0)_43.22%,rgba(0,0,0,0.5)_99.85%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('../src/assets/hero.png')]
    bg-cover bg-center
  "
    >
      <HeroContent />
      <div className="z-10 hidden md:block">
        <Image
          src={rectangle}
          alt="Rectangle"
          className=" absolute top-[135px] right-6 z-0 object-contain"
          loading="lazy"
          decoding="async"
        />
        <Image
          src={line1}
          alt="Line1"
          className=" absolute top-[120px] right-25 z-0 object-contain"
        />
        <Image
          src={line2}
          alt="Line2"
          className=" absolute bottom-5 right-110 z-0 object-contain"
        />
        <Image
          src={line3}
          alt="Line3"
          className=" absolute bottom-0 right-5 z-0 object-contain"
        />
        <h5 className=" absolute text-[16px] leading-[24px] tracking-[2%] text-[#FFC657] -right-6 top-[55%] rotate-270">
          1,208 sq ft
        </h5>
      </div>
      <div className="md:hidden z-10">
        <Image
          src={rectangle}
          alt="Rectangle"
          width={600}
          height={600}
          className="absolute bottom-[-20%] right-6 z-0 rotate-90 
               object-top pointer-events-none
               min-w-[600px] min-h-[600px]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
