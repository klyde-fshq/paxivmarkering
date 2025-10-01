import Image from "next/image"
import chevron_Up from "../../assets/Chevron_Up.png"

export default function Ownership() {
    return (
        <div className="w-[1240px]">
            <div className="flex justify-between items-center">
                <h1 className="text-[32px] tracking-[2%] align-middle">Ownership</h1>
                <Image src={chevron_Up} alt="chevron_Up" className="w-[24px] h-[24px] align-middle" />
            </div>
            <div className="grid grid-cols-3 gap-20px text-yellow-500">
                <div className="">
                    <h2 className="text-[24px]">Name</h2>
                    <div className="text-[32px]">
                        <h1>John Doe, LLC</h1>
                        <h1>John Doe</h1>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-[24px]">Email(s)</h2>
                    <div className="text-[32px]">
                        <h1>johndoe@mail.com</h1>
                        <h1>jdoeinvestments@mail.com</h1>
                        <h1>doefamily@mail.com</h1>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-[24px]">Phone</h2>
                    <div className="text-[32px]">
                        <h1>555-123-4567</h1>
                        <h1>555-987-6543</h1>
                        <h1>555-246-8100</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}