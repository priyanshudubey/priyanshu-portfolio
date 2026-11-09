/**
 * Shared layout primitives used by every section, in the site's soft-UI style:
 * raised slabs for cards, recessed wells for labels, engraved grooves for dividers.
 * Neumorphic surfaces take the colour of their section (see `.tone-alt` in index.css).
 */
import { useScrollProgress } from "../hooks/motion";

export function Section({ id, alt = false, className = "", children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative py-20 md:py-28 ${alt ? "tone-alt bg-paper-alt" : "bg-paper"} ${className}`}
    >
      <div className="container-site relative">{children}</div>
    </section>
  );
}

/** Section heading with the site's recurring motif: a recessed `$ command` pill. */
export function SectionHeader({ id, command, title, accent, intro, center = false }) {
  return (
    <header className={`reveal mb-12 max-w-3xl md:mb-16 ${center ? "mx-auto text-center" : ""}`}>
      <p className="neu-inset-sm mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-muted">
        <span aria-hidden="true" className="text-highlight">
          $
        </span>
        {command}
        <span aria-hidden="true" className="caret text-highlight/70" />
      </p>
      <h2
        id={`${id}-title`}
        className="letterpress text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl"
      >
        {title} {accent && <span className="text-accent">{accent}</span>}
      </h2>
      <span
        aria-hidden="true"
        className={`draw-x mt-5 block h-1.5 w-20 rounded-full bg-gradient-to-r from-accent to-highlight shadow-[0_2px_6px_rgb(var(--accent)/0.35)] ${center ? "mx-auto" : ""}`}
      />
      {intro && <p className="mt-5 text-lg leading-relaxed text-ink-soft">{intro}</p>}
    </header>
  );
}

/** Raised soft-UI slab (styles in `.card`, index.css). */
export function Card({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={`card rounded-3xl ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/** Small recessed mono label, e.g. "Full-time" or a date. */
export function Meta({ icon: Icon, children, className = "" }) {
  return (
    <span
      className={`neu-inset-sm inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-xs text-muted ${className}`}
    >
      {Icon && <Icon aria-hidden="true" className="h-3.5 w-3.5" />}
      {children}
    </span>
  );
}

/** Raised pill tags. */
export function TagList({ items, label, className = "" }) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-2.5 ${className}`}>
      {items.map((item, i) => (
        <li
          key={item}
          style={{ "--i": i }}
          className="stagger-item neu-raised-xs rounded-lg px-2.5 py-1 font-mono text-xs text-ink-soft transition-colors hover:text-accent"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Vertical timeline. The line fills with colour as you scroll, and each dot
 * lights up when the fill reaches it. Geometry and colours live in index.css
 * (`.timeline*`), driven by one `--tl-pad` variable so line and dots always align.
 */
export function Timeline({ children }) {
  const [ref, barRef] = useScrollProgress();
  return (
    <div ref={ref} className="timeline">
      <span aria-hidden="true" className="timeline-track" />
      <span aria-hidden="true" className="timeline-fill" ref={barRef} />
      <ol>{children}</ol>
    </div>
  );
}

export function TimelineItem({ current = false, delay = 0, children }) {
  return (
    <li className="reveal reveal-left relative" style={{ "--reveal-delay": `${delay}ms` }}>
      <span aria-hidden="true" className={`timeline-dot ${current ? "is-current" : ""}`}>
        {current && <span className="timeline-ping animate-ping" />}
      </span>
      {children}
    </li>
  );
}
