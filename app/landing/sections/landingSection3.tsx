import Image from "next/image";
import whyImage from "@/src/assets/whyPaxiv.png";
import whyPaxivListData from "@/src/assets/datasets/whyPaxivListData.json";

export default function LandingSection3() {
  return (
    <div className="bg-[#FFF6E2]">
      <div className="flex flex-col  gap-[10px] pt-[20px] pb-[60px] px-[50px] sm:pt-[50px] sm:pb-[100px] sm:px-[100px] justify-center items-center max-w-[1440px] m-auto">
        <Image src={whyImage} alt="Why Paxiv" className=""></Image>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-[38px] md:gap-[24px] lg:gap-[250px]">
          <h1 className="text-[32px] md:text-[48px] text-[#FFAA20] font-medium leading-[40px] md:leading-[64px]">
            Why Paxiv?
          </h1>
          <div className="text-[24px] gap-[24px] md:gap-[32px] leading-[36px]">
            <p className="">
              PAXIV is the only platform that unites all{" "}
              <span className="font-bold">
                your maps, data, and tools in one place—
              </span>
              powered by AI for instant, precise result. No more switching
              systems or hunting across multiple sites.
            </p>

            {whyPaxivListData.map((item, index) => (
              <li key={index}>
                <p>
                  <span className="font-bold">{item.title}</span> {"— "}
                  {item.description}
                </p>
              </li>
            ))}

            <p>One Platform. All the data. Powered by AI</p>
            <p>
              That's why top brokers, developers, and investors choose PAXIV.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
