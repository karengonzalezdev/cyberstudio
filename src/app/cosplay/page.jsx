"use client"

import ScrollButton from "@/components/scrollButton"
import Image from "next/image";

const cosplayPage = () => {

    return (
        <div className="bg-gradient-to-b from-yellow-500 to-yellow-400">
            {/* TEXT CONTAINER */}
            <div className="container text-center pt-[2rem] pb-[1rem]">
                <p className="glitch inline-block">
                    <span aria-hidden="true">Cosplay</span>
                    Cosplay
                    <span aria-hidden="true">Cosplay</span>
                </p>
            </div>
            {/* SERVICES CONTAINER */}
            <div className="h-full flex flex-wrap items-center justify-center gap-2 sm:gap-10 pl-5 pt-5 pr-5 pb-[7%]">
                {/* CARD 1 */}
                <div className="h-[40rem] w-[27rem] flex">
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cosplay2.jpg" priority alt="Cosplay 2" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                </div>
                {/* CARD 2 */}
                <div className="h-[26rem] w-[35rem] flex">
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/bladerunner.jpg" alt="Blade Runner" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                </div>
                {/* CARD 3 */}
                <div className="h-[40rem] w-[27rem] flex">
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cazador.jpg" alt="Cazador" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                </div>
                {/* CARD 4 */}
                <div className="h-[45rem] w-[21rem] flex pt-[3rem] sm:pt-0 pb-[1rem] sm:pb-0">
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/joi.jpg" alt="Joi" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                </div>
                {/* CARD 5 */}
                <div className="h-[20rem] w-[35rem] flex">
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cosplay.jpg" alt="Cosplay" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                </div>
                {/* CARD 6 */}
                <div className="h-[40rem] w-[26rem] flex pt-[1rem] sm:pt-0 pb-[4rem] sm:pb-0">
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cosplay3.jpg" alt="Cosplay 3" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                </div>
                {/* CARD 7 */}
                <div className="h-[17rem] w-[35rem] flex items-start">
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/agentek.jpg" alt="Agente K" className="w-full object-contain mt-0" width={300} height={300} responsive="true" />
                </div>
            </div>
            <ScrollButton />
        </div>
    )
}

export default cosplayPage