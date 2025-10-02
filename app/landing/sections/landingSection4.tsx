import Image from "next/image"
import securityIcon from "@/src/assets/Security.png"
import walletIcon from "@/src/assets/Wallet.png"
import settingIcon from "@/src/assets/Settings.png"
import folderIcon from "@/src/assets/Folder.png"
import privacyIcon from "@/src/assets/Lock.png"

export default function LandingSection4() {
    return (
        <div className="flex flex-col bg-orange-50 py-[60px] px-[25px] md:p-[100px] gap-[48px]">
            <div className="flex flex-col text-[32px] md:text-[48px] leading-[64px] font-medium justify-center items-center text-center ">
                <h1>Where Privacy, Precision,</h1>
                <h1> and Performance Meet</h1>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="grid md:grid-cols-3 gap-[16px]">
                    <div className="gap-[10px] px-[26px] py-[39px] rounded-[14px] bg-[#FFF6E2]">
                        <div className="grid grid-2 gap-[32px]">
                            <Image src={securityIcon} alt="security" className="bg-white h-[64px] w-[64px] rounded-[14px]"/>
                            <div className="flex flex-col gap-[16px]">
                                <h1 className="text-[18px] font-bold leading-[28px] align-middle">All-In-One</h1>
                                <p className="text-[16px] leading-[26px] tracking-[2%]">Your all-in-one solution for real estate—PAXIV puts you in control of every step, from discovery to closing.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="gap-[10px] px-[26px] py-[39px] rounded-[14px] bg-[#FFF6E2]">
                        <div className="grid grid-2 gap-[32px]">
                            <Image src={walletIcon} alt="wallet" className="bg-white h-[64px] w-[64px] rounded-[14px]"/>
                            <div className="flex flex-col gap-[16px]">
                                <h1 className="text-[18px] font-bold leading-[28px] align-middle">No Hidden Fees</h1>
                                <p className="text-[16px] leading-[26px] tracking-[2%]">We’re not a broker. We provide the platform, the data, and the AI—so you stay in control of every deal.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="gap-[10px] px-[26px] py-[39px] rounded-[14px] bg-[#FFF6E2]">
                        <div className="grid grid-2 gap-[32px]">
                            <Image src={settingIcon} alt="setting" className="bg-white h-[64px] w-[64px] rounded-[14px]"/>
                            <div className="flex flex-col gap-[16px]">
                                <h1 className="text-[18px] font-bold leading-[28px] align-middle">Tailored Service</h1>
                                <p className="text-[16px] leading-[26px] tracking-[2%]">PAXIV delivers scalable, enterprise-grade solutions tailored for companies of every size.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-[10px]">
                    <div className="flex flex-col gap-[16px] px-[26px] py-[39px] rounded-[14px] bg-[#FFF6E2]">
                        <div className="grid grid-2 gap-[32px]">
                            <Image src={folderIcon} alt="wallet" className="bg-white h-[64px] w-[64px] rounded-[14px]"/>
                            <div className="flex flex-col gap-[16px]">
                                <h1 className="text-[18px] font-bold leading-[28px] align-middle">Data-Driven Results</h1>
                                <p className="text-[16px] leading-[26px] tracking-[2%]">PAXIV’s AI works for you—delivering better opportunities in less time and at lower cost.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-[10px] px-[26px] py-[39px] rounded-[14px] bg-[#FFF6E2]">
                        <div className="grid grid-2 gap-[32px]">
                            <Image src={privacyIcon} alt="privacy" className="bg-white h-[64px] w-[64px] rounded-[14px]"/>
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <h1 className="text-[18px] font-bold leading-[28px] align-middle">Privacy</h1>
                        <p className="text-[16px] leading-[26px] tracking-[2%]">PAXIV’s secure architecture combines encrypted storage, granular access permissions, and active threat detection to ensure your data remains private and fully protected.</p>
                        </div>
                    </div>

                    
                </div>

            </div>
        </div>
    )
}