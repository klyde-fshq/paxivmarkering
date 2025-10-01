"use client"
import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import logo from "@/src/assets/aboutLogo.svg"

export default function AboutNavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white max-w-[1440px] w-full mx-auto p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Image src={logo} alt="logo" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[14px]">
          <a href="/">Home</a>
          <a href="/about">Company</a>
          <a href="/contact">Contact Us</a>
          <a href="#">Login</a>
          <button className="ml-4 text-white bg-yellow-400 rounded-sm h-[52px] w-[131px]">
            Create Account
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-[14px]">
          <a href="/" className="hover:text-yellow-500">Home</a>
          <a href="/about" className="hover:text-yellow-500">Company</a>
          <a href="/contact" className="hover:text-yellow-500">Contact Us</a>
          <a href="#" className="hover:text-yellow-500">Login</a>
          <button className="mt-2 text-white bg-yellow-400 rounded-sm h-[45px] w-full">
            Create Account
          </button>
        </div>
      )}
    </nav>
  )
}
