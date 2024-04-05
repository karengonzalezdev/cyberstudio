const AboutPage = () => {
 return (
 <div className="h-full">
    {/* FIRST CONTAINER */}
    <div className="h-[40rem] flex">
        {/* IMAGE */}
        <div className="h-full w-1/2 flex">
            <div className="h-[80%] w-[80%] rounded-xl m-auto bg-white"></div>
        </div>
        {/* TEXT */}
        <div className="h-full w-1/2 flex flex-col text-center pt-[6%] pl-[6%] pr-[6%] pb-[6%]">
            <h1 className="text-5xl font-bold pb-5">Acerca de nosotros</h1>
            <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ab ut, blanditiis et soluta hic minus, pariatur provident cumque sunt ipsa rem quis accusantium, iste mollitia fugit animi commodi molestiae?</p>
        </div>
    </div>

    {/* BANNER */}
    <div className="h-[30rem] flex">
        <div className="h-[70%] w-[80%] rounded-xl m-auto bg-white"></div>
    </div>
 </div>
)
}

export default AboutPage