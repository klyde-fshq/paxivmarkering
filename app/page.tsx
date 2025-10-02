import Image from "next/image";
import LandingPage from "@/app/landing/page";
import Footer from "@/src/components/footer";
import AboutPage from "@/app/about/page";

export default function Home() {
  return (
    <div className="md:max-w-[1440px]  md:flex md:flex-col bg-black m-auto items-center justify-center">
      <LandingPage/>
    </div>
  );
}
