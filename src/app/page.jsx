"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-[37rem] sm:h-full flex flex-col lg:flex-row">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-[37rem] lg:w-2/3 flex flex-col items-center justify-center text-justify text-white gap-5 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mt-6 md:mt-0">
          {/* TITLE */}
          <div className="container text-center sm:pt-[2rem] lg:pt-[7rem]">
            <p className="glitch inline-block">
              <span aria-hidden="true">Cyberstudio</span>
              Cyberstudio
              <span aria-hidden="true">Cyberstudio</span>
            </p>
          </div>
          {/* DESC */}
          <p className="text-xl lg:text-2xl sm:pb-10">
            Estudio fotográfico
          </p>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="h-2/3 lg:h-full sm:w-1/3 overflow-hidden sm:m-auto">
          <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/madmax.jpg" alt="Principal Image" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
        </div>
      </div>
      {/* LINE */}
      <div className="h-[30px] w-full pb-[5%]">
        <Image src="/purpleYellow.gif" alt="line" width={70} height={30} priority unoptimized className="h-[30px] w-full" />
      </div>
      {/* BANNER */}
      <div className="flex items-center justify-center p-5">
        <div className="h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] w-[25rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] flex items-center justify-center hover:scale-105 hover:shadow-xl transition-all">
          <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cosplay.jpg" alt="Banner" width={800} height={300} priority className="h-full w-full object-cover" />
          <div className="absolute text-white font-bold text-4xl sm:text-5xl pt-5">
            <Link href="/gallery">
              Galería de fotos
            </Link>
          </div>
        </div>
      </div>
      {/* SECTIONS */}
      <div className="h-full flex flex-wrap justify-center xl:justify-between gap-7 pt-2 md:pt-10 pb-[5%] px-5 xl:px-[65px]">
        {/* CONTAINER 1 */}
        <div className="h-[35rem] w-[20rem] bg-violet-950 hover:scale-105 hover:shadow-xl transition-all">
          {/* TEXT */}
          <div className="h-1/4 text-white text-center pt-6 pl-6 pr-6 pb-6">
            <div className="text-4xl font-bold pb-3">
              <Link href="/services">Paquetes</Link>
            </div>
            <p className="text-lg">Conoce los diferentes paquetes de fotografía que ofrecemos.</p>
          </div>
          {/* IMAGE */}
          <div className="h-3/4 flex">
            <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cosplay3.jpg" alt="Section 1" width={400} height={400} priority />
          </div>
        </div>
        {/* CONTAINER 2*/}
        <div className="h-[35rem] w-[20rem] bg-violet-950 hover:scale-105 hover:shadow-xl transition-all">
          {/* TEXT */}
          <div className="h-1/4 text-white text-center pt-6 pl-6 pr-6 pb-6">
            <div className="text-4xl font-bold pb-3">
              <Link href="/events">Eventos</Link>
            </div>
            <p className="text-lg">Fotografía de eventos, de alta calidad.</p>
          </div>
          {/* IMAGE */}
          <div className="h-3/4 flex">
            <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/fiesta.jpg" alt="Section 2" width={400} height={400} priority />
          </div>
        </div>
        {/* CONTAINER 3 */}
        <div className="h-[35rem] w-[20rem] bg-violet-950 hover:scale-105 hover:shadow-xl transition-all">
          {/* TEXT */}
          <div className="h-1/4 text-white text-center pt-6 pl-6 pr-6 pb-6">
            <div className="text-4xl font-bold pb-3">
              <Link href="/blog">Blog</Link>
            </div>
            <p className="text-lg">Información extra, próximos eventos, promociones, y más...</p>
          </div>
          {/* IMAGE */}
          <div className="h-3/4 flex">
            <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/tren.jpg" alt="Section 3" width={400} height={400} priority />
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;