import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BackgroundMusicPlayer } from "../components/wedding/BackgroundMusicPlayer";
import { FallingFlorals } from "../components/wedding/FallingFlorals";
import { HeroSection, OurStorySection } from "../components/wedding/HeroAndStory";
import {
  EventsSection,
  GallerySection,
  RsvpSection,
  ThankYouSection,
} from "../components/wedding/EventsGalleryRsvp";
import { RsvpDialog, type RsvpSubmission } from "../components/wedding/RsvpDialog";
import {
  NAV_ITEMS,
  WeddingNavbar,
  type SectionId,
} from "../components/wedding/WeddingNavbar";

const RSVP_STORAGE_KEY = "aarav-diya-rsvp-v1";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarav & Diya — Wedding Invitation | SainaX" },
      {
        name: "description",
        content:
          "Celebrate the wedding of Aarav & Diya on Sunday, 12th Magh 2082 (Jan 25, 2026) at The Heritage Palace, Bhaktapur, Nepal.",
      },
      { property: "og:title", content: "Aarav & Diya — Wedding Invitation" },
      {
        property: "og:description",
        content:
          "Two souls, one journey, forever together. Join us at The Heritage Palace, Bhaktapur, Nepal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [rsvp, setRsvp] = useState<RsvpSubmission | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(RSVP_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as RsvpSubmission;
        if (parsed && typeof parsed.name === "string") {
          setRsvp(parsed);
        }
      }
    } catch {
      // Ignore storage read errors in private browsing
    }
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const probeY = window.scrollY + window.innerHeight * 0.38;
      let current: SectionId = "home";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= probeY) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  const handleSaveRsvp = (submission: RsvpSubmission) => {
    setRsvp(submission);
    try {
      window.localStorage.setItem(RSVP_STORAGE_KEY, JSON.stringify(submission));
    } catch {
      // Ignore storage write errors
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <FallingFlorals />
      <BackgroundMusicPlayer />
      <WeddingNavbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <OurStorySection />
        <EventsSection />
        <GallerySection />
        <RsvpSection rsvp={rsvp} onOpenRsvp={() => setRsvpOpen(true)} />
        <ThankYouSection />
      </main>
      <RsvpDialog
        open={rsvpOpen}
        onOpenChange={setRsvpOpen}
        existing={rsvp}
        onSave={handleSaveRsvp}
      />
    </div>
  );
}
