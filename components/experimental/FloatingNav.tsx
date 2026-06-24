"use client";

const navItems = [
  ["opening", "Opening Sequence"],
  ["logline", "Logline"],
  ["story", "The Story"],
  ["loop", "Object Loop"],
  ["non-sync", "Non-Sync"],
  ["visual-mood", "Mood"],
  ["dna", "References / Color"],
  ["visual-language", "Visual Language"],
  ["director", "Director"],
  ["actor", "Lead Actor"],
  ["production", "Production"],
  ["closing", "Closing"]
];

export function FloatingNav() {
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
    <nav className="floating-nav" aria-label="Section navigation">
      <button type="button" onClick={() => goTo("opening")} className="nav-mark" aria-label="Go to opening">
        STILL HERE
      </button>
      <div className="nav-items">
        {navItems.map(([id, label], index) => (
          <button key={id} type="button" onClick={() => goTo(id)} aria-label={`Go to ${label}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <i>{label}</i>
          </button>
        ))}
      </div>
    </nav>
  );
}
