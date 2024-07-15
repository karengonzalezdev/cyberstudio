"use client"

import ScrollButton from "@/components/scrollButton"
import Image from "next/image";
import { FaAngleDoubleDown } from "react-icons/fa";

const cosplayPage = () => {

    return (
        <div className="bg-gradient-to-b from-yellow-500 to-yellow-400">
            {/* TITLE CONTAINER */}
            <div className="container mx-auto text-center pt-[2rem] pb-[1rem]">
                <p className="glitch inline-block">
                    <span aria-hidden="true">Cosplay</span>
                    Cosplay
                    <span aria-hidden="true">Cosplay</span>
                </p>
            </div>
            {/* IMAGES CONTAINER */}
            <div className="h-full flex flex-wrap items-center justify-center pl-10 pt-5 pr-10 pb-[30%] sm:pb-[7%] md:gap-x-[4rem] lg:gap-x-[7rem] gap-y-[8rem] sm:gap-y-0">
                {/* CARD 1 */}
                <div className="h-[100%] sm:h-[48.5rem] w-[27rem] flex flex-col items-center relative">
                    <div className="relative">
                        <Image src="https://raw.githubusercontent.com/karengonzalezdev/Images/main/cyberstudio/cosplay2.jpg" priority alt="Cosplay 2" className="h-full w-auto object-contain" width={300} height={300} responsive="true" />
                        <div className="absolute w-full flex items-center justify-center py-4">
                            <FaAngleDoubleDown className="text-violet-950 text-8xl" />
                        </div>
                    </div>
                </div>
                {/* CARD 2 */}
                <div className="h-[100%] sm:h-[34rem] w-[35rem] flex flex-col items-center relative">
                    <div className="relative">
                        <Image src="https://raw.githubusercontent.com/karengonzalezdev/Images/main/cyberstudio/bladerunner.jpg" alt="Blade Runner" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                        <div className="absolute w-full flex items-center justify-center py-4">
                            <FaAngleDoubleDown className="text-violet-950 text-8xl" />
                        </div>
                    </div>
                </div>
                {/* CARD 3 */}
                <div className="h-[100%] sm:h-[48.5rem] w-[27rem] flex flex-col items-center relative">
                    <div className="relative">
                        <Image src="https://raw.githubusercontent.com/karengonzalezdev/Images/main/cyberstudio/cazador.jpg" alt="Cazador" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                        <div className="absolute w-full flex items-center justify-center py-4">
                            <FaAngleDoubleDown className="text-violet-950 text-8xl" />
                        </div>
                    </div>
                </div>
                {/* CARD 4 */}
                <div className="h-[100%] sm:h-[53.5rem] w-[21rem] flex flex-col items-center relative">
                    <div className="relative">
                        <Image src="https://raw.githubusercontent.com/karengonzalezdev/Images/main/cyberstudio/joi.jpg" alt="Joi" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                        <div className="absolute w-full flex items-center justify-center py-4">
                            <FaAngleDoubleDown className="text-violet-950 text-8xl" />
                        </div>
                    </div>
                </div>
                {/* CARD 5 */}
                <div className="h-[100%] sm:h-[28rem] w-[35rem] flex flex-col items-center relative">
                    <div className="relative">
                        <Image src="https://raw.githubusercontent.com/karengonzalezdev/Images/main/cyberstudio/cosplay.jpg" alt="Cosplay" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                        <div className="absolute w-full flex items-center justify-center py-4">
                            <FaAngleDoubleDown className="text-violet-950 text-8xl" />
                        </div>
                    </div>
                </div>
                {/* CARD 6 */}
                <div className="h-[100%] sm:h-[49rem] w-[26rem] flex flex-col items-center relative">
                    <div className="relative">
                        <Image src="https://raw.githubusercontent.com/karengonzalezdev/Images/main/cyberstudio/cosplay3.jpg" alt="Cosplay 3" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                        <div className="absolute w-full flex items-center justify-center py-4">
                            <FaAngleDoubleDown className="text-violet-950 text-8xl" />
                        </div>
                    </div>
                </div>
                {/* CARD 7 */}
                <div className="h-[100%] sm:h-[26rem] w-[35rem] flex flex-col items-center relative">
                    <div className="relative">
                        <Image src="https://raw.githubusercontent.com/karengonzalezdev/Images/main/cyberstudio/agentek.jpg" alt="Agente K" className="w-full object-contain mt-0" width={300} height={300} responsive="true" />
                        <div className="absolute w-full flex items-center justify-center py-4">
                            <FaAngleDoubleDown className="text-violet-950 text-8xl" />
                        </div>
                    </div>
                </div>
            </div>
            <ScrollButton />
        </div>
    )
}

export default cosplayPage