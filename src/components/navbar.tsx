"use client"

import { useState } from "react"
import Image from "next/image"
import logo from "@/src/assets/Logo.png"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="text-white">
      <div className="flex mx-auto p-4 justify-between items-center px-20">
        {/* Logo */}
        <Image src={logo} alt="logo" className="w-[120px] h-auto" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[14px]">
          <a href="/">Home</a>
          <a href="/about">Company</a>
          <a href="/contact">Contact Us</a>
          <a href="#">Login</a>
          <button className="ml-4 text-white bg-yellow-400 rounded-sm h-[40px] w-[131px]">
            Create Account
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-6 bg-black text-[14px]">
          <a href="/" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/about" onClick={() => setIsOpen(false)}>Company</a>
          <a href="/contact" onClick={() => setIsOpen(false)}>Contact Us</a>
          <a href="#" onClick={() => setIsOpen(false)}>Login</a>
          <button className="mt-2 text-white bg-yellow-400 rounded-sm h-[40px] w-[131px]">
            Create Account
          </button>
        </div>
      )}
    </nav>
  )
}
