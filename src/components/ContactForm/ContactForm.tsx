import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/Button";
import { submitContactForm } from "@/lib/contact";
import { cn } from "@/lib/utils";

type FormValues = { name: string; email: string; message: string };

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const { t } = useTranslation("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const schema = z.object({
    name: z.string().trim().min(1, t("validation.nameRequired")).max(100),
    email: z
      .string()
      .trim()
      .min(1, t("validation.emailRequired"))
      .email(t("validation.emailInvalid"))
      .max(255),
    message: z
      .string()
      .trim()
      .min(1, t("validation.messageRequired"))
      .min(10, t("validation.messageMin"))
      .max(2000),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onBlur" });

  const onSubmit = async (values: FormValues) => {
    setStatus("loading");
    try {
      await submitContactForm(values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-xl border-2 border-ink bg-card px-4 py-3 text-base shadow-[3px_3px_0_0_#000] focus:outline-none focus:ring-3 focus:ring-lilac";

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={cn("w-full flex flex-col gap-5", compact && "gap-4")}
    >
      <div>
        <label htmlFor="cf-name" className="block text-sm font-bold mb-2">
          {t("form.name")}
        </label>
        <input
          id="cf-name"
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "cf-name-err" : undefined}
          {...register("name")}
          className={inputBase}
        />
        {errors.name && (
          <p id="cf-name-err" className="mt-1.5 text-sm text-destructive font-medium">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-sm font-bold mb-2">
          {t("form.email")}
        </label>
        <input
          id="cf-email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "cf-email-err" : undefined}
          {...register("email")}
          className={inputBase}
        />
        {errors.email && (
          <p id="cf-email-err" className="mt-1.5 text-sm text-destructive font-medium">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-bold mb-2">
          {t("form.message")}
        </label>
        <textarea
          id="cf-message"
          rows={compact ? 4 : 6}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
          {...register("message")}
          className={cn(inputBase, "resize-y min-h-120px")}
        />
        {errors.message && (
          <p id="cf-message-err" className="mt-1.5 text-sm text-destructive font-medium">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex justify-center">
        <Button type="submit" variant="lilac" size="md" disabled={status === "loading"}>
          {status === "loading" ? t("form.sending") : t("form.submit")}
        </Button>
      </div>

      <div aria-live="polite" className="min-h-6 text-center text-sm">
        {status === "success" && <p className="text-ink font-semibold">{t("status.success")}</p>}
        {status === "error" && (
          <p className="text-destructive font-semibold">{t("status.error")}</p>
        )}
      </div>
    </form>
  );
}
