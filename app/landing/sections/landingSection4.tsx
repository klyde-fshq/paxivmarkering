import Image from "next/image";
import { landingSection4Data } from "@/src/assets/datasets/landingSection4Data";

export default function LandingSection4() {
  return (
    <div className="bg-white">
      <div className="flex flex-col  py-[60px] px-[25px] md:p-[100px] gap-[48px] max-w-[1440px] m-auto">
        <div className="flex flex-col text-[32px] md:text-[48px] leading-[64px] font-medium justify-center items-center text-center md:px-11">
          <h2>Where Privacy, Precision, and Performance Meet</h2>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="grid md:grid-cols-3 gap-[16px]">
            {landingSection4Data.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="gap-[10px] px-[26px] py-[39px] rounded-[14px] bg-[#FFF6E2]"
              >
                <div className="grid grid-2 gap-[32px]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="bg-white h-[64px] w-[64px] rounded-[14px]"
                  />
                  <div className="flex flex-col gap-[16px]">
                    <h2 className="text-[18px] font-bold leading-[28px] align-middle">
                      {item.title}
                    </h2>
                    <p className="text-[16px] leading-[26px] tracking-[2%]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-[16px]">
            {landingSection4Data.slice(3).map((item, index) => (
              <div
                key={index}
                className="gap-[10px] px-[26px] py-[39px] rounded-[14px] bg-[#FFF6E2]"
              >
                <div className="grid grid-2 gap-[32px]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="bg-white h-[64px] w-[64px] rounded-[14px]"
                  />
                  <div className="flex flex-col gap-[16px]">
                    <h2 className="text-[18px] font-bold leading-[28px] align-middle">
                      {item.title}
                    </h2>
                    <p className="text-[16px] leading-[26px] tracking-[2%]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
