import Link from "next/link"
import Image from "next/image";

const GalleryPage = () => {

    return (
        <div className="lg:h-screen flex flex-col lg:flex-row">
            {/* FIRST SECTION */}
            <div className="h-full w-full flex lg:w-1/2 pt-10 lg:pt-6 pb-10">
                <div className="h-[28rem] sm:h-[33rem] w-[19rem] sm:w-[22rem] flex justify-center m-auto hover:scale-105 hover:shadow-xl transition-all">
                    {/* IMAGE */}
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/quinceanera.jpg" alt="Eventos" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                    <div className="absolute text-white text-2xl sm:text-5xl font-bold pt-5">
                        <Link href="/events">
                            Eventos
                        </Link>
                    </div>
                </div>
            </div>
            {/* SECOND SECTION */}
            <div className="h-full w-full lg:w-1/2 pt-1 lg:pt-6 pb-9 space-y-11">
                <div className="h-[10rem] sm:h-[15rem] w-[19rem] sm:w-[29rem] flex justify-center m-auto hover:scale-105 hover:shadow-xl transition-all">
                    {/* IMAGE */}
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/agentek.jpg" alt="Cosplay" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
                    <div className="h-[10rem] sm:h-[15rem] absolute text-center text-white text-2xl sm:text-5xl font-bold pt-[100px] sm:pt-[150px] lg:pt-[185px]">
                        <Link href="/cosplay">
                            Cosplay
                        </Link>
                    </div>
                </div>
                <div className="h-[10rem] sm:h-[15rem] w-[19rem] sm:w-[29rem] flex justify-center m-auto hover:scale-105 hover:shadow-xl transition-all">
                    {/* IMAGE */}
                    <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/casual2.jpg" alt="Casual" width={600} height={600} priority />
                    <div className="absolute text-center text-white text-2xl sm:text-5xl font-bold pt-5">
                        <Link href="/casual">
                            Casual
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryPage