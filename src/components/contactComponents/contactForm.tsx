"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import pinHero from "@/src/assets/Contact-Location.svg";
import rectangle from "@/src/assets/contactRectangle.svg";
import line1 from "@/src/assets/contact-line1.svg";
import line2 from "@/src/assets/contact-line2.svg";
import pinLoc from "@/src/assets/pinLocation.svg";
import rectangle2 from "@/src/assets/contact2Rectangle.svg";

import InputComponent from "@/src/components/ui/input";
import { Button } from "../ui/button";

export default function ContactForm() {
  return (
    <div className="gap-4 flex relative z-50 !gap-10 justify-between items-center md:items-start w-full flex-col md:flex-row mx-auto max-w-[1291px] px-[25px] pb-8">
      <div>
        <h2 className="font-sfprodisplay text-white text-[56px] leading-[72px] lg:text-7xl font-bold xl:leading-[92px] mb-3 text-center md:text-left">
          Get in touch with us
        </h2>
        <p className="font-sfprodisplay text-base leading-7 text-white text-center md:text-left">
          Have questions or need assistance? We're here to help. Reach out to us
          today!
        </p>
      </div>
      <form
        action=""
        className="flex flex-col gap-8 items-start p-6 w-full max-w-[504px] bg-[#FFFCF4] rounded-md"
      >
        <div className="flex flex-col gap-[16px] text-[#656565]">
          <div className="grid grid-cols-2 gap-6">
            <InputComponent label="First Name" name="fname" />
            <InputComponent label="Last Name" name="lname" />
          </div>
          <InputComponent label="Email" name="email" type="email" />
          <InputComponent label="Phone Number" name="phoneNumber" type="tel" />
          <InputComponent label="Message" name="message" type="textarea" />
        </div>
        <Button variant={"default"} size="lg" className="text-white">
          Send Message
        </Button>
      </form>
    </div>
  );
}
