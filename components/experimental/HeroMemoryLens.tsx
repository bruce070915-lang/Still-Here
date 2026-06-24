"use client";

import type { CSSProperties } from "react";
import { useRef } from "react";

type HeroMemoryLensProps = {
  reality: string;
  memory: string;
};

export function HeroMemoryLens({ reality, memory }: HeroMemoryLensProps) {
  const lensRef = useRef<HTMLDivElement>(null);

  function move(event: React.PointerEvent<HTMLDivElement>) {
    const host = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - host.left;
    const y = event.clientY - host.top;
    lensRef.current?.style.setProperty("--lens-x", `${x}px`);
    lensRef.current?.style.setProperty("--lens-y", `${y}px`);
  }

  return (
    <div className="hero-lens-stage" onPointerMove={move}>
      <div className="hero-reality" style={{ backgroundImage: `url(${reality})` }} />
      <div
        ref={lensRef}
        className="hero-memory-lens"
        style={
          {
            "--lens-x": "68vw",
            "--lens-y": "42vh",
            backgroundImage: `url(${memory})`
          } as CSSProperties
        }
      >
        <span className="lens-label">MEMORY LAYER</span>
      </div>
      <div className="hero-lens-scanline" />
    </div>
  );
}
