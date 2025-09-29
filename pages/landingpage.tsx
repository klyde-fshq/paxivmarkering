import Navbar from "@/src/components/navbar"
import Hero from "@/src/components/hero"
import LogoStrip from "@/src/components/logoStrip";
import LandingSection2 from "@/src/components/landingSection2";
import LandingSection3 from "@/src/components/landingSection3";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center w-[1440px]">
      <div className="bg-[url('../src/assets/hero.png')] bg-full bg-center bg-no-repeat bg-linear-to-t from-black to-transparent h-[1104px] ">
        
        <Navbar />
        <Hero />
        <LogoStrip />
      </div>
      <LandingSection2 />
      <LandingSection3 />
    </div>
  );
}