"use client"

import Link from "next/link"
import { useState } from "react"
import NavLink from "./navLink"
import { motion } from "framer-motion"

const links = [
  { url: "/", title: "Inicio" },
  { url: "/services", title: "Servicios" },
  { url: "/gallery", title: "Galería" },
  { url: "/about", title: "Acerca de" },
  { url: "/blog", title: "Blog" },
  { url: "/contact", title: "Contacto" },
]

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(63,0,64)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(63,0,64)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  }

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <div className='h-full relative flex items-center justify-between bg-violet-950 text-xl px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* LINKS */}
      <div className="w-full hidden md:flex text-yellow-400 gap-7">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button className="h-8 w-10 relative flex flex-col justify-between z-50 pl-5" onClick={() => setOpen(!open)}>
          <motion.div variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="h-1 w-10 bg-yellow-500 rounded origin-left"></motion.div>
          <motion.div variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="h-1 w-10 bg-yellow-500 rounded"></motion.div>
          <motion.div variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="h-1 w-10 bg-yellow-500 rounded origin-left"></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className="h-screen w-screen absolute flex flex-col items-center justify-center top-0 left-0 bg-yellow-500 text-violet-950 gap-8 text-4xl z-40">
            {links.map(link => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default NavBar;