import Image from "next/image";

const AboutPage = () => {
 return (
 <div className="h-full">
    {/* FIRST CONTAINER */}
    <div className="flex flex-col md:flex-row pt-10 md:pt-0 lg:pt-10 lg:pb-5 pl-5 pr-5 items-center">
        {/* IMAGE */}
        <div className="h-full w-full md:w-1/2 flex">
            <div className="flex h-[22rem] md:h-[26rem] lg:h-[28rem] w-[25rem] md:w-[28rem] lg:w-[30rem] rounded-xl m-auto">
            <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/bladerunner.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
            </div>
        </div>
        {/* TEXT */}
        <div className="h-full w-full text-white md:w-1/2 flex flex-col text-center pl-2 pr-2 pb-5">
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold pt-2 sm:pt-5 md:pt-0 pb-2 sm:pb-5 xl:pb-10 text-glitch text-glitch-duration-slow">Acerca de nosotros</h1>
            <p className="text-md md:text-lg lg:text-2xl xl:text-3xl">Somos un estudio fotográfico fundado en 2018, con el objetivo de entregar fotos de gran calidad. Nos especializamos en fotografía de eventos, casuales y de Cosplay, pero nuestro alcance no se limita a esto, pregunta por el tipo de foto que gustes. Contáctanos para mas información 😊</p>
        </div>
    </div>

    {/* BANNER */}
    <div className="flex items-center justify-center">
        <div className="flex h-[20rem] sm:h-[23rem] lg:h-[30rem] xl:h-[35rem] w-[30rem] sm:w-[35rem] md:w-[70rem] lg:pt-10 pb-10 pl-5 pr-5 rounded-xl">
        <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/cosplay.jpg" alt="Background" className="object-contain w-auto h-full mx-auto" width={300} height={300} responsive="true"/>
        </div>
    </div>
 </div>
)
}

export default AboutPage