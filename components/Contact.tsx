"use client"

import { useState } from "react";   
import { data } from "@/data/data";

const Contact = () => {
    const [ nombre, setNombre ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ mensaje, setMensaje ] = useState("");
    const URL_API = "/api/contacto";
    // Función para enviar el mensaje
    const sendForm = async (e: React.FormEvent) => {
        e.preventDefault()
       const respuesta = await fetch(URL_API , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre,
                email,
                mensaje
            })
        })

        //Evaluamocíon de envío
        if(!respuesta.ok){
            console.log ("El mensaje no se pudo mandar");
            alert("mensaje no se pudo enviar")
            
        }else{
            console.log("Enviado exitosamente");
            alert("Envío exitoso");
            //limpamos los inputs
            setNombre("");
            setEmail("");
            setMensaje("");
        }
    }

    return (
        <section id="contacto" className="py-20 px-6 w-full max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="text-white font-bold text-3xl mb-12 text-center w-full"> Contacto </h2>
            
            {/** Contenedor secundario */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl items-center">

                {/** Contenedor del texto */}
                <div className="flex flex-col justify-center text-center md:text-left">
                    <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight mb-6"> 
                        Construyamos algo grandioso juntos
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8"> 
                        Abierto a colaboraciones y oportunidades remotas. Háblame de tu próximo proyecto y veamos cómo podemos trabajar en equipo.
                    </p>
                    
                    {/* Lista de Medios de Contacto */}
                    <div className="flex flex-col gap-6 mt-8">
                        {/* Email */}
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="bg-slate-800/50 p-3 rounded-full border border-slate-700/50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-violet-500 w-6 h-6">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                                    <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <span className="text-slate-400 text-sm font-medium">Email</span>
                                <p className="text-white font-semibold hover:text-violet-400 transition-colors">yahir.rod137@gmail.com</p>
                            </div>
                        </div>

                        {/* Redes Sociales Integradas */}
                        {Object.entries(data.social).map(([key, value]) =>(
                            <a key={key} href={value} target="_blank" className="flex items-center gap-4 justify-center md:justify-start group"> 
                                <div className="bg-slate-800/50 p-3 rounded-full border border-slate-700/50 group-hover:border-violet-500/50 transition-colors">
                                    {key === "github" && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-violet-500 w-6 h-6 group-hover:scale-110 transition-transform">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
                                        </svg>
                                    )}
                                    {key === "linkedin" && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-violet-500 w-6 h-6 group-hover:scale-110 transition-transform">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
                                        </svg>
                                    )}
                                </div>

                                <div className="text-left">
                                    <span className="text-slate-400 text-sm font-medium capitalize">{key}</span>
                                </div>
                            </a>   
                        ))}
                    </div>
                </div>

                {/** Contenedor de formulario */}
                <div className="flex justify-center md:justify-end">
                    <form 
                        className="flex flex-col text-white gap-5 bg-slate-900/40 border border-slate-700/50 backdrop-blur-sm rounded-2xl max-w-md w-full p-8 shadow-lg shadow-black/20"
                        onSubmit={sendForm}
                    >
                        <h3 className="text-xl font-bold mb-2">Envíame un mensaje</h3>
                    
                        {/** Contenedor de Nombre */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-slate-300 font-medium"> Nombre </label>
                            <input 
                                type="text" 
                                className="bg-slate-800/50 border border-slate-600 rounded-lg p-3 w-full focus:outline-none focus:border-violet-500 transition-colors"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>

                        {/** Contenedor de Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-slate-300 font-medium"> Email </label>
                            <input 
                                type="email" 
                                className="bg-slate-800/50 border border-slate-600 rounded-lg p-3 w-full focus:outline-none focus:border-violet-500 transition-colors"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/** Contenedor del Mensaje */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-slate-300 font-medium"> Mensaje </label>
                            <textarea 
                                className="bg-slate-800/50 border border-slate-600 rounded-lg p-3 w-full h-32 resize-none focus:outline-none focus:border-violet-500 transition-colors"
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        {/** Contenedor de botón */}
                        <div className="mt-4">
                            <button className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 rounded-xl transition-colors shadow-md shadow-violet-900/20"> 
                                Enviar Mensaje
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact