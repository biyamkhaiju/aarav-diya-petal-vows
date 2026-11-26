import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  swayAmp: number;
  swayFreq: number;
  swayPhase: number;
  rot: number;
  rotSpeed: number;
  flip: number;
  flipSpeed: number;
  opacity: number;
  kind: "sakura" | "lotus" | "mote";
  hueIndex: number;
}

const PETAL_PALETTES = [
  { main: "rgba(255, 206, 218, 0.92)", edge: "rgba(244, 152, 178, 0.72)" },
  { main: "rgba(252, 186, 205, 0.88)", edge: "rgba(232, 128, 160, 0.7)" },
  { main: "rgba(255, 228, 224, 0.9)", edge: "rgba(248, 178, 186, 0.65)" },
  { main: "rgba(248, 164, 190, 0.86)", edge: "rgba(218, 108, 146, 0.68)" },
] as const;

function createParticle(width: number, height: number, spawnAbove: boolean): Petal {
  const roll = Math.random();
  const kind: Petal["kind"] = roll < 0.58 ? "sakura" : roll < 0.8 ? "lotus" : "mote";
  const depth = 0.45 + Math.random() * 0.85;

  if (kind === "mote") {
    return {
      x: Math.random() * width,
      y: spawnAbove ? height + Math.random() * 60 : Math.random() * height,
      size: 1.8 + Math.random() * 2.8,
      speedY: -(0.18 + Math.random() * 0.35),
      speedX: (Math.random() - 0.5) * 0.25,
      swayAmp: 12 + Math.random() * 22,
      swayFreq: 0.006 + Math.random() * 0.01,
      swayPhase: Math.random() * Math.PI * 2,
      rot: 0,
      rotSpeed: 0,
      flip: 0,
      flipSpeed: 0.03 + Math.random() * 0.04,
      opacity: 0.3 + Math.random() * 0.5,
      kind,
      hueIndex: 0,
    };
  }

  return {
    x: Math.random() * (width + 160) - 80,
    y: spawnAbove ? -24 - Math.random() * 140 : Math.random() * height,
    size: (kind === "lotus" ? 11 : 8) * depth + Math.random() * 5,
    speedY: (0.48 + Math.random() * 0.82) * depth,
    speedX: 0.16 + Math.random() * 0.42,
    swayAmp: (18 + Math.random() * 34) * depth,
    swayFreq: 0.008 + Math.random() * 0.014,
    swayPhase: Math.random() * Math.PI * 2,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.024,
    flip: Math.random() * Math.PI * 2,
    flipSpeed: 0.018 + Math.random() * 0.028,
    opacity: 0.42 + depth * 0.42,
    kind,
    hueIndex: Math.floor(Math.random() * PETAL_PALETTES.length),
  };
}

function drawPetal(ctx: CanvasRenderingContext2D, p: Petal, time: number) {
  ctx.save();
  ctx.translate(p.x, p.y);

  if (p.kind === "mote") {
    const pulse = 0.55 + 0.45 * Math.sin(time * 0.002 + p.swayPhase);
    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 3.2);
    grad.addColorStop(0, `rgba(255, 232, 168, ${p.opacity * pulse})`);
    grad.addColorStop(0.5, `rgba(255, 198, 120, ${p.opacity * pulse * 0.45})`);
    grad.addColorStop(1, "rgba(255, 198, 120, 0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, p.size * 3.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  const palette = PETAL_PALETTES[p.hueIndex] ?? PETAL_PALETTES[0];
  ctx.rotate(p.rot);
  const tumble = 0.35 + 0.65 * Math.abs(Math.cos(p.flip));
  ctx.scale(1, tumble);
  ctx.globalAlpha = p.opacity;

  const r = p.size;
  const grad = ctx.createLinearGradient(-r, -r, r, r);
  grad.addColorStop(0, palette.main);
  grad.addColorStop(1, palette.edge);
  ctx.fillStyle = grad;

  ctx.beginPath();
  if (p.kind === "sakura") {
    // Notched cherry blossom petal
    ctx.moveTo(0, r * 0.9);
    ctx.bezierCurveTo(-r * 0.95, r * 0.35, -r * 0.85, -r * 0.72, -r * 0.22, -r * 0.95);
    ctx.lineTo(0, -r * 0.68);
    ctx.lineTo(r * 0.22, -r * 0.95);
    ctx.bezierCurveTo(r * 0.85, -r * 0.72, r * 0.95, r * 0.35, 0, r * 0.9);
  } else {
    // Pointed silky lotus petal
    ctx.moveTo(0, r);
    ctx.bezierCurveTo(-r * 0.75, r * 0.4, -r * 0.68, -r * 0.55, 0, -r);
    ctx.bezierCurveTo(r * 0.68, -r * 0.55, r * 0.75, r * 0.4, 0, r);
  }
  ctx.closePath();
  ctx.fill();

  // Delicate inner highlight vein
  ctx.strokeStyle = "rgba(255, 246, 248, 0.38)";
  ctx.lineWidth = 0.6;
  ctx.beginPath();
  ctx.moveTo(0, r * 0.65);
  ctx.quadraticCurveTo(r * 0.08, 0, 0, -r * 0.55);
  ctx.stroke();

  ctx.restore();
}

export function FallingFlorals() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let rafId = 0;
    const pointer = { x: -999, y: -999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const count = width < 640 ? 34 : 58;
    const particles: Petal[] = Array.from({ length: count }, () =>
      createParticle(width, height, false),
    );

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const onResize = () => resize();
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 16.667, 2.2);
      lastTime = now;

      if (!document.hidden) {
        ctx.clearRect(0, 0, width, height);
        const windGust = Math.sin(now * 0.00045) * 0.28 + 0.14;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (!p) continue;

          if (p.kind === "mote") {
            p.y += p.speedY * dt;
            p.x += (p.speedX + Math.sin(now * p.swayFreq * 0.12 + p.swayPhase) * 0.22) * dt;
            if (p.y < -30) {
              particles[i] = createParticle(width, height, true);
              particles[i]!.kind = "mote";
            }
          } else {
            const sway = Math.cos(now * p.swayFreq * 0.1 + p.swayPhase) * 0.55;
            p.y += p.speedY * dt;
            p.x += (p.speedX + windGust + sway) * dt;
            p.rot += p.rotSpeed * dt;
            p.flip += p.flipSpeed * dt;

            // Subtle breeze parting around cursor
            const dx = p.x - pointer.x;
            const dy = p.y - pointer.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < 11000 && distSq > 1) {
              const push = (1 - Math.sqrt(distSq) / 105) * 1.4 * dt;
              p.x += (dx / Math.sqrt(distSq)) * push;
              p.y += (dy / Math.sqrt(distSq)) * push * 0.45;
            }

            if (p.y > height + 36 || p.x > width + 110) {
              particles[i] = createParticle(width, height, true);
              if (particles[i]!.kind === "mote") particles[i]!.kind = "sakura";
            }
          }

          drawPetal(ctx, p, now);
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 h-full w-full"
    />
  );
}