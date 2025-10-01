import Image from "next/image"
import chevron_Up from "../../assets/Chevron_Up.png"
import zoneCode from "../../assets/zoneCode.png"
import bldgHeight from "../../assets/bldgHeight.png"
import setBackIcon from "../../assets/setback.png"
import widthLogo from "../../assets/widthLogo.png"

export default function Zoning() {

    const permittedUses = [
        "Manufacturing",
        "Storage",
        "Research",
        "Distribution",
        "Showroom",
        "Vehicle Services",
    ]


    return (
        <div className="max-w-[1240px] p-[10px]">
            <div className="flex justify-between items-center">
                <h1 className="text-[32px] tracking-[2%] align-middle">Zoning</h1>
                <Image src={chevron_Up} alt="chevron_Up" className="w-[24px] h-[24px] align-middle" />
            </div>
            <div className="grid grid-cols-3 gap-20px text-yellow-500 ">
                <div className="">
                    <h2 className="text-[24px]">Zone Code</h2>
                    <div className="flex gap-[24px]">
                        <h1 className="text-[56px]">L-1</h1>
                        <Image src={zoneCode} alt="zoneCode" className="w-[64px] h-[64px] align-middle" />
                    </div>
                </div>

                <div className="">
                    <h2 className="text-[24px]">Zone Name</h2>
                    <div className="flex gap-[24px]">
                        <h1 className="text-[56px]">Light Industrial</h1>
                    </div>
                </div>
                
                <div className="flex flex-col w-[365px] h-[124px] gap-[16px]">
                    <h2 className="text-[24px]">Permitted Uses</h2>
                    <div className="grid grid-cols-3 w-[365px] gap-[20px] text-[12px]">
                        {permittedUses.map((permittedUse, index) => (
                            <div key={index} className="flex gap-[8px] bg-yellow-200 rounded-[100px] px-18px py-[6px] items-center justify-center">
                                <h1>{permittedUse}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-20px text-yellow-500 pt-[20px]">
                <div>
                    <h2 className="text-[24px]">Max Bldg. Height</h2>
                    <div className="flex gap-[24px]">
                        <h1 className="text-[56px]">40 ft</h1>
                        <Image src={bldgHeight} alt="bldgHeight" className="w-[64px] h-[64px] align-middle" />
                    </div>
                </div>
                <div>
                    <h2 className="text-[24px]">Min. Rear Setback</h2>
                    <div className="flex gap-[24px]">
                        <h1 className="text-[56px]">10 ft</h1>
                        <Image src={setBackIcon} alt="setBackIcon" className="w-[64px] h-[64px] align-middle" />
                    </div>
                </div>
                <div>
                    <h2 className="text-[24px]">Min. Lot Width</h2>
                    <div className="flex gap-[24px]">
                        <h1 className="text-[56px]">40 ft</h1>
                        <Image src={widthLogo} alt="widthLogo" className="w-[64px] h-[64px] align-middle" />
                    </div>
                </div>
            </div>
        </div>
    )
}