import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/content";
import { Section, SectionHeader } from "./ui";

const channels = [
  { label: "Email", detail: site.email, href: `mailto:${site.email}`, icon: Mail },
  {
    label: "LinkedIn",
    detail: "in/priyanshudubey",
    href: site.linkedin,
    icon: Linkedin,
    external: true,
  },
  { label: "GitHub", detail: "@priyanshudubey", href: site.github, icon: Github, external: true },
];

export function Contact() {
  return (
    <Section id="contact" alt>
      <SectionHeader
        id="contact"
        command="ping priyanshu"
        title="Let's"
        accent="talk"
        intro="Whether you're building AI products, scaling backend systems, or just want to talk tech — my inbox is open."
        center
      />

      {/* Each channel is a big physical key that presses down on click. */}
      <ul
        className="reveal mx-auto grid max-w-5xl gap-6 sm:grid-cols-3"
        style={{ "--reveal-delay": "100ms" }}
      >
        {channels.map(({ label, detail, href, icon: Icon, external }, i) => (
          <li key={label} className="stagger-item" style={{ "--i": i }}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="keycap group h-full w-full flex-col gap-3 rounded-3xl p-6 text-center"
            >
              <span className="icon-well h-14 w-14 text-muted transition-colors duration-300 group-hover:text-accent">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-ink">
                {label}
                {external && <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-muted" />}
              </span>
              <span className="break-all text-sm font-normal text-muted">{detail}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default function Footer() {
  return (
    <footer className="tone-alt bg-paper-alt">
      <div className="container-site pb-8">
        <div className="groove-top flex flex-col items-center justify-between gap-4 pt-8 text-sm text-muted sm:flex-row">
          <p className="neu-inset-sm rounded-full px-4 py-1.5">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <p className="flex items-center gap-2.5 font-mono text-xs">
            <span className="led" aria-hidden="true" />
            {/* One inline span so the flex gap doesn't split the sentence apart. */}
            <span>
              Crafted with <strong className="font-semibold text-accent">curiosity</strong>,{" "}
              <strong className="font-semibold text-highlight">caffeine</strong> &amp; a{" "}
              <strong className="font-semibold text-accent">little chaos</strong>.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
