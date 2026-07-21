"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { contactSchema, type ContactPayload } from "@/lib/validations";
import { formatBrazilianPhone } from "@/lib/utils";
import { allServices } from "@/data/services";

const fieldClass = "mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-[#06172B] outline-none transition focus:border-[#075FCB] focus:ring-2 focus:ring-[#075FCB]/20";

export function ContactForm() {
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "", privacy: false, website: "" },
  });

  async function onSubmit(data: ContactPayload) {
    setStatus(null);
    const response = await fetch("/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = (await response.json()) as { success: boolean; message: string };
    setStatus({ type: json.success ? "success" : "error", message: json.message });
    if (json.success) reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm" noValidate>
      <div className="hidden" aria-hidden="true">
        <label>Website <input tabIndex={-1} autoComplete="off" {...register("website")} /></label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nome" error={errors.name?.message}><input className={fieldClass} {...register("name")} autoComplete="name" /></Field>
        <Field label="Empresa" error={errors.company?.message}><input className={fieldClass} {...register("company")} autoComplete="organization" /></Field>
        <Field label="E-mail" error={errors.email?.message}><input className={fieldClass} {...register("email")} type="email" autoComplete="email" /></Field>
        <Field label="Telefone" error={errors.phone?.message}>
          <input className={fieldClass} {...register("phone")} autoComplete="tel" onChange={(event) => setValue("phone", formatBrazilianPhone(event.target.value), { shouldValidate: true })} />
        </Field>
        <Field label="Cidade" error={errors.city?.message}><input className={fieldClass} {...register("city")} autoComplete="address-level2" /></Field>
        <Field label="Estado" error={errors.state?.message}><input className={fieldClass} {...register("state")} maxLength={2} autoComplete="address-level1" /></Field>
      </div>
      <Field label="Servico de interesse" error={errors.service?.message}>
        <select className={fieldClass} {...register("service")}>
          <option value="">Selecione</option>
          {allServices.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
          <option value="Outro">Outro</option>
        </select>
      </Field>
      <Field label="Mensagem" error={errors.message?.message}><textarea className={fieldClass} rows={5} {...register("message")} /></Field>
      <label className="flex gap-3 text-sm text-[#253244]">
        <input type="checkbox" className="mt-1 size-4" {...register("privacy")} />
        <span>Aceito a Política de Privacidade e autorizo o contato da VLN INFO.</span>
      </label>
      {errors.privacy?.message ? <p className="text-sm font-semibold text-red-700">{errors.privacy.message}</p> : null}
      <button disabled={isSubmitting} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#075FCB] px-5 font-extrabold uppercase text-white transition hover:bg-[#006CE5] disabled:cursor-not-allowed disabled:opacity-60" type="submit">
        <Send size={18} /> {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </button>
      <div aria-live="polite">{status ? <p className={status.type === "success" ? "font-semibold text-green-700" : "font-semibold text-red-700"}>{status.message}</p> : null}</div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <label className="block text-sm font-bold text-[#06172B]" htmlFor={id}>
      {label}
      {children}
      {error ? <span className="mt-1 block text-sm text-red-700">{error}</span> : null}
    </label>
  );
}
