import { Briefcase, Calendar, CheckCircle2, ExternalLink, MapPin } from "lucide-react";
import { experiences } from "../data/content";
import { Card, Meta, Section, SectionHeader, TagList, Timeline, TimelineItem } from "./ui";

export default function Experience() {
  return (
    <Section id="experience" alt>
      <SectionHeader
        id="experience"
        command="git log --author=priyanshu"
        title="Professional"
        accent="experience"
      />

      <Timeline>
        {experiences.map((job, i) => {
          const Icon = job.icon;
          return (
            <TimelineItem
              key={`${job.company}-${job.title}`}
              current={job.current}
              delay={Math.min(i, 3) * 80}
            >
              <Card
                as="article"
                className="group grid gap-6 p-6 sm:p-8 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] xl:gap-12"
              >
                {/* Left: who / where / when, separated by an engraved groove */}
                <header className="groove groove-y-xl pb-6 xl:pb-0 xl:pr-10">
                  <div className="flex items-center gap-3">
                    <span
                      className={`icon-well h-11 w-11 shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                        job.current ? "text-highlight" : "text-accent"
                      }`}
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-bold text-ink sm:text-2xl">{job.title}</h3>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-accent">
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:underline"
                      >
                        {job.company}
                        <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      job.company
                    )}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <Meta icon={Calendar} className="whitespace-nowrap">
                      {job.duration}
                    </Meta>
                    <Meta icon={Briefcase}>{job.type}</Meta>
                    <Meta icon={MapPin}>{job.location}</Meta>
                    {job.current && (
                      <span className="neu-raised-xs inline-flex items-center gap-2 rounded-lg px-2.5 py-1 font-mono text-xs font-semibold text-highlight">
                        <span className="led" aria-hidden="true" />
                        Current role
                      </span>
                    )}
                  </div>
                </header>

                {/* Right: what */}
                <div className="min-w-0">
                  <p className="mb-6 max-w-4xl leading-relaxed text-ink-soft">{job.description}</p>

                  <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                    Impact
                  </h4>
                  <ul className="mb-7 grid gap-x-8 gap-y-2.5 2xl:grid-cols-2">
                    {job.achievements.map((a, j) => (
                      <li
                        key={a}
                        style={{ "--i": j }}
                        className="stagger-item flex items-start gap-3 text-ink-soft"
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className={`mt-0.5 h-4 w-4 shrink-0 ${job.current ? "text-highlight" : "text-accent"}`}
                        />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <TagList items={job.technologies} label={`Technologies used at ${job.company}`} />
                </div>
              </Card>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Section>
  );
}
