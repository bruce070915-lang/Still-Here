"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "opening", label: "Opening", full: "Opening Sequence" },
  { id: "logline", label: "Logline", full: "Logline" },
  { id: "story", label: "Story", full: "The Story" },
  { id: "loop", label: "Loop", full: "Object Loop" },
  { id: "non-sync", label: "Sound", full: "Non-Sync" },
  { id: "visual-mood", label: "Mood", full: "Visual Mood" },
  { id: "dna", label: "Color", full: "References / Color" },
  { id: "visual-language", label: "Visual", full: "Visual Language" },
  { id: "director", label: "Director", full: "Director" },
  { id: "actor", label: "Actor", full: "Lead Actor" },
  { id: "production", label: "Info", full: "Production" },
  { id: "closing", label: "Closing", full: "Closing" }
];

export function FloatingNav() {
  const [activeId, setActiveId] = useState(navItems[0].id);
  const [progress, setProgress] = useState(0);
  const activeIndex = navItems.findIndex((item) => item.id === activeId);
  const activeItem = navItems[activeIndex] ?? navItems[0];

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setProgress(Math.min(1, Math.max(0, scrollY / maxScroll)));

      let activeSection = "";
      const viewportAnchor = window.innerHeight * 0.5;
      let lastPassed = navItems[0].id;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportAnchor) {
          lastPassed = item.id;
        }
        if (rect.top <= viewportAnchor && rect.bottom > viewportAnchor) {
          activeSection = item.id;
          break;
        }
      }

      setActiveId(activeSection || lastPassed);
    }

    function requestUpdate() {
      if (frame) return;
      frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  function goTo(id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    if (window.__stillHereLenis) {
      window.__stillHereLenis.scrollTo(target, { offset: 0 });
      return;
    }
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav
      className="floating-nav scene-index"
      aria-label="Scene index"
      style={{ "--scene-progress": progress } as CSSProperties}
    >
      <button type="button" onClick={() => goTo("opening")} className="nav-mark" aria-label="Go to opening sequence">
        <span>STILL HERE</span>
        <i>Scene Index</i>
      </button>
      <div className="nav-items">
        {navItems.map(({ id, label, full }, index) => (
          <button
            key={id}
            type="button"
            onClick={() => goTo(id)}
            aria-label={`Go to ${full}`}
            aria-current={activeId === id ? "step" : undefined}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <i>{label}</i>
          </button>
        ))}
      </div>
      <div className="nav-current" aria-live="polite">
        <span>{String(activeIndex + 1).padStart(2, "0")}</span>
        <b>{activeItem.full}</b>
      </div>
      <span className="nav-invasion nav-invasion--note" aria-hidden="true">We’re done.</span>
      <span className="nav-invasion nav-invasion--photo" aria-hidden="true" />
      <span className="nav-invasion nav-invasion--bag" aria-hidden="true" />
    </nav>
  );
}
