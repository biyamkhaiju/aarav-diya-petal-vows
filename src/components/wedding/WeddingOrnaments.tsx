import type { ReactNode } from "react";

export function LotusEmblem({ className = "h-7 w-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 84 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="lotusGold" x1="12" y1="4" x2="72" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="55%" stopColor="currentColor" stopOpacity="0.88" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      {/* Center petal */}
      <path
        d="M42 4C36 14 35 28 42 38C49 28 48 14 42 4Z"
        fill="url(#lotusGold)"
      />
      {/* Inner side petals */}
      <path
        d="M39 37C29 29 24 18 26 9C33 15 38 25 39 37Z"
        fill="url(#lotusGold)"
        opacity="0.92"
      />
      <path
        d="M45 37C55 29 60 18 58 9C51 15 46 25 45 37Z"
        fill="url(#lotusGold)"
        opacity="0.92"
      />
      {/* Outer side petals */}
      <path
        d="M35 39C22 36 13 28 11 19C20 22 29 29 35 39Z"
        fill="url(#lotusGold)"
        opacity="0.78"
      />
      <path
        d="M49 39C62 36 71 28 73 19C64 22 55 29 49 39Z"
        fill="url(#lotusGold)"
        opacity="0.78"
      />
      {/* Base resting leaves */}
      <path
        d="M27 42C17 42 8 38 4 32C12 33 21 36 27 42Z"
        fill="url(#lotusGold)"
        opacity="0.65"
      />
      <path
        d="M57 42C67 42 76 38 80 32C72 33 63 36 57 42Z"
        fill="url(#lotusGold)"
        opacity="0.65"
      />
      <path
        d="M28 42.5Q42 46 56 42.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

export function FiligreeFlourish({ className = "h-4 w-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6 10H64C70 10 74 4 80 4C84 4 87 7 90 10C93 7 96 4 100 4C106 4 110 10 116 10H174"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.82"
      />
      <path
        d="M72 10C78 10 82 16 90 16C98 16 102 10 108 10"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.72"
      />
      <circle cx="90" cy="10" r="2.2" fill="currentColor" />
      <circle cx="58" cy="10" r="1.2" fill="currentColor" opacity="0.7" />
      <circle cx="122" cy="10" r="1.2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function WeddingRingsIcon({ className = "h-12 w-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 76 50" fill="none" aria-hidden="true" className={className}>
      <circle cx="28" cy="28" r="14.5" stroke="currentColor" strokeWidth="2.8" />
      <circle cx="28" cy="28" r="11" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx="48" cy="28" r="14.5" stroke="currentColor" strokeWidth="2.8" />
      <circle cx="48" cy="28" r="11" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <path d="M44 12L48 6L52 12L48 15L44 12Z" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

export function BuddhaEyesIcon({ className = "h-12 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 112 58" fill="none" aria-hidden="true" className={className}>
      {/* Crown & bindi / urna */}
      <circle cx="56" cy="11" r="3.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="56" cy="11" r="1.2" fill="currentColor" />
      {/* Sweeping Nepali brows */}
      <path
        d="M12 22C22 14 38 14 48 20C44 21 36 18 24 20C18 21 15 22 12 22Z"
        fill="currentColor"
        opacity="0.82"
      />
      <path
        d="M100 22C90 14 74 14 64 20C68 21 76 18 88 20C94 21 97 22 100 22Z"
        fill="currentColor"
        opacity="0.82"
      />
      {/* Left & right lotus eyes */}
      <path
        d="M16 26C25 20 39 20 47 26C39 31 25 31 16 26Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="32" cy="26" r="3.4" fill="currentColor" />
      <path
        d="M65 26C73 20 87 20 96 26C87 31 73 31 65 26Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="80" cy="26" r="3.4" fill="currentColor" />
      {/* Nepali Ek (unity) nose spiral */}
      <path
        d="M56 24C51 24 49 28 51 31C53 34 59 34 59 39C59 44 54 49 56 54"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function VenuePinIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 56" fill="none" aria-hidden="true" className={className}>
      <path
        d="M24 4C13.5 4 5 12.4 5 22.8C5 36.2 21.4 50.6 23.1 52.1C23.6 52.5 24.4 52.5 24.9 52.1C26.6 50.6 43 36.2 43 22.8C43 12.4 34.5 4 24 4Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="2.3"
      />
      <circle cx="24" cy="22" r="7" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle: ReactNode;
  inlineLotus?: boolean;
  tone?: "gold" | "umber";
}

export function SectionHeading({
  title,
  subtitle,
  inlineLotus = false,
  tone = "gold",
}: SectionHeadingProps) {
  const titleTone = tone === "gold" ? "text-gold-glow" : "text-umber-glow";
  const lineTone = tone === "gold" ? "bg-gold/60" : "bg-gold-deep/60";
  const ornamentTone = tone === "gold" ? "text-gold-light" : "text-gold-deep";

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
      {inlineLotus ? (
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <span className={`hidden h-px w-10 sm:block sm:w-16 ${lineTone}`} />
          <LotusEmblem className={`h-8 w-12 shrink-0 drop-shadow ${ornamentTone}`} />
          <h2 className={`font-[family-name:var(--font-script)] text-5xl tracking-wide sm:text-6xl md:text-7xl ${titleTone}`}>
            {title}
          </h2>
          <span className={`hidden h-px w-10 sm:block sm:w-16 ${lineTone}`} />
        </div>
      ) : (
        <>
          <div className="mb-1 flex items-center justify-center gap-3">
            <span className={`h-px w-14 sm:w-20 ${lineTone}`} />
            <LotusEmblem className={`h-8 w-12 drop-shadow ${ornamentTone}`} />
            <span className={`h-px w-14 sm:w-20 ${lineTone}`} />
          </div>
          <h2 className={`font-[family-name:var(--font-script)] text-5xl tracking-wide sm:text-6xl md:text-7xl ${titleTone}`}>
            {title}
          </h2>
        </>
      )}
      <p
        className={`mt-2 max-w-xl font-[family-name:var(--font-display)] text-lg italic leading-snug sm:text-2xl ${
          tone === "gold" ? "text-gold-light/95 [text-shadow:0_1px_12px_oklch(0.18_0.04_24_/_75%)]" : "text-umber-glow"
        }`}
      >
        {subtitle}
      </p>
      <FiligreeFlourish className={`mt-2.5 h-4 w-36 ${ornamentTone}`} />
    </div>
  );
}