import {
  IconBolt,
  IconClock,
  IconPeople,
  IconShield,
} from "@/components/Icons";
import { site } from "@/content/site";

const icons = [IconClock, IconShield, IconBolt, IconPeople] as const;

export function Trust() {
  return (
    <section id="confianza" className="bg-dusk px-4 py-16 text-cream sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-gold/40 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
            Por qué CerraVolt
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Un oficio de puerta y otro de{" "}
            <span className="text-gold-bright">corriente</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/72 sm:text-lg">
            No inventamos reseñas ni direcciones. Lo que sí hacemos es
            atenderte en Alicante, a cualquier hora, con un número que
            realmente descuelga.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {site.trust.map((item, index) => {
            const Icon = icons[index];
            return (
              <li
                key={item.title}
                className="rounded-[1.4rem] border border-white/10 bg-white/4 p-5 sm:p-6"
              >
                <span className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold-bright">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70 sm:text-base">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
