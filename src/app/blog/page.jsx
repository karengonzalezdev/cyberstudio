import Image from "next/image";
import '../glitch.css';

const BlogPage = () => {

    return (
        <div className="h-screen md:h-full flex flex-col items-center">
            {/* TEXT CONTAINER */}
            <div className="container text-center pt-[2rem]">
                <p className="glitch inline-block">
                    <span aria-hidden="true">Blog</span>
                    Blog
                    <span aria-hidden="true">Blog</span>
                </p>
            </div>
            {/* SECTIONS */}
            <div className="h-full flex flex-col items-center justify-center gap-10 sm:pt-7 pl-7 pr-7 sm:pb-10 lg:pb-[5%]">
                <div className="h-[7rem] sm:h-[8rem] md:h-[10rem] lg:h-[15rem] w-[22rem] sm:w-[38rem] lg:w-[55rem] xl:w-[63rem] flex bg-violet-950 hover:bg-violet-900">
                    {/* IMAGE */}
                    <div className="flex w-1/3">
                        <Image src="/example.jpg" alt="Noticia 1" width={400} height={400} priority />
                    </div>
                    {/* TEXT */}
                    <div className="w-2/3 text-left text-white pt-1 sm:pt-6 pb-6 pl-2 sm:pl-7 pr-2 sm:pr-7">
                        <h1 className="font-bold text-md sm:text-xl md:text-3xl">Opciones de video</h1>
                        <p className="text-[12px] sm:text-md md:text-lg lg:text-2xl lg:pt-5">Aprovecha nuestros paquetes de video, video-clases, reels, y más!</p>
                    </div>
                </div>
                <div className="h-[7rem] sm:h-[8rem] md:h-[10rem] lg:h-[15rem] w-[22rem] sm:w-[38rem] lg:w-[55rem] xl:w-[63rem] flex bg-violet-950 hover:bg-violet-900">
                    {/* IMAGE */}
                    <div className="flex w-1/3">
                        <Image src="/example.jpg" alt="Noticia 2" width={400} height={400} priority />
                    </div>
                    {/* TEXT */}
                    <div className="w-2/3 text-left text-white pt-1 sm:pt-6 pb-6 pl-2 sm:pl-7 pr-2 sm:pr-7">
                        <h1 className="text-md sm:text-xl md:text-3xl font-bold">Tipos de eventos</h1>
                        <p className="text-[12px] sm:text-md md:text-lg lg:text-2xl lg:pt-5">Cubrimos todo tipo de eventos como bodas, XV años, bautizos, aniversarios...</p>
                    </div>
                </div>
                <div className="h-[7rem] sm:h-[8rem] md:h-[10rem] lg:h-[15rem] w-[22rem] sm:w-[38rem] lg:w-[55rem] xl:w-[63rem] flex bg-violet-950 hover:bg-violet-900">
                    {/* IMAGE */}
                    <div className="flex w-1/3">
                        <Image src="/example.jpg" alt="Noticia 3" width={400} height={400} priority />
                    </div>
                    {/* TEXT */}
                    <div className="w-2/3 text-left text-white pt-1 sm:pt-6 pb-6 pl-2 sm:pl-7 pr-2 sm:pr-7">
                        <h1 className="text-md sm:text-xl md:text-3xl font-bold">Promoción</h1>
                        <p className="text-[12px] sm:text-md md:text-lg lg:text-2xl lg:pt-5">Próximamente promoción de Halloween, espérala!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage