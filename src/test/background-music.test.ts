import { describe, expect, it } from "vitest";
import {
  WEDDING_SONG_END_SEC,
  WEDDING_SONG_START_SEC,
  shouldLoopWeddingClip,
} from "../components/wedding/BackgroundMusicPlayer";

describe("wedding song clip", () => {
  it("plays the requested 0–60 second range", () => {
    expect(WEDDING_SONG_START_SEC).toBe(0);
    expect(WEDDING_SONG_END_SEC).toBe(60);
  });

  it("loops only after the 60 second endpoint", () => {
    expect(shouldLoopWeddingClip(59.9)).toBe(false);
    expect(shouldLoopWeddingClip(60)).toBe(true);
  });
});
