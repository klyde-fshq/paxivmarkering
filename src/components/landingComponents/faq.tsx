import Image from "next/image";
import plusIcon from "@/src/assets/Plus.svg";
import minusIcon from "@/src/assets/minus.svg";

export default function Faq() {
  return (
    <div className="flex flex-col bg-orange-50 py-[100px] gap-[32px] md:gap-[48px] justify-center items-center">
      <div className="text-center gap-[12px]">
        <h1 className="text-[32px] leading-[40px] md:text-[48px] font-medium md:leading-[64px] ">
          Frequently Asked Questions
        </h1>
        <p className="text-[16px] leading-[26px] tracking-[2%]">
          Got other questions?{" "}
          <span className="text-[16px] text-[#FFAA20] leading-[26px] underline ">
            Contact Us.
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-[20px] px-[18px] w-[100%] md:max-w-[680px]">
        <div className="bg-orange-100 divide-gray-200 rounded-xl">
          <details className="p-6 group">
            <summary className="flex items-center gap-[20px] cursor-pointer">
              <span className="relative flex-shrink-0  w-5 h-5">
                <svg
                  xmlns={minusIcon}
                  className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 fill-yellow-500"
                  viewBox="0 0 21 21"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns={plusIcon}
                  className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 fill-yellow-500"
                  viewBox="0 0 21 21"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <h5 className="text-[18px] font-bold leading-[28px]">
                How do I join PAXIV?
              </h5>
            </summary>
            <p className="mt-[10px] ml-[36px] leading-[28px] text-[16px] tracking-[2%]">
              Join PAXIV for free-no card required-by selecting “Create Account”
              or “Get Started For Free”.
            </p>
          </details>
        </div>

        <div className="bg-orange-100 divide-gray-200 rounded-xl">
          <details className="p-6 group">
            <summary className="flex items-center gap-[20px] cursor-pointer">
              <span className="relative flex-shrink-0  w-5 h-5">
                <svg
                  xmlns={minusIcon}
                  className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 fill-yellow-500"
                  viewBox="0 0 21 21"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns={plusIcon}
                  className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 fill-yellow-500"
                  viewBox="0 0 21 21"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <h5 className="text-[18px] font-bold leading-[28px]">
                Who is allowed within PAXIV?
              </h5>
            </summary>
            <p className="mt-[10px] ml-[36px] leading-[28px] text-[16px] tracking-[2%]">
              PAXIV BETA is our early-access trial phase where members can
              explore our platform for free and provide feedback to help refine
              the experience. During this period, you'll access all of PAXIV's
              tools, resources, and exclusive network benefits.
            </p>
          </details>
        </div>

        <div className="bg-orange-100 divide-gray-200 rounded-xl">
          <details className="p-6 group">
            <summary className="flex items-center gap-[20px] cursor-pointer">
              <span className="relative flex-shrink-0  w-5 h-5">
                <svg
                  xmlns={minusIcon}
                  className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 fill-yellow-500"
                  viewBox="0 0 21 21"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns={plusIcon}
                  className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 fill-yellow-500"
                  viewBox="0 0 21 21"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <h5 className="text-[18px] font-bold leading-[28px]">
                How much does PAXIV cost?
              </h5>
            </summary>
            <p className="mt-[10px] ml-[36px] leading-[28px] text-[16px] tracking-[2%]">
              PAXIV BETA is our early-access trial phase where members can
              explore our platform for free and provide feedback to help refine
              the experience. During this period, you'll access all of PAXIV's
              tools, resources, and exclusive network benefits.
            </p>
          </details>
        </div>

        <div className="bg-orange-100 divide-gray-200 rounded-xl">
          <details className="p-6 group">
            <summary className="flex items-center gap-[20px] cursor-pointer">
              <span className="relative flex-shrink-0  w-5 h-5">
                <svg
                  xmlns={minusIcon}
                  className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 fill-yellow-500"
                  viewBox="0 0 21 21"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns={plusIcon}
                  className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 fill-yellow-500"
                  viewBox="0 0 21 21"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <h5 className="text-[18px] font-bold leading-[28px]">
                Is PAXIV a Brokerage?
              </h5>
            </summary>
            <p className="mt-[10px] ml-[36px] leading-[28px] text-[16px] tracking-[2%]">
              PAXIV BETA is our early-access trial phase where members can
              explore our platform for free and provide feedback to help refine
              the experience. During this period, you'll access all of PAXIV's
              tools, resources, and exclusive network benefits.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
