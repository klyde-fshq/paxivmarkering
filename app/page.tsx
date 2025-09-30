import Image from "next/image";
import LandingPage from "@/pages/landingpage";
import Footer from "@/src/components/footer";
import AboutPage from "@/pages/aboutPage";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <LandingPage/>
    </div>
  );
}
