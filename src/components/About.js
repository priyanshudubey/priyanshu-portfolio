import React from "react";
import { Mail, MapPin, Briefcase, User, ExternalLink, Terminal } from "lucide-react";
import useReveal from "../hooks/useReveal";

const stats = [
  { label: "Years building software", value: "4+" },
  { label: "Production systems shipped", value: "17+" },
  { label: "Peak requests handled / min", value: "200K+" },
];

const quickFacts = [
  {
    icon: Briefcase,
    label: "Current Role",
    value: "Software Engineer - AI",
    sub: "EviView | Remote",
    href: "https://eviview.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, India",
    sub: "[ENV]: PUNE_IN",
  },
  {
    icon: Mail,
    label: "Email",
    value: "priyanshu0dubey@gmail.com",
    sub: "PROTOCOL: SMTP",
    href: "mailto:priyanshu0dubey@gmail.com",
  },
];

function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full py-24 bg-[#fbfaf7] text-[#1d2925] overflow-hidden border-t border-[#e7e1d7]"
    >
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e7e1d7_1px,transparent_1px),linear-gradient(to_bottom,#e7e1d7_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">

        {/* Section Header */}
        <div className="mb-16 max-w-4xl border-l-2 border-[#6b2338] pl-5 reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            A little <span className="text-[#6b2338]">about me</span>
          </h2>
          <p className="mt-3 text-[#59645e] max-w-2xl leading-relaxed">
            I build AI-powered products and the reliable systems behind them.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 bg-[#1d2925] rounded-md px-4 py-2.5 font-mono text-sm shadow-sm border border-[#34443c]">
            <span className="text-[#d1b277] font-bold">priyanshu@prod:~$</span>
            <span className="text-[#e8e4da]">cat /etc/profile.d/priyanshu.conf</span>
            <span className="w-2 h-4 bg-[#a8793e] animate-pulse rounded-sm inline-block" />
          </div>
        </div>

        {/* Pipeline Container */}
        <div className="w-full relative border-l-2 border-[#e7e1d7] ml-2 md:ml-8 py-4 space-y-10">

          {/* Node: Bio Block */}
          <div className="relative pl-8 md:pl-12 group reveal delay-100">
            <div className="absolute -left-[10px] top-6 w-5 h-5 bg-[#6b2338] border-4 border-[#fbfaf7] rounded-sm transition-transform group-hover:scale-110" />
            <div className="absolute left-0 top-8 w-8 h-0.5 bg-[#ded8cb]" />

            <div className="bg-white border border-[#e9e4dc] p-6 sm:p-8 rounded-sm shadow-sm hover:border-[#b9987b] hover:shadow-lg card-lift transition-all duration-300 relative">
              <div className="flex items-center gap-3 mb-5 mt-1">
                <div className="p-2.5 rounded bg-[#f1ece5] text-[#806333]">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1d2925] tracking-tight">What I do</h3>
              </div>

              <p className="text-[#59645e] text-base leading-relaxed font-medium max-w-3xl">
                I'm a Software Engineer with 4+ years of experience building AI products, cloud-native backend
                systems, and data platforms. At <span className="text-[#6b2338] font-semibold">EviView</span>, I work
                with product and engineering teams to turn ideas into features and dependable production systems.
                I enjoy connecting thoughtful system design with practical product delivery.
              </p>
            </div>
          </div>

          {/* Node: Stats */}
          <div className="relative pl-8 md:pl-12 reveal delay-200">
            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white border-2 border-[#a8793e] rounded-full" />

            <p className="mb-4 text-sm text-[#68736c]">A snapshot of my experience and the scale of systems I have worked on.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e9e4dc] p-5 rounded-sm shadow-sm text-center group hover:border-[#b9987b] hover:shadow-lg card-lift transition-all duration-200 relative reveal-scale delay-200"
                >
                  <div className="absolute top-0 right-0 bg-[#f6f2ec] border-b border-l border-[#e9e4dc] px-2 py-1 text-[10px] font-mono text-[#8c7958]">
                    STAT_0{idx + 1}
                  </div>
                  <p className="text-3xl font-extrabold text-[#6b2338] mt-1">{stat.value}</p>
                  <p className="text-xs font-mono text-[#68736c] mt-1 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Node: Quick Facts */}
          <div className="relative pl-8 md:pl-12 group reveal delay-300">
            <div className="absolute -left-[13px] top-2 w-6 h-6 bg-[#fbfaf7] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-[#6b2338]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickFacts.map((fact, idx) => {
                const Icon = fact.icon;
                const content = (
                  <div
                    className={`bg-white border border-[#e9e4dc] p-5 rounded-sm shadow-sm hover:shadow-md hover:border-[#b9987b] transition-all duration-200 flex flex-col gap-2 relative group ${fact.href ? "cursor-pointer" : ""}`}
                  >
                    <div className="absolute top-0 right-0 bg-[#f6f2ec] border-b border-l border-[#e9e4dc] px-2 py-1 text-[10px] font-mono text-[#8c7958] group-hover:text-[#6b2338] transition-colors">
                      {fact.sub}
                    </div>
                    <div className="flex items-center gap-2.5 mt-2">
                      <div className="p-2 rounded bg-[#f1ece5] text-[#806333] group-hover:bg-[#eee5df] group-hover:text-[#6b2338] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-[#68736c] uppercase tracking-wide">{fact.label}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <p className="text-sm font-bold text-[#293630]">{fact.value}</p>
                      {fact.href && (
                        <ExternalLink className="w-3 h-3 text-[#8c7958] group-hover:text-[#6b2338] transition-colors" />
                      )}
                    </div>
                  </div>
                );

                return fact.href ? (
                  <a key={idx} href={fact.href} target={fact.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={idx}>{content}</div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
