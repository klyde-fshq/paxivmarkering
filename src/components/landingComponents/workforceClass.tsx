import Image from "next/image";
import table from "@/src/assets/Table.svg";
import Percentage from "../ui/percentage";

export default function WorkforceClass() {
  const percentages1 = [
    "0%",
    "10%",
    "20%",
    "30%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    "90%",
    "100%",
  ];

  const percentages2 = ["0%", "20%", "40%", "60%", "80%", "100%"];

  const workforceClassData = [
    {
      title: "Employee of private company workers",
      value: "85.0%",
      error: "0.9%",
      bar: "h-[18px] w-[178px] md:w-[65vw] max-w-[1076px]",
    },
    {
      title: "Self-employed in own incorporated business workers",
      value: "85.0%",
      error: "0.9%",
      bar: "h-[18px] w-[27px]",
    },
    {
      title: "Private not-for-profit wage salary workers",
      value: "85.0%",
      error: "0.9%",
      bar: "h-[18px] w-[13px]",
    },
    {
      title: "Local, state, and federal government workers",
      value: "85.0%",
      error: "0.9%",
      bar: "h-[18px] w-[53px]",
    },
    {
      title:
        "Self-employed in own not incorporated business workers and unpaid family workers",
      value: "85.0%",
      error: "0.9%",
      bar: "h-[18px] w-[43px]",
    },
  ];

  return (
    <div className="relative gap-[10px] md:gap-[16px]">
      <h2 className="text-[18px] md:text-[24px] align-middle text-[#FFAA20]">
        Workforce Class
      </h2>
      <div className="flex flex-col gap-[18px]">
        {workforceClassData.map((item, index) => (
          <div key={index} className="flex flex-col gap-[8px] ">
            <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
              <h1>{item.title}</h1>
              <h1>- {item.value}</h1>
              <h1 className="text-gray-400">± {item.error}</h1>
            </div>
            <div className={"bg-[#FFC657] " + item.bar} />
          </div>
        ))}
        <Percentage percentages1={percentages1} percentages2={percentages2} />
      </div>
    </div>
  );
}
