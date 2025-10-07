import Image from "next/image";
import table from "@/src/assets/Table.svg";

interface PercentageProps {
  percentages1: String[];
  percentages2: String[];
}

export default function Percentage({
  percentages1,
  percentages2,
}: PercentageProps) {
  return (
    <>
      <div className="text-gray-500">
        <hr />
        <div className="hidden md:flex place-content-between">
          {percentages1.map((percentage, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="border-[1px] h-[8px] w-[0px]" />
              <h1>{percentage}</h1>
            </div>
          ))}
        </div>
        <div className="md:hidden flex place-content-between">
          {percentages2.map((percentage2, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="border-[1px] h-[8px] w-[0px]" />
              <h1>{percentage2}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between md:justify-start text-gray-500 gap-[18px] md:gap-[32px]">
        <div className="flex gap-[4px] text-[9.89px] md:text-[12px]">
          <Image
            src={table}
            alt="Table"
            className="h-[16px] w-[16px] align-middle"
          />
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
    </>
  );
}
