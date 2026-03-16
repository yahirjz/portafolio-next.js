import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request){
    const body = await request.json()
    const {nombre, email,mensaje} = body;

   await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "yahir.rod137@gmail.com",
    subject: `Nuevo mensaje de ${nombre}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
  })
    return Response.json({message: " Mensaje recibido "})
}