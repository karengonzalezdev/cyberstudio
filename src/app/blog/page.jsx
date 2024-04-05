const BlogPage = () => {
 return (
 <div className="h-full">
    {/* TEXT CONTAINER */}
    <div className="h-[7rem]">
        <h1 className="text-5xl text-center pt-7 font-bold">Blog</h1>
    </div>
    {/* SECTIONS */}
    <div className="h-full flex flex-col pt-7 pl-7 pr-7 pb-7 gap-10 items-center justify-center">
        <div className="h-[15rem] w-[63rem] flex rounded-xl bg-yellow-200">
            {/* IMAGE */}
            <div className="w-1/3 bg-blue-400"></div>
            {/* TEXT */}
            <div className="w-2/3 bg-red-400 text-left pt-7 pl-7 pr-7 pb-7">
            <h1 className="text-3xl font-bold">Noticia 1</h1>
            <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus necessitatibus sit cupiditate, distinctio obcaecati illo exercitationem! Laudantium natus accusamus beatae ab dolores, repellendus autem maxime itaque dolorem, eos debitis dolor.</p>
            </div>
        </div>
        <div className="h-[15rem] w-[63rem] flex rounded-xl bg-yellow-200">
            {/* IMAGE */}
            <div className="w-1/3 bg-blue-400"></div>
            {/* TEXT */}
            <div className="w-2/3 bg-red-400 text-left pt-7 pl-7 pr-7 pb-7">
            <h1 className="text-3xl font-bold">Noticia 2</h1>
            <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus necessitatibus sit cupiditate, distinctio obcaecati illo exercitationem! Laudantium natus accusamus beatae ab dolores, repellendus autem maxime itaque dolorem, eos debitis dolor.</p>
            </div>
        </div>
        <div className="h-[15rem] w-[63rem] flex rounded-xl bg-yellow-200">
            {/* IMAGE */}
            <div className="w-1/3 bg-blue-400"></div>
            {/* TEXT */}
            <div className="w-2/3 bg-red-400 text-left pt-7 pl-7 pr-7 pb-7">
            <h1 className="text-3xl font-bold">Noticia 3</h1>
            <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus necessitatibus sit cupiditate, distinctio obcaecati illo exercitationem! Laudantium natus accusamus beatae ab dolores, repellendus autem maxime itaque dolorem, eos debitis dolor.</p>
            </div>
        </div>
    </div>
 </div>
)
}

export default BlogPage