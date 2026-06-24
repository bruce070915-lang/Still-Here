import type { CSSProperties } from "react";
import { filmReferences } from "@/data/filmReferences";

export function ReferenceColorStudies() {
  return (
    <div className="reference-studies">
      {filmReferences.map((film, index) => (
        <article
          key={film.id}
          className="reference-study-panel gsap-reveal"
          style={
            {
              "--study-a": film.palette[0],
              "--study-b": film.palette[2],
              "--study-c": film.palette[4],
              "--study-index": index
            } as CSSProperties
          }
        >
          <div
            className="reference-study-image"
            style={{
              backgroundImage: `linear-gradient(135deg, color-mix(in srgb, ${film.palette[4]} 52%, transparent), color-mix(in srgb, ${film.palette[2]} 18%, transparent) 54%, color-mix(in srgb, ${film.palette[0]} 14%, transparent)), url(${film.stillImage})`
            }}
          />
          <div className="reference-study-glass">
            <span>{film.year}</span>
            <h3>{film.title}</h3>
            <p>{film.stillFocus}</p>
            <div className="reference-study-palette" aria-label={`${film.title} color palette`}>
              {film.palette.map((color) => (
                <i key={color} style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
