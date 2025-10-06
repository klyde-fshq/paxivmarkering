import Image from "next/image";
import LandingPage from "@/app/landing/page";
import Footer from "@/src/components/footer";
import AboutPage from "@/app/about/page";
import Navbar from "@/src/components/navbar";

export default function Home() {
  return (
    <div className="md:flex md:flex-col bg-black m-auto">
      <LandingPage />
    </div>
  );
}
