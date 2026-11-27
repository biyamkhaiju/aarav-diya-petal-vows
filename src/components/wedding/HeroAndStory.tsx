import { ChevronDown } from "lucide-react";
import heroBg from "../../assets/hero-sunlit.jpg";
import storyBg from "../../assets/story-sunlit.jpg";
import storyCouple from "../../assets/story-couple.jpg";
import { useReveal } from "../../hooks/use-reveal";
import { OrnateStoryArch } from "./OrnateFrames";
import { FiligreeFlourish, SectionHeading } from "./WeddingOrnaments";

const HERO_SPARKLES = [
  { top: "18%", left: "62%", size: 14, delay: "0s" },
  { top: "30%", left: "78%", size: 10, delay: "0.8s" },
  { top: "12%", left: "84%", size: 12, delay: "1.6s" },
  { top: "46%", left: "70%", size: 9, delay: "2.2s" },
  { top: "24%", left: "8%", size: 11, delay: "1.1s" },
  { top: "62%", left: "40%", size: 8, delay: "2.7s" },
  { top: "8%", left: "38%", size: 10, delay: "0.4s" },
] as const;

export function HeroSection() {
  return (
    <section id="home" className="wedding-section-blend flex min-h-screen items-center">
      <img
        src={heroBg}
        alt="Aarav and Diya beside a glowing lotus pond, with a golden Buddha and Bhaktapur temples"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[66%_center] brightness-[1.06] saturate-[1.2] md:object-center"
      />

      {/* Slowly turning golden sun rays behind the Buddha */}
      <div
        aria-hidden="true"
        className="sunset-rays animate-rays-spin pointer-events-none absolute left-[72%] top-[32%] h-[130vmax] w-[130vmax] mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="animate-halo-breathe pointer-events-none absolute left-[72%] top-[32%] h-[42vmax] w-[42vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--lantern)_0%,transparent_65%)] opacity-60 mix-blend-screen"
      />

      {/* Warm red-gold shading keeps the artwork rich and the calligraphy readable. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-dusk/55 via-dusk/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-dusk/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-crimson/35 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-blossom/15 mix-blend-soft-light"
      />

      {HERO_SPARKLES.map((s) => (
        <svg
          key={`${s.top}-${s.left}`}
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="animate-sparkle pointer-events-none absolute text-gold-light"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }}
        >
          <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="currentColor" />
        </svg>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-24 sm:px-10">
        <div className="flex max-w-md flex-col items-center text-center md:items-start md:text-left">
          <p className="animate-hero-rise mb-2 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.35em] text-gold-light/90">
            Together with their families
          </p>
          <FiligreeFlourish className="animate-hero-rise mb-3 h-4 w-36 text-gold-light/90" />

          <h1 className="animate-hero-rise font-[family-name:var(--font-script)] text-7xl leading-[0.98] sm:text-8xl lg:text-[7rem] [animation-delay:120ms]">
            <span className="text-gold-shimmer block pr-4">Aarav</span>
            <span className="my-1 flex items-center justify-center gap-4 md:justify-start">
              <span className="h-px w-14 bg-gradient-to-r from-transparent via-gold-light/85 to-gold-light/40 sm:w-20" />
              <span className="font-[family-name:var(--font-display)] text-4xl italic font-normal text-gold-light sm:text-5xl">
                &amp;
              </span>
              <span className="h-px w-14 bg-gradient-to-l from-transparent via-gold-light/85 to-gold-light/40 sm:w-20" />
            </span>
            <span className="text-gold-shimmer block pr-4">Diya</span>
          </h1>

          <p className="animate-hero-rise mt-5 font-[family-name:var(--font-display)] text-xl italic text-gold-glow sm:text-2xl [animation-delay:260ms]">
            request the honour of your presence
          </p>
          <div className="animate-hero-rise mt-4 flex items-center gap-3 font-[family-name:var(--font-display)] text-gold-light [animation-delay:380ms]">
            <span className="text-lg sm:text-xl">12th Magh 2082</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="text-lg sm:text-xl">Jan 25, 2026</span>
          </div>
          <a
            href="#rsvp"
            className="shimmer-overlay animate-hero-rise relative mt-6 overflow-hidden rounded-full border border-gold-light/70 bg-crimson/70 px-7 py-2.5 font-[family-name:var(--font-display)] text-lg text-gold-light shadow-[0_8px_28px_-6px_var(--crimson)] backdrop-blur-sm transition hover:bg-crimson/90 [animation-delay:500ms]"
          >
            Join the celebration ♡
          </a>
        </div>
      </div>

      <a
        href="#our-story"
        aria-label="Scroll to Our Story"
        className="animate-scroll-cue absolute bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-full border border-gold/45 bg-dusk/25 p-2 text-gold-light backdrop-blur-sm transition hover:border-gold-light hover:bg-dusk/45"
      >
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
}

export function OurStorySection() {
  const { ref, visible } = useReveal(0.15);

  return (
    <section
      id="our-story"
      className="wedding-section-blend flex min-h-screen flex-col justify-center py-16 sm:py-20"
    >
      <img
        src={storyBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dusk/50 via-dusk/5 to-dusk/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-blossom/15 mix-blend-soft-light"
      />

      <div
        ref={ref}
        className={`relative z-10 mx-auto w-full max-w-5xl px-5 transition-all duration-1000 sm:px-8 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <SectionHeading
          title="Our Story"
          subtitle={
            <>
              Two souls, one journey,
              <br />
              forever together.
            </>
          }
        />

        <div className="animate-float-gentle mx-auto mt-7 w-fit sm:mt-9">
          <OrnateStoryArch>
            <img
              src={storyCouple}
              alt="Aarav and Diya watching the golden Himalayan sunset over Bhaktapur pagodas"
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
            />
          </OrnateStoryArch>
        </div>
      </div>
    </section>
  );
}
