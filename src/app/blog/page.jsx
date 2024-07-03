import Image from "next/image";

const BlogPage = () => {

    return (
        <div className="h-full flex flex-col items-center">
            {/* TITLE CONTAINER */}
            <div className="container text-center pt-[2rem]">
                <p className="glitch inline-block">
                    <span aria-hidden="true">Blog</span>
                    Blog
                    <span aria-hidden="true">Blog</span>
                </p>
            </div>
            {/* SECTIONS */}
            <div className="h-full flex flex-col items-center justify-center gap-[4rem] pt-[12%] sm:pt-7 pl-7 pr-7 pb-[15%] sm:pb-10 lg:pb-[5%]">
                <div className="h-[8rem] sm:h-[10rem] lg:h-[15rem] w-[22rem] sm:w-[38rem] lg:w-[55rem] xl:w-[63rem] flex bg-violet-950 hover:bg-violet-900 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#66f,0_0_15px_#66f,0_0_30px_#66f]">
                    {/* IMAGE */}
                    <div className="flex w-1/3">
                        <Image src="/example.jpg" alt="Noticia 1" width={400} height={400} priority />
                    </div>
                    {/* TEXT */}
                    <div className="w-2/3 text-left text-yellow-400 pt-1 sm:pt-6 pb-6 pl-2 sm:pl-7 pr-2 sm:pr-7">
                        <h1 className="font-bold text-xl md:text-3xl">Opciones de video</h1>
                        <p className="text-sm sm:text-md md:text-lg lg:text-2xl lg:pt-5">Aprovecha nuestros paquetes de video, video-clases, reels, y más!</p>
                    </div>
                </div>
                <div className="h-[8rem] sm:h-[10rem] lg:h-[15rem] w-[22rem] sm:w-[38rem] lg:w-[55rem] xl:w-[63rem] flex bg-violet-950 hover:bg-violet-900 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#66f,0_0_15px_#66f,0_0_30px_#66f]">
                    {/* IMAGE */}
                    <div className="flex w-1/3">
                        <Image src="/example.jpg" alt="Noticia 2" width={400} height={400} priority />
                    </div>
                    {/* TEXT */}
                    <div className="w-2/3 text-left text-yellow-400 pt-1 sm:pt-6 pb-6 pl-2 sm:pl-7 pr-2 sm:pr-7">
                        <h1 className="text-xl md:text-3xl font-bold">Tipos de eventos</h1>
                        <p className="text-sm sm:text-md md:text-lg lg:text-2xl lg:pt-5">Cubrimos todo tipo de eventos como bodas, XV años, bautizos, aniversarios...</p>
                    </div>
                </div>
                <div className="h-[8rem] sm:h-[10rem] lg:h-[15rem] w-[22rem] sm:w-[38rem] lg:w-[55rem] xl:w-[63rem] flex bg-violet-950 hover:bg-violet-900 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#66f,0_0_15px_#66f,0_0_30px_#66f]">
                    {/* IMAGE */}
                    <div className="flex w-1/3">
                        <Image src="/example.jpg" alt="Noticia 3" width={400} height={400} priority />
                    </div>
                    {/* TEXT */}
                    <div className="w-2/3 text-left text-yellow-400 pt-1 sm:pt-6 pb-6 pl-2 sm:pl-7 pr-2 sm:pr-7">
                        <h1 className="text-xl md:text-3xl font-bold">Promoción</h1>
                        <p className="text-sm sm:text-md md:text-lg lg:text-2xl lg:pt-5">Próximamente promoción de Halloween, espérala!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage