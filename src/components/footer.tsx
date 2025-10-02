import logo from "@/src/assets/Logo.svg"
import Image from "next/image"

import facebookIcon from "@/src/assets/Facebook.svg"
import instagramIcon from "@/src/assets/Instagram.svg"
import linkedinIcon from "@/src/assets/LinkedIn.svg"
import twitterIcon from "@/src/assets/Twitter.svg"
import youtubeIcon from "@/src/assets/YouTube.svg"

export default function Footer() {
    return (<div className="flex flex-col z-20">
        <div className="flex flex-col bg-white gap-[10px] pt-[60px] px-[25px] lg:py-[100px]  lg:px-[206px] justify-center items-center">
            <div className="flex flex-col bg-gradient-to-tl from-white to-[#ECD49B] rounded-[14px] p-[60px] md:p-[120px] justify-center items-center gap-[36px]">
                <h1 className="text-[24px] md:text-[32px] leading-[40px] font-bold text-center">
                    Start exploring PAXIV for free and access your
                    all-in-one platform—covering everything from land 
                    acquisition to project disposition, powered by AI
                </h1>
                <button className="bg-[#DBA13F] px-[18px] py-[14px] gap-[8px] rounded-[8px] text-[14px] leading-[24px] tracking-[2%] align-middle">Create Account</button>
            </div>
        </div>

        <div className="bg-white gap-[48px] pt-[48px] pb-[12px] justify-center items-center">
            <div className="flex flex-col gap-[24px] ">
                <div className="flex flex-col md:flex-row justify-between items-center px-[20px]">
                    <Image src={logo} alt="logo"/>
                    <div className="flex flex-col md:flex-row gap-[11px] items-center justify-center text-[14px] leading-[24px] tracking-[2%] alignment-middle decoration-none text-black">
                        <div className="flex gap-[11px] items-center justify-center content-between">
                            <a href="/about" className="px-[18px] py-[14px] hover:text-yellow-200">Company</a>
                            <a href="/contact" className="px-[18px] py-[14px] hover:text-yellow-200">Contact Us</a>
                            <a href="#" className="px-[18px] py-[14px] hover:text-yellow-200">Login</a>
                        </div>
                        <a href="#" className="px-[18px] py-[14px] hover:text-yellow-200">Create Account</a>
                    </div>
                    <div className="flex gap-[16px] items-center justify-center cursor-pointer">
                        <a href="#">
                            <Image src={facebookIcon} alt="facebook" />
                        </a>
                        <a href="#">
                            <Image src={twitterIcon} alt="twitter" />
                        </a>
                        <a href="#">
                            <Image src={instagramIcon} alt="instagram" />
                        </a>
                        <a href="#">
                            <Image src={linkedinIcon} alt="linkedin" />
                        </a>
                        <a href="#">
                            <Image src={youtubeIcon} alt="youtube" />
                        </a>
                    </div>
                
                </div>
                <hr />
                <p className="py-[24px] text-center">Copyright © 2025 PAXIV | All Rights Reserved | Terms and Conditions | Privacy Policy</p>
            </div>
            
            
        </div>
        </div>
    )
}