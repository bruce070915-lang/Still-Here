import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  children: ReactNode;
  className?: string;
  tone?: "dark" | "image" | "void";
};

export function SectionShell({ id, eyebrow, children, className = "", tone = "dark" }: SectionShellProps) {
  return (
    <section id={id} data-section={id} data-tone={tone} className={`section-shell ${className}`}>
      <div className="scene-glass scene-glass--primary" aria-hidden="true" />
      <div className="scene-glass scene-glass--secondary" aria-hidden="true" />
      <div className="section-eyebrow" aria-hidden="true">
        {eyebrow}
      </div>
      {children}
    </section>
  );
}

export function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      <span>{title}</span>
    </div>
  );
}
