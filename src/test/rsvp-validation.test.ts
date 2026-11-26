import { describe, expect, it } from "vitest";
import { validateRsvpDraft } from "../components/wedding/RsvpDialog";

describe("validateRsvpDraft", () => {
  it("rejects empty names", () => {
    const res = validateRsvpDraft({
      name: " ",
      contact: "guest@example.com",
      attending: "yes",
      guests: "2",
      events: "both",
      blessing: "",
    });
    expect(res.error).toBe("Please enter your full name.");
  });

  it("rejects out-of-range guest counts when attending", () => {
    const res = validateRsvpDraft({
      name: "Sita Gurung",
      contact: "+977 9841000000",
      attending: "yes",
      guests: "15",
      events: "wedding",
      blessing: "",
    });
    expect(res.error).toBe("Number of guests must be between 1 and 10.");
  });

  it("accepts a valid attending response", () => {
    const res = validateRsvpDraft({
      name: "Ananya Shrestha",
      contact: "ananya@example.com",
      attending: "yes",
      guests: "3",
      events: "both",
      blessing: "Wishing you endless joy!",
    });
    expect(res.error).toBeNull();
    expect(res.guestCount).toBe(3);
  });

  it("allows declining with zero guests", () => {
    const res = validateRsvpDraft({
      name: "Rohan Thapa",
      contact: "rohan@example.com",
      attending: "no",
      guests: "0",
      events: "both",
      blessing: "Warm wishes from afar.",
    });
    expect(res.error).toBeNull();
    expect(res.guestCount).toBe(0);
  });
});