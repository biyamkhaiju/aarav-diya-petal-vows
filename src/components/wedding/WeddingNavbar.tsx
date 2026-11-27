import { useEffect, useState } from "react";
import { Menu, Share2, X } from "lucide-react";
import { toast } from "sonner";
import { LotusEmblem } from "./WeddingOrnaments";

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "our-story", label: "Our Story" },
  { id: "events", label: "Events" },
  { id: "gallery", label: "Gallery" },
  { id: "rsvp", label: "RSVP" },
] as const;

export type SectionId = (typeof NAV_ITEMS)[number]["id"];

interface WeddingNavbarProps {
  activeSection: SectionId;
}

export function WeddingNavbar({ activeSection }: WeddingNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: "Aarav & Diya — Wedding Invitation",
      text: "Join Aarav & Diya on Sunday, 12th Magh 2082 (Jan 25, 2026) at The Heritage Palace, Bhaktapur, Nepal.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Invitation link copied to share with loved ones");
    } catch {
      toast.success("Copy this page URL to share the invitation");
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-dusk/55 shadow-[0_10px_30px_-10px_oklch(0.12_0.03_24_/_75%)] backdrop-blur-md"
          : "bg-gradient-to-b from-dusk/45 via-dusk/10 to-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-8"
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-gold-light transition-opacity hover:opacity-90"
        >
          <LotusEmblem className="h-6 w-10 text-gold-light transition-transform duration-500 group-hover:scale-105" />
          <span className="h-5 w-px bg-gold/45" aria-hidden="true" />
          <span className="font-[family-name:var(--font-script)] text-2xl tracking-wide text-gold-glow sm:text-3xl">
            SainaX
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative pb-1.5 font-[family-name:var(--font-display)] text-lg tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "font-semibold text-gold-light [text-shadow:0_0_18px_oklch(0.86_0.12_74_/_65%)]"
                      : "text-foreground/85 hover:text-gold-light"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-light to-transparent transition-all duration-400 ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share wedding invitation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-dusk/35 text-gold-light transition-all duration-300 hover:border-gold/70 hover:bg-gold/15"
          >
            <Share2 className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-dusk/35 text-gold-light transition-all duration-300 hover:border-gold/70 md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-gold/25 bg-dusk/95 px-6 py-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col items-center gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-1 font-[family-name:var(--font-display)] text-xl tracking-wide ${
                      isActive ? "font-semibold text-gold-light underline decoration-gold/70 underline-offset-4" : "text-foreground/85"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}