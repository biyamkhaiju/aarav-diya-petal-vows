import type { ReactNode } from "react";

/** Ornate carved Nepali-baroque ogee gold arch wrapping the Our Story couple portrait */
export function OrnateStoryArch({ children }: { children: ReactNode }) {
  return (
    <div className="group relative mx-auto w-[285px] sm:w-[360px] md:w-[410px]">
      {/* Subtle sunlit aura behind the carved arch */}
      <div
        aria-hidden="true"
        className="animate-halo-breathe pointer-events-none absolute -inset-4 rounded-t-[240px] bg-[radial-gradient(ellipse_at_center,oklch(0.95_0.09_74_/_58%),transparent_70%)] blur-xl"
      />

      {/* Clipped portrait inside the ogee-arched opening */}
      <div className="relative aspect-[3/3.65] w-full">
        <div
          className="shimmer-overlay absolute inset-[7.5%_8%_6.5%_8%] overflow-hidden bg-parchment shadow-[0_24px_48px_-14px_oklch(0.24_0.06_32_/_45%)]"
          style={{
            clipPath:
              "polygon(0% 100%, 0% 42%, 3% 29%, 10% 19%, 20% 12%, 33% 7%, 45% 3%, 50% 0%, 55% 3%, 67% 7%, 80% 12%, 90% 19%, 97% 29%, 100% 42%, 100% 100%)",
          }}
        >
          {children}
        </div>

        {/* Carved double gold ogee arch frame + baroque crown crest + corner scrollwork */}
        <svg
          viewBox="0 0 420 510"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full drop-shadow-[0_10px_22px_oklch(0.28_0.07_38_/_42%)]"
        >
          <defs>
            <linearGradient id="storyGoldOuter" x1="40" y1="15" x2="380" y2="495" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="oklch(0.94 0.08 82)" />
              <stop offset="32%" stopColor="oklch(0.76 0.12 72)" />
              <stop offset="55%" stopColor="oklch(0.92 0.08 80)" />
              <stop offset="82%" stopColor="oklch(0.64 0.11 64)" />
              <stop offset="100%" stopColor="oklch(0.86 0.1 76)" />
            </linearGradient>
            <linearGradient id="storyGoldInner" x1="210" y1="20" x2="210" y2="495" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="oklch(0.97 0.05 84)" />
              <stop offset="50%" stopColor="oklch(0.74 0.11 70)" />
              <stop offset="100%" stopColor="oklch(0.56 0.1 58)" />
            </linearGradient>
          </defs>

          {/* Outer sculpted ogee arch molding */}
          <path
            d="M28 482V214C28 134 86 84 152 60C181 49 198 37 210 18C222 37 239 49 268 60C334 84 392 134 392 214V482H28Z"
            stroke="url(#storyGoldOuter)"
            strokeWidth="12"
            strokeLinejoin="round"
          />
          {/* Inner recessed hairline gold molding */}
          <path
            d="M40 472V218C40 144 93 97 156 73C184 62 199 51 210 34C221 51 236 62 264 73C327 97 380 144 380 218V472H40Z"
            stroke="url(#storyGoldInner)"
            strokeWidth="2.5"
          />
          {/* Outer hairline highlight */}
          <path
            d="M20 489V212C20 128 80 76 148 51C177 40 196 28 210 8C224 28 243 40 272 51C340 76 400 128 400 212V489H20Z"
            stroke="url(#storyGoldInner)"
            strokeWidth="2"
            opacity="0.88"
          />

          {/* Top carved lotus-acanthus crown crest */}
          <path
            d="M210 4C204 14 196 21 182 27C194 30 202 33 210 41C218 33 226 30 238 27C224 21 216 14 210 4Z"
            fill="url(#storyGoldOuter)"
          />
          <path
            d="M168 45C178 36 194 31 210 24C226 31 242 36 252 45"
            stroke="url(#storyGoldInner)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="210" cy="21" r="3.6" fill="oklch(0.98 0.04 84)" />

          {/* Upper shoulder scrolls */}
          <path
            d="M62 126C48 112 52 92 68 88C80 85 88 94 84 104M358 126C372 112 368 92 352 88C340 85 332 94 336 104"
            stroke="url(#storyGoldOuter)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Lower left & right carved baroque corner curls */}
          <path
            d="M22 444C8 446 6 468 20 482C32 494 56 494 64 480M398 444C412 446 414 468 400 482C388 494 364 494 356 480"
            stroke="url(#storyGoldOuter)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Soft painted cherry blossoms nestled at left & right frame corners */}
          <g opacity="0.94">
            <circle cx="34" cy="466" r="8" fill="oklch(0.84 0.12 356)" />
            <circle cx="46" cy="476" r="6.5" fill="oklch(0.91 0.08 4)" />
            <circle cx="26" cy="478" r="6" fill="oklch(0.79 0.13 352)" />
            <circle cx="34" cy="466" r="2.2" fill="oklch(0.86 0.14 78)" />
            <circle cx="386" cy="466" r="8" fill="oklch(0.84 0.12 356)" />
            <circle cx="374" cy="476" r="6.5" fill="oklch(0.91 0.08 4)" />
            <circle cx="394" cy="478" r="6" fill="oklch(0.79 0.13 352)" />
            <circle cx="386" cy="466" r="2.2" fill="oklch(0.86 0.14 78)" />
            <circle cx="384" cy="144" r="6" fill="oklch(0.88 0.1 356)" />
            <circle cx="394" cy="154" r="4.8" fill="oklch(0.93 0.06 6)" />
            <circle cx="384" cy="144" r="1.6" fill="oklch(0.86 0.14 78)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/** Ornate cusped parchment arch card with top medallion finial & filigree border */
export function OrnateEventArchCard({
  children,
  delayClass,
  visible,
}: {
  children: ReactNode;
  delayClass: string;
  visible: boolean;
}) {
  return (
    <article
      style={{ transitionDelay: delayClass }}
      className={`group relative mx-auto w-full max-w-[270px] transition-all duration-700 hover:-translate-y-1.5 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 280 390"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full drop-shadow-[0_18px_32px_oklch(0.24_0.06_32_/_34%)]"
      >
        <defs>
          <linearGradient id="parchmentFill" x1="140" y1="22" x2="140" y2="384" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.972 0.025 76)" stopOpacity="0.93" />
            <stop offset="55%" stopColor="oklch(0.936 0.038 72)" stopOpacity="0.91" />
            <stop offset="100%" stopColor="oklch(0.892 0.052 66)" stopOpacity="0.94" />
          </linearGradient>
          <linearGradient id="archStroke" x1="20" y1="16" x2="260" y2="384" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.76 0.1 72)" />
            <stop offset="50%" stopColor="oklch(0.62 0.095 62)" />
            <stop offset="100%" stopColor="oklch(0.78 0.095 74)" />
          </linearGradient>
        </defs>

        {/* Scalloped cusped arch body */}
        <path
          d="M16 376V128C16 96 32 76 54 68C64 46 92 34 118 32C127 26 135 20 140 12C145 20 153 26 162 32C188 34 216 46 226 68C248 76 264 96 264 128V376H16Z"
          fill="url(#parchmentFill)"
          stroke="url(#archStroke)"
          strokeWidth="2.4"
        />
        {/* Inner filigree line */}
        <path
          d="M26 366V132C26 104 40 87 60 80C69 60 95 49 120 47C128 42 135 36 140 28C145 36 152 42 160 47C185 49 211 60 220 80C240 87 254 104 254 132V366H26Z"
          stroke="url(#archStroke)"
          strokeWidth="1.2"
          opacity="0.78"
        />
        {/* Carved top medallion finial */}
        <path
          d="M140 2C136 9 131 14 125 18C131 20 136 22 140 27C144 22 149 20 155 18C149 14 144 9 140 2Z"
          fill="url(#archStroke)"
        />
        {/* Bottom filigree corner accents */}
        <path
          d="M34 358H58M34 358V334M246 358H222M246 358V334"
          stroke="url(#archStroke)"
          strokeWidth="1.2"
          opacity="0.7"
        />
        <circle cx="140" cy="358" r="2.2" fill="oklch(0.62 0.095 62)" opacity="0.75" />
      </svg>

      <div className="relative z-10 flex min-h-[345px] flex-col items-center justify-center px-7 pb-9 pt-14 text-center text-parchment-foreground sm:min-h-[372px]">
        {children}
      </div>
    </article>
  );
}

/** Ornate pointed-bracket parchment RSVP plaque matching the reference mockup */
export function OrnateRsvpPlaque({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative inline-flex min-w-[300px] items-center justify-center px-10 py-4 transition-all duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-deep sm:min-w-[375px] sm:px-14 sm:py-4.5"
    >
      <svg
        viewBox="0 0 420 74"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full drop-shadow-[0_12px_26px_oklch(0.24_0.06_32_/_34%)] transition-all duration-300 group-hover:drop-shadow-[0_16px_30px_oklch(0.32_0.08_46_/_45%)]"
      >
        <defs>
          <linearGradient id="plaqueBg" x1="210" y1="4" x2="210" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.975 0.024 76)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="oklch(0.905 0.048 68)" stopOpacity="0.94" />
          </linearGradient>
          <linearGradient id="plaqueEdge" x1="8" y1="37" x2="412" y2="37" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.68 0.095 66)" />
            <stop offset="50%" stopColor="oklch(0.8 0.105 74)" />
            <stop offset="100%" stopColor="oklch(0.68 0.095 66)" />
          </linearGradient>
        </defs>
        {/* Pointed scalloped-bracket outer plaque */}
        <path
          d="M6 37C18 33 26 24 30 12C35 8 42 6 52 6H368C378 6 385 8 390 12C394 24 402 33 414 37C402 41 394 50 390 62C385 66 378 68 368 68H52C42 68 35 66 30 62C26 50 18 41 6 37Z"
          fill="url(#plaqueBg)"
          stroke="url(#plaqueEdge)"
          strokeWidth="2.2"
        />
        {/* Inner hairline bracket border */}
        <path
          d="M17 37C27 33 34 25 37 16C41 13 46 12 54 12H366C374 12 379 13 383 16C386 25 393 33 403 37C393 41 386 49 383 58C379 61 374 62 366 62H54C46 62 41 61 37 58C34 49 27 41 17 37Z"
          stroke="url(#plaqueEdge)"
          strokeWidth="1"
          opacity="0.72"
        />
      </svg>
      <span className="relative z-10 inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-xl italic font-semibold tracking-wide text-parchment-foreground sm:text-2xl">
        {children}
      </span>
    </button>
  );
}