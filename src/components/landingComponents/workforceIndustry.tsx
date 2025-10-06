import Image from "next/image";
import table from "@/src/assets/Table.svg";
import Percentage from "../ui/percentage";

export default function WorkforceIndustry() {
  const percentages1 = [
    "0%",
    "5%",
    "10%",
    "15%",
    "20%",
    "25%",
    "30%",
    "35%",
    "40%",
    "45%",
    "50%",
  ];

  const percentages2 = ["0%", "10%", "20%", "30%", "40%", "50%"];

  const workforceIndustryData = [
    {
      title: "Educational services, and health care and social assistance",
      value: "22.4%",
      error: "0.9%",
      bar: "h-[18px] w-[169px] md:w-[489px]",
    },
    {
      title:
        "Professional, scientific, and management, and administrative and waste management services",
      value: "14.1%",
      error: "0.9%",
      bar: "h-[18px] w-[169px] md:w-[330px]",
    },
    {
      title: "Retail trade",
      value: "11.6%",
      error: "0.9%",
      bar: "h-[18px] w-[145px] md:w-[238px]",
    },
    {
      title: "Manufacturing",
      value: "10.1%",
      error: "0.9%",
      bar: "h-[18px] w-[127px] md:w-[225px]",
    },
    {
      title:
        "Arts, entertainment, and recreation, and accommodation and food services",
      value: "8.7%",
      error: "0.9%",
      bar: "h-[18px] w-[82px] md:w-[200px]",
    },
    {
      title: "Finance and insurance, and real estate and rental and leasing",
      value: "8.1%",
      error: "0.9%",
      bar: "h-[18px] w-[67px] md:w-[187px]",
    },
    {
      title: "Construction",
      value: "7.3%",
      error: "0.9%",
      bar: "h-[18px] w-[43px] md:w-[157px]",
    },
    {
      title: "Transportation and warehousing, and utilities",
      value: "5.8%",
      error: "0.9%",
      bar: "h-[18px] w-[39px] md:w-[124px]",
    },
    {
      title: "Other services, except public administration",
      value: "4.3%",
      error: "0.9%",
      bar: "h-[18px] w-[31px] md:w-[113px]",
    },
    {
      title: "Public administration",
      value: "3.3%",
      error: "0.9%",
      bar: "h-[18px] w-[33px] md:w-[74px]",
    },
  ];

  return (
    <div className="relative gap-[10px] md:gap-[16px]">
      <h2 className="text-[18px] leading-[24px] md:text-[24px] align-middle text-[#FFAA20]">
        Workforce Industry
      </h2>
      <div className="flex flex-col gap-[18px]">
        {workforceIndustryData.map((item, index) => (
          <div key={index} className="flex flex-col gap-[8px]">
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
