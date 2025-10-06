import logo from "@/src/assets/Logo.svg";
import Image from "next/image";

import facebookIcon from "@/src/assets/Facebook.svg";
import instagramIcon from "@/src/assets/Instagram.svg";
import linkedinIcon from "@/src/assets/LinkedIn.svg";
import twitterIcon from "@/src/assets/Twitter.svg";
import youtubeIcon from "@/src/assets/YouTube.svg";

export default function Footer() {
  const socials = [
    { href: "/", src: facebookIcon, alt: "facebook" },
    { href: "/", src: twitterIcon, alt: "twitter" },
    { href: "/", src: instagramIcon, alt: "instagram" },
    { href: "/", src: linkedinIcon, alt: "linkedin" },
    { href: "/", src: youtubeIcon, alt: "youtube" },
  ];

  const footerLinks = [
    { name: "Company", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Login", href: "/" },
    { name: "Create Account", href: "/" },
  ];

  return (
    <div className="flex flex-col z-20 w-full bg-white">
      <div className="w-full max-w-[1440px] flex flex-col bg-white gap-[10px] pt-[60px] px-[25px] lg:py-[100px] lg:px-[206px] justify-center items-center mx-auto">
        <div className="flex flex-col bg-gradient-to-tl from-white to-[#ECD49B] rounded-[14px] p-[60px] md:p-[120px] justify-center items-center gap-[36px] w-full">
          <h1 className="text-[24px] md:text-[32px] leading-[40px] font-bold text-center">
            Start exploring PAXIV for free and access your all-in-one
            platform—covering everything from land acquisition to project
            disposition, powered by AI
          </h1>
          <button className="bg-[#DBA13F] px-[18px] py-[14px] gap-[8px] rounded-[8px] text-[14px] leading-[24px] tracking-[2%] align-middle">
            Create Account
          </button>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto bg-white gap-[48px] pt-[48px] pb-[12px] flex flex-col items-center">
        <div className="flex flex-col gap-[24px] w-full">
          <div className="flex flex-col md:flex-row justify-between items-center px-[20px] w-full">
            <a href="/">
              <Image src={logo} alt="logo" />
            </a>
            <div className="flex flex-wrap justify-center items-center gap-[11px] text-[14px] leading-[24px] tracking-[2%] text-black font-light">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-[9px] py-[14px] hover:text-[#dba13f]"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex gap-[16px] items-center justify-center cursor-pointer py-5">
              {socials.map((social, _) => (
                <a href={social.href} key={social.alt}>
                  <Image src={social.src} alt={social.alt} />
                </a>
              ))}
            </div>
          </div>
          <hr />
          <p className="py-[24px] px-[20px] text-center">
            Copyright © 2025 PAXIV | All Rights Reserved |{" "}
            <span>
              <a href="" className="hover:text-[#dba13f]">
                Terms and Conditions{" "}
              </a>
            </span>
            |{" "}
            <span>
              <a href="" className="hover:text-[#dba13f]">
                Privacy Policy
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
