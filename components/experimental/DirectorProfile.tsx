import Image from "next/image";
import { directorProfile } from "@/data/siteContent";
import { LiquidGlass } from "./LiquidGlass";

export function DirectorProfile() {
  return (
    <div className="director-profile">
      <div className="director-photo">
        <Image src={directorProfile.photo} alt="Yihao Shi" fill sizes="50vw" className="object-cover" />
      </div>
      <div className="director-copy">
        <span className="vertical-meta">WRITER / DIRECTOR</span>
        <h2>{directorProfile.name}</h2>
        <LiquidGlass className="director-label" intensity="medium">
          <p>{directorProfile.role}</p>
          <div>
            {directorProfile.metadata.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </LiquidGlass>
        <p className="bio">{directorProfile.bio}</p>
        <blockquote>“{directorProfile.quote}”</blockquote>
      </div>
    </div>
  );
}
