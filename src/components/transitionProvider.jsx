"use client"

import { AnimatePresence } from "framer-motion"
import NavBar from "./navBar"
import Footer from "./footer"
import { usePathname } from "next/navigation"

const TransitionProvider = ({children}) => {
 
 const pathName = usePathname()

    return (
 
<AnimatePresence mode="wait">
<div key={pathName} className="bg-gradient-to-b from-yellow-500 to-yellow-400"> 
      <div className="h-24">
        <NavBar />
        </div>
        <div className="h-full">{children}</div>
        <div className="">
          <Footer />
        </div>
        </div>
</AnimatePresence>

)
}

export default TransitionProvider