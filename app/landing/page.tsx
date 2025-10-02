import Navbar from "@/src/components/navbar"
import Hero from "@/src/components/landingComponents/hero"
import LogoStrip from "@/src/components/landingComponents/logoStrip";
import LandingSection1 from "@/app/landing/sections/landingSection1";
import LandingSection2 from "@/app/landing/sections/landingSection2";
import LandingSection3 from "@/app/landing/sections/landingSection3";
import LandingSection4 from "@/app/landing/sections/landingSection4";
import Faq from "@/src/components/landingComponents/faq";
import Footer from "@/src/components/footer";

export default function LandingPage() {
  return (
   <div className="bg-black items-center justify-center">
      <div className="">
          <Hero />
          <div className="z-20">
            {/* <LandingSection1 />
            <LandingSection2 />
            <LandingSection3 />
            <LandingSection4 />
            <Faq /> */}
            <Footer />
          </div>
      </div>
   </div>
  );
}