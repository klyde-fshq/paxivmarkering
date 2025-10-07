import saleSign from "@/src/assets/saleSign.png";
import bldgHeight from "../../assets/bldgHeight.png";
import setBackIcon from "../../assets/setback.png";
import widthLogo from "../../assets/widthLogo.png";

export const parcelDetails = [
  {
    title: "Parcel Sq Ft",
    value: "174,240 Sq Ft",
    image: null,
  },
  {
    title: "Current Use",
    value: "Vacant Land",
    image: null,
  },
  {
    title: "Parcel Value",
    value: "$1,045,440",
    image: saleSign,
  },
];

export const permittedUses = [
  "Manufacturing",
  "Storage",
  "Research",
  "Distribution",
  "Showroom",
  "Vehicle Services",
];

export const zoningMinMax = [
  {
    title: "Max Bldg. Height",
    value: "40 ft",
    image: bldgHeight,
  },
  {
    title: "Min. Rear Setback",
    value: "10 ft",
    image: setBackIcon,
  },
  {
    title: "Min. Lot Width",
    value: "40 ft",
    image: widthLogo,
  },
];

export const ownershipData = [
  { title: "Name", value: ["John Doe, LLC", "John Doe"] },
  {
    title: "Email(s)",
    value: [
      "johndoe@mail.com",
      "jdoeinvestments@mail.com",
      "doefamily@mail.com",
    ],
  },
  { title: "Phone", value: ["555-123-4567", "555-987-6543", "555-246-8100"] },
];

export const workforceClassPercentages1 = [
  "0%",
  "10%",
  "20%",
  "30%",
  "40%",
  "50%",
  "60%",
  "70%",
  "80%",
  "90%",
  "100%",
];

export const workforceClassPercentages2 = [
  "0%",
  "20%",
  "40%",
  "60%",
  "80%",
  "100%",
];

export const workforceClassData = [
  {
    title: "Employee of private company workers",
    value: "85.0%",
    error: "0.9%",
    bar: "h-[18px] w-[178px] md:w-[65vw] max-w-[1076px]",
  },
  {
    title: "Self-employed in own incorporated business workers",
    value: "85.0%",
    error: "0.9%",
    bar: "h-[18px] w-[27px]",
  },
  {
    title: "Private not-for-profit wage salary workers",
    value: "85.0%",
    error: "0.9%",
    bar: "h-[18px] w-[13px]",
  },
  {
    title: "Local, state, and federal government workers",
    value: "85.0%",
    error: "0.9%",
    bar: "h-[18px] w-[53px]",
  },
  {
    title:
      "Self-employed in own not incorporated business workers and unpaid family workers",
    value: "85.0%",
    error: "0.9%",
    bar: "h-[18px] w-[43px]",
  },
];

export const WorkforceIndustryPercentages1 = [
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

export const WorkforceIndustryPercentages2 = [
  "0%",
  "10%",
  "20%",
  "30%",
  "40%",
  "50%",
];

export const workforceIndustryData = [
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

export const occupationMoney1 = [
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

export const occupationMoney2 = ["0K", "100K", "200K", "300K", "400K", "500K"];

export const occupationData = [
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
