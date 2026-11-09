import { Check } from "lucide-react";
import { marquee, skills } from "../data/content";
import { Card, Section, SectionHeader } from "./ui";

const half = Math.ceil(marquee.length / 2);
const rows = [marquee.slice(0, half), marquee.slice(half)];

export default function TechStack() {
  return (
    <Section id="skills" alt>
      <SectionHeader id="skills" command="cat stack.yaml" title="Technical" accent="skills" />

      {/* Decorative ticker (two rows, opposite directions) of raised keys; the accessible
          list is in the cards. Vertical padding leaves room for the soft shadows. */}
      <div
        aria-hidden="true"
        className="reveal mb-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        {rows.map((row, r) => (
          <div key={r} className="marquee-row">
            <div className={`marquee-track py-3 ${r === 1 ? "reverse" : ""}`}>
              {[...row, ...row, ...row, ...row].map((tech, i) => (
                <span
                  key={i}
                  className="neu-raised-xs mx-2.5 whitespace-nowrap rounded-xl px-4 py-2 font-mono text-sm text-ink-soft transition-colors hover:text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-5">
        {skills.map((group, i) => {
          const Icon = group.icon;
          return (
            <Card
              as="article"
              key={group.title}
              className={`reveal reveal-scale group flex flex-col p-6 sm:p-8 2xl:col-span-1 2xl:p-6 ${
                i >= 3 ? "lg:col-span-3" : "lg:col-span-2"
              } ${i === skills.length - 1 ? "md:col-span-2" : ""}`}
              style={{ "--reveal-delay": `${Math.min(i, 4) * 80}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="icon-well h-11 w-11 shrink-0 text-accent transition-transform duration-300 group-hover:-rotate-6">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold leading-tight text-ink">{group.title}</h3>
              </div>
              <p className="groove mb-5 pb-4 text-ink-soft">{group.description}</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 2xl:grid-cols-1">
                {group.items.map((item, j) => (
                  <li
                    key={item}
                    style={{ "--i": j }}
                    className="stagger-item flex items-center gap-2.5 text-sm text-ink-soft"
                  >
                    <span className="neu-inset-sm flex h-5 w-5 shrink-0 items-center justify-center rounded-md">
                      <Check aria-hidden="true" className="h-3 w-3 text-accent" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
