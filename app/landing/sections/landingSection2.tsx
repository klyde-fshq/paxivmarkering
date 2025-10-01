import Demographics from "../../../src/components/landingComponents/demographics";
import Ownership from "../../../src/components/landingComponents/ownership";
import ParcelDetails from "../../../src/components/landingComponents/parcelDetails";
import Zoning from "../../../src/components/landingComponents/zoning";

export default function LandingSection2() {
    return (
        <div className="flex flex-col bg-yellow-100 w-[1440px] px-[100px] py-[86px] z-20">
            <hr className="border-gray-500" />
            <ParcelDetails />
            <hr className="border-gray-500" />
            <Zoning />
            <hr className="border-gray-500" />
            <Ownership />
            <hr className="border-gray-500" />
            <Demographics />
        </div>
    )
}