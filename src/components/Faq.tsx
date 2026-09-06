import { CallLink, WhatsAppLink } from "@/components/Ctas";
import { site } from "@/content/site";

export function Faq() {
  return (
    <section id="preguntas" className="bg-sand px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="inline-flex rounded-full border border-gold/50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Preguntas frecuentes
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Lo que suelen preguntar antes de llamar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Si tu duda no está aquí, el atajo es el mismo: teléfono o WhatsApp.
            No hace falta rellenar un formulario para que salgamos.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl bg-ink px-4 py-4 text-cream">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-bright">
                Urgencias
              </p>
              <p className="mt-1 font-display text-2xl font-semibold">
                {site.phoneDisplay}
              </p>
              <CallLink className="mt-4 w-full" />
            </div>
            <div className="rounded-2xl bg-linear-to-b from-gold-bright to-gold px-4 py-4 text-ink">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em]">
                Escribir
              </p>
              <p className="mt-1 font-display text-2xl font-semibold">WhatsApp</p>
              <WhatsAppLink tone="night" className="mt-4 w-full" />
            </div>
          </div>
        </div>

        <div className="divide-y divide-ink/10 rounded-[1.4rem] bg-cream/80 px-4 sm:px-6">
          {site.faqs.map((item, index) => (
            <details key={item.q} className="faq group py-5" {...(index === 0 ? { open: true } : {})}>
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-left font-display text-lg font-semibold tracking-tight">
                <span>{item.q}</span>
                <span className="faq-chevron mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition">
                  <Chevron />
                </span>
              </summary>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-soft sm:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden>
      <path
        d="M5 7.5 10 12.5 15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
