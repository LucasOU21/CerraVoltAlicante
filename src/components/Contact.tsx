import { CallLink, WhatsAppLink } from "@/components/Ctas";
import { WhatsAppForm } from "@/components/WhatsAppForm";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contacto" className="bg-paper px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-gold/50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Contacto
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Habla ahora. El mapa es{" "}
            <span className="text-gold-deep">Alicante</span>, no una calle
            inventada.
          </h2>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[1.6rem] border border-gold/20 bg-cream shadow-[0_20px_50px_-28px_rgba(27,22,16,0.35)] lg:grid-cols-2">
          <div className="relative min-h-[280px] bg-sand lg:min-h-[520px]">
            <iframe
              title="Mapa de Alicante"
              src={site.map.embed}
              className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 max-w-[16rem] rounded-2xl border border-gold/30 bg-cream/95 p-3 shadow-lg">
              <p className="font-display text-lg font-semibold">{site.map.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {site.map.caption}
              </p>
              <a
                href={site.map.link}
                className="mt-2 inline-block text-sm font-semibold text-gold-deep underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir mapa
              </a>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Enviar un mensaje
            </p>
            <p className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Llama, escribe o deja los datos y te abrimos WhatsApp
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <CallLink className="flex-1" />
              <WhatsAppLink tone="night" className="flex-1" />
            </div>
            <WhatsAppForm />
          </div>
        </div>
      </div>
    </section>
  );
}
