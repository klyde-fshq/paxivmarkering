import Image from "next/image"
import table from "@/src/assets/Table.svg"

export default function WorkforceIndustry() {

    const percentages = [
        0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
    ]

    const percentages2 = [
        0, 10, 20, 30, 40, 50
    ]

    return (
        <div className="relative gap-[10px] md:gap-[16px]">
            <h2 className="text-[18px] leading-[24px] md:text-[24px] align-middle text-[#FFAA20]">Workforce Industry</h2>
            <div className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Educational services, and health care and social assistance</h1>
                        <h1>- 22.4%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[169px] md:w-[489px]" />
                </div>

                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Professional, scientific, and management, and administrative and waste management services</h1>
                        <h1>- 14.1%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[169px] md:w-[330px]" />
                </div>

                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Retail trade</h1>
                        <h1>- 11.6%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[145px] md:w-[238px]" />
                </div>

                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Manufacturing</h1>
                        <h1>- 10.1%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[127px] md:w-[225px]" />
                </div>

                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Arts, entertainment, and recreation, and accommodation and food services</h1>
                        <h1>- 8.7%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[82px] md:w-[200px]" />
                </div>

                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Finance and insurance, and real estate and rental and leasing</h1>
                        <h1>- 8.1%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[67px] md:w-[187px]" />
                </div>

                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Construction</h1>
                        <h1>- 7.3%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[43px] md:w-[157px]" />
                </div>

                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Transportation and warehousing, and utilities</h1>
                        <h1>- 5.8%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[39px] md:w-[124px]" />
                </div>

                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Other services, except public administration</h1>
                        <h1>- 4.3%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[31px] md:w-[113px]" />
                </div>

                <div className="flex flex-col gap-[8px] ">
                    <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
                        <h1>Public administration</h1>
                        <h1>- 3.3%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <div className="bg-[#FFC657] h-[18px] w-[33px] md:w-[74px]" />
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