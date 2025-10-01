import Image from "next/image"
import whyImage from "@/src/assets/whyPaxiv.png"

export default function LandingSection3() {
    return (
        <div className="flex flex-col bg-yellow-100 w-[1440px] gap-[10px] pt-[50px] pb-[100px] px-[100px] justify-center items-center">
            <Image src={whyImage} alt="Why Paxiv"></Image>
            <div className="grid grid-cols-[1fr_2fr] gap-[250px]">
                <h1 className="text-[48px] text-yellow-500 font-medium leading-[64px]">Why Paxiv?</h1>
                <div className="text-24px gap-[32px] leading-[36px]">
                    <p className="">PAXIV is the only platform that unites all <span className="font-bold">your maps, data, and tools in one place—</span>
                    powered by AI for instant, precise result. No more switching systems or hunting across multiple sites.</p>

                    <div className="flex flex-col px-[20px]">
                        <li>
                            <p><span className="font-bold">All-in-One Access</span> — Zoning, ownership, comps, water rights, and more.</p>
                        </li>
                        <li>
                            <p><span className="font-bold">AI Precision</span> — Instantly find parcels that match your exact criteria.</p>
                        </li>
                        <li>
                            <p><span className="font-bold">Faster Decisions</span> — Go from search to action in seconds.</p>
                        </li>
                    </div>

                    <p>One Platform. All the data. Powered by AI</p>
                    <p>That's why top brokers, developers, and investors choose PAXIV.</p>

                </div>
            </div>
        </div>
    ) 
}