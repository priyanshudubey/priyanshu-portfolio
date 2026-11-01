import React from "react";
import {
  Github,
  ExternalLink,
  Database,
  Activity,
  Package,
  Cpu,
  Server,
  Terminal,
  GitBranch,
  Zap,
  ArrowUpRight
} from "lucide-react";
import useReveal from "../hooks/useReveal";

const projects = {
  featured: {
    title: "DevElevator",
    subtitle: "Code-Aware RAG Engine for GitHub",
    description:
      "An advanced Agentic AI system that ingests, parses, and enables natural language interaction with complex GitHub repositories. Engineered a custom RAG pipeline utilizing AST (Abstract Syntax Tree) parsing to intelligently chunk functions and classes, maintaining strict semantic coherence. Integrated OpenAI's specialized embeddings with a Supabase (pgvector) database for high-precision vector similarity search, completely eliminating LLM hallucinations during code context retrieval.",
    technologies: ["Python", "FastAPI", "Supabase (pgvector)", "OpenAI Embeddings", "AST Parsing", "LLM Orchestration"],
    metrics: ["Semantic Code Chunking", "Sub-second Vector Search", "Context-Aware Generation"],
    icon: Cpu,
    github: "https://github.com/priyanshudubey/develevetor-web",
    live: "http://develevator.me/",
  },
  freelance: [
    {
      title: "VST Industrial ERP",
      subtitle: "Inventory & Dispatch Engine",
      description:
        "Architected a full-scale inventory and dispatch management system to track incoming and outgoing steel products. Engineered a data-analytics dashboard to process historical sales data, identifying supply-chain bottlenecks for enterprise-level decision making.",
      technologies: ["React", "Python", "Node.js", "SQL", "Analytics"],
      icon: Package,
      live: "https://inventory.vstbokaro.com",
    },
    {
      title: "Smart POS & Analytics",
      subtitle: "UK Food & Beverage Sector",
      description:
        "Developed a contactless QR menu system integrated with a centralized POS dashboard for a restaurant in the UK. Designed a custom data pipeline to aggregate daily order metrics, providing actionable analytics on revenue forecasting.",
      technologies: ["Node.js", "React", "Python", "Pipelines"],
      icon: Activity,
      live: "#",
    },
    {
      title: "VST Corporate Portal",
      subtitle: "B2B Client Acquisition",
      description:
        "Designed and deployed a highly performant corporate portfolio website for an industrial steel trading enterprise. Focused on responsive design, SEO optimization, and sub-second load times to establish a strong digital B2B presence.",
      technologies: ["React", "Tailwind CSS", "SEO", "UI/UX"],
      icon: Server,
      live: "https://vstbokaro.com",
    },
  ],
};

const Projects = () => {
  const ref = useReveal();
  const featured = projects.featured;

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full py-24 bg-gradient-to-br from-[#f5f0e6] via-[#fbfaf7] to-[#f3ece8] text-slate-900 overflow-hidden border-t border-slate-200"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6b2338]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">

        {/* Section Header */}
        <div className="mb-16 max-w-4xl reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f3ece8] border border-[#e3d7d3] text-[#6b2338] text-xs font-mono rounded-sm mb-6">
            <Zap className="w-3.5 h-3.5" />
            ls -la /var/www/active_projects
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Projects <span className="gradient-text">& Builds</span>
          </h2>
        </div>

        {/* ── Featured Project ── */}
        <div className="mb-16 reveal delay-100">
          <div className="relative overflow-hidden rounded-sm border border-[#e3d7d3]/70 shadow-xl shadow-[#6b2338]/50 bg-white">
            {/* Gradient top bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#6b2338] via-[#8a4556] to-[#b08a50]" />

            {/* Badge */}
            <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 bg-[#6b2338] text-white text-[11px] font-mono font-bold rounded-sm shadow-lg shadow-[#6b2338]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              FLAGSHIP_PROJECT
            </div>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#f3ece8] to-[#f3eee2] border border-[#e3d7d3]">
                  <featured.icon className="w-7 h-7 text-[#6b2338]" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">{featured.title}</h3>
                  <p className="text-[#6b2338] font-bold text-lg">{featured.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed mt-6 mb-8 max-w-3xl font-medium">
                {featured.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-3 mb-8">
                {featured.metrics.map((m, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-[#6b2338] bg-[#f3ece8] border border-[#e3d7d3] px-3 py-2 rounded-sm">
                    <Terminal className="w-3.5 h-3.5" />
                    {m}
                  </div>
                ))}
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 mb-8 pt-6 border-t border-slate-100">
                {featured.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono bg-slate-50 text-slate-700 border border-slate-200 rounded-sm hover:border-[#6b2338] hover:bg-[#f3ece8] hover:text-[#6b2338] transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-sm font-semibold transition-all duration-200 shadow-md text-sm"
                >
                  <Github className="w-4 h-4 text-slate-300 group-hover:-translate-y-0.5 transition-transform" />
                  [EXECUTE]: Source_Code
                </a>
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-[#6b2338] hover:bg-[#6b2338] text-white px-6 py-2.5 rounded-sm font-semibold transition-all duration-200 shadow-md shadow-[#6b2338] text-sm"
                >
                  <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  [LIVE]: develevator.me
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Freelance Grid ── */}
        <div className="pl-0">
          <div className="flex items-center gap-4 mb-8 reveal delay-200">
            <div className="inline-flex items-center gap-2.5 bg-slate-900 border border-slate-700 text-slate-100 px-4 py-2 rounded-sm shadow-sm font-mono text-sm">
              <GitBranch className="w-4 h-4 text-[#6b2338]" />
              <span className="font-bold tracking-wide">[FORK]: FREELANCE_WORK</span>
            </div>
            <div className="flex-grow h-px bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.freelance.map((project, index) => {
              const Icon = project.icon;
              const delay = ["delay-300", "delay-400", "delay-500"][index] || "delay-500";

              return (
                <div
                  key={index}
                  className={`animated-border bg-white border border-slate-200 p-6 md:p-8 rounded-sm shadow-sm flex flex-col group relative card-lift reveal ${delay}`}
                >
                  <div className="absolute top-0 right-0 bg-slate-50 border-b border-l border-slate-200 px-2 py-1 text-[10px] font-mono text-slate-400 group-hover:text-[#6b2338] transition-colors">
                    MOD_0{index + 1}
                  </div>

                  <div className="flex justify-between items-start mb-6 mt-2">
                    <div className="p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-[#f3ece8] group-hover:text-[#6b2338] transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#6b2338] transition-colors bg-slate-50 border border-slate-200 hover:border-[#6b2338] hover:bg-[#f3ece8] p-1.5 rounded-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#6b2338] transition-colors">{project.title}</h3>
                  <p className="text-sm font-semibold text-[#6b2338] mb-4">{project.subtitle}</p>

                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-100">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-[11px] font-mono text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-sm hover:border-[#e3d7d3] hover:text-[#6b2338] transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
