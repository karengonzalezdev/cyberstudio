import Link from "next/link"

const Footer = () => {
 return (
 <div className="h-[13rem] bg-violet-950 relative">
{/* SOCIAL */}
<div className="flex w-full gap-5 pt-5 justify-center">
<Link href="https://www.facebook.com/profile.php?id=100077478523775" target="_blank" className="pt-1.5 pr-1">
<img src="./facebook.png" alt="Facebook" width={35} height={35}/>
</Link>
<Link href="https://www.instagram.com/cyberstudio3?igsh=bGdldWVhNHNhb3d2" target="_blank" className="pt-1.5">
<img src="./instagram.png" alt="Instagram" width={35} height={35}/>
</Link>
<Link href="https://wa.me/523339796806" target="_blank">
<img src="./whatsapp.png" alt="Whatsapp" width={46} height={46}/>
</Link>
<Link href="mailto:cyberstudio321@gmail.com" target="_blank" className="pt-1">
<img src="./email.png" alt="Email" width={35} height={55}/>
</Link>
</div>
{/* LINE */}
<div className="flex w-full justify-between">
<div className="w-[35rem] h-1 bg-yellow-500"></div>
<div className="w-[35rem] h-1 bg-yellow-500"></div>
</div>
{/* TEXT */}
<div className="pt-7 text-white text-center">
<h1 className="text-3xl text-glitch text-glitch-duration-slow">Cyberstudio</h1>
<p>Copyright Cyberstudio GDL MX</p>
</div>

 </div>

)
}

export default Footer