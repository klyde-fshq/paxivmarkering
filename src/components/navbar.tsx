import Image from 'next/image'
import logo from "../assets/Logo.png"

export default function Navbar() {
    return (
        <div className="flex max-w-1240px p-4 justify-center items-center gap-100"> 
            <Image src={logo} alt="logo"  />
            <div className='flex gap-10 text-white text-decoration-none text-[14px]'>
                <a href="#">Home</a>
                <a href="#">Company</a>
                <a href="#">Contact Us</a>
                <a href="#">Login</a>
                <button className="text-white bg-yellow-400 border-1 rounded-sm h-[52px] w-[131px]">Create Account</button>
            </div>
            
        </div>
    )
}