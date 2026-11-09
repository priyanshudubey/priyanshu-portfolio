import { Briefcase, ExternalLink, Mail, MapPin, User } from "lucide-react";
import { about, site } from "../data/content";
import { CountUp } from "../hooks/motion";
import { Card, Section, SectionHeader } from "./ui";

const facts = [
  {
    icon: Briefcase,
    label: "Current role",
    value: `${site.current.title}`,
    sub: `${site.current.company} · Remote`,
    href: site.current.url,
  },
  { icon: MapPin, label: "Location", value: site.location, sub: "IST (UTC+5:30)" },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    sub: "Best way to reach me",
    href: `mailto:${site.email}`,
  },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        id="about"
        command="whoami"
        title="A little"
        accent="about me"
        intro="I build AI-powered products and the reliable systems behind them."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <Card className="reveal reveal-left p-6 sm:p-8 lg:col-span-3 xl:p-10">
          <div className="mb-5 flex items-center gap-3">
            <span className="icon-well h-11 w-11 text-accent">
              <User aria-hidden="true" className="h-5 w-5" />
            </span>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted">What I do</h3>
          </div>
          <p className="text-lg leading-relaxed text-ink-soft xl:text-xl xl:leading-relaxed">
            {about.bio}
          </p>
        </Card>

        {/* Stats as recessed readouts, matching the hero device */}
        <Card
          as="ul"
          className="reveal grid grid-cols-3 gap-3 p-4 sm:gap-4 sm:p-6 lg:col-span-2 lg:grid-cols-1"
          style={{ "--reveal-delay": "100ms" }}
        >
          {about.stats.map((stat, i) => (
            <li
              key={stat.label}
              className="stagger-item neu-inset flex flex-col justify-center rounded-2xl p-3 text-center sm:p-4 lg:flex-row lg:items-center lg:justify-start lg:gap-4 lg:text-left"
              style={{ "--i": i }}
            >
              <p className="font-mono text-2xl font-bold text-accent sm:text-3xl lg:min-w-[5.5rem]">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm lg:mt-0">{stat.label}</p>
            </li>
          ))}
        </Card>
      </div>

      <ul className="reveal mt-8 grid gap-6 sm:grid-cols-3" style={{ "--reveal-delay": "200ms" }}>
        {facts.map(({ icon: Icon, label, value, sub, href }) => {
          const external = href && !href.startsWith("mailto");
          const body = (
            <>
              <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted">
                <span className="icon-well h-9 w-9 text-accent">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                {label}
              </span>
              <span className="mt-4 flex items-center gap-1.5 break-all font-semibold text-ink">
                {value}
                {external && (
                  <ExternalLink aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-muted" />
                )}
              </span>
              <span className="mt-1 block text-sm text-muted">{sub}</span>
            </>
          );
          return (
            <li key={label}>
              {href ? (
                <Card
                  as="a"
                  href={href}
                  className="block h-full p-5 sm:p-6"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {body}
                </Card>
              ) : (
                <Card className="h-full p-5 sm:p-6">{body}</Card>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
