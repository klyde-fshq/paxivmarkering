import Image from "next/image"
import table from "@/src/assets/Table.svg"

export default function WorkforceClass() {
    const percentages = [
        0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
    ]

    const percentages2 = [
        0, 20, 40, 60, 80, 100
    ]

    return (
        <div className="gap-[10px] md:gap-[16px]">
            <h2 className="text-[18px] md:text-[24px] align-middle text-[#FFAA20]">Workforce Class</h2>
            <div className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Employee of private company workers</h1>
                        <h1>- 85.0%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[238px] md:w-[1076px] max-w-full" />
                </div>
                <div>
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Self-employed in own incorporated business workers</h1>
                        <h1>- 85.0%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[27px]  max-w-full" />
                </div>
                <div>
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Private not-for-profit wage salary workers</h1>
                        <h1>- 85.0%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[13px] max-w-full" />
                </div>
                <div>
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Local, state, and federal government workers</h1>
                        <h1>- 85.0%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[53px] max-w-full" />
                </div>
                <div>
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Self-employed in own not incorporated business workers and unpaid family workers</h1>
                        <h1>- 85.0%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[43px] max-w-full" />
                </div>

                <div className="text-gray-500">
                    <hr />
                    <div className="hidden md:flex place-content-between">
                        {percentages.map((percentage, index) => (
                            <div key={index} className="flex flex-col justify-center items-center">
                                <div className="border-[1px] h-[8px] w-[0px]" />
                                <h1>{percentage}%</h1>
                            </div>
                        ))}
                    </div>
                    <div className="md:hidden flex place-content-between">
                        {percentages2.map((percentage2, index) => (
                            <div key={index} className="flex flex-col justify-center items-center">
                                <div className="border-[1px] h-[8px] w-[0px]" />
                                <h1>{percentage2}%</h1>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="flex justify-between md:justify-start text-gray-500 gap-[18px] md:gap-[32px]">
                        <div className="flex gap-[4px] text-[9.89px] md:text-[12px]">
                            <Image src={table} alt="Table" className="h-[16px] w-[16px] align-middle"/>
                            <h1>Show Table</h1>
                        </div>
                        <div className="flex gap-[4px] text-[9.89px] md:text-[12px]">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-[26px] h-[16px] bg-gray-500 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-[11.428571701049805px] after:w-[11.55555534362793px] after:transition-all  peer-checked:bg-[#FFC657] dark:peer-checked:bg-blue-600"></div>
                            </label>
                            <h1>Display Margin of Error</h1>
                        </div>
                </div>

            </div>
        </div>
    )
}