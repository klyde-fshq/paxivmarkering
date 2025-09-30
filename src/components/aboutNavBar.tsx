import Image from 'next/image'
import logo from "../assets/aboutLogo.svg"

export default function AboutNavBar() {
    

    return (
        <div className="flex bg-white w-[1440px] mx-auto p-4 justify-between items-center"> 
            {/* Logo */}
            <Image src={logo} alt="logo"  />

            {/* Nav links */}
            <div className="flex items-center gap-8  text-[14px]">
                <a href="#">Home</a>
                <a href="#">Company</a>
                <a href="#">Contact Us</a>
                <a href="#">Login</a>
                <button className="ml-4 text-white bg-yellow-400 rounded-sm h-[52px] w-[131px]">
                    Create Account
                </button>
            </div>
        </div>
    )
}