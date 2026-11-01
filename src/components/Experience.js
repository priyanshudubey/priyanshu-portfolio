import React, { useEffect, useRef } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  Server,
  Bot,
  Database,
  Terminal,
  Cpu
} from "lucide-react";
import useReveal from "../hooks/useReveal";

const experiences = [
  {
    title: "Software Engineer - AI",
    company: "EviView",
    location: "Remote",
    duration: "July 2026 - Present",
    type: "full-time",
    description:
      "Working as a developer at EviView, focused on developing and improving their in-house AI-powered products. Collaborating closely with the product and engineering teams to build, iterate, and ship features that enhance the core platform experience.",
    technologies: ["AI/ML", "Software Engineering", "Product Development", "Python", "Full-Stack"],
    achievements: [
      "Developing and improving EviView's in-house AI-powered products",
      "Building scalable software features end-to-end for the core platform",
      "Collaborating in a remote-first engineering environment",
      "Iterating rapidly on product improvements and new capabilities",
    ],
    icon: Cpu,
    current: true,
  },
  {
    title: "Backend & Systems Engineer",
    company: "Tata Consultancy Services",
    location: "Pune, India",
    duration: "July 2021 - Jan 2024",
    type: "full-time",
    description:
      "Architected and optimized high-throughput serverless backends for a leading North American airline, scaling the infrastructure to handle 30,000+ requests per minute. Spearheaded database optimization by analyzing SQL explain-plans and implementing Redis caching layers to drastically reduce query latency and Lambda cold starts. Secured APIs using AWS API Gateway with Cognito and custom JWT authorizers, while orchestrating CI/CD pipelines via AWS CloudFormation nested stacks. Engineered event-driven data pipelines using Kafka and monitored system health via CloudWatch and Kibana.",
    technologies: ["Python", "AWS Serverless", "Node.js", "SQL Optimization", "Redis Caching", "Kafka", "PySpark", "API Gateway", "Kibana"],
    achievements: [
      "Scaled API infrastructure to process 30,000+ req/min reliably",
      "Reduced database latency using advanced Redis caching strategies",
      "Automated zero-downtime deployments via CloudFormation",
      "Implemented strict IAM & JWT-based RBAC security protocols",
    ],
    icon: Server,
    current: false,
  },
  {
    title: "Conversational AI Engineer Intern",
    company: "Triluxo Technologies",
    location: "Remote",
    duration: "Oct 2020 - Dec 2020",
    type: "internship",
    description:
      "Engineered an intent-driven Conversational AI agent for hotel service automation using Google Dialogflow and Node.js. Built the natural language processing (NLP) routing logic and backend webhook integrations to seamlessly map unstructured user queries into structured database operations.",
    technologies: ["Node.js", "Google Dialogflow", "Conversational AI", "NLP", "Webhook Integration"],
    achievements: [
      "Built an intent-driven Conversational AI routing system",
      "Mapped unstructured NLP queries to backend database actions",
      "Engineered secure webhook integrations for external APIs",
      "Architected foundational agentic workflows for service delivery",
    ],
    icon: Bot,
    current: false,
  },
  {
    title: "Backend Developer Intern",
    company: "Gallant Fusion Tech",
    location: "Remote",
    duration: "July 2020 - Sep 2020",
    type: "internship",
    description:
      "Architected the foundational database schema and relational data models using MySQL for a multiplayer gaming application. Built a robust REST API infrastructure using Node.js and Express, implementing secure authentication middleware via Passport-JWT.",
    technologies: ["Node.js", "Express.js", "MySQL", "Data Modeling", "Passport-JWT", "Security"],
    achievements: [
      "Architected scalable relational database schemas in MySQL",
      "Engineered low-latency REST APIs for concurrent state management",
      "Secured API endpoints with custom JWT middleware",
      "Optimized query execution for high-performance data retrieval",
    ],
    icon: Database,
    current: false,
  },
];

