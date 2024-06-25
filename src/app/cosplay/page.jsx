"use client"

import ScrollButton from "@/components/scrollButton"
import Image from "next/image";

const cosplayPage = () => {
 return (
<div className="bg-gradient-to-b from-yellow-500 to-yellow-400">
    {/* TEXT CONTAINER */}
    <div className="h-[7rem]">
        <h1 className="text-5xl text-white text-center pt-7 font-bold text-glitch text-glitch-duration-slow">Cosplay</h1>
    </div>
    {/* SERVICES CONTAINER */}
    <div className="h-full flex flex-wrap items-center justify-center pl-5 pt-5 pr-5 pb-[7%] gap-2 sm:gap-10">
        {/* CARD 1 */}
        <div className="flex h-[40rem] w-[27rem]">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cosplay2.jpg" priority alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
        </div>
        {/* CARD 2 */}
        <div className="flex h-[26rem] w-[35rem]">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/bladerunner.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
        </div>
        {/* CARD 3 */}
        <div className="flex h-[40rem] w-[27rem]">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cazador.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
        </div>
        {/* CARD 4 */}
        <div className="flex h-[45rem] w-[21rem] pt-[3rem] sm:pt-0 pb-[1rem] sm:pb-0">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/joi.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
        </div>
        {/* CARD 5 */}
        <div className="flex h-[20rem] w-[35rem]">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cosplay.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
        </div>
        {/* CARD 6 */}
        <div className="flex h-[40rem] w-[26rem] pt-[1rem] sm:pt-0 pb-[4rem] sm:pb-0">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cosplay3.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
        </div>
        {/* CARD 7 */}
        <div className="flex h-[17rem] w-[35rem] items-start">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/agentek.jpg" alt="Background" className="object-contain mt-0 w-full" width={300} height={300} responsive="true"/>
        </div>
    </div>
    <ScrollButton />
 </div>
)
}

export default cosplayPage