"use client"
import { motion } from "framer-motion"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactPage = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Hola! ";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
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
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pb-[4rem] lg:pb-[3rem] pt-[2rem] lg:pt-[3rem] items-center justify-center">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-violet-950 font-bold text-3xl sm:text-6xl pt-5 lg:pt-0 pb-[3rem] lg:pb-0">
          <div className="">{text.split("").map((letter, index) => (
            <motion.span key={index} initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}>{letter}</motion.span>
          ))} :) </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form} className="h-[80%] lg:h-full w-[85%] lg:w-[70%] flex flex-col  bg-violet-950 text-yellow-400 text-lg lg:text-xl gap-8 pt-10 md:pt-15 lg:pt-[3rem] px-10 sm:px-12 md:px-15 lg:px-20 pb-20 md:pb-34">
          <span className="pt-2">Equipo de Cyberstudio,</span>
          <textarea rows={4} className="bg-transparent border-b-2 border-b-yellow-400 outline-none resize-none min-h-[2rem] shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff0,0_0_15px_#ff0,0_0_30px_#ff0]"
            name="user_message"
          />
          <span>Mi correo electrónico es:</span>
          <input name="user_email" type="text" className="bg-transparent border-b-2 border-b-yellow-400 outline-none shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff0,0_0_15px_#ff0,0_0_30px_#ff0]" />
          <span>Saludos!</span>
          <button className="bg-yellow-500 font-semibold text-violet-950 lg:p-4 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff0,0_0_15px_#ff0,0_0_30px_#ff0]">Enviar</button>
          {success && <span className="text-green-600 font-semibold">Tu mensaje fue enviado correctamente!</span>}
          {error && <span className="text-red-600 font-semibold">Hubo un error al enviar tu mensaje, porfavor intenta nuevamente</span>}
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage