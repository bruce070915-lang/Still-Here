import Image from "next/image";
import { directorProfile } from "@/data/siteContent";

export function DirectorProfile() {
  return (
    <div className="director-profile">
      <figure className="director-photo" aria-label="Portrait of Yihao Shi">
        <Image src={directorProfile.photo} alt="Yihao Shi" fill sizes="50vw" className="object-cover" />
      </figure>
      <div className="director-copy">
        <p className="director-eyebrow">WRITER / DIRECTOR</p>
        <h2>{directorProfile.name}</h2>
        <p className="director-roleline">{directorProfile.role}</p>
        <p className="bio">{directorProfile.bio}</p>
        <blockquote>“{directorProfile.quote}”</blockquote>
      </div>
    </div>
  );
}
