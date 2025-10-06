"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/src/assets/Logo.png";
import logoAbout from "@/src/assets/aboutLogo.svg";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Company", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Login", href: "/login" },
  ];

  const pathname = usePathname();
  const isAbout = pathname === "/about";

  return (
    <nav
      className={isAbout ? "text-black bg-white" : "text-white bg-transparent"}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <a href="/">
            <Image
              src={isAbout ? logoAbout : logo}
              alt="PAXIV Logo"
              className="w-[120px] h-auto"
            />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-15 text-[15px] font-light">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-[#FFAA20]"
                  : "hover:text-[#FFAA20] transition-colors duration-200"
              }
            >
              {link.name}
            </a>
          ))}
          <Button variant={"default"} size="md" className="text-white">
            Create Account
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={isAbout ? "text-black bg-white" : "text-white bg-black"}
        >
          <div className="md:hidden flex flex-col items-start gap-8 px-6 py-6 text-[14px] font-light">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-[#FFAA20]"
                    : "hover:text-[#FFAA20] transition-colors duration-200"
                }
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-[#D9A74A] hover:bg-[#c79635] text-white font-medium rounded-lg px-5 py-2 w-full">
              Create Account
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
