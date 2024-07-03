import Link from "next/link"
import "./footer.css";

const Footer = () => {
    return (
        <div className="h-[11rem] relative bg-violet-950">
            {/* SOCIAL */}
            <div className="w-full flex justify-center gap-5 pt-5">
                <Link href="https://www.facebook.com/profile.php?id=100077478523775" target="_blank" className="pt-1.5 pr-[3px]">
                    <img src="./facebook.png" alt="Facebook" width={35} height={35} />
                </Link>
                <Link href="https://www.instagram.com/cyberstudio3?igsh=bGdldWVhNHNhb3d2" target="_blank" className="pt-1.5">
                    <img src="./instagram.png" alt="Instagram" width={35} height={35} />
                </Link>
                <Link href="https://wa.me/523339796806" target="_blank" className="w-[40px]">
                    <img src="./whatsapp.png" alt="Whatsapp" width={30} height={35} className="h-[111%] w-full object-cover" />
                </Link>
                <Link href="mailto:cyberstudio321@gmail.com" target="_blank" className="">
                    <img src="./email.png" alt="Email" width={35} height={55} className="h-[110%]" />
                </Link>
            </div>
            {/* LINES */}
            <div className="w-full flex justify-between">
                <div className="h-1 w-[5rem] sm:w-[10rem] md:w-[15rem] lg:w-[20rem] xl:w-[32rem] bg-yellow-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff0,0_0_15px_#ff0,0_0_30px_#ff0]"></div>
                <div className="h-1 w-[5rem] sm:w-[10rem] md:w-[15rem] lg:w-[20rem] xl:w-[32rem] bg-yellow-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff0,0_0_15px_#ff0,0_0_30px_#ff0]"></div>
            </div>
            {/* TEXT */}
            <div className="text-center text-yellow-400 pt-7 relative">
                <div className="square-container square-left">
                    <svg className="square" viewBox="0 0 36 36">
                        <rect x="1" y="1" width="34" height="34" />
                    </svg>
                </div>
                <h1 className="text-3xl">Cyberstudio</h1>
                <p>Copyright Cyberstudio GDL MX</p>
                <div className="square-container square-right">
                    <svg className="square" viewBox="0 0 36 36">
                        <rect x="1" y="1" width="34" height="34" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Footer