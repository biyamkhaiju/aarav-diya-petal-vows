import { ChevronDown } from "lucide-react";
import heroBg from "../../assets/hero-bg.jpg";
import storyBg from "../../assets/story-bg.jpg";
import storyCouple from "../../assets/story-couple.jpg";
import { useReveal } from "../../hooks/use-reveal";
import { FiligreeFlourish, SectionHeading } from "./WeddingOrnaments";

export function HeroSection() {
  return (
    <section
      id="home"
      className="wedding-section-blend flex min-h-screen items-center"
    >
      <img
        src={heroBg}
        alt="Aarav and Diya seated beside a glowing lotus pond at golden sunset with Bhaktapur temples and golden Buddha"
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[64%_center] md:object-center"
      />

      {/* Atmospheric vignette on left to keep calligraphy luminous & legible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-dusk/75 via-dusk/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dusk via-dusk/35 to-transparent"
      />

      {/* Ambient breathing golden halos over Buddha and stone lantern */}
      <div
        aria-hidden="true"
        className="animate-halo-breathe pointer-events-none absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,oklch(0.88_0.14_76_/_34%)_0%,transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="animate-halo-breathe pointer-events-none absolute bottom-[28%] left-[4%] h-44 w-44 rounded-full bg-[radial-gradient(circle,oklch(0.86_0.16_68_/_38%)_0%,transparent_70%)] blur-xl [animation-delay:2.2s]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-28 sm:px-10 md:pb-16">
        <div className="flex max-w-md flex-col items-center text-center md:items-start md:text-left">
          <FiligreeFlourish className="animate-hero-rise mb-3 h-4 w-36 text-gold-light/90" />

          <h1 className="animate-hero-rise font-[family-name:var(--font-script)] text-7xl leading-[1.02] text-gold-glow sm:text-8xl lg:text-[7rem] [animation-delay:120ms]">
            <span className="block">Aarav</span>
            <span className="my-1.5 flex items-center justify-center gap-4 md:justify-start">
              <span className="h-px w-14 bg-gradient-to-r from-transparent via-gold-light/85 to-gold-light/40 sm:w-20" />
              <span className="font-[family-name:var(--font-display)] text-4xl italic font-normal text-gold-light sm:text-5xl">
                &amp;
              </span>
              <span className="h-px w-14 bg-gradient-to-l from-transparent via-gold-light/85 to-gold-light/40 sm:w-20" />
            </span>
            <span className="block">Diya</span>
          </h1>
        </div>
      </div>

      <a
        href="#our-story"
        aria-label="Scroll to Our Story"
        className="animate-scroll-cue absolute bottom-7 left-1/2 z-20 -translate-x-1/2 rounded-full border border-gold/45 bg-dusk/45 p-2.5 text-gold-light backdrop-blur-sm transition hover:border-gold-light hover:bg-dusk/65"
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
      className="wedding-section-blend flex min-h-screen flex-col justify-center py-24 sm:py-28"
    >
      <img
        src={storyBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dusk via-dusk/25 to-dusk/90"
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

        {/* Ornate Nepali Carved Gold Arch Frame */}
        <div className="animate-float-gentle relative mx-auto mt-10 max-w-2xl">
          {/* Outer golden carved arch rim */}
          <div className="shimmer-overlay relative overflow-hidden rounded-t-[160px] rounded-b-2xl border-[3px] border-gold/85 bg-gradient-to-b from-gold-light/80 via-gold/65 to-gold-deep/80 p-2 shadow-[0_28px_60px_-14px_oklch(0.12_0.04_24_/_78%),0_0_45px_oklch(0.84_0.11_74_/_28%)] sm:rounded-t-[210px] sm:p-2.5">
            {/* Decorative crown filigree medallion at apex */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-2 z-20 h-3 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-gold-light to-transparent opacity-90"
            />

            <div className="relative overflow-hidden rounded-t-[150px] rounded-b-xl border border-gold-light/70 sm:rounded-t-[198px]">
              <img
                src={storyCouple}
                alt="Aarav and Diya watching the golden Himalayan sunset over Bhaktapur pagodas"
                className="aspect-[16/11] w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.03]"
              />
              {/* Soft inner vignette blending the frame edges */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 shadow-[inset_0_0_32px_oklch(0.24_0.05_32_/_45%)]"
              />
            </div>
          </div>

          {/* Shimmering water glint reflection beneath the arch */}
          <div
            aria-hidden="true"
            className="animate-water-glint mx-auto mt-4 h-1.5 w-3/4 rounded-full bg-gradient-to-r from-transparent via-gold-light/65 to-transparent blur-[2px]"
          />
        </div>
      </div>
    </section>
  );
}