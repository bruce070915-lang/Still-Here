import Image from "next/image";
import { actorProfile, siteContent } from "@/data/siteContent";
import { LiquidGlass } from "./LiquidGlass";

export function LeadActorProfile() {
  return (
    <div className="actor-profile actor-profile--single actor-profile--cinema actor-profile--festival">
      <div className="actor-background-still" style={{ backgroundImage: `url(${siteContent.assets.heroReality})` }} aria-hidden="true" />
      <p className="actor-section-code" aria-hidden="true">10 / Lead Actor</p>
      <figure className="actor-portrait-stage">
        <div className="actor-portrait-placeholder actor-portrait-placeholder--cinema actor-portrait-frame">
          <Image
            src={actorProfile.photo}
            alt={actorProfile.name}
            fill
            priority={false}
            sizes="(max-width: 900px) 92vw, 48vw"
            className="object-cover"
          />
        </div>
        <figcaption className="actor-stage-note">One visible performer carries the film’s silence.</figcaption>
      </figure>
      <article className="actor-copy actor-copy--dossier actor-editorial-copy">
        <span className="vertical-meta">ONLY ONSCREEN PERFORMANCE</span>
        <p className="actor-kicker">{actorProfile.subtitle}</p>
        <h2>{actorProfile.character}</h2>
        <div className="actor-casting-line">
          <span>Actor</span>
          <b>{actorProfile.name}</b>
        </div>
        <LiquidGlass className="actor-meta-glass" intensity="quiet">
          <div>
            <span>Playing Age</span>
            <strong>{actorProfile.playingAge}</strong>
          </div>
          <div>
            <span>Languages</span>
            <strong>{actorProfile.languages}</strong>
          </div>
        </LiquidGlass>
        <p className="actor-character-description actor-bio-editorial">{actorProfile.bio}</p>
        <section className="actor-performance-focus" aria-label="Performance focus">
          <p>Performance Focus</p>
          <ul>
            {actorProfile.performanceFocus.map((focus) => (
              <li key={focus}>{focus}</li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
