import { soundEvents } from "@/data/siteContent";
import { LiquidGlass } from "./LiquidGlass";

export function SoundTimeline() {
  return (
    <div className="sound-timeline">
      <div className="sound-track sound-track--visual">
        <span className="track-name">VISUAL TIMELINE</span>
        {soundEvents.map((event) => (
          <LiquidGlass key={`visual-${event.time}`} className="sound-event" intensity="quiet">
            <b>{event.time}</b>
            <p>{event.image}</p>
          </LiquidGlass>
        ))}
      </div>
      <div className="sound-track sound-track--audio">
        <span className="track-name">SOUND TIMELINE / MISALIGNED</span>
        {soundEvents.map((event) => (
          <LiquidGlass key={`sound-${event.time}`} className="sound-event delayed" intensity="quiet">
            <b>{event.delay}</b>
            <p>{event.sound}</p>
            <i className="waveform" />
          </LiquidGlass>
        ))}
      </div>
    </div>
  );
}
