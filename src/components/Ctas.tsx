import { IconPhone, IconWhatsApp } from "@/components/Icons";
import { site } from "@/content/site";

type Tone = "gold" | "ghost" | "night";

const tones: Record<Tone, string> = {
  gold: "bg-linear-to-b from-gold-bright to-gold text-ink shadow-[0_10px_24px_-12px_rgba(139,107,20,0.7)] hover:from-[#f0d06a] hover:to-[#d4ad2e]",
  ghost:
    "border border-gold/40 bg-white/10 text-cream backdrop-blur-sm hover:border-gold hover:bg-white/16",
  night:
    "border border-gold/35 bg-ink text-cream hover:border-gold hover:bg-[#241e16]",
};

export function CallLink({
  tone = "gold",
  className = "",
  label,
}: {
  tone?: Tone;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={`tel:${site.phoneTel}`}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-wide transition ${tones[tone]} ${className}`}
    >
      <IconPhone className="size-5" />
      {label ?? `Llamar ${site.phoneDisplay}`}
    </a>
  );
}

export function WhatsAppLink({
  tone = "ghost",
  className = "",
  label = "WhatsApp",
}: {
  tone?: Tone;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-wide transition ${tones[tone]} ${className}`}
    >
      <IconWhatsApp className="size-5" />
      {label}
    </a>
  );
}
