"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { filmReferences, type FilmReference } from "@/data/filmReferences";
import { productionInfo } from "@/data/productionInfo";
import { siteContent, visualLanguage } from "@/data/siteContent";
import { loopObjects, storyChapters } from "@/data/storyChapters";
import { DirectorProfile } from "@/components/experimental/DirectorProfile";
import { FilmReferenceCard } from "@/components/experimental/FilmReferenceCard";
import { FilmReferenceModal } from "@/components/experimental/FilmReferenceModal";
import { FloatingNav } from "@/components/experimental/FloatingNav";
import { HeroMemoryLens } from "@/components/experimental/HeroMemoryLens";
import { KineticTitle } from "@/components/experimental/KineticTitle";
import { LeadActorProfile } from "@/components/experimental/LeadActorProfile";
import { LiquidFilterDefs } from "@/components/experimental/LiquidGlass";
import { SectionLabel, SectionShell } from "@/components/experimental/SectionShell";
import { SoundTimeline } from "@/components/experimental/SoundTimeline";
import { StoryChapter } from "@/components/experimental/StoryChapter";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

gsap.registerPlugin(ScrollTrigger, Flip);

export function VisualTreatment() {
  const [activeFilm, setActiveFilm] = useState<FilmReference | null>(null);
  const [flipState, setFlipState] = useState<ReturnType<typeof Flip.getState> | null>(null);
  const [themeName, setThemeName] = useState("Original Look");
  const [soundReady, setSoundReady] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.88,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 82%", end: "bottom 30%", toggleActions: "play none none reverse" }
          }
        );
      });

      gsap.to(".title-still", {
        fontVariationSettings: "'wdth' 58, 'wght' 920",
        scrollTrigger: { trigger: "#opening", start: "top top", end: "bottom top", scrub: true }
      });

      gsap.to(".title-here", {
        xPercent: 4,
        yPercent: -3,
        scrollTrigger: { trigger: "#opening", start: "top top", end: "bottom top", scrub: true }
      });

      gsap.utils.toArray<HTMLElement>(".chapter-panel").forEach((chapter, index) => {
        gsap.from(chapter, {
          clipPath: index % 2 === 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
          duration: 1.15,
          ease: "expo.out",
          scrollTrigger: { trigger: chapter, start: "top 80%", toggleActions: "play none none reverse" }
        });
      });

      gsap.utils.toArray<HTMLElement>(".mood-frame").forEach((frame, index) => {
        gsap.fromTo(
          frame,
          {
            clipPath: "inset(14% 18% 14% 18%)",
            yPercent: index % 2 === 0 ? 8 : -6
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            yPercent: 0,
            ease: "power3.out",
            scrollTrigger: { trigger: frame, start: "top 82%", end: "bottom 20%", scrub: true }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".reference-study-panel").forEach((panel, index) => {
        gsap.fromTo(
          panel,
          { yPercent: index % 2 === 0 ? 18 : -10, filter: "blur(14px) saturate(0.62)", clipPath: "inset(10% 8% 10% 8%)" },
          {
            yPercent: 0,
            filter: "blur(0px) saturate(1)",
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power3.out",
            scrollTrigger: { trigger: panel, start: "top 86%", end: "bottom 20%", scrub: true }
          }
        );
      });

      gsap.to(".bag-vortex", {
        scale: 1.7,
        opacity: 0.95,
        scrollTrigger: { trigger: "#loop", start: "top 62%", end: "bottom 35%", scrub: true }
      });

      gsap.utils.toArray<HTMLElement>(".reappear-object").forEach((object, index) => {
        gsap.fromTo(
          object,
          { y: 64, rotate: index % 2 ? 5 : -5, opacity: 0 },
          {
            y: 0,
            rotate: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.06,
            ease: "power4.out",
            scrollTrigger: { trigger: object, start: "top 88%", toggleActions: "play none none reverse" }
          }
        );
      });

      gsap.to(".closing-note", {
        opacity: 1,
        y: 0,
        scrollTrigger: { trigger: "#closing", start: "top 30%", end: "45% 20%", scrub: true }
      });

      gsap.to(".door-slit", {
        scaleY: 1,
        opacity: 1,
        scrollTrigger: { trigger: "#closing", start: "35% 35%", end: "75% 20%", scrub: true }
      });
    });

    return () => ctx.revert();
  }, []);

  function previewLook(film: FilmReference) {
    const root = document.documentElement;
    root.style.setProperty("--ink", film.cssTheme.ink);
    root.style.setProperty("--charcoal", film.cssTheme.charcoal);
    root.style.setProperty("--bone", film.cssTheme.bone);
    root.style.setProperty("--refrigerator", film.cssTheme.refrigerator);
    root.style.setProperty("--cold", film.cssTheme.cold);
    root.style.setProperty("--amber", film.cssTheme.amber);
    root.style.setProperty("--warning", film.cssTheme.warning);
    root.style.setProperty("--grain-opacity", film.cssTheme.grain);
    root.style.setProperty("--highlight", film.cssTheme.highlight);
    root.style.setProperty("--shadow", film.cssTheme.shadow);
    setThemeName(film.cssTheme.name);
  }

  function restoreLook() {
    const root = document.documentElement;
    ["--ink", "--charcoal", "--bone", "--refrigerator", "--cold", "--amber", "--warning", "--grain-opacity", "--highlight", "--shadow"].forEach((name) => {
      root.style.removeProperty(name);
    });
    setThemeName("Original Look");
  }

  function openFilm(film: FilmReference, element: HTMLElement) {
    setFlipState(Flip.getState(element));
    setActiveFilm(film);
  }

  function playBeep() {
    const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const audio = new AudioContextClass();
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(1240, audio.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(620, audio.currentTime + 0.12);
    gain.gain.setValueAtTime(0.0001, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.15, audio.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.22);
    oscillator.connect(gain).connect(audio.destination);
    oscillator.start();
    oscillator.stop(audio.currentTime + 0.24);
    setSoundReady(true);
  }

  return (
    <>
      <SmoothScroll />
      <LiquidFilterDefs />
      <div className="global-liquid-layer" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <FloatingNav />
      <main className="site-experience">
        <SectionShell id="opening" eyebrow="01 / Opening Sequence" tone="image" className="opening-section">
          <HeroMemoryLens reality={siteContent.assets.heroReality} memory={siteContent.assets.heroMemory} />
          <div className="opening-signal" aria-hidden="true" />
          <button type="button" onClick={playBeep} className="sound-button">
            {soundReady ? "BEEP ARMED" : "SOUND ON"}
          </button>
          <div className="opening-copy">
            <p className="microcopy">Electronic lock BEEP / Memory trapped behind liquid glass</p>
            <KineticTitle />
            <p className="opening-logline">{siteContent.logline}</p>
          </div>
        </SectionShell>

        <SectionShell id="logline" eyebrow="02 / Logline" className="logline-section">
          <div className="editorial-grid">
            <SectionLabel number="02" title="Logline" />
            <h2 className="logline-big gsap-reveal">{siteContent.logline}</h2>
            <div className="logline-visual-column gsap-reveal">
              <div className="logline-still-stack" aria-hidden="true">
                <span style={{ backgroundImage: `url(${siteContent.assets.heroReality})` }} />
              </div>
              <aside className="note-glass">
                <span>REFRIGERATOR NOTE</span>
                <p>{siteContent.noteText}</p>
              </aside>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="story" eyebrow="03 / The Story" className="story-section">
          <div className="story-intro">
            <SectionLabel number="03" title="The Story" />
            <h2 className="gsap-reveal">Six movements of refusal, return, and accumulation.</h2>
            <p className="gsap-reveal">{siteContent.shortSynopsis}</p>
          </div>
          <div className="story-rail">
            {storyChapters.map((chapter) => (
              <StoryChapter key={chapter.id} chapter={chapter} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="loop" eyebrow="04 / The Loop" className="loop-section">
          <div className="bag-vortex" />
          <SectionLabel number="04" title="The Loop / Object Reappearance" />
          <h2 className="loop-title gsap-reveal">The more he removes, the more the apartment remembers.</h2>
          <div className="object-cloud">
            {loopObjects.map((object) => (
              <article key={object.name} className="reappear-object">
                <span>{object.count}</span>
                <h3>{object.name}</h3>
                <p>{object.axis}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="non-sync" eyebrow="05 / Non-Sync" className="nonsync-section">
          <div className="split-heading">
            <SectionLabel number="05" title="Non-Sync Sound and Image" />
            <h2 className="gsap-reveal">Sound arrives like memory: early, late, and never neutral.</h2>
          </div>
          <SoundTimeline />
          <div className="nonsync-still-strip" aria-label="Non-sync sound visual references">
            {[
              ["Electronic lock", siteContent.assets.door],
              ["Coffee / note", siteContent.assets.note],
              ["Trash chute", siteContent.assets.trashChute],
              ["Bag return", siteContent.assets.bag]
            ].map(([label, image]) => (
              <figure key={label} className="nonsync-still gsap-reveal">
                <span style={{ backgroundImage: `url(${image})` }} />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="visual-mood" eyebrow="06 / Visual Style / Mood" className="visual-mood-section">
          <div className="mood-poster">
            <div className="mood-heading">
              <SectionLabel number="06" title="Visual Style / Mood" />
              <h2 className="gsap-reveal">The apartment is not haunted.</h2>
              <p className="gsap-reveal">It is emotionally contaminated by objects that should have disappeared.</p>
            </div>
            <figure className="mood-frame mood-frame--hero" style={{ backgroundImage: `url(${siteContent.assets.heroReality})` }}>
              <span>Bare apartment</span>
            </figure>
            <figure className="mood-frame mood-frame--note" style={{ backgroundImage: `url(${siteContent.assets.note})` }}>
              <span>Fridge note</span>
            </figure>
            <figure className="mood-frame mood-frame--bag" style={{ backgroundImage: `url(${siteContent.assets.bag})` }}>
              <span>Black trash bag</span>
            </figure>
            <figure className="mood-frame mood-frame--frame" style={{ backgroundImage: `url(${siteContent.assets.frame})` }}>
              <span>Face-down frame</span>
            </figure>
            <div className="mood-texture-note">
              <b>Texture</b>
              <p>Cold blue-gray light, refrigerator metal, torn paper, black plastic, exposed walls and the soft evidence of someone who has already left.</p>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="dna" eyebrow="07 / Visual References / Color Studies" className="dna-section">
          <div className="dna-heading">
            <SectionLabel number="07" title="Visual References / Color Studies" />
            <h2 className="gsap-reveal">Reference-film color, applied to STILL HERE imagery.</h2>
            <p className="dna-note gsap-reveal">
              These are not borrowed movie frames. Each reference uses this project’s apartment, objects and memory images to test color, contrast and emotional temperature.
            </p>
            <div className="theme-indicator">
              Current: {themeName}
            </div>
          </div>
          <div className="film-reference-grid">
            {filmReferences.map((film) => (
              <FilmReferenceCard key={film.id} film={film} onOpen={openFilm} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="visual-language" eyebrow="08 / Visual Language" className="visual-language-section">
          <SectionLabel number="08" title="Visual Language" />
          <h2 className="gsap-reveal">Empty rooms. Returning evidence. Refusal under glass.</h2>
          <div className="language-grid">
            {visualLanguage.map((item, index) => (
              <article key={item.title} className={`language-panel gsap-reveal ${index === 0 ? "language-panel--primary" : ""}`}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="director" eyebrow="09 / Director" className="director-section">
          <DirectorProfile />
        </SectionShell>

        <SectionShell id="actor" eyebrow="10 / Lead Actor" className="actor-section">
          <LeadActorProfile />
        </SectionShell>

        <SectionShell id="production" eyebrow="11 / Production Information" className="production-section">
          <SectionLabel number="11" title="Production Information" />
          <div className="production-file">
            {productionInfo.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <b>{value}</b>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="closing" eyebrow="12 / Closing Sequence" className="closing-section" tone="void">
          <div className="closing-atmosphere" aria-hidden="true">
            <span className="closing-door-line" />
            <span className="closing-bag-shadow" />
            <span className="closing-note-ghost">{siteContent.noteText}</span>
          </div>
          <div className="closing-final-card">
            <p className="closing-final-kicker">New York Film Academy / Non-Sync Short Film</p>
            <h2>
              <span>STILL</span>
              <span>HERE</span>
            </h2>
            <div className="closing-final-thesis">
              <span>Some things can be thrown away.</span>
              <span>Memories cannot.</span>
            </div>
            <p className="closing-final-thanks">Thank You</p>
            <div className="closing-final-credit">
              <span>Directed by Yihao Shi</span>
              <span>New York Film Academy</span>
              <span>Contact Placeholder</span>
            </div>
          </div>
        </SectionShell>
      </main>
      <FilmReferenceModal film={activeFilm} flipState={flipState} onClose={() => setActiveFilm(null)} onPreview={previewLook} onRestore={restoreLook} />
      <div className="grain-overlay" aria-hidden="true" />
      <div className="optical-vignette" aria-hidden="true" />
    </>
  );
}
