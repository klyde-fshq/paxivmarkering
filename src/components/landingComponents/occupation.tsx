import Image from "next/image"
import table from "@/src/assets/Table.svg"

export default function Occupation() {
    const money = [
        "0K", "50K", "100K", "150K", "200K", "250K", "300K", "350K", "400K", "450K", "500K"
    ]
    return (
        <div>
            <h2 className="text-[24px] align-middle text-yellow-500">Occupation</h2>
            <div className="flex flex-col gap-[18px]">
                
                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[12px]">
                        <h1>Management, business, science and arts occupations</h1>
                        <h1>- 289,899</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-yellow-500 h-[18px] w-[665px]" />
                </div>

                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[12px]">
                        <h1>Sales and office occupations</h1>
                        <h1>- 133,685</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-yellow-500 h-[18px] w-[297px]" />
                </div>

                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[12px]">
                        <h1>Service occupations</h1>
                        <h1>- 88,371</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-yellow-500 h-[18px] w-[178px]" />
                </div>

                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[12px]">
                        <h1>Production, transportation, and material moving occupations</h1>
                        <h1>- 80,055</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-yellow-500 h-[18px] w-[166px]" />
                </div>

                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[12px]">
                        <h1>Natural resources, construction, and maintenance occupations</h1>
                        <h1>- 49,211</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-yellow-500 h-[18px] w-[113px]" />
                </div>



                <div className="text-gray-500">
                    <hr />
                    <div className="flex place-content-between">
                        {money.map((money, index) => (
                            <div key={index} className="flex flex-col justify-center items-center">
                                <div className="border-[1px] h-[8px] w-[0px]" />
                                <h1>{money}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="flex text-gray-500 gap-[32px]">
                        <div className="flex gap-[4px]">
                            <Image src={table} alt="Table" className="h-[16px] w-[16px] align-middle"/>
                            <h1>Show Table</h1>
                        </div>
                        <div className="flex gap-[4px]">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-[26px] h-[16px] bg-gray-500 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-[11.428571701049805px] after:w-[11.55555534362793px] after:transition-all  peer-checked:bg-yellow-500 dark:peer-checked:bg-blue-600"></div>
                            </label>
                            <h1>Display Margin of Error</h1>
                        </div>
                </div>

            </div>
        </div>
    )
}