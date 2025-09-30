import Demographics from "./demographics";
import Ownership from "./ownership";
import ParcelDetails from "./parcelDetails";
import Zoning from "./zoning";

export default function LandingSection3() {
    return (
        <div className="flex flex-col bg-yellow-100 w-[1440px] px-[100px] py-[86px]">
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