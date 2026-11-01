import React from "react";
import {
  Brain,
  Server,
  Cloud,
  Database,
  Code,
  Terminal,
  CheckSquare,
  Layers
} from "lucide-react";
import useReveal from "../hooks/useReveal";

const techCategories = [
  {
    title: "AI & LLM Engineering",
    description: "Building intelligent AI-powered products and LLM-backed workflows.",
    icon: Brain,
    color: "blue",
    skills: ["Python", "FastAPI", "OpenAI APIs", "Vector DBs (pgvector)", "AST Parsing", "Agentic Workflows"],
  },
  {
    title: "Backend & Distributed Systems",
    description: "Architecting high-throughput, low-latency execution layers.",
    icon: Server,
    color: "violet",
    skills: ["Node.js", "Express.js", "REST APIs", "Serverless Architecture", "System Design", "JWT & IAM Security"],
  },
  {
    title: "Cloud & DevOps",
    description: "Automating zero-downtime microservices and config graphs.",
    icon: Cloud,
    color: "cyan",
    skills: ["AWS Lambda", "AWS CloudFormation", "API Gateway", "CI/CD (CodePipeline)", "Kafka (Event Streams)", "CloudWatch & Kibana"],
  },
  {
    title: "Data Engineering",
    description: "Orchestrating robust pipelines and large-scale analytical runtimes.",
    icon: Database,
    color: "emerald",
    skills: ["Apache Airflow", "dbt (Data Build Tool)", "PySpark", "Databricks", "Pandas & NumPy", "Data Modeling"],
  },
  {
    title: "Storage & Optimization",
    description: "Designing low-latency caching tiers and relational engines.",
    icon: Code,
    color: "orange",
    skills: ["PostgreSQL", "MySQL", "Redis (Caching)", "SQL Optimization", "Docker", "Linux Systems"],
  },
];

const colorMap = {
  blue:    { bg: "bg-[#f3ece8]",    border: "border-[#e3d7d3]",   icon: "text-[#6b2338]",   badge: "bg-[#6b2338]",   hover: "hover:border-[#6b2338] hover:shadow-[#6b2338]/50" },
  violet:  { bg: "bg-[#f3ece8]",  border: "border-[#e3d7d3]", icon: "text-[#6b2338]", badge: "bg-[#6b2338]", hover: "hover:border-[#6b2338] hover:shadow-[#6b2338]/50" },
  cyan:    { bg: "bg-[#f3ece8]",    border: "border-[#e3d7d3]",   icon: "text-[#6b2338]",   badge: "bg-[#6b2338]",   hover: "hover:border-[#6b2338] hover:shadow-[#6b2338]/50" },
  emerald: { bg: "bg-[#f3eee2]", border: "border-[#e6ddc9]",icon: "text-[#a8793e]",badge: "bg-[#a8793e]",hover: "hover:border-[#a8793e] hover:shadow-[#a8793e]/50" },
  orange:  { bg: "bg-[#f3eee2]",  border: "border-[#e6ddc9]", icon: "text-[#a8793e]", badge: "bg-[#a8793e]", hover: "hover:border-[#a8793e] hover:shadow-[#a8793e]/50" },
};

// Marquee of tech names
const allTech = [
  "Python", "FastAPI", "OpenAI", "Node.js", "React", "AWS Lambda", "Kafka", "Redis",
  "PostgreSQL", "Docker", "PySpark", "Airflow", "dbt", "Supabase", "LLM", "RAG",
  "Git", "Kibana", "CloudFormation", "pgvector", "JWT", "CI/CD", "REST API", "Databricks",
];

const TechStack = () => {
  const ref = useReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className="relative w-full py-20 bg-[#fbfaf7] text-slate-900 overflow-hidden border-t border-slate-200"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-14">

        {/* Section Header */}
        <div className="mb-16 max-w-4xl reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-slate-200 text-base font-mono rounded-sm mb-6 shadow-md">
            <Layers className="w-3.5 h-3.5 text-[#6b2338]" />
            printenv --subsystem --all
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Technical <span className="gradient-text">Stack Registry</span>
          </h2>
        </div>

        {/* ── Marquee ── */}
        <div className="relative overflow-hidden mb-16 reveal delay-100">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fbfaf7] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fbfaf7] to-transparent z-10 pointer-events-none" />
          <div className="marquee-track py-1">
            {[...allTech, ...allTech].map((tech, i) => (
              <span
                key={i}
                className="mx-3 inline-flex items-center gap-2 px-4 py-2 text-base font-mono text-[#3d4942] bg-white border border-slate-200 rounded-sm shadow-sm whitespace-nowrap hover:border-[#6b2338] hover:text-[#6b2338] transition-colors"
              >
                <Terminal className="w-3 h-3 text-[#6b2338] shrink-0" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Category Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            const c = colorMap[category.color];
            const delay = ["delay-100", "delay-200", "delay-300", "delay-400", "delay-500"][index] || "delay-500";

            return (
              <div
                key={index}
                className={`animated-border bg-white border border-slate-200 p-6 md:p-8 rounded-sm shadow-sm hover:shadow-lg ${c.hover} transition-all duration-300 flex flex-col h-full group relative card-lift reveal ${delay}`}
              >
                {/* Node Label */}
                <div className="absolute top-0 right-0 bg-slate-50 border-b border-l border-slate-200 px-2 py-1 text-base font-mono text-[#65716a] group-hover:text-[#6b2338] transition-colors">
                  COMP_0{index + 1}
                </div>

                {/* Card Header */}
                <div className="flex items-center gap-4 mb-4 mt-2">
                  <div className={`p-3 rounded-lg ${c.bg} ${c.border} border ${c.icon} transition-all duration-200`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight leading-tight">{category.title}</h3>
                </div>

                <p className="text-base text-[#46514a] mb-6 border-b border-slate-100 pb-4 font-medium leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List */}
                <ul className="space-y-2.5 mt-auto">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-[#34413b] text-base font-medium">
                      <CheckSquare className={`w-4 h-4 shrink-0 ${c.icon}`} />
                      <span className="font-mono text-base">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
