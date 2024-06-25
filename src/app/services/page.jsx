const servicesPage = () => {
 return (
 <div className="h-full">
    {/* TEXT CONTAINER */}
    <div className="h-[7rem]">
        <h1 className="text-5xl text-white text-center pt-7 font-bold text-glitch text-glitch-duration-slow">Servicios</h1>
    </div>
    {/* SERVICES CONTAINER */}
    <div className="h-full flex flex-wrap items-center justify-center pl-5 pt-5 pr-5 pb-5 gap-10">
        {/* CARD 1 */}
        <div className="h-[20rem] w-[23rem] text-white rounded-xl text-center p-10 bg-violet-950 hover:bg-violet-900">
            <h1 className="text-3xl font-bold pb-10">Evento paquete 1</h1>
            <p className="text-lg">60 fotografías impresas, cobertura de ceremonia + 4 hras de evento, 1 marco grande, de 40 min a 1 hr de video, 1 memoria USB con el contenido 8,200$</p>
        </div>
        {/* CARD 2 */}
        <div className="h-[20rem] w-[23rem] text-white rounded-xl text-center p-10 bg-violet-950 hover:bg-violet-900">
            <h1 className="text-3xl font-bold pb-10">Evento paquete 2</h1>
            <p className="text-lg">60 fotos impresas, cobertura de ceremonia + 4 hras de evento, 1 foto en marco grande, una memoria con fotos digitales, 5,000$</p>
        </div>
        {/* CARD 3 */}
        <div className="h-[20rem] w-[23rem] text-white rounded-xl text-center p-10 bg-violet-950 hover:bg-violet-900">
            <h1 className="text-3xl font-bold pb-10">Fotomontaje</h1>
            <p className="text-lg">Incluye la toma de fotografía y entrega del fotomontaje y la foto base editada, 550$</p>
        </div>
        {/* CARD 4 */}
        <div className="h-[20rem] w-[23rem] text-white rounded-xl text-center p-10 bg-violet-950 hover:bg-violet-900">
            <h1 className="text-3xl font-bold pb-10">Sesión casual</h1>
            <p className="text-lg">24 fotos sesion de 2 horas, 1,200$</p>
        </div>
        {/* CARD 5 */}
        <div className="h-[20rem] w-[23rem] text-white rounded-xl text-center p-10 bg-violet-950 hover:bg-violet-900">
            <h1 className="text-3xl font-bold">Video</h1>
            <p className="text-lg">Grabación de contenido en formato reel 600$</p>
        </div>
    </div>
    <div className="h-[5rem]"></div>
 </div>
)
}

export default servicesPage