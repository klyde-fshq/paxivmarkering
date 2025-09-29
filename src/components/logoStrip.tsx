import Image from "next/image"

import DHI from "@/src/assets/Logo/DHI.png"
import Capital from "@/src/assets/Logo/Capital.png"
import visionary from "@/src/assets/Logo/Visionary.png"
import wadsworth from "@/src/assets/Logo/Wadsworth.png"
import remax from "@/src/assets/Logo/Remax.png"
import backman from "@/src/assets/Logo/Backman.png"
import colewest from "@/src/assets/Logo/Colewest.png"
import fullstack from "@/src/assets/Logo/Fullstack.png"
import dakota from "@/src/assets/Logo/Dakota.png"
import clearcreek from "@/src/assets/Logo/Clearcreek.png"


export default function LogoStrip() {
    return (
        <div className="flex overflow-x-hidden space-between gap-20px py-52px px-81px border-1 border-black border-dashed">
            <div className="flex py-12 animate-marquee whitespace-nowrap">
                <span className="mx-4 text-4xl"><Image src={DHI} alt="DHI" className="w-full h-full" /></span>
                <span className="mx-4 text-4xl"><Image src={Capital} alt="Capital" /></span>
                <span className="mx-4 text-4xl"><Image src={visionary} alt="visionary" /></span>
                <span className="mx-4 text-4xl"><Image src={wadsworth} alt="wadsworth" /></span>
                <span className="mx-4 text-4xl"><Image src={remax} alt="remax" /></span>
                <span className="mx-4 text-4xl"><Image src={backman} alt="backman" /></span>
                <span className="mx-4 text-4xl"><Image src={colewest} alt="colewest" /></span>
                <span className="mx-4 text-4xl"><Image src={fullstack} alt="fullstack" /></span>
                <span className="mx-4 text-4xl"><Image src={dakota} alt="dakota" /></span>
                <span className="mx-4 text-4xl"><Image src={clearcreek} alt="clearcreek" /></span>
            </div>
        </div>
    )
}