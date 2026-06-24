"use client";

import type { CSSProperties } from "react";
import { useRef } from "react";

export function KineticTitle({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLHeadingElement>(null);

  function move(event: React.PointerEvent<HTMLHeadingElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const width = 72 + x * 24;
    const weight = 650 + x * 210;
    ref.current?.style.setProperty("--title-wdth", `${width}`);
    ref.current?.style.setProperty("--title-wght", `${weight}`);
  }

  return (
    <h1
      ref={ref}
      onPointerMove={move}
      className={`kinetic-title ${compact ? "kinetic-title--compact" : ""}`}
      style={{ "--title-wdth": 86, "--title-wght": 820 } as CSSProperties}
    >
      <span className="title-still">STILL</span>
      <span className="title-here">HERE</span>
    </h1>
  );
}
