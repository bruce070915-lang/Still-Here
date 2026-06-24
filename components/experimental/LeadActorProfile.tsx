import Image from "next/image";
import { actorProfile, siteContent } from "@/data/siteContent";

export function LeadActorProfile() {
  return (
    <div className="actor-profile actor-profile--single actor-profile--cinema">
      <div className="actor-background-still" style={{ backgroundImage: `url(${siteContent.assets.heroReality})` }} aria-hidden="true" />
      <div className="actor-portrait-stage">
        <div className="actor-portrait-placeholder actor-portrait-placeholder--cinema">
          {actorProfile.photoReady ? (
            <Image src={actorProfile.photo} alt={actorProfile.name} fill sizes="52vw" className="object-cover" />
          ) : (
            <>
              <span>Lead actor portrait reserved</span>
              <small>{actorProfile.photo}</small>
            </>
          )}
        </div>
        <p className="actor-stage-note">One visible performer carries the film’s silence.</p>
      </div>
      <div className="actor-copy actor-copy--dossier">
        <span className="vertical-meta">ONLY ONSCREEN PERFORMANCE</span>
        <p className="actor-kicker">Lead Actor / Casting Pending</p>
        <h2>{actorProfile.character}</h2>
        <div className="actor-casting-line">
          <span>Actor</span>
          <b>{actorProfile.name}</b>
        </div>
        <p className="actor-character-description">{actorProfile.characterDescription}</p>
        <div className="actor-text-grid">
          <p><b>Actor Bio</b>{actorProfile.bio}</p>
          <p><b>Acting Experience</b>{actorProfile.performanceBackground}</p>
        </div>
        <p className="actor-placeholder-note">No actor name, biography, credits, awards or quote will be added until casting information is confirmed.</p>
      </div>
    </div>
  );
}
