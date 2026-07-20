// Isolated contact submission entry point.
import emailjs from "@emailjs/browser";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function submitContactForm(payload: ContactPayload): Promise<void> {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS configuration is missing");
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      name: payload.name,
      email: payload.email,
      message: payload.message,
      time: new Date().toLocaleString("pt-BR"),
    },
    {
      publicKey,
      limitRate: {
        id: "contact-form",
        throttle: 10_000,
      },
    },
  );
}
