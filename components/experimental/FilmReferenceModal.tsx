"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { Flip } from "gsap/Flip";
import { gsap } from "gsap";
import type { FilmReference } from "@/data/filmReferences";
import { siteContent } from "@/data/siteContent";
import { LiquidGlass } from "./LiquidGlass";

gsap.registerPlugin(Flip);

type FilmReferenceModalProps = {
  film: FilmReference | null;
  flipState: ReturnType<typeof Flip.getState> | null;
  onClose: () => void;
  onPreview: (film: FilmReference) => void;
  onRestore: () => void;
};

export function FilmReferenceModal({ film, flipState, onClose, onPreview, onRestore }: FilmReferenceModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!film) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        modalRef.current?.classList.add("reference-modal--pulse");
        window.setTimeout(() => modalRef.current?.classList.remove("reference-modal--pulse"), 260);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [film, onClose]);

  useEffect(() => {
    if (!film || !flipState) return;
    requestAnimationFrame(() => {
      Flip.from(flipState, {
        targets: modalRef.current,
        duration: 0.85,
        ease: "power3.inOut",
        absolute: true,
        scale: true
      });
    });
  }, [film, flipState]);

  if (!film) return null;

  const stills = [
    [film.stillFocus, film.stillImage],
    ["Refrigerator note", siteContent.assets.note],
    ["Object return", siteContent.assets.objects],
    ["Final doorway", siteContent.assets.door]
  ];

  return (
    <div className="reference-modal-backdrop" role="dialog" aria-modal="true" aria-label={`${film.title} cinematic reference`}>
      <div ref={modalRef} className="reference-modal" data-flip-id={`film-${film.id}`}>
        <button className="modal-close" type="button" onClick={onClose}>
          Close
        </button>
        <div className="modal-stills">
          {stills.map(([label, image], index) => (
            <div
              key={`${film.id}-still-${label}`}
              className="modal-still-placeholder modal-still-placeholder--photo"
              style={
                {
                  "--film-a": film.palette[index % film.palette.length],
                  "--film-b": film.palette[(index + 2) % film.palette.length],
                  backgroundImage: `linear-gradient(135deg, color-mix(in srgb, ${film.palette[4]} 48%, transparent), color-mix(in srgb, ${film.palette[2]} 18%, transparent)), url(${image})`
                } as CSSProperties
              }
            >
              <span>{label}</span>
            </div>
          ))}
        </div>
        <LiquidGlass className="modal-glass" intensity="hero">
          <div className="modal-heading">
            <span>{film.year}</span>
            <h2>{film.title}</h2>
            <p>{film.director}</p>
          </div>
          <p className="modal-description">{film.description}</p>
          <div className="modal-palette">
            {film.palette.map((color) => (
              <i key={color} style={{ background: color }} />
            ))}
          </div>
          <div className="modal-notes">
            <p><b>Lighting</b>{film.lighting}</p>
            <p><b>Contrast / Texture</b>{film.texture}</p>
            <p><b>Composition</b>{film.composition}</p>
            <p><b>Camera Movement</b>{film.cameraMovement}</p>
            <p><b>What STILL HERE borrows</b>{film.translationToStillHere}</p>
          </div>
          <div className="modal-actions">
            <button type="button" onClick={() => onPreview(film)}>Apply This Universe</button>
            <button type="button" onClick={onRestore}>Restore Original Look</button>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
}
