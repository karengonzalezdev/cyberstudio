import Image from "next/image";

const AboutPage = () => {
 return (
 <div className="h-full">
    {/* FIRST CONTAINER */}
    <div className="flex flex-col md:flex-row pt-10 pb-10 pl-5 pr-5 bg-red-500">
        {/* IMAGE */}
        <div className="h-full w-1/2 flex">
            <div className="flex h-[26rem] lg:h-[30rem] w-[28rem] lg:w-[30rem] rounded-xl m-auto">
            <Image src="/example.jpg" alt="BackgroundImage" width={600} height={400} priority className="rounded-xl"/>
            </div>
        </div>
        {/* TEXT */}
        <div className="h-full w-1/2 flex flex-col text-center pl-2 pr-2">
            <h1 className="text-3xl lg:text-5xl font-bold pb-5 lg:pb-10">Acerca de nosotros</h1>
            <p className="text-2xl lg:text-3xl">Somos un estudio fotográfico fundado en 2018, con el objetivo de entregar fotos de gran calidad. Nos especializamos en fotografía de eventos, casuales y de Cosplay, pero nuestro alcance no se limita a esto, pregunta por el tipo de foto que gustes. Contáctanos para mas información 😊</p>
        </div>
    </div>

    {/* BANNER */}
    <div className="h-[25rem] pt-5 flex justify-center">
        <div className="flex h-[70%] w-[80%] rounded-xl">
        <Image src="/example.jpg" alt="BackgroundImage" width={1200} height={500} priority className="rounded-xl"/>
        </div>
    </div>
 </div>
)
}

export default AboutPage