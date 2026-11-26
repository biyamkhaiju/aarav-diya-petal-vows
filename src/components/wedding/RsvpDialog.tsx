import { useEffect, useState, type FormEvent } from "react";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { LotusEmblem } from "./WeddingOrnaments";

export interface RsvpSubmission {
  name: string;
  contact: string;
  attending: "yes" | "no";
  guests: number;
  events: "both" | "wedding" | "reception";
  blessing: string;
  submittedAt: string;
}

export interface RsvpDraft {
  name: string;
  contact: string;
  attending: "yes" | "no";
  guests: string;
  events: "both" | "wedding" | "reception";
  blessing: string;
}

export function validateRsvpDraft(draft: RsvpDraft): {
  error: string | null;
  guestCount: number;
} {
  if (draft.name.trim().length < 2) {
    return { error: "Please enter your full name.", guestCount: 1 };
  }
  if (draft.contact.trim().length < 5) {
    return { error: "Please share an email address or phone number.", guestCount: 1 };
  }
  if (draft.attending === "yes") {
    const parsed = Number(draft.guests);
    if (!Number.isInteger(parsed) || parsed < 1 || parsed > 10) {
      return { error: "Number of guests must be between 1 and 10.", guestCount: 1 };
    }
    return { error: null, guestCount: parsed };
  }
  return { error: null, guestCount: 0 };
}

interface RsvpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  existing: RsvpSubmission | null;
  onSave: (submission: RsvpSubmission) => void;
}

export function RsvpDialog({ open, onOpenChange, existing, onSave }: RsvpDialogProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [guests, setGuests] = useState("2");
  const [events, setEvents] = useState<"both" | "wedding" | "reception">("both");
  const [blessing, setBlessing] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setError(null);
    if (existing) {
      setName(existing.name);
      setContact(existing.contact);
      setAttending(existing.attending);
      setGuests(String(Math.max(1, existing.guests)));
      setEvents(existing.events);
      setBlessing(existing.blessing);
    }
  }, [open, existing]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = validateRsvpDraft({ name, contact, attending, guests, events, blessing });
    if (result.error) {
      setError(result.error);
      return;
    }

    const payload: RsvpSubmission = {
      name: name.trim(),
      contact: contact.trim(),
      attending,
      guests: result.guestCount,
      events,
      blessing: blessing.trim(),
      submittedAt: new Date().toISOString(),
    };

    onSave(payload);
    onOpenChange(false);
    toast.success(
      attending === "yes"
        ? `Thank you, ${payload.name}! We can't wait to celebrate with you.`
        : `Thank you for letting us know, ${payload.name}. You'll be in our hearts.`,
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="parchment-arch max-h-[90vh] max-w-md overflow-y-auto rounded-3xl border-2 border-gold/75 p-6 sm:p-8">
        <DialogHeader className="items-center text-center">
          <LotusEmblem className="mx-auto h-7 w-11 text-gold-deep" />
          <DialogTitle className="font-[family-name:var(--font-script)] text-4xl font-normal text-parchment-foreground">
            Celebrate With Us
          </DialogTitle>
          <DialogDescription className="font-[family-name:var(--font-display)] text-base italic text-muted-foreground">
            Sunday, 12th Magh 2082 · The Heritage Palace, Bhaktapur
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-2 space-y-4">
          <div>
            <label htmlFor="rsvp-name" className="mb-1 block text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Full Name
            </label>
            <input
              id="rsvp-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ananya Shrestha"
              className="w-full rounded-xl border border-gold-deep/35 bg-parchment/85 px-3.5 py-2.5 text-sm text-parchment-foreground outline-none transition focus:border-gold-deep focus:ring-2 focus:ring-gold/40"
            />
          </div>

          <div>
            <label htmlFor="rsvp-contact" className="mb-1 block text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Email or Phone
            </label>
            <input
              id="rsvp-contact"
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="ananya@example.com or +977 98..."
              className="w-full rounded-xl border border-gold-deep/35 bg-parchment/85 px-3.5 py-2.5 text-sm text-parchment-foreground outline-none transition focus:border-gold-deep focus:ring-2 focus:ring-gold/40"
            />
          </div>

          <fieldset>
            <legend className="mb-1.5 block text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Will you attend?
            </legend>
            <div className="grid grid-cols-2 gap-2.5">
              {(
                [
                  { value: "yes", label: "Joyfully Accepts" },
                  { value: "no", label: "Regretfully Declines" },
                ] as const
              ).map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setAttending(option.value)}
                  className={`rounded-xl border px-3 py-2 text-sm transition ${
                    attending === option.value
                      ? "border-crimson bg-crimson text-gold-light shadow-sm"
                      : "border-gold-deep/35 bg-parchment/70 text-parchment-foreground hover:border-gold-deep"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </fieldset>

          {attending === "yes" && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="rsvp-guests" className="mb-1 block text-xs font-medium tracking-wider uppercase text-muted-foreground">
                  Guests (1–10)
                </label>
                <input
                  id="rsvp-guests"
                  type="number"
                  min={1}
                  max={10}
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full rounded-xl border border-gold-deep/35 bg-parchment/85 px-3.5 py-2 text-sm text-parchment-foreground outline-none transition focus:border-gold-deep focus:ring-2 focus:ring-gold/40"
                />
              </div>
              <div>
                <label htmlFor="rsvp-events" className="mb-1 block text-xs font-medium tracking-wider uppercase text-muted-foreground">
                  Attending
                </label>
                <select
                  id="rsvp-events"
                  value={events}
                  onChange={(e) => setEvents(e.target.value as RsvpDraft["events"])}
                  className="w-full rounded-xl border border-gold-deep/35 bg-parchment/85 px-3 py-2 text-sm text-parchment-foreground outline-none transition focus:border-gold-deep focus:ring-2 focus:ring-gold/40"
                >
                  <option value="both">Wedding & Reception</option>
                  <option value="wedding">Wedding Only</option>
                  <option value="reception">Reception Only</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="rsvp-blessing" className="mb-1 block text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Blessings for Aarav & Diya (Optional)
            </label>
            <textarea
              id="rsvp-blessing"
              rows={3}
              value={blessing}
              onChange={(e) => setBlessing(e.target.value)}
              placeholder="Write a warm wish for the couple..."
              className="w-full resize-none rounded-xl border border-gold-deep/35 bg-parchment/85 px-3.5 py-2 text-sm text-parchment-foreground outline-none transition focus:border-gold-deep focus:ring-2 focus:ring-gold/40"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm font-medium text-destructive">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="shimmer-overlay relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-crimson px-6 py-3 font-[family-name:var(--font-display)] text-lg font-medium tracking-wide text-gold-light shadow-md transition hover:brightness-110"
          >
            <span>{existing ? "Update Your RSVP" : "Send Your RSVP"}</span>
            <Heart className="h-4 w-4 fill-current" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}