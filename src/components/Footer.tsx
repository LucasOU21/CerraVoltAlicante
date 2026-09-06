import Image from "next/image";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-dusk px-4 py-10 text-cream sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt=""
            width={48}
            height={48}
            className="size-12 rounded-full bg-black ring-1 ring-gold/35"
          />
          <div>
            <p className="font-display text-xl font-semibold">
              Cerra<span className="text-gold-bright">Volt</span>
            </p>
            <p className="text-sm text-cream/65">
              {site.type} · {site.province}
            </p>
          </div>
        </div>
        <div className="text-sm text-cream/70">
          <a href={`tel:${site.phoneTel}`} className="block hover:text-gold-bright">
            {site.phoneDisplay}
          </a>
          <p className="mt-1">{site.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
