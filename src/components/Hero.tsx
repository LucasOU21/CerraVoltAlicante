import { CallLink, WhatsAppLink } from "@/components/Ctas";
import { IconPhone } from "@/components/Icons";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="grain relative isolate overflow-hidden bg-dusk text-cream"
    >
      <AlicanteSky />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-black/25 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-bright">
            {site.type}
          </p>
          <h1 className="font-display text-[2.7rem] leading-[0.95] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Cerra<span className="text-gold-bright">Volt</span>
          </h1>
          <p className="mt-5 max-w-xl font-display text-xl leading-snug text-cream/90 sm:text-2xl">
            {site.slogan.toUpperCase()}
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg">
            Cerrajero y electricista en Alicante. Abrimos puertas, reparamos
            cerraduras y resolvemos la luz: una sola llamada, a cualquier hora.
          </p>
          <p className="mt-6 font-script text-3xl text-gold-bright sm:text-4xl">
            {site.flourish}
          </p>
          <div className="gold-rule mt-2 w-44" />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CallLink className="w-full sm:w-auto" />
            <WhatsAppLink className="w-full sm:w-auto" />
          </div>
        </div>

        <aside className="rounded-[1.6rem] border border-gold/45 bg-[#0f0c09]/72 p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)] backdrop-blur-sm sm:p-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
            Contacto directo
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-3 flex items-center gap-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl"
          >
            <span className="grid size-12 place-items-center rounded-full bg-linear-to-b from-gold-bright to-gold text-ink">
              <IconPhone className="size-6" />
            </span>
            {site.phoneDisplay}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Mismo número para llamada y WhatsApp. Te atendemos en{" "}
            <strong className="font-semibold text-cream">{site.province}</strong>.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2 text-center text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-cream/80">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-2 py-3">
              24 horas
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-2 py-3">
              {site.province}
            </div>
          </div>
          <p className="mt-5 font-script text-2xl text-gold-bright">
            {site.tagline}
          </p>
        </aside>
      </div>
    </section>
  );
}

function AlicanteSky() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-linear-to-b from-[#1a100c] via-[#7a3218] to-[#f0a24a]" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-[#0d1c22] via-[#163944] to-transparent" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <radialGradient id="sun" cx="72%" cy="28%" r="22%">
            <stop offset="0%" stopColor="#ffe7a3" />
            <stop offset="45%" stopColor="#ffb14a" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffb14a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="1040" cy="250" r="220" fill="url(#sun)" />
        <path
          d="M0 640c80-20 140-70 230-62 90 8 130 70 220 62s150-78 250-70 140 80 240 68 160-90 260-70 160 70 240 58v284H0Z"
          fill="#12262c"
        />
        <path
          d="M820 560l40-90 28 18 22-46 90 118H820Z"
          fill="#1a1410"
        />
        <path
          d="M858 488h118v28H858Zm16-36h22v36h-22zm48-20h26v56h-26zm-70 48h18v-40h18v40"
          fill="#241810"
        />
        <g fill="#0d1614">
          <path d="M90 610c40-90 70-90 70 0H90Z" />
          <path d="M70 610c18-46 34-46 34 0H70Z" />
          <path d="M1280 600c48-110 86-110 86 0h-86Z" />
          <path d="M1256 600c20-52 40-52 40 0h-40Z" />
        </g>
        <path d="M0 720h1440v180H0Z" fill="#0a1518" />
      </svg>
    </div>
  );
}
