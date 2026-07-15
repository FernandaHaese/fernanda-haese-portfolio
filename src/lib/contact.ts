// Isolated contact submission entry point.
// TODO: integrate with Formspree / EmailJS / Resend / Supabase Edge Function.
// Throws until an integration is wired so the UI never falsely reports success.

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function submitContactForm(payload: ContactPayload): Promise<void> {
  await new Promise((r) => setTimeout(r, 700));
  // Intentionally throw — no real backend configured.
  // Replace this body with a real fetch() when the endpoint is available.
  void payload;
  throw new Error("Contact integration not configured");
}
