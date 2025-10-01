import Image from 'next/image'
import logo from "@/src/assets/Logo.png"

export default function Navbar() {
    return (
        <div className="flex max-w-[1240px] w-[100%] mx-auto p-4 justify-between items-center "> 
            {/* Logo */}
            <Image src={logo} alt="logo"  />

            {/* Nav links */}
            <div className="flex items-center gap-8 text-white text-[14px]">
                <a href="/">Home</a>
                <a href="/about">Company</a>
                <a href="/contact">Contact Us</a>
                <a href="#">Login</a>
                <button className="ml-4 text-white bg-yellow-400 rounded-sm h-[52px] w-[131px]">
                    Create Account
                </button>
            </div>
        </div>
    )
}
