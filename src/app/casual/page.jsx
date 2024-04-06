"use client"

import ScrollButton from "@/components/scrollButton"
import Image from "next/image";

const CasualPage
 = () => {
 return (
<div className="bg-gradient-to-b from-yellow-500 to-yellow-400">
    {/* TEXT CONTAINER */}
    <div className="h-[7rem]">
        <h1 className="text-5xl text-center pt-7 font-bold">Casual</h1>
    </div>
    {/* SERVICES CONTAINER */}
    <div className="h-full flex flex-wrap items-center justify-center pl-5 pt-5 pr-5 pb-[7%] gap-10">
        {/* CARD 1 */}
        <div className="flex h-[20rem] w-[20rem] rounded-xl bg-green-400">
        <Image src="/example.jpg" alt="BackgroundImage" width={400} height={600} priority className="rounded-xl"/>
        </div>
        {/* CARD 2 */}
        <div className="flex h-[20rem] w-[20rem] rounded-xl bg-green-400">
        <Image src="/example.jpg" alt="BackgroundImage" width={400} height={600} priority className="rounded-xl"/>
        </div>
        {/* CARD 3 */}
        <div className="flex h-[20rem] w-[20rem] rounded-xl bg-green-400">
        <Image src="/example.jpg" alt="BackgroundImage" width={400} height={600} priority className="rounded-xl"/>
        </div>
        {/* CARD 4 */}
        <div className="flex h-[20rem] w-[20rem] rounded-xl bg-green-400">
        <Image src="/example.jpg" alt="BackgroundImage" width={400} height={600} priority className="rounded-xl"/>
        </div>
        {/* CARD 5 */}
        <div className="flex h-[20rem] w-[20rem] rounded-xl bg-green-400">
        <Image src="/example.jpg" alt="BackgroundImage" width={400} height={600} priority className="rounded-xl"/>
        </div>
        {/* CARD 6 */}
        <div className="flex h-[20rem] w-[20rem] rounded-xl bg-green-400">
        <Image src="/example.jpg" alt="BackgroundImage" width={400} height={600} priority className="rounded-xl"/>
        </div>
        {/* CARD 7 */}
        <div className="flex h-[20rem] w-[20rem] rounded-xl bg-green-400">
        <Image src="/example.jpg" alt="BackgroundImage" width={400} height={600} priority className="rounded-xl"/>
        </div>
        {/* CARD 8 */}
        <div className="flex h-[20rem] w-[20rem] rounded-xl bg-green-400">
        <Image src="/example.jpg" alt="BackgroundImage" width={400} height={600} priority className="rounded-xl"/>
        </div>
        {/* CARD 9 */}
        <div className="flex h-[20rem] w-[20rem] rounded-xl bg-green-400">
        <Image src="/example.jpg" alt="BackgroundImage" width={400} height={600} priority className="rounded-xl"/>
        </div>
    </div>
    <ScrollButton />
 </div>
)
}

export default CasualPage
