import {
  IconBulb,
  IconHouseCircuit,
  IconPadlock,
  IconTools,
} from "@/components/Icons";
import { site } from "@/content/site";

const icons = [IconPadlock, IconTools, IconBulb, IconHouseCircuit] as const;

export function Services() {
  return (
    <section id="servicios" className="bg-paper px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-gold/50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Carta de servicios
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Lo que resolvemos en{" "}
            <span className="text-gold-deep">Alicante</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Cuatro urgencias habituales. Sin menú interminable: si tu caso es
            otro, escríbenos y te decimos si podemos ir.
          </p>
        </div>

        <ol className="mt-10 divide-y divide-gold/20 border-y border-gold/20">
          {site.services.map((service, index) => {
            const Icon = icons[index];
            return (
              <li
                key={service.id}
                className="grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-3xl font-semibold text-gold/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="grid size-14 place-items-center rounded-full bg-linear-to-b from-gold-bright to-gold text-ink shadow-[0_8px_20px_-10px_rgba(139,107,20,0.8)]">
                    <Icon className="size-7" />
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                    {service.lead}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-soft">
                    {service.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
