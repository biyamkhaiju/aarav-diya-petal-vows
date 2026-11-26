import { useState } from "react";
import { Heart } from "lucide-react";
import eventsBg from "../../assets/events-bg.jpg";
import galleryHands from "../../assets/gallery-hands.jpg";
import galleryLantern from "../../assets/gallery-lantern.jpg";
import galleryTemple from "../../assets/gallery-temple.jpg";
import thankyouBg from "../../assets/thankyou-bg.jpg";
import { useReveal } from "../../hooks/use-reveal";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import type { RsvpSubmission } from "./RsvpDialog";
import {
  BuddhaEyesIcon,
  LotusEmblem,
  SectionHeading,
  VenuePinIcon,
  WeddingRingsIcon,
} from "./WeddingOrnaments";

const EVENT_CARDS = [
  {
    title: "Wedding",
    icon: WeddingRingsIcon,
    lines: ["Sunday, 12th", "Magh 2082", "(Jan 25, 2026)"],
  },
  {
    title: "Reception",
    icon: BuddhaEyesIcon,
    lines: ["4:00 PM", "Onwards"],
  },
  {
    title: "Venue",
    icon: VenuePinIcon,
    lines: ["The Heritage Palace", "Bhaktapur, Nepal"],
  },
] as const;

const GALLERY_PHOTOS = [
  {
    src: galleryHands,
    alt: "Bride and groom holding hands in crimson and gold wedding attire",
    caption: "Promises woven in crimson & gold",
    tiltClass: "md:-rotate-6 md:translate-y-2",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: galleryLantern,
    alt: "Warm glowing antique Nepali palace lantern surrounded by rose petals",
    caption: "Lantern light at twilight",
    tiltClass: "md:-rotate-1 md:-translate-y-2",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: galleryTemple,
    alt: "Traditional Bhaktapur pagoda temple framed by pink cherry blossoms at sunset",
    caption: "The timeless spires of Bhaktapur",
    tiltClass: "md:rotate-6 md:translate-y-1",
    aspectClass: "aspect-[3/4]",
  },
] as const;

