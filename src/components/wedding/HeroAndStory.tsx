import { ChevronDown } from "lucide-react";
import heroBg from "../../assets/hero-sunlit.jpg";
import storyBg from "../../assets/story-sunlit.jpg";
import storyCouple from "../../assets/story-couple.jpg";
import { useReveal } from "../../hooks/use-reveal";
import { OrnateStoryArch } from "./OrnateFrames";
import { FiligreeFlourish, SectionHeading } from "./WeddingOrnaments";

export function HeroSection() {
  return (
    <section id="home" className="wedding-section-blend flex min-h-screen items-center">
      <img
        src={heroBg}
        alt="Aarav and Diya beside a glowing lotus pond, with a golden Buddha and Bhaktapur temples"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[66%_center] md:object-center"
      />

      {/* Light rose-gold shading keeps the artwork bright and the calligraphy readable. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-dusk/60 via-dusk/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-dusk/55 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-dusk/35 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-blossom/10 mix-blend-soft-light"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-24 sm:px-10">
        <div className="flex max-w-md flex-col items-center text-center md:items-start md:text-left">
          <FiligreeFlourish className="animate-hero-rise mb-3 h-4 w-36 text-gold-light/90" />

          <h1 className="animate-hero-rise font-[family-name:var(--font-script)] text-7xl leading-[0.98] text-gold-glow sm:text-8xl lg:text-[7rem] [animation-delay:120ms]">
            <span className="block">Aarav</span>
            <span className="my-1 flex items-center justify-center gap-4 md:justify-start">
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
        className="pointer-events-none absolute inset-0 bg-blossom/10 mix-blend-soft-light"
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
