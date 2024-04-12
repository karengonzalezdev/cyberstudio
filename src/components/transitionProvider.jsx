"use client"

import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import NavBar from "./navBar"
import Footer from "./footer"
import { usePathname } from "next/navigation"

const TransitionProvider = ({children}) => {

  const pathName = usePathname()

    return (
 
<AnimatePresence mode="wait">
<div key={pathName} className="bg-gradient-to-b from-yellow-500 to-yellow-400"> 

        <motion.div
          initial={{opacity:1}}
          animate={{x:"-100%"}}
          transition={{duration:1, ease:"easeOut"}}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "200%",
            background: "linear-gradient(to left, #000000, #ffffff)",
            mixBlendMode: "difference",
          }}
        />
        <div className="h-24">
        <NavBar />
        </div>
        <div className="">{children}</div>
        <div className="">
          <Footer />
        </div>
        </div>
        
</AnimatePresence>

)
}

export default TransitionProvider