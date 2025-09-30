import logo from "@/src/assets/Logo.svg"
import Image from "next/image"

import facebookIcon from "@/src/assets/Facebook.svg"
import instagramIcon from "@/src/assets/Instagram.svg"
import linkedinIcon from "@/src/assets/LinkedIn.svg"
import twitterIcon from "@/src/assets/Twitter.svg"
import youtubeIcon from "@/src/assets/YouTube.svg"

export default function Footer() {
    return (<div className="flex flex-col">
        <div className="flex flex-col bg-white w-[1440px] gap-[10px] py-[100px] px-[206px] justify-center items-center">
            <div className="flex flex-col bg-gray-100 w-[1028.119140625px] h-[332px] rounded-[14px] p-[120px] justify-center items-center gap-[36px]">
                <h1 className="text-[32px] leading-[40px] font-bold text-center">
                    Start exploring PAXIV for free and access your
                    all-in-one platform—covering everything from land 
                    acquisition to project disposition, powered by AI
                </h1>
                <button className="bg-yellow-600 px-[18px] py-[14px] rounded-[8px] text-[14px] leading-[24px] tracking-[2%] align-middle">Create Account</button>
            </div>
        </div>

        <div className="bg-white w-[1440px] gap-[48px]  pt-[48px] pb-[12px] justify-center items-center">
            <div className="flex flex-col gap-[24px] w-[1440px]">
                <div className="flex justify-between items-center px-[20px]">
                    <Image src={logo} alt="logo"/>
                    <div className="flex gap-[11px] items-center justify-center content-between text-[14px] leading-[24px] tracking-[2%] alignment-middle">
                        <a href="#" className="px-[18px] py-[14px] hover:text-yellow-200">Company</a>
                        <a href="#" className="px-[18px] py-[14px] hover:text-yellow-200">Contact Us</a>
                        <a href="#" className="px-[18px] py-[14px] hover:text-yellow-200">Login</a>
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
                <p className="flex py-[24px] items-center justify-center">Copyright © 2025 PAXIV | All Rights Reserved | Terms and Conditions | Privacy Policy</p>
            </div>
            
            
        </div>
        </div>
    )
}