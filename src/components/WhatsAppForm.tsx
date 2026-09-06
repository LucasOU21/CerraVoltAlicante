"use client";

import { FormEvent, useState, type HTMLAttributes } from "react";
import { IconWhatsApp } from "@/components/Icons";
import { site } from "@/content/site";

const needs = [
  "Apertura de puertas",
  "Reparación de cerraduras",
  "Instalación eléctrica",
  "Avería eléctrica",
  "Otro",
] as const;

export function WhatsAppForm() {
  const [sentHint, setSentHint] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("nombre") ?? "").trim();
    const phone = String(data.get("telefono") ?? "").trim();
    const need = String(data.get("necesito") ?? "").trim();
    const message = String(data.get("mensaje") ?? "").trim();

    const lines = [
      `Hola CerraVolt, soy ${name || "un vecino de Alicante"}.`,
      phone ? `Mi teléfono: ${phone}.` : "",
      need ? `Necesito: ${need}.` : "",
      message,
    ].filter(Boolean);

    const url = `${site.whatsapp}?text=${encodeURIComponent(lines.join(" "))}`;
    setSentHint(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" name="nombre" autoComplete="name" />
        <Field
          label="Teléfono"
          name="telefono"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
        />
      </div>
      <label className="block">
        <span className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
          Qué necesitas
        </span>
        <select
          name="necesito"
          className="min-h-12 w-full rounded-xl border border-ink/10 bg-sand px-3 text-base text-ink outline-none focus:border-gold"
          defaultValue={needs[0]}
        >
          {needs.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
          Mensaje
        </span>
        <textarea
          name="mensaje"
          rows={4}
          placeholder="Cuéntanos el barrio y qué ha pasado."
          className="w-full rounded-xl border border-ink/10 bg-sand px-3 py-3 text-base text-ink outline-none placeholder:text-ink/35 focus:border-gold"
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-linear-to-b from-gold-bright to-gold text-sm font-semibold text-ink shadow-[0_10px_24px_-12px_rgba(139,107,20,0.7)] hover:from-[#f0d06a] hover:to-[#d4ad2e]"
      >
        <IconWhatsApp className="size-5" />
        Enviar por WhatsApp
      </button>
      {sentHint ? (
        <p className="text-center text-sm text-ink-soft">
          Se abre WhatsApp con el mensaje. Si no ves nada, pulsa el botón verde
          de abajo.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
        {label}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="min-h-12 w-full rounded-xl border border-ink/10 bg-sand px-3 text-base text-ink outline-none focus:border-gold"
      />
    </label>
  );
}