const Experience = () => {
  const ref = useReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative w-full py-24 bg-[#f5f1e9] text-slate-900 overflow-hidden border-t border-[#e7e1d7]"
    >
      {/* Dark grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(107,35,56,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(107,35,56,0.035)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#6b2338]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">

        {/* Section Header */}
        <div className="mb-16 max-w-4xl reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#6b2338]/10 border border-[#6b2338]/30 text-[#6b2338] text-xs font-mono rounded-sm mb-6">
            <span className="w-1.5 h-1.5 bg-[#6b2338] rounded-full animate-pulse" />
            active_instances --trace
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1d2925]">
            Professional{" "}
            <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="w-full max-w-4xl relative border-l-2 border-[#e7e1d7] ml-2 md:ml-8 py-4 space-y-14">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            const delay = ["delay-100", "delay-200", "delay-300", "delay-400"][index] || "delay-400";

            return (
              <div key={index} className={`relative pl-8 md:pl-12 group reveal ${delay}`}>

                {/* Timeline Node */}
                <div
                  className={`absolute -left-[10px] top-6 w-5 h-5 border-4 rounded-full transition-all duration-300 group-hover:scale-125 ${
                    item.current
                      ? "bg-[#a8793e] border-[#f5f1e9] shadow-[0_0_12px_rgba(168,121,62,0.3)]"
                      : "bg-white border-[#c9c1b5] group-hover:border-[#6b2338]"
                  }`}
                />
                <div className="absolute left-0 top-8 w-8 h-0.5 bg-[#f1ece5]" />

                {/* Card */}
                <div
                  className={`border rounded-sm transition-all duration-300 card-lift relative overflow-hidden ${
                    item.current
                      ? "bg-white border-[#a8793e]/40 shadow-[0_0_32px_rgba(168,121,62,0.08)]"
                      : "bg-white border-[#e7e1d7] hover:border-[#6b2338]/40"
                  }`}
                >
                  {/* Top tag */}
                  <div
                    className={`absolute top-0 right-0 px-3 py-1.5 text-[11px] font-mono font-bold flex items-center gap-2 border-b border-l ${
                      item.current
                        ? "bg-[#a8793e]/10 border-[#a8793e]/30 text-[#a8793e]"
                        : "bg-[#f3eee8] border-[#e7e1d7] text-[#68736c]"
                    }`}
                  >
                    {item.current && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8793e] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#a8793e]" />
                      </span>
                    )}
                    {item.current ? "[ACTIVE]: CURRENT_ROLE" : `[STAGE_0${index}]: PROD_METRICS`}
                  </div>

                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 mt-2 border-b border-[#e7e1d7] pb-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded ${item.current ? "bg-[#a8793e]/15 text-[#a8793e]" : "bg-[#f1ece5] text-[#68736c]"}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-2xl font-bold text-[#1d2925]">{item.title}</h3>
                        </div>
                        <p className={`text-lg font-semibold pl-1 ${item.current ? "text-[#a8793e]" : "text-[#6b2338]"}`}>
                          {item.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8c7958] pl-1 pt-1">
                          <div className="flex items-center gap-1.5 bg-[#f3eee8] border border-[#e7e1d7] px-2 py-0.5 rounded-sm">
                            <Briefcase className="w-3.5 h-3.5" />
                            <span className="uppercase">{item.type}</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-[#f3eee8] border border-[#e7e1d7] px-2 py-0.5 rounded-sm">
                            <MapPin className="w-3.5 h-3.5" />
                            <span className="uppercase">{item.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-[#68736c] bg-[#f3eee8] border border-[#e7e1d7] px-3 py-2 rounded-sm lg:self-start h-fit w-fit">
                        <Calendar className="w-3.5 h-3.5 text-[#6b2338]" />
                        <span>{item.duration.toUpperCase()}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#59645e] leading-relaxed mb-6 font-medium text-base">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h4 className="text-xs font-mono text-[#8c7958] uppercase tracking-wider mb-4">// System Outputs & Impact</h4>
                      <ul className="space-y-2.5">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[#59645e] text-sm font-medium">
                            <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${item.current ? "text-[#a8793e]" : "text-[#6b2338]"}`} />
                            <span className="leading-normal">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-xs font-mono text-[#8c7958] uppercase tracking-wider mb-3">// Core Stack Injected</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono bg-[#f3eee8] text-[#59645e] rounded-sm border border-[#e7e1d7] hover:border-[#6b2338]/50 hover:text-[#6b2338] transition-colors"
                          >
                            <Terminal className="w-3 h-3 text-[#6b2338]" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
