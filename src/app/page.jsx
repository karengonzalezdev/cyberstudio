"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {

  return (

    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="h-[40rem] flex flex-col lg:flex-row">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 px-4 flex flex-col gap-5 items-center justify-center text-justify sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-5 sm:pt-5 md:pt-10 lg:pt-0 xl:pt-0 mt-6 sm:mt-6 md:mt-6 lg:mt-0 xl:mt-0">
          {/* TITLE */}
          <h1 className="text-2xl md:text-7xl lg:text-5.5xl xl:tex-6xl font-bold">
            Cyberstudio
          </h1>
          {/* DESC */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
            Estudio fotográfico
          </p>
          
        </div>
        
        {/* IMAGE CONTAINER */}
    <div className="h-1/3 lg:h-full lg:w-1/2 relative">
      <Image src="/cybergirl.png" alt="BackgroundImage" fill priority className="border-5 border-black border-opacity-10 rounded-sm"/>
    </div>
      </div>
      {/* BANNER */}
      <div className="h-[25rem] flex">
            <div className="bg-yellow-50 flex rounded-xl h-[80%] w-[80%] m-auto">
              {/* TEXT */}
              <div className="text-5xl m-auto">
              <Link href="/gallery">Galería de fotos</Link>
              </div>
            </div>
          </div>
          {/* SECTIONS */}
      <div className="flex w-full h-[40rem]">
            <div className="w-1/3 flex">
              {/* CONTAINER 1 */}
              <div className="h-[80%] w-[80%] bg-yellow-50 m-auto rounded-xl">
                {/* TEXT */}
                <div className="h-1/3 pt-6 pl-6 pr-6 pb-6 text-center">
                  <h1 className="text-5xl pb-3">Paquetes</h1>
                  <p className="text-xl">Conoce los diferentes paquetes de fotografía que ofrecemos.</p>
                </div>
                {/* IMAGE */}
                <div className="h-2/3 bg-blue-500"></div>
              </div>
            </div>
            <div className="w-1/3 flex">
              {/* CONTAINER 2*/}
              <div className="h-[80%] w-[80%] bg-yellow-50 m-auto rounded-xl">
                {/* TEXT */}
                <div className="h-1/3 pt-6 pl-6 pr-6 pb-6 text-center">
                  <h1 className="text-5xl pb-3">Eventos</h1>
                  <p className="text-xl">Fotografía de eventos, de alta calidad.</p>
                </div>
                {/* IMAGE */}
                <div className="h-2/3 bg-blue-500"></div>
              </div>
            </div>
            <div className="w-1/3 flex">
              {/* CONTAINER 3 */}
              <div className="h-[80%] w-[80%] bg-yellow-50 m-auto rounded-xl">
                {/* TEXT */}
                <div className="h-1/3 pt-6 pl-6 pr-6 pb-6 text-center">
                  <h1 className="text-5xl pb-3">Blog</h1>
                  <p className="text-xl">Información extra, próximos eventos, promociones, y más...</p>
                </div>
                {/* IMAGE */}
                <div className="h-2/3 bg-blue-500"></div>
              </div>
            </div>
          </div>
          
      </motion.div>
      
  )
};

export default Homepage;
