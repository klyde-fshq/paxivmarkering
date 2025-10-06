import Demographics from "../../../src/components/landingComponents/demographics";
import Ownership from "../../../src/components/landingComponents/ownership";
import ParcelDetails from "../../../src/components/landingComponents/parcelDetails";
import Zoning from "../../../src/components/landingComponents/zoning";

export default function LandingSection2() {
  return (
    <div className="bg-[#FFF6E2]">
      <div className="max-w-[1440px] m-auto py-[60px] px-[25px] sm:px-[100px] sm:py-[86px] z-20">
        <hr className="border-gray-500" />
        <ParcelDetails />
        <Zoning />
        <Ownership />
        <Demographics />
      </div>
    </div>
  );
}
