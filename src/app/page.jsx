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
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">
            Cyberstudio
          </h1>
          {/* DESC */}
          <p className="text-xl lg:text-2xl xl:text-2xl">
            Estudio fotográfico
          </p>
          
        </div>
        
        {/* IMAGE CONTAINER */}
    <div className="h-2/3 sm:w-1/2 sm:m-auto md:m-auto md:w-1/2 lg:h-full lg:w-1/2 relative">
      <Image src="/cybergirl.png" alt="BackgroundImage" fill priority />
    </div>
      </div>
      {/* LINE */}
    <div className="h-[30px] w-full pb-[5%]">
    <Image src="/purpleYellow.gif" alt="line" width={70} height={30} priority className="w-full h-[30px]" />
    </div>
      {/* BANNER */}
      <div className="h-[25rem] flex">
            <div className="flex flex-shrink rounded-xl pl-10 pr-10 h-[21rem] w-[60rem] m-auto justify-center">
              {/* IMAGE */}
              <div className="flex">
                <Image src="/example.jpg" alt="BackgroundImage" width={1000} height={400} priority className="rounded-xl"/>
                </div>
              {/* TEXT */}
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-white absolute flex h-[21rem] items-center">
              <Link href="/gallery">Galería de fotos</Link>
              </div>
            </div>
          </div>
          {/* SECTIONS */}
      <div className="flex flex-wrap xl:justify-between justify-center gap-7 h-full pt-10 pb-[5%] pl-5 pr-5 xl:pl-[5%] xl:pr-[5%]">
              {/* CONTAINER 1 */}
              <div className="h-[30rem] w-[22rem] bg-violet-950 rounded-xl">
                {/* TEXT */}
                <div className="h-1/3 text-white pt-6 pl-6 pr-6 pb-6 text-center">
                  <div className="text-5xl font-bold pb-3">
                  <Link href="/services">Paquetes</Link>
                  </div>
                  <p className="text-xl">Conoce los diferentes paquetes de fotografía que ofrecemos.</p>
                </div>
                {/* IMAGE */}
                <div className="h-2/3 flex">
                <Image src="/example.jpg" alt="BackgroundImage" width={400} height={400} priority className="rounded-b-xl"/>
                </div>
              </div>
              {/* CONTAINER 2*/}
              <div className="h-[30rem] w-[22rem] bg-violet-950 rounded-xl">
                {/* TEXT */}
                <div className="h-1/3 text-white pt-6 pl-6 pr-6 pb-6 text-center">
                  <div className="text-5xl font-bold pb-3">
                  <Link href="/events">Eventos</Link>
                  </div>
                  <p className="text-xl">Fotografía de eventos, de alta calidad.</p>
                </div>
                {/* IMAGE */}
                <div className="h-2/3 flex">
                <Image src="/example.jpg" alt="BackgroundImage" width={400} height={400} priority className="rounded-b-xl"/>
                </div>
              </div>  
              {/* CONTAINER 3 */}
              <div className="h-[30rem] w-[22rem] bg-violet-950 rounded-xl">
                {/* TEXT */}
                <div className="h-1/3 text-white pt-6 pl-6 pr-6 pb-6 text-center">
                  <div className="text-5xl font-bold pb-3">
                  <Link href="/blog">Blog</Link>
                  </div>
                  <p className="text-xl">Información extra, próximos eventos, promociones, y más...</p>
                </div>
                {/* IMAGE */}
                <div className="h-2/3 flex">
                <Image src="/example.jpg" alt="BackgroundImage" width={400} height={400} priority className="rounded-b-xl"/>
                </div>
              </div>
          </div>
          
      </motion.div>
      
  )
};

export default Homepage;
