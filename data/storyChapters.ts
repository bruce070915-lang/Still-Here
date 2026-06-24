import { siteContent } from "./siteContent";

export const storyChapters = [
  {
    id: "return",
    number: "01",
    title: "RETURN",
    time: "Early evening",
    image: siteContent.assets.heroReality,
    object: "Electronic lock / note",
    text:
      "A soft beep unlocks the front door. He enters with a backpack and coffee, into an apartment that is almost empty. On the refrigerator, a note ends the relationship and asks him to throw everything away."
  },
  {
    id: "disposal",
    number: "02",
    title: "DISPOSAL",
    time: "Evening to night",
    image: siteContent.assets.trashChute,
    object: "Black trash bag / chute",
    text:
      "He chooses the black trash bag instead of the cardboard box. Toothbrush, hair tie, second cup, slippers and note disappear into plastic. The first bag drops into the trash chute. The slam makes disposal feel final."
  },
  {
    id: "reappearance",
    number: "03",
    title: "REAPPEARANCE",
    time: "Morning",
    image: siteContent.assets.toothbrush,
    object: "Returned toothbrush / cup / note",
    text:
      "By morning, the slippers are beside the bed. The toothbrush and hair tie are back. The second cup and a clean note return to the kitchen. He searches the trash and finds no explanation."
  },
  {
    id: "accumulation",
    number: "04",
    title: "ACCUMULATION",
    time: "Evening",
    image: siteContent.assets.photos,
    object: "Photographs / towel / pillow",
    text:
      "The next return is not identical. Behind the note is a photograph. A second towel appears. Two pillows rest against the headboard. Several photographs now occupy the bare wall."
  },
  {
    id: "confrontation",
    number: "05",
    title: "CONFRONTATION",
    time: "Night",
    image: siteContent.assets.bag,
    object: "Face-down frame",
    text:
      "He tears, grabs and forces everything into another bag until it rips open. The objects spill back into the room. He raises the face-down frame to smash it, but his hands shake. He cannot do it."
  },
  {
    id: "door-opens",
    number: "06",
    title: "THE DOOR OPENS",
    time: "Night / reset",
    image: siteContent.assets.door,
    object: "Door / black bag",
    text:
      "He wakes to an empty room. The kitchen is clear. Then the note returns beneath the magnet. Behind him, the electronic lock beeps. The front door slowly opens. Beside it waits a black trash bag."
  }
];

export const loopObjects = [
  { name: "Toothbrush", image: siteContent.assets.toothbrush, count: "02", axis: "bathroom sink" },
  { name: "Hair tie", image: siteContent.assets.toothbrush, count: "again", axis: "faucet" },
  { name: "Second cup", image: siteContent.assets.note, count: "return", axis: "kitchen sink" },
  { name: "Slippers", image: siteContent.assets.bag, count: "bedside", axis: "bedroom floor" },
  { name: "Note", image: siteContent.assets.note, count: "clean", axis: "refrigerator" },
  { name: "Photographs", image: siteContent.assets.photos, count: "more", axis: "bare wall" },
  { name: "Face-down frame", image: siteContent.assets.frame, count: "unseen", axis: "shelf / lap" }
];
