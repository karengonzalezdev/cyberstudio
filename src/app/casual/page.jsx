"use client"

import ScrollButton from "@/components/scrollButton"
import Image from "next/image";

const CasualPage
 = () => {
 return (
<div className="bg-gradient-to-b from-yellow-500 to-yellow-400 sm:pb-[3rem]">
    {/* TEXT CONTAINER */}
    <div className="h-[7rem]">
        <h1 className="text-5xl text-white text-center pt-7 font-bold text-glitch text-glitch-duration-slow">Casual</h1>
    </div>
    {/* SERVICES CONTAINER */}
    <div className="h-full flex flex-wrap items-center justify-center pl-5 pt-5 pr-5 pb-[7%] gap-10">
        {/* CARD 1 */}
        <div className="flex h-[40rem] w-[27rem]">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/torre.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
        </div>
        {/* CARD 2 */}
        <div className="flex h-[40rem] w-[27rem]">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/tren.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
        </div>
        {/* CARD 3 */}
        <div className="flex h-[40rem] w-[27rem]">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/casual.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
        </div>
        {/* CARD 4 */}
        <div className="flex h-[40rem] w-[27rem]">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/madmax.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
        </div>
        {/* CARD 5 */}
        <div className="flex h-[20rem] w-[35rem] items-start">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/casual2.jpg" alt="Background" className="object-contain mt-0 w-full" width={300} height={300} responsive="true"/>
        </div>
    </div>
    <ScrollButton />
 </div>
)
}

export default CasualPage