export function EventsSection() {
  const { ref, visible } = useReveal(0.14);

  return (
    <section
      id="events"
      className="wedding-section-blend flex min-h-screen flex-col justify-center py-24 sm:py-28"
    >
      <img
        src={eventsBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dusk/90 via-dusk/25 to-dusk/90"
      />

      <div ref={ref} className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div
          className={`transition-all duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <SectionHeading
            title="Events"
            subtitle="Let's celebrate this beautiful journey together."
            inlineLotus
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-6">
          {EVENT_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                style={{ transitionDelay: `${index * 140}ms` }}
                className={`parchment-arch shimmer-overlay group relative overflow-hidden rounded-t-[135px] rounded-b-xl p-2.5 transition-all duration-700 hover:-translate-y-2 ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
              >
                <div className="flex h-full min-h-[290px] flex-col items-center justify-center rounded-t-[125px] rounded-b-lg border border-gold-deep/45 px-5 py-10 text-center">
                  <div className="mb-5 text-gold-deep transition-transform duration-500 group-hover:scale-110">
                    <Icon />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-wide text-parchment-foreground">
                    {card.title}
                  </h3>
                  <div className="mt-3 space-y-0.5 font-[family-name:var(--font-sans)] text-[15px] leading-relaxed text-parchment-foreground/85">
                    {card.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  const { ref, visible } = useReveal(0.14);
  const [selected, setSelected] = useState<(typeof GALLERY_PHOTOS)[number] | null>(null);

  return (
    <section
      id="gallery"
      className="wedding-section-blend flex min-h-screen flex-col justify-center py-24 sm:py-28"
    >
      <img
        src={eventsBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full -scale-x-100 object-cover object-bottom"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dusk/90 via-dusk/35 to-dusk/92"
      />

      <div ref={ref} className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div
          className={`transition-all duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <SectionHeading title="Gallery" subtitle="Moments that last forever." inlineLotus />
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 items-center gap-8 sm:grid-cols-3 sm:gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <button
              key={photo.caption}
              type="button"
              onClick={() => setSelected(photo)}
              style={{ transitionDelay: `${index * 140}ms` }}
              aria-label={`View photo: ${photo.caption}`}
              className={`polaroid-frame group relative w-full cursor-pointer rounded-md p-2.5 pb-4 text-left transition-all duration-700 hover:z-20 hover:rotate-0 hover:scale-105 ${photo.tiltClass} ${
                visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-[2px] border border-gold-deep/40">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`${photo.aspectClass} w-full object-cover transition-transform duration-700 group-hover:scale-105`}
                />
              </div>
              <span className="mt-2.5 block text-center font-[family-name:var(--font-display)] text-sm italic text-parchment-foreground/80">
                {photo.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="parchment-arch max-w-2xl rounded-2xl border-2 border-gold/80 p-3 sm:p-4">
          {selected && (
            <>
              <DialogTitle className="sr-only">{selected.caption}</DialogTitle>
              <DialogDescription className="sr-only">{selected.alt}</DialogDescription>
              <img
                src={selected.src}
                alt={selected.alt}
                className="max-h-[75vh] w-full rounded-xl object-contain"
              />
              <p className="mt-2 text-center font-[family-name:var(--font-display)] text-xl italic text-parchment-foreground">
                {selected.caption}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

interface RsvpSectionProps {
  rsvp: RsvpSubmission | null;
  onOpenRsvp: () => void;
}

export function RsvpSection({ rsvp, onOpenRsvp }: RsvpSectionProps) {
  const { ref, visible } = useReveal(0.15);

  return (
    <section
      id="rsvp"
      className="wedding-section-blend flex min-h-screen flex-col justify-center py-24 sm:py-28"
    >
      <img
        src={eventsBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dusk/92 via-dusk/35 to-dusk/85"
      />
      <div
        aria-hidden="true"
        className="animate-halo-breathe pointer-events-none absolute bottom-[22%] left-[8%] h-48 w-48 rounded-full bg-[radial-gradient(circle,oklch(0.86_0.16_68_/_40%)_0%,transparent_70%)] blur-xl"
      />

      <div
        ref={ref}
        className={`relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center transition-all duration-1000 sm:px-8 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <SectionHeading
          title="RSVP"
          subtitle={
            <>
              Your presence will make our day
              <br />
              even more special.
            </>
          }
        />

        <div className="mt-9">
          <button
            type="button"
            onClick={onOpenRsvp}
            className="rsvp-plaque shimmer-overlay group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-9 py-4 font-[family-name:var(--font-display)] text-xl italic font-medium tracking-wide transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_-8px_oklch(0.14_0.04_24_/_70%),0_0_36px_oklch(0.9_0.12_74_/_55%)] sm:px-12 sm:text-2xl"
          >
            <span>
              {rsvp ? "Update your response" : "Let us know you're coming"}
            </span>
            <Heart className="h-5 w-5 text-crimson transition-transform duration-300 group-hover:scale-125" />
          </button>

          {rsvp && (
            <p className="mt-4 font-[family-name:var(--font-display)] text-lg italic text-gold-light [text-shadow:0_1px_12px_oklch(0.16_0.04_24_/_80%)]">
              {rsvp.attending === "yes"
                ? `RSVP received for ${rsvp.name} (${rsvp.guests} ${rsvp.guests === 1 ? "guest" : "guests"}). We can't wait to celebrate with you!`
                : `Thank you for letting us know, ${rsvp.name}. Sending you warm love.`}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export function ThankYouSection() {
  const { ref, visible } = useReveal(0.15);

  return (
    <section
      id="thank-you"
      className="wedding-section-blend flex min-h-screen items-center py-24 sm:py-28"
    >
      <img
        src={thankyouBg}
        alt="Radiant golden Buddha statue framed by blooming pink cherry blossoms and floating lotuses"
        className="absolute inset-0 h-full w-full object-cover object-[76%_center] md:object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-dusk/85 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-parchment/60 via-parchment/25 to-transparent sm:from-parchment/35 sm:via-transparent"
      />
      <div
        aria-hidden="true"
        className="animate-halo-breathe pointer-events-none absolute right-[10%] top-[16%] h-72 w-72 rounded-full bg-[radial-gradient(circle,oklch(0.92_0.14_78_/_40%)_0%,transparent_70%)] blur-2xl"
      />

      <div
        ref={ref}
        className={`relative z-10 mx-auto w-full max-w-6xl px-6 transition-all duration-1000 sm:px-10 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex max-w-xl flex-col items-center text-center md:pr-12">
          <div className="mb-1 flex items-center gap-3">
            <span className="h-px w-12 bg-parchment-foreground/45 sm:w-16" />
            <LotusEmblem className="h-8 w-12 text-parchment-foreground/80" />
            <span className="h-px w-12 bg-parchment-foreground/45 sm:w-16" />
          </div>

          <h2 className="font-[family-name:var(--font-script)] text-6xl text-umber-glow sm:text-7xl md:text-8xl">
            Thank You
          </h2>

          <p className="mt-2 font-[family-name:var(--font-display)] text-xl italic text-umber-glow sm:text-2xl">
            for being a part of our special day.
          </p>

          <div className="mt-8 space-y-1">
            <p className="font-[family-name:var(--font-display)] text-lg italic text-umber-glow sm:text-xl">
              With love,
            </p>
            <p className="inline-flex items-center gap-2 font-[family-name:var(--font-script)] text-4xl text-umber-glow sm:text-5xl">
              <span>Aarav &amp; Diya</span>
              <Heart className="h-5 w-5 text-crimson" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}