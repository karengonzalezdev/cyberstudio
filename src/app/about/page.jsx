import Image from "next/image";

const AboutPage = () => {

  return (
    <div className="h-full">
      {/* FIRST CONTAINER */}
      <div className="flex flex-col md:flex-row items-center pt-10 md:pt-0 lg:pt-10 lg:pb-5 pl-10 sm:pl-5 pr-10 sm:pr-5">
        {/* IMAGE */}
        <div className="h-full w-full md:w-1/2 flex">
          <div className="flex h-[22rem] md:h-[26rem] lg:h-[28rem] w-[25rem] md:w-[28rem] lg:w-[30rem] rounded-xl m-auto">
            <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/bladerunner.jpg" alt="Blade Runner" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
          </div>
        </div>
        {/* SECOND CONTAINER */}
        <div className="h-full w-full md:w-1/2 flex flex-col text-center text-violet-950 pl-2 pr-2 pb-5">
          {/* TEXT */}
          <div className="container text-center pt-[2rem] pb-[2rem] md:pb-0">
            <p className="glitch inline-block">
              <span aria-hidden="true">Nosotros</span>
              Nosotros
              <span aria-hidden="true">Nosotros</span>
            </p>
          </div>
          <p className="text-lg lg:text-2xl xl:text-3xl">Somos un estudio fotográfico fundado en 2018, con el objetivo de entregar fotos de gran calidad. Nos especializamos en fotografía de eventos, casuales y de Cosplay, pero nuestro alcance no se limita a esto, pregunta por el tipo de foto que gustes. Contáctanos para mas información 😊</p>
        </div>
      </div>
      {/* BANNER */}
      <div className="flex items-center justify-center">
        <div className="h-[20rem] sm:h-[23rem] lg:h-[30rem] xl:h-[35rem] w-[30rem] sm:w-[35rem] md:w-[70rem] flex lg:pt-10 pb-10 pl-10 sm:pl-5 pr-10 sm:pr-5">
          <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cosplay.jpg" alt="Banner" className="h-full w-auto object-contain mx-auto" width={300} height={300} responsive="true" />
        </div>
      </div>
    </div>
  )
}

export default AboutPage