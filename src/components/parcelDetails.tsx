import Image from "next/image"
import saleSign from "../assets/saleSign.png"
import chevron_Up from "../assets/Chevron_Up.png"

export default function ParcelDetails() {
    return (
        <div className="w-[1440px] p-[10px]">
            
            <div className="flex justify-between items-center">
                <h1 className="text-[32px] tracking-[2%] align-middle">Parcel Details</h1>
                <Image src={chevron_Up} alt="chevron_Up" className="w-[24px] h-[24px] align-middle" />
            </div>
            
            <div className="grid grid-cols-3 gap-20px">
                <div className="text-yellow-500 ">
                    <h2 className="text-[24px]">Parcel Sq Ft</h2>
                    <h1 className="text-[48px]">174,240 Sq Ft</h1>
                </div>
                <div className="text-yellow-500 ">
                    <h2 className="text-[24px]">Current Use</h2>
                    <h1 className="text-[48px]">Vacant Land</h1>
                </div>
                <div className="text-yellow-500 ">
                    <h2 className="text-[24px]">Parcel Value</h2>
                    <div className="flex gap-[20px]">
                        <h1 className="text-[48px]">$1,045,440</h1>
                        <Image src={saleSign} alt="saleSign" className="w-[64px] h-[64px]" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}