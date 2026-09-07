import Image from "next/image";
import { CallLink, WhatsAppLink } from "@/components/Ctas";
import { IconBolt, IconClock, IconPadlock, IconShield } from "@/components/Icons";
import { site } from "@/content/site";

const capabilities = [
  { icon: IconPadlock, label: "Apertura de puertas" },
  { icon: IconBolt, label: "Averías eléctricas" },
  { icon: IconShield, label: "Cambio de cerraduras" },
  { icon: IconClock, label: "Urgencias 24 h" },
];

const facts = [
  { value: "24/7", label: "Todos los días del año" },
  { value: "Alicante", label: "Ciudad y alrededores" },
  { value: "Sin sorpresas", label: "Precio cerrado antes de empezar" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="grain relative isolate overflow-hidden bg-dusk text-cream"
    >
      <Backdrop />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-white/5 py-1.5 pr-4 pl-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-bright">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-bright/70" />
                <span className="relative inline-flex size-2 rounded-full bg-gold-bright" />
              </span>
              Disponibles ahora · 24 h
            </p>

            <h1 className="mt-7 font-display text-[2.75rem] leading-[1.02] font-semibold tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]">
              Cerrajero y electricista
              <span className="block text-gold-bright">en {site.province}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
              Abrimos puertas, reparamos cerraduras y resolvemos averías de luz.
              Una sola llamada, a cualquier hora, con presupuesto cerrado antes
              de empezar.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CallLink className="w-full sm:w-auto" />
              <WhatsAppLink className="w-full sm:w-auto" />
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-8 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.value}>
                  <dt className="font-display text-xl font-semibold text-cream sm:text-2xl">
                    {fact.value}
                  </dt>
                  <dd className="mt-1.5 text-[0.8rem] leading-snug text-cream/60">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="relative w-full max-w-md rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo.png"
                  alt=""
                  width={64}
                  height={64}
                  className="size-14 rounded-2xl bg-black ring-1 ring-gold/40"
                  priority
                />
                <div className="leading-tight">
                  <p className="font-display text-2xl font-semibold tracking-tight">
                    Cerra<span className="text-gold-bright">Volt</span>
                  </p>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-cream/55">
                    {site.type}
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-linear-to-r from-transparent via-gold/35 to-transparent" />

              <ul className="grid gap-3">
                {capabilities.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-cream/80">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-gold/25 bg-gold/10 text-gold-bright">
                      <Icon className="size-[1.1rem]" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${site.phoneTel}`}
                className="mt-7 flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-3 transition hover:border-gold/45"
              >
                <span className="text-[0.68rem] uppercase tracking-[0.18em] text-cream/55">
                  Llámanos
                </span>
                <span className="font-display text-lg font-semibold text-gold-bright">
                  {site.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,248,238,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,248,238,0.14) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(120% 90% at 70% 0%, #000 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 70% 0%, #000 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 65% at 78% 4%, rgba(232,198,90,0.16) 0%, rgba(196,92,38,0.08) 42%, transparent 72%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />
    </div>
  );
}
