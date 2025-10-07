import Image from "next/image";
import { logos } from "../../assets/datasets/logoStripData";

export default function LogoStrip() {
  return (
    <div className="flex  space-between gap-20px py-52px px-81px border-1 border-black border-dashed overflow-x-hidden">
      <div className="flex py-10 animate-marquee whitespace-nowrap">
        {logos.map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="px-5 w-[100%]"
          />
        ))}
        {logos.map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="px-5 w-[100%]"
          />
        ))}
      </div>
    </div>
  );
}
