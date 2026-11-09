import { Award, Calendar, MapPin } from "lucide-react";
import { education } from "../data/content";
import { Card, Meta, Section, SectionHeader, TagList, Timeline, TimelineItem } from "./ui";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader
        id="education"
        command="cat education.log"
        title="Academic"
        accent="background"
      />

      <Timeline>
        {education.map((item, i) => {
          const Icon = item.icon;
          return (
            <TimelineItem key={item.degree} delay={i * 80}>
              <Card
                as="article"
                className="group grid gap-6 p-6 sm:p-8 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] xl:gap-12"
              >
                <header className="groove groove-y-xl pb-6 xl:pb-0 xl:pr-10">
                  <div className="flex items-center gap-3">
                    <span className="icon-well h-11 w-11 shrink-0 text-accent transition-transform duration-300 group-hover:scale-105">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-bold text-ink sm:text-2xl">{item.degree}</h3>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-accent">{item.institution}</p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <Meta icon={Calendar} className="whitespace-nowrap">
                      {item.duration}
                    </Meta>
                    <Meta icon={MapPin}>{item.location}</Meta>
                    <span className="neu-raised-xs inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-xs font-semibold text-accent">
                      <Award aria-hidden="true" className="h-3.5 w-3.5" />
                      {item.result}
                    </span>
                  </div>
                </header>

                <div className="min-w-0 self-center">
                  <p className="mb-6 max-w-4xl text-lg leading-relaxed text-ink-soft">
                    {item.details}
                  </p>
                  <TagList items={item.highlights} label="Focus areas" />
                </div>
              </Card>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Section>
  );
}
