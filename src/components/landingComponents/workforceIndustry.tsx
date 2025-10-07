import Percentage from "../ui/percentage";
import {
  WorkforceIndustryPercentages1,
  WorkforceIndustryPercentages2,
  workforceIndustryData,
} from "../../assets/datasets/landingSection3";

export default function WorkforceIndustry() {
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
        <Percentage
          percentages1={WorkforceIndustryPercentages1}
          percentages2={WorkforceIndustryPercentages2}
        />
      </div>
    </div>
  );
}
