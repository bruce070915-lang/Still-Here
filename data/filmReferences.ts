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
    id: "blue-corridor-note",
    title: "Reference 01",
    year: "Still Image",
    director: "Color Reference",
    keyword: "Blue corridor / warm memory",
    description: "Cold hallway darkness is interrupted by one distant warm practical, turning the note into emotional evidence.",
    stillImage: "/images/references/reference-01.png",
    stillFocus: "Corridor, note, distant lamp",
    palette: ["#d4a85f", "#5f6f75", "#2c3a42", "#11191f", "#050709"],
    lighting: "Cold blue-black ambient light with a small amber practical source in depth.",
    texture: "Matte walls, soft paper, dark wood and controlled low-light grain.",
    composition: "The frame holds distance between the hand, the note and the lit room beyond.",
    cameraMovement: "Slow observational movement; the note feels found rather than announced.",
    translationToStillHere: "The refrigerator note should feel like a quiet interruption inside an otherwise cold room.",
    cssTheme: {
      name: "Reference 01 Look",
      ink: "#050709",
      charcoal: "#11191f",
      bone: "#e5d4b8",
      refrigerator: "#5f6f75",
      cold: "#2c3a42",
      amber: "#d4a85f",
      warning: "#7c2b27",
      grain: "0.13",
      highlight: "#d4a85f",
      shadow: "#050709"
    }
  },
  {
    id: "empty-room-silhouette",
    title: "Reference 02",
    year: "Still Image",
    director: "Color Reference",
    keyword: "Empty room / central absence",
    description: "A single pale figure occupies a decayed room, making absence feel physical without turning it into horror.",
    stillImage: "/images/references/reference-02.png",
    stillFocus: "Centered figure, worn room, cardboard box",
    palette: ["#e6dfd1", "#a99a81", "#6a5c48", "#2a251f", "#080706"],
    lighting: "Soft window light cuts through a warm-brown, low-contrast interior.",
    texture: "Peeling wall, cloth folds, cardboard, dust and old floorboards.",
    composition: "The figure is isolated in the center while the room carries the emotional weight around it.",
    cameraMovement: "Locked-off stillness; duration should make the room feel heavier.",
    translationToStillHere: "The apartment can feel emotionally occupied by objects without inventing ghosts or new characters.",
    cssTheme: {
      name: "Reference 02 Look",
      ink: "#080706",
      charcoal: "#17130f",
      bone: "#e6dfd1",
      refrigerator: "#8c806b",
      cold: "#3a382f",
      amber: "#a99a81",
      warning: "#743026",
      grain: "0.15",
      highlight: "#e6dfd1",
      shadow: "#080706"
    }
  },
  {
    id: "cold-window-stillness",
    title: "Reference 03",
    year: "Still Image",
    director: "Color Reference",
    keyword: "Cold window / quiet residue",
    description: "Muted gray-blue daylight makes domestic objects feel abandoned, delayed and emotionally unresolved.",
    stillImage: "/images/references/reference-03.png",
    stillFocus: "Window, bed, note, scattered photographs",
    palette: ["#d8dde0", "#929b9b", "#586466", "#252d30", "#070a0b"],
    lighting: "Overcast window light with restrained gray-blue shadows.",
    texture: "Soft fabric, paper, concrete floor, low-saturation daylight.",
    composition: "Negative space keeps the figure quiet while the scattered objects pull attention across the room.",
    cameraMovement: "Very slow push-in; the stillness should feel increasingly unavoidable.",
    translationToStillHere: "Returned photographs and small objects should read as residue, not decoration.",
    cssTheme: {
      name: "Reference 03 Look",
      ink: "#070a0b",
      charcoal: "#111719",
      bone: "#d8dde0",
      refrigerator: "#929b9b",
      cold: "#586466",
      amber: "#9f7d57",
      warning: "#76302c",
      grain: "0.1",
      highlight: "#c5ced0",
      shadow: "#070a0b"
    }
  },
  {
    id: "warm-memory-room",
    title: "Reference 04",
    year: "Still Image",
    director: "Color Reference",
    keyword: "Warm memory / late sunlight",
    description: "Low sunset warmth turns the same domestic space into memory, making comfort and grief exist together.",
    stillImage: "/images/references/reference-04.png",
    stillFocus: "Sunset window, photographs, warm wall shadows",
    palette: ["#f0c37f", "#c58645", "#735738", "#2b241b", "#090806"],
    lighting: "Warm low-angle sunlight with deep brown shadows and soft halation.",
    texture: "Golden dust, old plaster, paper photographs and muted domestic fabric.",
    composition: "The light leads the eye from the window to the photographs and into the darker room beyond.",
    cameraMovement: "Slow drift, as if entering a memory that is already disappearing.",
    translationToStillHere: "Warmth should appear only as a fragile memory against the film’s colder present tense.",
    cssTheme: {
      name: "Reference 04 Look",
      ink: "#090806",
      charcoal: "#17110d",
      bone: "#f0d2a4",
      refrigerator: "#8f7654",
      cold: "#3a3024",
      amber: "#c58645",
      warning: "#823127",
      grain: "0.16",
      highlight: "#f0c37f",
      shadow: "#090806"
    }
  }
];
