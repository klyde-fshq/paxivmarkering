import AboutNavBar from "@/src/components/aboutComponents/aboutNavBar";
import Footer from "@/src/components/footer";

export default function AboutPage() {
    const title = [
        "Leadership",
        "Mission",
        "Values"
    ]

    const description = [
        "PAXIV was founded by a seasoned family office with decades of experience in real estate development, investment, and global technology ventures. Their portfolio spans over 4 million square feet of retail, office, and multi-family assets, with active developments exceeding $1 billion in value. Having successfully founded, scaled, and exited multiple international tech companies, PAXIV’s leadership blends deep industry knowledge with innovation—creating a platform purpose-built for the future of commercial real estate.",
        "PAXIV is building a transformative, data-backed B2B marketplace that streamlines every stage of the commercial real estate lifecycle. The platform empowers decision-makers by providing direct access to opportunities, resources, and intelligence—eliminating unnecessary intermediaries and inefficiencies. By bridging technology and market expertise, PAXIV is shaping a future where transactions are faster, more transparent, and more profitable for all stakeholders.",
        "PAXIV believes transparency is the foundation of a stronger commercial real estate market. By opening access to critical data and eliminating hidden barriers, the company is helping create a marketplace where trust and opportunity go hand in hand. Every innovation within the platform is designed to empower communities, support responsible development, and ultimately build a better future for the families and businesses that depend on these spaces. PAXIV’s vision is a market where growth is both profitable and sustainable—benefiting all who live, work, and invest within it."
    ]
    return (
        <div className="flex flex-col bg-black items-center justify-center">
            <AboutNavBar />
            <div className="flex flex-col bg-yellow-100 max-w-[1440px] w-full items-center justify-center gap-20 pt-20 pb-24 px-6 sm:px-10 lg:px-20">
                {title.map((item, index) => (
                    <div
                    key={index}
                    className="grid grid-cols-1 gap-8 items-start sm:gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20"
                    >
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-[#FFAA20]">
                        {item}
                    </h1>

                    {/* Description */}
                    <p className="text-base leading-6 tracking-wide">
                        {description[index]}
                    </p>
                    </div>
                ))}
            </div>
            <div className="lg:w-[1440px] md:w-full sm:w-full xs:w-full">
                <Footer />
            </div>
            
        </div>
    )
}