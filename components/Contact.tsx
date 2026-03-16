"use client"

import ContactSocial from "./ContactSocial";
import { useState } from "react";   

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
        <>
            <section id="contacto" className=" flex justify-center ">
            <form 
                className="flex flex-col items-center text-white gap-4 pb-8 bg-gray-800/50 rounded-xl max-w-lg w-full p-8"
                onSubmit={sendForm}
            >
                <h1 className="text-lg font-bold">Trabajemos juntos</h1>
               
                {/** Contenedor de Nombre */}
                <div className=" flex flex-col gap-1">
                    <label> Nombre </label>
                    <input 
                        type="text" 
                        className="bg-gray-800 border border-gray-600 rounded-md p-2 w-100"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>

                 {/** Contenedor de Email */}
                <div className=" flex flex-col gap-2">
                    <label> Email </label>
                    <input 
                        type="email" 
                        className="bg-gray-800 border border-gray-600 rounded-md p-2 w-100"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                 {/** Contenedor del Mensaje */}
                <div className=" flex flex-col gap-2">
                    <label> Mensaje </label>
                    <textarea 
                        className="bg-gray-800 border border-gray-600 rounded-md p-2 w-100"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        required
                    ></textarea>
                </div>

                 {/** Contenedor de botón */}
                <div className="m-2">
                    <button className="bg-violet-500 hover:bg-violet-700 py-2 px-12 rounded-xl cursor-pointer"> Enviar </button>
                </div>
            </form>
            </section>
            <ContactSocial />
        </>
    )
}
export default Contact