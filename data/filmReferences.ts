import { siteContent } from "./siteContent";

export type FilmReference = {
  id: string;
  title: string;
  year: string;
  director: string;
  keyword: string;
  description: string;
  stillImage: string;
  stillFocus: string;
  palette: string[];
  lighting: string;
  texture: string;
  composition: string;
  cameraMovement: string;
  translationToStillHere: string;
  cssTheme: {
    name: string;
    ink: string;
    charcoal: string;
    bone: string;
    refrigerator: string;
    cold: string;
    amber: string;
    warning: string;
    grain: string;
    highlight: string;
    shadow: string;
  };
};

export const filmReferences: FilmReference[] = [
  {
    id: "a-ghost-story",
    title: "A Ghost Story",
    year: "2017",
    director: "David Lowery",
    keyword: "Domestic stillness",
    description: "A quiet home becomes a container for absence, duration and emotional residue.",
    stillImage: "/images/references/a-ghost-story.svg",
    stillFocus: "Bare apartment / negative space",
    palette: ["#ece1cf", "#9d9a86", "#66756b", "#2e332e", "#0e0f0d"],
    lighting: "Muted cream highlights with soft rolloff.",
    texture: "Dust, stillness, low-contrast grain.",
    composition: "Static frames that allow rooms to feel haunted by absence.",
    cameraMovement: "Minimal movement; duration becomes pressure.",
    translationToStillHere: "The apartment should feel like it remembers more than the character allows.",
    cssTheme: {
      name: "A Ghost Story Look",
      ink: "#090a08",
      charcoal: "#171a16",
      bone: "#ece1cf",
      refrigerator: "#8b988d",
      cold: "#778577",
      amber: "#b28a5f",
      warning: "#7b2e29",
      grain: "0.12",
      highlight: "#ece1cf",
      shadow: "#10120f"
    }
  },
  {
    id: "the-invisible-man",
    title: "The Invisible Man",
    year: "2020",
    director: "Leigh Whannell",
    keyword: "Negative space",
    description: "Architectural emptiness and cold surveillance make empty frames feel active.",
    stillImage: "/images/references/the-invisible-man.svg",
    stillFocus: "Doorway / waiting architecture",
    palette: ["#d8dee0", "#8b99a2", "#526674", "#1b252c", "#070b0e"],
    lighting: "Cold gray-blue, hard shadows, controlled desaturation.",
    texture: "Clean digital coldness softened by grain in STILL HERE.",
    composition: "Frames hold empty space long enough for threat to enter psychologically.",
    cameraMovement: "Measured pans and locked frames that weaponize absence.",
    translationToStillHere: "The refrigerator, hallway and doorway should feel like they are waiting.",
    cssTheme: {
      name: "Invisible Man Look",
      ink: "#05080a",
      charcoal: "#111820",
      bone: "#d8dee0",
      refrigerator: "#6e8088",
      cold: "#526674",
      amber: "#9b744f",
      warning: "#7c2226",
      grain: "0.075",
      highlight: "#b7c5cc",
      shadow: "#071017"
    }
  },
  {
    id: "the-night-house",
    title: "The Night House",
    year: "2020",
    director: "David Bruckner",
    keyword: "Interior dread",
    description: "Deep navy rooms and warm practicals turn domestic architecture into psychological pressure.",
    stillImage: "/images/references/the-night-house.svg",
    stillFocus: "Black bag / interior pressure",
    palette: ["#f1d6a8", "#b97c49", "#373a2e", "#10202e", "#03070b"],
    lighting: "Warm practical light surrounded by heavy navy darkness.",
    texture: "Dark wood, black voids, high-contrast interior surfaces.",
    composition: "Doorways and wall planes become emotional traps.",
    cameraMovement: "Slow spatial drift that makes rooms feel unstable.",
    translationToStillHere: "The door opening at the end should feel architectural, not supernatural.",
    cssTheme: {
      name: "Night House Look",
      ink: "#03070b",
      charcoal: "#101622",
      bone: "#f1d6a8",
      refrigerator: "#6f7770",
      cold: "#223a4d",
      amber: "#b97c49",
      warning: "#8d2928",
      grain: "0.13",
      highlight: "#d6a45e",
      shadow: "#020509"
    }
  },
  {
    id: "eternal-sunshine",
    title: "Eternal Sunshine of the Spotless Mind",
    year: "2004",
    director: "Michel Gondry",
    keyword: "Fragmented memory",
    description: "Romantic memory breaks apart through uneven exposure, color drift and emotional discontinuity.",
    stillImage: "/images/references/eternal-sunshine.svg",
    stillFocus: "Photographs / memory fragments",
    palette: ["#e9d1b5", "#d08f63", "#74a9a4", "#2d6570", "#101415"],
    lighting: "Cyan-green memory tones with warmer skin and unstable exposure.",
    texture: "Fragmentation, softness, imperfect color.",
    composition: "Emotional discontinuity inside ordinary spaces.",
    cameraMovement: "Memory feels handheld even when the frame is controlled.",
    translationToStillHere: "The returned objects can feel like fragments from different emotional times.",
    cssTheme: {
      name: "Eternal Sunshine Look",
      ink: "#071011",
      charcoal: "#142224",
      bone: "#e9d1b5",
      refrigerator: "#74a9a4",
      cold: "#2d6570",
      amber: "#d08f63",
      warning: "#9a3233",
      grain: "0.16",
      highlight: "#84c8bf",
      shadow: "#081314"
    }
  },
  {
    id: "aftersun",
    title: "Aftersun",
    year: "2022",
    director: "Charlotte Wells",
    keyword: "Memory texture",
    description: "Faded warmth, soft halation and fragile memory texture turn small details into emotional evidence.",
    stillImage: "/images/references/aftersun.svg",
    stillFocus: "Face-down frame / withheld memory",
    palette: ["#f0c793", "#c7855c", "#8aaeb0", "#3c5e64", "#131512"],
    lighting: "Warm low-light grain with faded cyan memory residue.",
    texture: "Soft halation, analog noise, memory softness.",
    composition: "Personal images feel incomplete and emotionally delayed.",
    cameraMovement: "Slow, observant movement with emotional distance.",
    translationToStillHere: "The face-down frame should feel like a memory the film refuses to fully expose.",
    cssTheme: {
      name: "Aftersun Look",
      ink: "#090908",
      charcoal: "#191713",
      bone: "#f0c793",
      refrigerator: "#8aaeb0",
      cold: "#3c5e64",
      amber: "#c7855c",
      warning: "#87302b",
      grain: "0.18",
      highlight: "#f2bd80",
      shadow: "#0c0b09"
    }
  }
];
