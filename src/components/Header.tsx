import Image from "next/image";
import { CallLink } from "@/components/Ctas";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-[#14110e]/88 text-cream backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-full bg-black ring-1 ring-gold/40"
            priority
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-tight sm:text-xl">
              Cerra<span className="text-gold-bright">Volt</span>
            </span>
            <span className="hidden text-[0.68rem] uppercase tracking-[0.18em] text-cream/65 sm:block">
              {site.type}
            </span>
          </span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm text-cream/80 lg:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-gold-bright">
              {item.label}
            </a>
          ))}
        </nav>
        <CallLink className="hidden sm:inline-flex" />
        <a
          href={`tel:${site.phoneTel}`}
          className="inline-flex min-h-10 items-center rounded-full bg-linear-to-b from-gold-bright to-gold px-3.5 text-sm font-semibold text-ink sm:hidden"
        >
          Llamar
        </a>
      </div>
    </header>
  );
}
