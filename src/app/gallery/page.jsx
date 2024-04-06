import Link from "next/link"
import Image from "next/image";

const GalleryPage = () => {
 return (
    <div className="lg:h-screen xl:h-screen flex flex-col lg:flex-row xl:flex-row">
    {/* FIRST SECTION */}
    <div className="h-full w-full pt-8 pb-10 lg:w-1/2 xl:w-1/2 flex">
        <div className="flex h-[28rem] sm:h-[33rem] md:h-[33rem] lg:h-[33rem] xl:h-[33rem] w-[20rem] sm:w-[27rem] md:w-[27rem] lg:w-[27rem] xl:w-[27rem] justify-center rounded-xl m-auto hover:scale-105 hover:shadow-xl transition-all">
            {/* IMAGE */}
                <Image src="/example.jpg" alt="BackgroundImage" width={550} height={600} priority className="rounded-xl"/>
            <div className="text-2xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-white font-bold pt-5 absolute">
        <Link href="/events">
            Eventos
        </Link>
        </div>
        </div>
    </div>
    {/* SECOND SECTION */}
    <div className="h-full w-full lg:w-1/2 xl:w-1/2 pt-8 pb-9 space-y-11">
        <div className="flex h-[10rem] sm:h-[15rem] md:h-[15rem] lg:h-[15rem] xl:h-[15rem] w-[20rem] sm:w-[27rem] md:w-[27rem] lg:w-[27rem] xl:w-[27rem] justify-center rounded-xl m-auto hover:scale-105 hover:shadow-xl transition-all">
            {/* IMAGE */}
            <Image src="/example.jpg" alt="BackgroundImage" width={600} height={600} priority className="rounded-xl"/>
        <div className="text-2xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-white text-center font-bold pt-5 absolute">
        <Link href="/cosplay">
            Cosplay
        </Link>
        </div>
        </div>
        <div className="flex h-[10rem] sm:h-[15rem] md:h-[15rem] lg:h-[15rem] xl:h-[15rem] w-[20rem] sm:w-[27rem] md:w-[27rem] lg:w-[27rem] xl:w-[27rem] justify-center rounded-xl m-auto hover:scale-105 hover:shadow-xl transition-all">
            {/* IMAGE */}
            <Image src="/example.jpg" alt="BackgroundImage" width={600} height={600} priority className="rounded-xl"/>
        <div className="text-2xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-white text-center font-bold pt-5 absolute">
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