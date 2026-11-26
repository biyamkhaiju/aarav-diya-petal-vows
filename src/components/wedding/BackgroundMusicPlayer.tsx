import { useCallback, useEffect, useRef, useState } from "react";
import { Music2, Pause, Volume2 } from "lucide-react";

export const WEDDING_SONG_VIDEO_ID = "bJNLrJ7MUzM";
export const WEDDING_SONG_START_SEC = 0;
export const WEDDING_SONG_END_SEC = 60;

/** Pure helper used by the player loop & unit tests to keep playback within 0–60s */
export function shouldLoopWeddingClip(currentTimeSec: number): boolean {
  return Number.isFinite(currentTimeSec) && currentTimeSec >= WEDDING_SONG_END_SEC;
}

interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  mute: () => void;
  unMute: () => void;
  setVolume: (volume: number) => void;
  getCurrentTime: () => number;
  getPlayerState: () => number;
  destroy: () => void;
}

interface YTNamespace {
  Player: new (
    elementId: string,
    options: {
      height: string;
      width: string;
      videoId: string;
      playerVars: Record<string, number | string>;
      events: {
        onReady?: (event: { target: YTPlayerInstance }) => void;
        onStateChange?: (event: { data: number; target: YTPlayerInstance }) => void;
      };
    },
  ) => YTPlayerInstance;
  PlayerState: {
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
  };
}

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export function BackgroundMusicPlayer() {
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const userPausedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  const startClip = useCallback((player: YTPlayerInstance | null) => {
    if (!player) return;
    try {
      player.unMute();
      player.setVolume(75);
      const now = player.getCurrentTime();
      if (!Number.isFinite(now) || now < WEDDING_SONG_START_SEC || now >= WEDDING_SONG_END_SEC) {
        player.seekTo(WEDDING_SONG_START_SEC, true);
      }
      player.playVideo();
    } catch {
      // Ignore transient YouTube IFrame readiness races
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    let loopTimer: number | undefined;
    let autoplayCheckTimer: number | undefined;

    const initPlayer = () => {
      if (cancelled || !window.YT?.Player || playerRef.current) return;

      playerRef.current = new window.YT.Player("wedding-yt-audio-player", {
        height: "1",
        width: "1",
        videoId: WEDDING_SONG_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          start: WEDDING_SONG_START_SEC,
          end: WEDDING_SONG_END_SEC,
          origin: window.location.origin,
        },
        events: {
          onReady: ({ target }) => {
            if (cancelled) return;
            setReady(true);
            target.unMute();
            target.setVolume(75);
            target.seekTo(WEDDING_SONG_START_SEC, true);
            target.playVideo();

            autoplayCheckTimer = window.setTimeout(() => {
              if (cancelled || userPausedRef.current) return;
              const state = target.getPlayerState();
              if (state === window.YT?.PlayerState.PLAYING) {
                setIsPlaying(true);
              }
            }, 700);
          },
          onStateChange: ({ data, target }) => {
            if (cancelled || !window.YT) return;
            if (data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            } else if (data === window.YT.PlayerState.ENDED && !userPausedRef.current) {
              target.seekTo(WEDDING_SONG_START_SEC, true);
              target.playVideo();
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      const prevReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prevReady?.();
        initPlayer();
      };
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.head.appendChild(script);
      }
    }

    // Unlock audio automatically on the guest's very first interaction if browser blocked autoplay
    const unlockAudio = () => {
      if (userPausedRef.current || !playerRef.current) return;
      const state = playerRef.current.getPlayerState();
      if (state !== window.YT?.PlayerState.PLAYING) {
        startClip(playerRef.current);
      }
    };

    window.addEventListener("pointerdown", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio, { passive: true });
    window.addEventListener("touchstart", unlockAudio, { passive: true });

    loopTimer = window.setInterval(() => {
      const player = playerRef.current;
      if (!player || userPausedRef.current) return;
      if (player.getPlayerState() === window.YT?.PlayerState.PLAYING) {
        const current = player.getCurrentTime();
        if (shouldLoopWeddingClip(current)) {
          player.seekTo(WEDDING_SONG_START_SEC, true);
          player.playVideo();
        }
      }
    }, 250);

    return () => {
      cancelled = true;
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      if (loopTimer !== undefined) window.clearInterval(loopTimer);
      if (autoplayCheckTimer !== undefined) window.clearTimeout(autoplayCheckTimer);
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [startClip]);

  const togglePlayback = () => {
    const player = playerRef.current;
    if (!player) return;
    if (isPlaying) {
      userPausedRef.current = true;
      player.pauseVideo();
      setIsPlaying(false);
    } else {
      userPausedRef.current = false;
      startClip(player);
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Offscreen YouTube audio player (0–60s clip) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 right-0 h-px w-px overflow-hidden opacity-0"
      >
        <div id="wedding-yt-audio-player" />
      </div>

      {/* Discreet golden parchment music control pill */}
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause wedding song" : "Play wedding song"}
        aria-pressed={isPlaying}
        title="Phoolko Aankhama (0:00–1:00)"
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-gold-deep/45 bg-parchment/90 px-3.5 py-2 text-xs font-medium text-parchment-foreground shadow-[0_10px_28px_-8px_oklch(0.24_0.06_32_/_45%)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-parchment sm:bottom-5 sm:right-5"
      >
        {isPlaying ? (
          <Pause className="h-3.5 w-3.5 text-gold-deep" />
        ) : ready ? (
          <Volume2 className="h-3.5 w-3.5 text-gold-deep" />
        ) : (
          <Music2 className="h-3.5 w-3.5 text-gold-deep" />
        )}
        <span className="font-[family-name:var(--font-display)] text-sm italic font-semibold tracking-wide">
          {isPlaying ? "Phoolko Aankhama" : "Play Song"}
        </span>
      </button>
    </>
  );
}