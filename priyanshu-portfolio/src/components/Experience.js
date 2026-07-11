import React from "react";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Server, 
  Bot, 
  Database, 
  Terminal 
} from "lucide-react";

const experiences = [
  {
    title: "Backend & Systems Engineer",
    company: "Tata Consultancy Services",
    location: "Pune, India",
    duration: "July 2021 - Jan 2024",
    type: "full-time",
    description:
      "Architected and optimized high-throughput serverless backends for a leading North American airline, scaling the infrastructure to handle 30,000+ requests per minute. Spearheaded database optimization by analyzing SQL explain-plans and implementing Redis caching layers to drastically reduce query latency and Lambda cold starts. Secured APIs using AWS API Gateway with Cognito and custom JWT authorizers, while orchestrating CI/CD pipelines via AWS CloudFormation nested stacks. Engineered event-driven data pipelines using Kafka and monitored system health via CloudWatch and Kibana.",
    technologies: [
      "Python",
      "AWS Serverless",
      "Node.js",
      "SQL Optimization",
      "Redis Caching",
      "Kafka",
      "PySpark",
      "API Gateway",
      "Kibana",
    ],
    achievements: [
      "Scaled API infrastructure to process 30,000+ req/min reliably",
      "Reduced database latency using advanced Redis caching strategies",
      "Automated zero-downtime deployments via CloudFormation",
      "Implemented strict IAM & JWT-based RBAC security protocols",
    ],
    icon: Server,
  },
  {
    title: "Conversational AI Engineer Intern",
    company: "Triluxo Technologies",
    location: "Remote",
    duration: "Oct 2020 - Dec 2020",
    type: "internship",
    description:
      "Engineered an intent-driven Conversational AI agent for hotel service automation using Google Dialogflow and Node.js. Built the natural language processing (NLP) routing logic and backend webhook integrations to seamlessly map unstructured user queries into structured database operations. Designed this early-stage agentic workflow to connect conversational interfaces directly with backend operational fulfillment systems.",
    technologies: [
      "Node.js",
      "Google Dialogflow",
      "Conversational AI",
      "NLP",
      "Webhook Integration",
    ],
    achievements: [
      "Built an intent-driven Conversational AI routing system",
      "Mapped unstructured NLP queries to backend database actions",
      "Engineered secure webhook integrations for external APIs",
      "Architected foundational agentic workflows for service delivery",
    ],
    icon: Bot,
  },
  {
    title: "Backend Developer Intern",
    company: "Gallant Fusion Tech",
    location: "Remote",
    duration: "July 2020 - Sep 2020",
    type: "internship",
    description:
      "Architected the foundational database schema and relational data models using MySQL for a multiplayer gaming application. Built a robust REST API infrastructure using Node.js and Express, implementing secure authentication middleware via Passport-JWT. Focused heavily on query optimization and scalable backend design to ensure low-latency state management for concurrent users.",
    technologies: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Data Modeling",
      "Passport-JWT",
      "Security",
    ],
    achievements: [
      "Architected scalable relational database schemas in MySQL",
      "Engineered low-latency REST APIs for concurrent state management",
      "Secured API endpoints with custom JWT middleware",
      "Optimized query execution for high-performance data retrieval",
    ],
    icon: Database,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-24 bg-[#fcfcfc] text-slate-900 overflow-hidden border-t border-slate-200">
      
      {/* Precision Blueprint Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60"></div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="mb-16 max-w-4xl border-l-2 border-slate-900 pl-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          
          {/* Mini Inline Terminal Execution */}
          <div className="mt-5 inline-flex items-center gap-2 bg-slate-900 rounded-md px-4 py-2.5 font-mono text-sm shadow-sm border border-slate-800 overflow-x-auto max-w-full">
            <span className="text-emerald-400 font-bold shrink-0">priyanshu@prod</span>
            <span className="text-slate-200 whitespace-nowrap">~ active_instances --trace</span>
            <span className="w-2 h-4 bg-slate-400 animate-pulse rounded-sm inline-block shrink-0"></span>
          </div>
        </div>
        {/* <div className="mb-16 max-w-4xl border-l-2 border-slate-900 pl-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Professional <span className="text-blue-600">Experience </span>
          </h2>
          <p className="text-sm font-mono text-slate-500 mt-2">
            ~ active_instances --trace
          </p>
        </div> */}

        {/* Vertical Pipeline Framework */}
        <div className="w-full max-w-4xl relative border-l-2 border-slate-200 ml-2 md:ml-8 py-4 space-y-16">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="relative pl-8 md:pl-12 group">
                
                {/* Node Connection Point */}
                <div className="absolute -left-[10px] top-6 w-5 h-5 bg-white border-4 border-slate-400 rounded-full transition-transform group-hover:scale-110 group-hover:border-blue-600"></div>
                
                {/* Branch Line */}
                <div className="absolute left-0 top-8 w-8 h-0.5 bg-slate-200"></div>

                {/* Main Computing Block */}
                <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-200 relative">
                  
                  {/* Top Block Log Tag */}
                  <div className="absolute top-0 right-0 bg-slate-100 border-b border-l border-slate-200 px-3 py-1 text-[11px] font-mono text-slate-500">
                    [STAGE_0{index + 1}]: PROD_METRICS
                  </div>

                  {/* Header Meta Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 mt-2 border-b border-slate-100 pb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-slate-100 text-slate-700">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                      </div>
                      
                      <p className="text-lg font-semibold text-blue-600 pl-1">
                        {item.company}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pl-1 pt-1">
                        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-sm">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span className="uppercase">{item.type}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-sm">
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="uppercase">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Log Node */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200 px-3 py-2 rounded-sm lg:self-start h-fit w-fit shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{item.duration.toUpperCase()}</span>
                    </div>
                  </div>

                  {/* Operational Summary */}
                  <p className="text-slate-600 leading-relaxed mb-6 font-medium text-base">
                    {item.description}
                  </p>

                  {/* Achievements Section */}
                  <div className="mb-8">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">// System Outputs & Impact</h4>
                    <ul className="space-y-3">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                          <CheckCircle className="w-4 h-4 mt-0.5 text-blue-500 shrink-0" />
                          <span className="leading-normal">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engine Stack Map */}
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">// Core Stack Injected</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono bg-slate-50 text-slate-600 rounded-sm border border-slate-200"
                        >
                          <Terminal className="w-3 h-3 text-blue-500" />
                          {tech}
                        </span>
                      ))}
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