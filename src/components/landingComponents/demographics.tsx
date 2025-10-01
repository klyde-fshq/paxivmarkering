import Occupation from "./occupation"
import WorkforceClass from "./workforceClass"
import WorkforceIndustry from "./workforceIndustry"
import Image from "next/image"
import chevron_Up from "../../assets/Chevron_Up.png"

export default function Demographics() {
    

    return (
        <div className="flex flex-col  gap-[24px]">
            <div className="flex justify-between items-center">
                <h1 className="text-[32px] tracking-[2%] align-middle">Demographics</h1>
                <Image src={chevron_Up} alt="chevron_Up" className="w-[24px] h-[24px] align-middle" />
            </div>
            <WorkforceClass />
            <hr className="border-yellow-500" />
            <WorkforceIndustry />
            <hr className="border-yellow-500" />
            <Occupation />
        </div>
    )
}