import Image from "next/image";
import LandingPage from "@/app/landing/page";
import Footer from "@/src/components/footer";
import AboutPage from "@/app/about/page";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <LandingPage/>
    </div>
  );
}
