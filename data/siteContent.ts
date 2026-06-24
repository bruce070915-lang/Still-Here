export const siteContent = {
  title: "STILL HERE",
  browserTitle: "STILL HERE — A Film by Yihao Shi",
  metaDescription:
    "Official visual treatment and interactive pitch deck for STILL HERE, a non-sync short film written and directed by Yihao Shi.",
  subtitle: "A Non-Sync Short Film",
  credit: "Written and Directed by Yihao Shi",
  director: "Yihao Shi",
  logline:
    "After a breakup, a young man tries to erase every trace of his ex, only for the discarded objects to return, multiply, and transform his empty apartment into a physical manifestation of the grief he refuses to face.",
  shortSynopsis:
    "Returning to a nearly empty apartment, a young man finds a note ending his relationship. He throws away the toothbrush, cup, slippers, photographs, and every object his ex left behind. By morning, they are back. Each attempt to remove them makes them return in greater numbers, until the apartment becomes crowded with memories he cannot destroy. When the room finally appears empty, the note returns—and the front door unlocks beside a waiting black trash bag.",
  noteText: "We’re done. I left. Please throw away everything I left behind.",
  themes: [
    "Grief",
    "Denial",
    "Memory",
    "Repetition",
    "Absence",
    "Presence",
    "Emotional residue",
    "Domestic haunting",
    "The impossibility of discarding the past"
  ],
  visualMotifs: [
    "Electronic lock",
    "Refrigerator note",
    "Coffee spill",
    "Black trash bag",
    "Trash chute",
    "Toothbrush",
    "Hair tie",
    "Second cup",
    "Slippers",
    "Photographs",
    "Face-down picture frame",
    "Empty apartment",
    "Objects returning"
  ],
  assets: {
    heroReality: "/images/empty-apartment-v2.jpg",
    heroMemory: "/images/objects-v2.jpg",
    objects: "/images/objects-v2.jpg",
    note: "/images/note-v2.jpg",
    bag: "/images/collapse-v2.jpg",
    frame: "/images/photograph-v2.jpg",
    door: "/images/ending-v2.jpg",
    trashChute: "/images/trash-chute-v2.jpg",
    toothbrush: "/images/toothbrush-v2.jpg",
    photos: "/images/memories-v2.jpg",
    directorPhoto: "/images/director/yihao-shi.jpg",
    actorPhoto: "/images/actor/lead-actor.jpg"
  }
};

export const directorProfile = {
  name: "Yihao Shi",
  role: "Writer / Director / Filmmaker / Photographer",
  photo: siteContent.assets.directorPhoto,
  bio:
    "Yihao Shi is a Film Production student at the New York Film Academy in Los Angeles. His work focuses on quiet emotional moments, visual atmosphere, family relationships, loneliness, and the tension between ordinary life and inner feeling. Coming from a photography background, he is especially interested in light, composition, subtle movement, and using visual storytelling to express emotions that characters do not directly say.",
  quote:
    "I am interested in the emotions people do not say out loud — the quiet moments that stay after everything else is gone.",
  metadata: ["NYFA Los Angeles", "Film Production", "Photography background", "Visual storytelling"]
};

export const actorProfile = {
  name: "To Be Announced",
  character: "To Be Announced",
  photo: siteContent.assets.actorPhoto,
  photoReady: false,
  bio: "Actor biography will be added after casting information is confirmed.",
  performanceBackground: "Performance background and selected experience will be added later.",
  characterDescription:
    "Character description will be added after the final production materials are confirmed."
};

export const visualLanguage = [
  {
    title: "Empty Space",
    text: "The apartment begins as a nearly empty container: bare walls, empty shelves, and an untouched cardboard box."
  },
  {
    title: "Lighting",
    text: "Cold blue-gray rooms are interrupted by paper warmth, doorway spill, and the violent punctuation of the electronic lock."
  },
  {
    title: "Objects",
    text: "The film treats domestic objects as emotional residue: ordinary things that become impossible to remove."
  },
  {
    title: "Framing",
    text: "Wide frames hold the character at a distance until the returned objects begin to occupy the frame more aggressively."
  },
  {
    title: "Texture",
    text: "Film grain, optical blur, torn paper, plastic, glass and refrigerator metal create a tactile memory surface."
  }
];

export const soundEvents = [
  { time: "00:01", image: "Front door unlocks", sound: "Electronic lock BEEP", delay: "sound first" },
  { time: "00:24", image: "Coffee leaves his hand", sound: "Cup falling / coffee spreading", delay: "image first" },
  { time: "01:14", image: "Objects enter the bag", sound: "Plastic trash bag / object impacts", delay: "overlapped" },
  { time: "01:48", image: "Bag disappears into the chute", sound: "Metal door SLAM", delay: "+0.8s" },
  { time: "03:10", image: "Objects return", sound: "Quiet room tone / breathing", delay: "sound stretches" },
  { time: "07:42", image: "Door slowly opens", sound: "Door unlocking / room tone", delay: "sound first" }
];
