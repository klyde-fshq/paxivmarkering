export default function Demographics() {
    return (
        <div>
            <h1 className="text-[32px] tracking-[2%] align-middle">Demographics</h1>
            <h2>Workforce Class</h2>
            <div className="gap-[20px]">
                <div >
                    <div className="flex gap-[4px] text-[12px]">
                        <h1>Educational service, and healthcare and social assistance</h1>
                        <h1>- 22.4%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <hr className="border-yellow-500 border-solid border-[16px] w-[489px]" />
                </div>
                <div>
                    <div className="flex gap-[4px] text-[12px]">
                        <h1>Professional, scientific, and management, and administrative and waste management services</h1>
                        <h1>- 14.1%</h1>
                        <h1 className="text-gray-400">± 0.9%</h1>
                    </div>
                    <hr className="border-yellow-500 border-solid border-[16px] w-[330px]" />
                </div>
            </div>
        </div>
    )
}