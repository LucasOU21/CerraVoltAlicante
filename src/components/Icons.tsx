import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function IconPadlock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="6" y="10" width="12" height="10" rx="2" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" />
      <circle cx="12" cy="15" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTools(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14.5 5.5 8 12l-2 6 6-2 6.5-6.5" />
      <path d="M16.5 3.5a2.2 2.2 0 0 1 3 3L18 8" />
      <path d="m9 15-4 4" />
    </svg>
  );
}

export function IconBulb(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.4 10.9c.5.4.9 1 .9 1.6V16h5v-.5c0-.6.4-1.2.9-1.6A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

export function IconHouseCircuit(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m4 11 8-7 8 7" />
      <path d="M6 10.5V20h12v-9.5" />
      <path d="M10 20v-5h4v5" />
      <path d="M9 13.5h2l1 2 2-3h1" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.2L15 15" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 6v6c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5V6l-7-3Z" />
      <path d="m9.2 12 1.9 1.9 3.7-3.8" />
    </svg>
  );
}

export function IconBolt(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 3 6 13h5l-1 8 8-11h-5l0-7Z" />
    </svg>
  );
}

export function IconPeople(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="2.3" />
      <circle cx="16" cy="9" r="2" />
      <path d="M4.5 18c.4-2.8 2.6-4.3 4.6-4.3s4.1 1.5 4.5 4.3" />
      <path d="M13.4 14.2c1.4-.4 3.2.3 4.1 2.8" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 3.8h8A2.2 2.2 0 0 1 18.2 6v12A2.2 2.2 0 0 1 16 20.2H8A2.2 2.2 0 0 1 5.8 18V6A2.2 2.2 0 0 1 8 3.8Z" />
      <path d="M10 17.4h4" />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.04 3.1A8.9 8.9 0 0 0 4.3 16.3L3 21l4.8-1.26A8.9 8.9 0 1 0 12.04 3.1Zm5.2 12.74c-.22.62-1.28 1.18-1.78 1.26-.46.07-1.04.1-1.68-.1-.39-.13-.88-.28-1.52-.55-2.68-1.16-4.42-3.86-4.56-4.04-.13-.18-1.1-1.46-1.1-2.79 0-1.32.7-1.97.94-2.24.24-.27.53-.34.7-.34h.5c.16 0 .38-.06.6.46.22.54.76 1.86.82 2 .07.13.1.29.02.46-.08.18-.13.29-.26.45-.13.16-.28.35-.4.47-.13.13-.27.27-.12.53.16.27.7 1.15 1.5 1.86 1.03.91 1.9 1.2 2.16 1.33.27.13.42.11.58-.07.16-.18.67-.78.85-1.05.18-.27.35-.22.58-.13.24.08 1.5.71 1.76.84.26.13.43.2.5.31.06.11.06.64-.16 1.26Z" />
    </svg>
  );
}
