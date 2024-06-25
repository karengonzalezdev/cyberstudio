"use client"
import { motion } from "framer-motion"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactPage = () => {

const [success,setSuccess] = useState(false);
const [error,setError] = useState(false);
const text = "Hola! ";

const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, 
        { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

 return (
  <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
  <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pb-5 pt-5 items-center justify-center">
      {/* TEXT CONTAINER */}
      <div className="h-1/2 text-white lg:h-full lg:w-1/2 flex items-center justify-center text-3xl lg:text-6xl xl:text-6xl pt-3 lg:pt-0 pb-3 lg:pb-0 text-glitch text-glitch-duration-slow">
          <div className="">{text.split("").map((letter, index)=>(
              <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity, delay:index*0.1}}>{letter}</motion.span>
          ))} :) </div>
      </div>
      {/* FORM CONTAINER */}
      <form
          onSubmit={sendEmail} 
          ref={form} className="h-[80%] lg:h-full md:w-1/2 lg:w-1/2 bg-purple-50 text-black text-lg lg:text-xl xl:text-xl flex flex-col gap-8 justify-center px-10 sm:px-12 md:px-15 pt-10 md:pt-15 lg:px-20 lg:pt-10 pb-20 md:pb-34">
          <span className="pt-5 lg:pt-2">Equipo de Cyberstudio,</span>
          <textarea rows={4} className="bg-transparent border-b-2 border-b-black outline-none resize-none min-h-[2rem]"
          name="user_message"
          />
          <span>Mi correo electrónico es:</span>
          <input name="user_email" type="text" className="bg-transparent border-b-2 border-b-black outline-none" />
          <span>Saludos!</span>
          <button className="bg-purple-200 font-semibold text-gray-600 lg:p-4 xl:p-4">Enviar</button>
          {success && <span className="text-green-600 font-semibold">Tu mensaje fue enviado correctamente!</span>}
          {error && <span className="text-red-600 font-semibold">Hubo un error al enviar tu mensaje, porfavor intenta nuevamente</span>}
      </form>
  </div>
  </motion.div>
)
}

export default ContactPage