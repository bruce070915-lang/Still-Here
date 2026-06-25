"use client";

import type { FilmReference } from "@/data/filmReferences";
import type { CSSProperties } from "react";
import { LiquidGlass } from "./LiquidGlass";

type FilmReferenceCardProps = {
  film: FilmReference;
  active?: boolean;
  onOpen: (film: FilmReference, element: HTMLElement) => void;
};

export function FilmReferenceCard({ film, active = false, onOpen }: FilmReferenceCardProps) {
  return (
    <button
      type="button"
      className="film-card"
      data-film-card={film.id}
      data-active={active ? "true" : undefined}
      data-flip-id={`film-${film.id}`}
      onClick={(event) => onOpen(film, event.currentTarget)}
    >
      <div
        className="film-placeholder film-placeholder--photo"
        style={
          {
            "--film-a": film.palette[0],
            "--film-b": film.palette[2],
            "--film-c": film.palette[4],
            backgroundImage: `linear-gradient(145deg, color-mix(in srgb, ${film.palette[4]} 42%, transparent), color-mix(in srgb, ${film.palette[2]} 22%, transparent)), url(${film.stillImage})`
          } as CSSProperties
        }
      >
        <span>{film.year}</span>
      </div>
      <LiquidGlass className="film-card__glass" intensity="quiet">
        <div className="film-card__top">
          <span>{film.keyword}</span>
          <span>{film.director}</span>
        </div>
        <h3>{film.title}</h3>
        <p>{film.stillFocus}</p>
        <div className="color-strip">
          {film.palette.map((color) => (
            <i key={color} style={{ background: color }} />
          ))}
        </div>
      </LiquidGlass>
    </button>
  );
}
