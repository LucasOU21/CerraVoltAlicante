import { IconPhone, IconWhatsApp } from "@/components/Icons";
import { site } from "@/content/site";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/25 bg-[#14110e]/94 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${site.phoneTel}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-linear-to-b from-gold-bright to-gold text-sm font-semibold text-ink"
        >
          <IconPhone className="size-5" />
          Llamar
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold/40 bg-[#1f7a46] text-sm font-semibold text-white"
        >
          <IconWhatsApp className="size-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
