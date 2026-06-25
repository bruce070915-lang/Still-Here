"use client";

import Image from "next/image";
import type { storyChapters } from "@/data/storyChapters";

type Chapter = (typeof storyChapters)[number];

export function StoryChapter({ chapter }: { chapter: Chapter }) {
  return (
    <article id={chapter.id} className="story-chapter chapter-panel" data-chapter={chapter.id}>
      <div className="chapter-title-field" aria-hidden="true">
        <span>{chapter.title}</span>
      </div>
      <div className="chapter-media">
        <Image src={chapter.image} alt="" fill sizes="44vw" className="object-cover" />
        <div className="chapter-media__veil" />
      </div>
      <div className="chapter-object-echo" aria-hidden="true">
        {chapter.object}
      </div>
      <div className="chapter-copy">
        <div className="chapter-meta">
          <span>{chapter.number}</span>
          <span>{chapter.time}</span>
        </div>
        <h3>{chapter.title}</h3>
        <p>{chapter.text}</p>
        <small>{chapter.object}</small>
      </div>
    </article>
  );
}
