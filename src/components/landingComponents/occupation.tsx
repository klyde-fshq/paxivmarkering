import Image from "next/image";
import table from "@/src/assets/Table.svg";
import Percentage from "../ui/percentage";

export default function Occupation() {
  const money = [
    "0K",
    "50K",
    "100K",
    "150K",
    "200K",
    "250K",
    "300K",
    "350K",
    "400K",
    "450K",
    "500K",
  ];

  const money2 = ["0K", "100K", "200K", "300K", "400K", "500K"];

  const occupationData = [
    {
      title: "Management, business, science and arts occupations",
      value: "289,899",
      error: "0.9%",
      bar: "h-[18px] w-[230px] md:w-[665px]",
    },
    {
      title: "Sales and office occupations",
      value: "133,685",
      error: "0.9%",
      bar: "h-[18px] w-[33px] md:w-[297px]",
    },
    {
      title: "Service occupations",
      value: "88,371",
      error: "0.9%",
      bar: "h-[18px] w-[33px] md:w-[178px]",
    },
    {
      title: "Production, transportation, and material moving occupations",
      value: "80,055",
      error: "0.9%",
      bar: "h-[18px] w-[82px] md:w-[166px]",
    },
    {
      title: "Natural resources, construction, and maintenance occupations",
      value: "49,211",
      error: "0.9%",
      bar: "h-[18px] w-[82px] md:w-[113px]",
    },
  ];

  return (
    <div className="gap-[10px] md:gap-[16px]">
      <h2 className="text-[18px] md:text-[24px] align-middle text-[#FFAA20]">
        Occupation
      </h2>
      <div className="flex flex-col gap-[18px]">
        {occupationData.map((item, index) => (
          <div key={index} className="flex flex-col gap-[8px] ">
            <div className="flex gap-[8px] text-[9.89px] leading-[16px] align-left md:text-[12px]">
              <h1>{item.title}</h1>
              <h1>- {item.value}</h1>
              <h1 className="text-gray-400">± {item.error}</h1>
            </div>
            <div className={"bg-[#FFC657] " + item.bar} />
          </div>
        ))}

        <Percentage percentages1={money} percentages2={money2} />
      </div>
    </div>
  );
}
