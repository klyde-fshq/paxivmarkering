import ContactForm from "@/src/components/contactComponents/contactForm";
import Image from "next/image";

import rectangle from "@/src/assets/rectangleContact.webp";
import rectangleMobile from "@/src/assets/contact2Rectangle.svg";
import contactLocation from "@/src/assets/Contact-Location.svg";
import contactPin from "@/src/assets/pinLocation.svg";

export default function ContactPage() {
  return (
    <>
      <div className="relative min-h-[972px] flex items-center pt-[92px] overflow-hidden bg-[linear-gradient(180deg,rgba(10,10,10,0.9)_3.86%,rgba(10,10,10,0.5)_8.95%,rgba(10,10,10,0)_14.23%,rgba(10,10,10,0)_85.98%,rgba(10,10,10,0.3)_100%),linear-gradient(269.82deg,rgba(0,0,0,0)_43.22%,rgba(0,0,0,0.5)_99.85%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('../src/assets/contactBackground.svg')] bg-cover bg-center">
        <ContactForm />
        <Image
          src={rectangle}
          alt="Rectangle"
          className="max-[380px]:hidden absolute min-[1245px]:-bottom-[30%] -left-10 max-[1245px]:bottom-0 z-0"
          loading="lazy"
          decoding="async"
        />

        <Image
          src={rectangleMobile}
          alt="Rectangle"
          className="min-[380px]:hidden absolute  bottom-10 left-0 z-0"
          loading="lazy"
          decoding="async"
        />
        <div className="hidden md:flex absolute z-10 left-20 bottom-10  flex-col items-center justify-center">
          <Image
            src={contactLocation}
            alt="Contact Location"
            className="relative -left-[10px]"
          />
          <Image src={contactPin} alt="Contact Pin" className="" />
        </div>
      </div>
    </>
  );
}
