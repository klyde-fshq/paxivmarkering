import Image from "next/image"
import image30 from "../assets/image 30.png"
import logo from "../assets/fireflyLogo.jpg"

export default function LandingSection2() {
    return (
        <div className="bg-white gap-20px p-25">
            <h1 className="text-[48px] font-medium leading-[64px]">The All-In-One Property Intelligence Platform</h1>
            <div className="grid grid-cols-2 gap-[37px]">
                <div className="px-[20px] py-[22px]">
                    <hr />
                    <div className="flex gap-[5px]">
                        <div className="flex  items-center w-[26.73px]">
                            <Image src={logo} alt="logo" className="hidden hover:block"/>
                        </div>
                        <h1 className="text-[32px] leading-[40px] font-regular ">Mapping</h1>
                    </div>
                    <hr />
                    <div className="flex gap-[5px]">
                        <div className="flex  items-center w-[26.73px]">
                            <Image src={logo} alt="logo" className="w-[26.73px] h-[24px]"/>
                        </div>
                        <h1 className="text-[32px] leading-[40px] font-regular ">PAXIV AI</h1>
                    </div>
                    <hr />
                    <div className="flex gap-[5px]">
                        <div className="flex  items-center w-[26.73px]">
                            <Image src={logo} alt="logo" className="w-[26.73px] h-[24px]"/>
                        </div>
                        <h1 className="text-[32px] leading-[40px] font-regular ">One-Click Skip Trace</h1>
                    </div>
                    <hr />
                    <div className="flex gap-[5px]">
                        <div className="flex  items-center w-[26.73px]">
                            <Image src={logo} alt="logo" className="w-[26.73px] h-[24px]"/>
                        </div>
                        <h1 className="text-[32px] leading-[40px] font-regular ">Deal Room</h1>
                    </div>
                    <hr />
                    <div className="flex gap-[5px]">
                        <div className="flex  items-center w-[26.73px]">
                            <Image src={logo} alt="logo" className="w-[26.73px] h-[24px]"/>
                        </div>
                        <h1 className="text-[32px] leading-[40px] font-regular ">Off-Market Opportunities</h1>
                    </div>
                    
                </div>
                <div>
                    <Image src={image30} alt="image30" />
                    <p className="text-justify text-[18px] leading-[28px] tracking-0">All your data in one place—parcels, zoning, codes, ownership, utilities, elevation, wetlands, and more.</p>
                </div>
            </div>
        </div>
    )
}