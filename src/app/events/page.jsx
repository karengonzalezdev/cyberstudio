"use client"

import ScrollButton from "@/components/scrollButton"
import Image from "next/image";

const eventsPage = () => {

    return (
        <div className="bg-gradient-to-b from-yellow-500 to-yellow-400 sm:pb-[5rem]">
            {/* TITLE CONTAINER */}
            <div className="container mx-auto text-center pt-[2rem] pb-[1rem]">
                <p className="glitch inline-block">
                    <span aria-hidden="true">Eventos</span>
                    Eventos
                    <span aria-hidden="true">Eventos</span>
                </p>
            </div>
            {/* IMAGES CONTAINER */}
            <div className="h-full flex flex-wrap items-center justify-center gap-10 lg:gap-[7rem] pl-5 pt-5 pr-5 pb-[5%]">
                {/* CARD 1 */}
                <div className="h-[40rem] w-[27rem] flex">
                    <Image src="https://raw.githubusercontent.com/karengonzalezdev/Images/main/cyberstudio/iglesia.jpg" alt="Iglesia" className="h-full w-auto object-contain mx-auto" priority width={300} height={300} responsive="true" />
                </div>
                {/* CARD 2 */}
                <div className="h-[40rem] w-[27rem] flex">
                    <Image src="https://raw.githubusercontent.com/karengonzalezdev/Images/main/cyberstudio/quinceanera.jpg" alt="Quinceanera" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                </div>
                {/* CARD 3 */}
                <div className="h-[40rem] w-[27rem] flex">
                    <Image src="https://raw.githubusercontent.com/karengonzalezdev/Images/main/cyberstudio/fiesta.jpg" alt="Fiesta" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                </div>
                {/* CARD 4 */}
                <div className="h-[40rem] w-[27rem] flex">
                    <Image src="https://raw.githubusercontent.com/karengonzalezdev/Images/main/cyberstudio/evento.jpg" alt="Evento" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                </div>
                {/* CARD 5 */}
                <div className="h-[20rem] w-[35rem] flex items-start">
                    <Image src="https://raw.githubusercontent.com/karengonzalezdev/Images/main/cyberstudio/familia.jpg" alt="Familia" className="w-full object-contain mt-0" width={300} height={300} responsive="true" />
                </div>
            </div>
            <ScrollButton />
        </div>
    )
}

export default eventsPage