import Link from "next/link"

const GalleryPage = () => {
 return (
    <div className="h-screen flex">
    {/* FIRST SECTION */}
    <div className="h-full w-1/2 flex">
        <div className="h-[80%] w-[80%] rounded-xl m-auto bg-white">
            <div className="text-5xl text-center font-bold pt-5">
        <Link href="/events">
            Eventos
        </Link>
        </div>
        </div>
    </div>
    {/* SECOND SECTION */}
    <div className="h-full w-1/2 pt-10 pb-9 pl-5 pr-5 space-y-11">
        <div className="h-[45%] w-[85%] bg-pink-500 rounded-xl m-auto">
        <div className="text-5xl text-center font-bold pt-5">
        <Link href="/cosplay">
            Cosplay
        </Link>
        </div>
        </div>
        <div className="h-[45%] w-[85%] bg-violet-400 rounded-xl m-auto">
        <div className="text-5xl text-center font-bold pt-5">
        <Link href="/casual">
            Casual
        </Link>
        </div>
        </div>
    </div>
    </div>        
)
}

export default GalleryPage