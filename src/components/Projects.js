import React from "react";
import { 
  Github, 
  ExternalLink, 
  Database, 
  Activity, 
  Code, 
  Package,
  Cpu,
  Server,
  Terminal,
  GitBranch
} from "lucide-react";

const projects = {
  featured: {
    title: "DevElevator",
    subtitle: "Code-Aware RAG Engine for GitHub",
    description:
      "An advanced Agentic AI system that ingests, parses, and enables natural language interaction with complex GitHub repositories. Engineered a custom RAG pipeline utilizing AST (Abstract Syntax Tree) parsing to intelligently chunk functions and classes, maintaining strict semantic coherence. Integrated OpenAI's specialized embeddings with a Supabase (pgvector) database for high-precision vector similarity search, completely eliminating LLM hallucinations during code context retrieval.",
    technologies: [
      "Python",
      "FastAPI",
      "Supabase (pgvector)",
      "OpenAI Embeddings",
      "AST Parsing",
      "LLM Orchestration",
    ],
    metrics: [
      "Semantic Code Chunking",
      "Sub-second Vector Search",
      "Context-Aware Generation"
    ],
    icon: Cpu,
    github: "https://github.com/priyanshudubey/develevetor-web",
    live: "http://develevator.me/" 
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
  ]
};

const Projects = () => {
  const featured = projects.featured;

  return (
    <section id="projects" className="relative w-full py-24 bg-[#fcfcfc] text-slate-900 overflow-hidden border-t border-slate-200">
      
      {/* Precision Blueprint Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60"></div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="mb-16 max-w-4xl border-l-2 border-slate-900 pl-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            System Architecture <span className="text-blue-600">& Microservices</span>
          </h2>
          
          {/* Mini Inline Terminal Execution */}
          <div className="mt-5 inline-flex items-center gap-2 bg-slate-900 rounded-md px-4 py-2.5 font-mono text-sm shadow-sm border border-slate-800 overflow-x-auto max-w-full">
            <span className="text-emerald-400 font-bold shrink-0">priyanshu@prod:~$</span>
            <span className="text-slate-200 whitespace-nowrap">ls -la /var/www/active_projects</span>
            <span className="w-2 h-4 bg-slate-400 animate-pulse rounded-sm inline-block shrink-0"></span>
          </div>
        </div>

        {/* Pipeline Container for Featured Project */}
        <div className="w-full relative border-l-2 border-slate-200 ml-2 md:ml-8 py-4 mb-12">
          
          <div className="relative pl-8 md:pl-12 group">
            
            {/* Main Node Connection */}
            <div className="absolute -left-[10px] top-8 w-5 h-5 bg-white border-4 border-blue-600 rounded-sm"></div>
            <div className="absolute left-0 top-10 w-8 h-0.5 bg-blue-200"></div>

            {/* Core Project Block */}
            <div className="bg-white border-2 border-slate-200 p-8 md:p-10 rounded-sm shadow-sm transition-shadow relative">
              
              <div className="absolute top-0 right-0 bg-blue-50 border-b border-l border-blue-100 px-3 py-1 text-[11px] font-mono text-blue-700 font-bold flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                [FLAGSHIP_NODE]: DEVELEVATOR
              </div>

              <div className="flex flex-col lg:flex-row gap-10 mt-4">
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded bg-slate-100 text-slate-700">
                      <featured.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                      {featured.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg font-bold text-blue-600 pl-1 mb-6">
                    {featured.subtitle}
                  </p>
                  
                  <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                    {featured.description}
                  </p>

                  {/* Architecture Metrics Output */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {featured.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200 px-3 py-2 rounded-sm shadow-sm">
                        <Terminal className="w-3.5 h-3.5 text-blue-500" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8 border-t border-slate-100 pt-6">
                    {featured.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-mono bg-white text-slate-700 rounded-sm border border-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Execution Links */}
                  <div className="flex gap-4">
                    <a href={featured.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-sm font-semibold transition-all duration-200 shadow-md text-sm">
                      <Github className="w-4 h-4 text-slate-300 group-hover:-translate-y-0.5 transition-transform" />
                      [EXECUTE]: Source_Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parallel Streams / Freelance Grid */}
        <div className="pl-4 md:pl-12">
            
            {/* Bold Fork Indicator */}
            <div className="flex items-center gap-4 mb-8 w-full">
              <div className="inline-flex items-center gap-2.5 bg-slate-900 border border-slate-700 text-slate-100 px-4 py-2 rounded-sm shadow-sm font-mono text-sm">
                <GitBranch className="w-4 h-4 text-blue-400" />
                <span className="font-bold tracking-wide">[FORK]: FREELANCE_WORK</span>
              </div>
              {/* Horizontal Pipeline Connector */}
              <div className="flex-grow h-px bg-slate-300 hidden sm:block"></div>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {projects.freelance.map((project, index) => {
              const Icon = project.icon;

              return (
                <div key={index} className="bg-white border border-slate-200 p-6 md:p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group relative">
                  
                  {/* Node Hex Tag */}
                  <div className="absolute top-0 right-0 bg-slate-50 border-b border-l border-slate-200 px-2 py-1 text-[10px] font-mono text-slate-400">
                    MOD_0{index + 1}
                  </div>

                  <div className="flex justify-between items-start mb-6 mt-2">
                    <div className="p-2.5 rounded bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors bg-slate-50 border border-slate-200 p-1.5 rounded-sm">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-4">{project.subtitle}</p>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-100">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-[11px] font-mono text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-sm">
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