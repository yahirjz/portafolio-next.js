import { Resend } from "resend"

const MAX_NOMBRE_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MENSAJE_LENGTH = 5_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const badRequest = (message: string) => Response.json({ message }, { status: 400 });

const isValidField = (value: unknown, maxLength: number): value is string =>
  typeof value === "string" && value.trim().length > 0 && value.trim().length <= maxLength;

export async function POST(request: Request){
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return badRequest("El formato de la solicitud no es válido.");
  }

  if (!body || typeof body !== "object") {
    return badRequest("La información enviada no es válida. Revisa los campos e inténtalo de nuevo.");
  }

  const { nombre, email, mensaje } = body as Record<string, unknown>;

  if (!isValidField(nombre, MAX_NOMBRE_LENGTH) || !isValidField(email, MAX_EMAIL_LENGTH) || !isValidField(mensaje, MAX_MENSAJE_LENGTH)) {
    return badRequest("La información enviada no es válida. Revisa los campos e inténtalo de nuevo.");
  }

  const nombreLimpio = nombre.trim();
  const emailLimpio = email.trim();
  const mensajeLimpio = mensaje.trim();

  if (!EMAIL_PATTERN.test(emailLimpio)) {
    return badRequest("La información enviada no es válida. Revisa los campos e inténtalo de nuevo.");
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "yahir.rod137@gmail.com",
      subject: `Nuevo mensaje de ${nombreLimpio}`,
      text: `Nombre: ${nombreLimpio}\nEmail: ${emailLimpio}\nMensaje: ${mensajeLimpio}`
    });

    if (error) {
      return Response.json(
        { message: "No fue posible enviar el mensaje. Inténtalo más tarde." },
        { status: 500 }
      );
    }
  } catch {
    return Response.json(
      { message: "No fue posible enviar el mensaje. Inténtalo más tarde." },
      { status: 500 }
    );
  }

  return Response.json({ message: "Mensaje recibido." });
}
