"use client";

import type { CSSProperties, ReactNode } from "react";
import { useRef } from "react";

type LiquidGlassProps = {
  children: ReactNode;
  className?: string;
  intensity?: "quiet" | "medium" | "hero";
  organic?: boolean;
};

export function LiquidGlass({ children, className = "", intensity = "medium", organic = true }: LiquidGlassProps) {
  const ref = useRef<HTMLDivElement>(null);

  function move(event: React.PointerEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const tiltX = (y - 50) * -0.08;
    const tiltY = (x - 50) * 0.08;
    element.style.setProperty("--glass-x", `${x}%`);
    element.style.setProperty("--glass-y", `${y}%`);
    element.style.setProperty("--glass-tilt-x", `${tiltX}deg`);
    element.style.setProperty("--glass-tilt-y", `${tiltY}deg`);
  }

  function leave() {
    const element = ref.current;
    if (!element) return;
    element.style.setProperty("--glass-x", "50%");
    element.style.setProperty("--glass-y", "35%");
    element.style.setProperty("--glass-tilt-x", "0deg");
    element.style.setProperty("--glass-tilt-y", "0deg");
  }

  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      data-intensity={intensity}
      className={`liquid-glass ${organic ? "liquid-organic" : ""} ${className}`}
      style={
        {
          "--glass-x": "50%",
          "--glass-y": "35%",
          "--glass-tilt-x": "0deg",
          "--glass-tilt-y": "0deg"
        } as CSSProperties
      }
    >
      <div className="liquid-glass__inner">{children}</div>
    </div>
  );
}

export function LiquidFilterDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" className="absolute">
      <filter id="liquid-distortion">
        <feTurbulence type="fractalNoise" baseFrequency="0.018 0.035" numOctaves="2" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}
