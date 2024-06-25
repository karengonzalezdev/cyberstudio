import Link from "next/link"
import Image from "next/image";

const GalleryPage = () => {
 return (
    <div className="lg:h-screen xl:h-screen flex flex-col lg:flex-row xl:flex-row">
    {/* FIRST SECTION */}
    <div className="h-full w-full pt-5 pb-10 lg:w-1/2 xl:w-1/2 flex">
        <div className="flex h-[28rem] sm:h-[33rem] w-[19rem] sm:w-[22rem] justify-center m-auto hover:scale-105 hover:shadow-xl transition-all">
            {/* IMAGE */}
                <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/quinceanera.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
            <div className="text-2xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-white font-bold pt-5 absolute text-glitch text-glitch-duration-slow">
        <Link href="/events">
            Eventos
        </Link>
        </div>
        </div>
    </div>
    {/* SECOND SECTION */}
    <div className="h-full w-full lg:w-1/2 xl:w-1/2 pt-5 pb-9 space-y-11">
        <div className="flex h-[10rem] sm:h-[15rem] w-[19rem] sm:w-[29rem] justify-center m-auto hover:scale-105 hover:shadow-xl transition-all">
            {/* IMAGE */}
            <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/agentek.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
        <div className="text-2xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-white text-center h-[10rem] sm:h-[15rem] font-bold pt-[100px] sm:pt-[150px] md:pt-[185px] absolute text-glitch text-glitch-duration-slow">
        <Link href="/cosplay">
            Cosplay
        </Link>
        </div>
        </div>
        <div className="flex h-[10rem] sm:h-[15rem] w-[19rem] sm:w-[29rem] justify-center m-auto hover:scale-105 hover:shadow-xl transition-all">
            {/* IMAGE */}
            <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/casual2.jpg" alt="BackgroundImage" width={600} height={600} priority/>
        <div className="text-2xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-white text-center font-bold pt-5 absolute text-glitch text-glitch-duration-slow">
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