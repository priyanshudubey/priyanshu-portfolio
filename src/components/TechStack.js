import React from "react";
import { 
  Brain, 
  Server, 
  Cloud, 
  Database, 
  Code,
  Terminal,
  CheckSquare
} from "lucide-react";

const techCategories = [
  {
    title: "AI & RAG Infrastructure",
    description: "Building code-aware agents and vector search pipelines.",
    icon: Brain,
    skills: [
      "Python", 
      "FastAPI", 
      "OpenAI APIs", 
      "Vector DBs (pgvector)", 
      "AST Parsing", 
      "Agentic Workflows"
    ]
  },
  {
    title: "Data Engineering & Scale",
    description: "Orchestrating robust pipelines and large-scale analytical runtimes.",
    icon: Database,
    skills: [
      "Apache Airflow",
      "dbt (Data Build Tool)",
      "PySpark",
      "Databricks",
      "Pandas & NumPy",
      "Data Modeling"
    ]
  },
  {
    title: "Backend & Distributed Systems",
    description: "Architecting high-throughput, low-latency execution layers.",
    icon: Server,
    skills: [
      "Node.js", 
      "Express.js", 
      "REST APIs", 
      "Serverless Architecture", 
      "System Design", 
      "JWT & IAM Security"
    ]
  },
  {
    title: "Cloud & infrastructure (DevOps)",
    description: "Automating zero-downtime microservices and configuration graphs.",
    icon: Cloud,
    skills: [
      "AWS Lambda", 
      "AWS CloudFormation", 
      "API Gateway", 
      "CI/CD (CodePipeline)", 
      "Kafka (Event Streams)",
      "CloudWatch & Kibana"
    ]
  },
  {
    title: "Storage & Optimization",
    description: "Designing low-latency caching tiers and relational engines.",
    icon: Code,
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis (Caching)",
      "SQL Optimization",
      "Docker",
      "Linux Systems"
    ]
  }
];

const TechStack = () => {
  return (
    <section id="skills" className="relative w-full py-24 bg-[#fcfcfc] text-slate-900 overflow-hidden border-t border-slate-200">
      
      {/* Precision Blueprint Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60"></div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="mb-16 max-w-4xl border-l-2 border-slate-900 pl-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Technical <span className="text-blue-600">Stack Registry</span>
          </h2>
          
          {/* Mini Inline Terminal Execution */}
          <div className="mt-5 inline-flex items-center gap-2 bg-slate-900 rounded-md px-4 py-2.5 font-mono text-sm shadow-sm border border-slate-800">
            <span className="text-emerald-400 font-bold">priyanshu@prod:~$</span>
            <span className="text-slate-200">printenv --subsystem --all</span>
            <span className="w-2 h-4 bg-slate-400 animate-pulse rounded-sm inline-block"></span>
          </div>
        </div>

        {/* Technical Registry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div 
                key={index} 
                className="bg-white border border-slate-200 p-6 md:p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full group relative"
              >
                {/* Node Label */}
                <div className="absolute top-0 right-0 bg-slate-50 border-b border-l border-slate-200 px-2 py-1 text-[10px] font-mono text-slate-400">
                  COMP_0{index + 1}
                </div>

                {/* Card Header */}
                <div className="flex items-center gap-4 mb-4 mt-2">
                  <div className="p-2.5 rounded bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">{category.title}</h3>
                </div>
                
                <p className="text-sm text-slate-500 mb-6 border-b border-slate-100 pb-4 font-medium">
                  {category.description}
                </p>

                {/* Skills Injected List */}
                <ul className="space-y-3 mt-auto">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-slate-700 text-sm font-medium font-mono">
                      <CheckSquare className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{skill}</span>
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