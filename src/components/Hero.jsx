import { ArrowRight, FileText, MapPin } from "lucide-react";
import { hero, site } from "../data/content";
import { RotatingWords } from "../hooks/motion";
import LatestVideo from "./LatestVideo";

const step = (ms) => ({ "--enter-delay": `${ms}ms` });

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-paper pb-20 pt-28"
    >
      {/* Soft light falling from the top-left, matching the shadows. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_circle_at_10%_0%,rgb(var(--neu-hi)/0.65),transparent_60%)]"
      />

      <div className="container-site relative grid grid-cols-[minmax(0,1fr)] items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] xl:gap-20">
        <div className="min-w-0">
          <div className="enter flex flex-wrap items-center gap-3" style={step(0)}>
            <a
              href={site.current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-raised-sm inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-accent"
            >
              <span className="led" aria-hidden="true" />
              {site.current.title} at {site.current.company}
            </a>
            <span className="neu-inset inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-muted">
              <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
              {site.location}
            </span>
          </div>

          <div className="enter" style={step(90)}>
            <h1
              id="home-title"
              className="letterpress mt-8 text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl 2xl:text-8xl"
            >
              Hi, I&apos;m <span className="text-accent">Priyanshu.</span>
            </h1>

            {/* Role in a recessed display strip */}
            <p className="neu-inset mt-6 inline-flex min-h-[3rem] max-w-full flex-wrap items-center gap-x-2 rounded-2xl px-5 py-2.5 font-mono text-base text-ink-soft sm:text-lg">
              <span aria-hidden="true" className="text-highlight">
                ›
              </span>
              Software Engineer ·{" "}
              <RotatingWords
                words={hero.roles}
                className="block basis-full whitespace-nowrap font-semibold text-accent sm:inline sm:basis-auto"
              />
            </p>
          </div>

          <div className="enter" style={step(180)}>
            <p className="mt-8 max-w-2xl text-2xl font-bold leading-snug text-ink sm:text-3xl">
              {hero.headline}
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{hero.intro}</p>
          </div>

          <div className="enter" style={step(260)}>
            <ul aria-label="Focus areas" className="mt-8 flex flex-wrap gap-3">
              {hero.focus.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="neu-raised-sm inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm text-ink-soft"
                >
                  <Icon aria-hidden="true" className="h-4 w-4 text-accent" />
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="keycap keycap-accent group px-7 py-3.5">
                View my work
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </a>
              {site.resume && (
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="keycap px-7 py-3.5 hover:text-accent"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  Download résumé
                  <span className="sr-only">(PDF, opens in a new tab)</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <LatestVideo
          className="enter min-w-0 justify-self-center lg:justify-self-end"
          style={step(300)}
        />
      </div>
    </section>
  );
}
