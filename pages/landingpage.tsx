import Navbar from "@/src/components/navbar"
import Hero from "@/src/components/hero"
import LogoStrip from "@/src/components/logoStrip";
import LandingSection2 from "@/src/components/landingSection2";
import LandingSection3 from "@/src/components/landingSection3";
import LandingSection4 from "@/src/components/landingSection4";
import LandingSection5 from "@/src/components/landingSection5";
import Faq from "@/src/components/faq";
import Footer from "@/src/components/footer";

export default function LandingPage() {
  return (
   <div className="flex flex-col bg-black w-[100%] items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[1440px]">
        <div className="">
          <Hero />
          {/* <Navbar />
          <Hero />
          <LogoStrip /> */}
        </div>
          <LandingSection2 />
          <LandingSection3 />
          <LandingSection4 />
          <LandingSection5 />
          <Faq />
          <Footer />
      </div>
   </div>
  );
}