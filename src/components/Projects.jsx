import { ArrowUpRight, Github, Lock } from "lucide-react";
import { projects } from "../data/content";
import { Card, Section, SectionHeader, TagList } from "./ui";

/** Animated architecture diagram in a recessed panel: data "flows" down an engraved channel. */
function Pipeline({ steps }) {
  return (
    <figure className="neu-inset relative self-center rounded-3xl p-6 sm:p-8">
      <figcaption className="mb-6 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-muted">
        <span className="led" aria-hidden="true" />
        How it works
      </figcaption>
      <div className="relative">
        {/* engraved channel + travelling dots */}
        <span
          aria-hidden="true"
          className="neu-inset-sm absolute bottom-5 left-5 top-5 w-1.5 -translate-x-1/2 rounded-full"
        >
          {[0, 1070, 2140].map((delay) => (
            <span key={delay} className="flow-track" style={{ "--flow-delay": `${delay}ms` }}>
              <span className="flow-dot h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_2px_rgb(var(--accent)/0.5)]" />
            </span>
          ))}
        </span>
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li
              key={s.label}
              className="stagger-item relative flex items-center gap-4"
              style={{ "--i": i }}
            >
              <span className="neu-raised-xs relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold text-accent">
                {i + 1}
              </span>
              <span className="neu-raised-xs min-w-0 flex-1 rounded-xl px-4 py-2.5">
                <span className="block font-semibold text-ink">{s.label}</span>
                <span className="block text-sm text-muted">{s.detail}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}

function Featured({ project }) {
  const Icon = project.icon;
  return (
    <Card
      as="article"
      className="reveal mb-16 overflow-hidden"
      style={{ "--reveal-delay": "80ms" }}
    >
      <div
        className="draw-x h-1.5 w-full bg-gradient-to-r from-accent to-highlight"
        aria-hidden="true"
      />
      <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] xl:p-12">
        <div>
          <p className="neu-raised-xs mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-accent">
            <span className="led" aria-hidden="true" />
            Featured project
          </p>
          <div className="flex items-center gap-4">
            <span className="icon-well h-14 w-14 shrink-0 text-accent">
              <Icon aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="letterpress text-3xl font-extrabold text-ink md:text-4xl">
                {project.title}
              </h3>
              <p className="text-lg font-semibold text-accent">{project.subtitle}</p>
            </div>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{project.description}</p>

          <ul aria-label="Highlights" className="mt-6 flex flex-wrap gap-2.5">
            {project.highlights.map((h, i) => (
              <li
                key={h}
                style={{ "--i": i }}
                className="stagger-item neu-inset-sm rounded-xl px-3.5 py-1.5 text-sm font-medium text-accent"
              >
                {h}
              </li>
            ))}
          </ul>

          <TagList
            items={project.technologies}
            label="Technologies"
            className="groove-top mt-7 pt-6"
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="keycap keycap-accent group px-5 py-2.5"
            >
              <Github
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:-rotate-12"
              />
              Source code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="keycap group px-5 py-2.5 hover:text-accent"
            >
              Live demo
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {project.image ? (
          <div className="neu-inset self-center rounded-3xl p-3">
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        ) : (
          project.pipeline && <Pipeline steps={project.pipeline} />
        )}
      </div>
    </Card>
  );
}

function ProjectCard({ project, delay }) {
  const Icon = project.icon;
  return (
    <Card
      as="article"
      className="reveal group flex h-full flex-col p-6 sm:p-8"
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {project.image && (
        <div className="neu-inset mb-6 rounded-2xl p-2">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            className="aspect-video w-full rounded-xl object-cover"
          />
        </div>
      )}
      <span className="icon-well mb-5 h-12 w-12 text-accent transition-transform duration-300 group-hover:-rotate-6">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mb-4 font-medium text-accent">{project.subtitle}</p>
      <p className="mb-6 flex-grow leading-relaxed text-ink-soft">{project.description}</p>

      <TagList items={project.technologies} label="Technologies" className="groove-top pt-5" />

      <div className="mt-6">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="keycap group/link px-4 py-2 text-sm hover:text-accent"
          >
            Visit site
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
            <span className="sr-only">for {project.title} (opens in a new tab)</span>
          </a>
        ) : (
          <p className="neu-inset-sm inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm text-muted">
            <Lock aria-hidden="true" className="h-3.5 w-3.5" />
            {project.note}
          </p>
        )}
      </div>
    </Card>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader id="projects" command="ls ~/projects" title="Projects" accent="& builds" />

      <Featured project={projects.featured} />

      <div className="reveal mb-10 flex items-center gap-4">
        <h3 className="font-mono text-sm uppercase tracking-wider text-muted">Freelance work</h3>
        <span className="groove draw-x flex-grow" aria-hidden="true" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.freelance.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={i * 100} />
        ))}
      </div>
    </Section>
  );
}
