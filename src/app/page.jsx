"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {

  return (

    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="h-[40rem] flex flex-col lg:flex-row">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/2 px-4 flex flex-col gap-5 items-center justify-center text-justify sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-5 sm:pt-5 md:pt-0 lg:pt-0 xl:pt-0 mt-6 sm:mt-6 md:mt-0 lg:mt-0 xl:mt-0">
          {/* TITLE */}
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-glitch text-glitch-duration-slow">
            Cyberstudio
          </h1>
          {/* DESC */}
          <p className="text-xl lg:text-2xl xl:text-2xl">
            Estudio fotográfico
          </p>
          
        </div>
        
        {/* IMAGE CONTAINER */}
    <div className="h-2/3 sm:w-1/2 sm:m-auto md:m-auto md:w-1/2 lg:h-full lg:w-1/2 overflow-hidden">
      <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/madmax.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true" />
    </div>
      </div>
      {/* LINE */}
    <div className="h-[30px] w-full pb-[5%]">
    <Image src="/purpleYellow.gif" alt="line" width={70} height={30} priority unoptimized className="w-full h-[30px]" />
    </div>
      {/* BANNER */}
      <div className="flex items-center justify-center p-5">
      <div className="flex h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] w-[25rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] hover:scale-105 hover:shadow-xl transition-all items-center justify-center">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cosplay.jpg" alt="BackgroundImage" width={800} height={300} priority className="object-cover h-full w-full"/>
          <div className="text-2xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-white font-bold pt-5 absolute text-glitch text-glitch-duration-slow">
      <Link href="/gallery">
          Galería de fotos
      </Link>
      </div>
      </div>
  </div>
          {/* SECTIONS */}
      <div className="flex flex-wrap xl:justify-between justify-center gap-7 h-full pt-2 md:pt-10 pb-[5%] px-5 xl:px-[65px]">
              {/* CONTAINER 1 */}
              <div className="h-[35rem] w-[20rem] bg-violet-950 hover:scale-105 hover:shadow-xl transition-all">
                {/* TEXT */}
                <div className="h-1/4 text-white pt-6 pl-6 pr-6 pb-6 text-center">
                  <div className="text-4xl font-bold pb-3 text-glitch text-glitch-duration-slow">
                  <Link href="/services">Paquetes</Link>
                  </div>
                  <p className="text-lg">Conoce los diferentes paquetes de fotografía que ofrecemos.</p>
                </div>
                {/* IMAGE */}
                <div className="h-3/4 flex">
                <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cosplay3.jpg" alt="BackgroundImage" width={400} height={400} priority/>
                </div>
              </div>
              {/* CONTAINER 2*/}
              <div className="h-[35rem] w-[20rem] bg-violet-950 hover:scale-105 hover:shadow-xl transition-all">
                {/* TEXT */}
                <div className="h-1/4 text-white pt-6 pl-6 pr-6 pb-6 text-center">
                  <div className="text-4xl font-bold pb-3 text-glitch text-glitch-duration-slow">
                  <Link href="/events">Eventos</Link>
                  </div>
                  <p className="text-lg">Fotografía de eventos, de alta calidad.</p>
                </div>
                {/* IMAGE */}
                <div className="h-3/4 flex">
                <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/fiesta.jpg" alt="BackgroundImage" width={400} height={400} priority/>
                </div>
              </div>  
              {/* CONTAINER 3 */}
              <div className="h-[35rem] w-[20rem] bg-violet-950 hover:scale-105 hover:shadow-xl transition-all">
                {/* TEXT */}
                <div className="h-1/4 text-white pt-6 pl-6 pr-6 pb-6 text-center">
                  <div className="text-4xl font-bold pb-3 text-glitch text-glitch-duration-slow">
                  <Link href="/blog">Blog</Link>
                  </div>
                  <p className="text-lg">Información extra, próximos eventos, promociones, y más...</p>
                </div>
                {/* IMAGE */}
                <div className="h-3/4 flex">
                <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/tren.jpg" alt="BackgroundImage" width={400} height={400} priority/>
                </div>
              </div>
          </div>
          
      </motion.div>
      
  )
};

export default Homepage;