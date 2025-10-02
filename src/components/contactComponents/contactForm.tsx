"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "../navbar"

import heroBg from "@/src/assets/contactBackground.svg"
import pinHero from "@/src/assets/Contact-Location.svg"
import rectangle from "@/src/assets/contactRectangle.svg"
import line1 from "@/src/assets/contact-line1.svg"
import line2 from "@/src/assets/contact-line2.svg"
import pinLoc from "@/src/assets/pinLocation.svg"
import rectangle2 from "@/src/assets/contact2Rectangle.svg"

export default function ContactForm() {
  return (
    <div className="h-[1098px] md:h-[972px] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Hero background"
          fill
          className="object-cover object-left"
          priority
        />

        {/* Animated Rectangle + Lines */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-[-40%] md:left-[-20%] top-[25%] md:top-[35%] w-[2000px] h-[1000px]"
        >
          <Image
            src={rectangle}
            alt="Rectangle"
            className="hidden sm:block absolute inset-0 w-full h-full"
          />
          <Image
            src={rectangle2}
            alt="Rectangle2"
            className="block sm:hidden absolute inset-0 w-full h-full"
          />

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Image
              src={line1}
              alt="Line1"
              className="hidden sm:block absolute left-[10%] top-[10px] md:top-[5px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Image
              src={line2}
              alt="Line2"
              className="hidden sm:block absolute left-[33%] top-[5%]"
            />
          </motion.div>
        </motion.div>

        {/* Pin + Glow */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
          className="hidden md:block absolute z-20 left-[10%] bottom-[5%] flex flex-col items-center py-[25px]"
        >
          <Image src={pinHero} alt="pinHero" />
          
            <Image
              src={pinLoc}
              alt="pinLocation"
              className="absolute z-20 left-[50%] bottom-0 shadow-[0px_0px_100px_-3px_rgba(234,_179,_8,_0.5)]"
            />
        </motion.div>
      </div>

      {/* Top gradient */}
      <div className="absolute inset-x-0 top-0 h-1/2 z-10 pointer-events-none bg-gradient-to-b from-black/90 to-transparent" />

      {/* Navbar */}
      <div className="relative z-20 w-full justify-between">
        <Navbar />
      </div>

      {/* Content */}
      <div className="grid relative md:grid-cols-2 px-4 md:pl-[100px] pt-10 md:pt-30 lg:gap-[50px] z-20">
        {/* Left Content */}
        <div className="gap-[12px] text-white text-center md:text-start">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="font-bold text-[56px] sm:text-[46px] leading-[72px] md:text-[72px] md:leading-[92px] tracking-[2%]"
          >
            Get in touch with us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-[16px] leading-[26px] tracking-[2%]"
          >
            Have questions or need assistance? Reach out to us today!
          </motion.p>
        </div>

        {/* Right Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="bg-[#FFFCF4] p-[24px] gap-[32px] rounded-[6px] max-w-[323px] sm:max-w-[504px] justify-center items-center mx-auto lg:mx-0 mt-5 lg:mt-0 shadow-lg"
        >
          <div className="flex flex-col gap-[16px] text-[#656565]">
            <div className="grid grid-cols-2 gap-[24px] ">
              <div className="gap-[8px]">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-[100%] h-[42px] rounded-[4px] border border-gray-400 px-[12px] focus:border-[#FFC657] focus:ring-2 focus:ring-[#FFC657] outline-none"
                />
              </div>

              <div className="gap-[8px]">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="w-[100%] h-[42px] rounded-[4px] border border-gray-400 px-[12px] focus:border-[#FFC657] focus:ring-2 focus:ring-[#FFC657] outline-none"
                />
              </div>
            </div>

            <div className="gap-[8px]">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-[100%] h-[42px] rounded-[4px] border border-gray-400 px-[12px] focus:border-[#FFC657] focus:ring-2 focus:ring-[#FFC657] outline-none"
              />
            </div>

            <div className="gap-[8px]">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                className="w-[100%] h-[42px] rounded-[4px] border border-gray-400 px-[12px] focus:border-[#FFC657] focus:ring-2 focus:ring-[#FFC657] outline-none"
              />
            </div>

            <div className="gap-[8px] flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full h-[128px] rounded-[4px] border border-gray-400 px-[12px] py-[8px] focus:border-[#FFC657] focus:ring-2 focus:ring-[#FFC657] outline-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#DBA13F] text-[14px] text-white py-[14px] px-[18px] rounded-[8px] w-[127px] h-[52px] self-start"
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
