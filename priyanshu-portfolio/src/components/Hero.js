import React from 'react';
import { Database, Server, GitBranch, Cpu, ArrowRight, Play, Terminal, Activity, FileText, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] bg-[#fcfcfc] text-slate-900 flex items-center justify-center overflow-hidden pt-24 pb-12">
      
      {/* Blueprint Canvas Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60"></div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 flex justify-center lg:justify-start">
        
        {/* The Pipeline Container */}
        <div className="w-full max-w-4xl relative border-l-2 border-slate-200 ml-2 md:ml-8 py-8 space-y-16">
          
          {/* Node 1: Ingestion / Identity */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white border-2 border-slate-400 rounded-full"></div>
            
            {/* System Status Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-5 mt-1">
              {/* Connection Status */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono rounded-sm shadow-sm">
                <Play className="w-3 h-3 text-slate-400" /> [NODE_01]: CONNECTED
              </div>
              
              {/* Location Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono rounded-sm shadow-sm">
                <MapPin className="w-3 h-3 text-slate-500" /> [ENV]: PUNE, IN
              </div>

              {/* The "Hire Me" Target Flag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold rounded-sm shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                [STATUS]: AVAILABLE_FOR_HIRE (DATA ENGINEER)
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Hi, I'm <span className="text-blue-600">Priyanshu.</span>
            </h1>
          </div>

          {/* Node 2: Transformation / Core Processing Engine */}
          <div className="relative pl-8 md:pl-12 group">
            {/* Square Node Indicator for Processing */}
            <div className="absolute -left-[10px] top-4 w-5 h-5 bg-blue-600 border-4 border-[#fcfcfc] rounded-sm transition-transform group-hover:scale-110"></div>
            {/* Horizontal Connector Line */}
            <div className="absolute left-0 top-6 w-8 h-0.5 bg-slate-200"></div>
            
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow relative">
              <div className="absolute top-0 right-0 bg-slate-100 border-b border-l border-slate-200 px-2 py-1 text-[10px] font-mono text-slate-500">
                DATA_TRANSFORM_LAYER
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600 underline mt-2">
                Architecting Heavy Data Pipelines & Code-Aware AI
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                I specialize in high-throughput Data Engineering and event-driven architectures. I transform raw data constraints into scalable production pipelines, whether it's orchestrating AWS and Kafka event streams to process 30,000+ req/min, optimizing heavy relational data models, or building vector ingestion pipelines for RAG engines.
              </p>
            </div>
          </div>

          {/* Node 3: Parallel Streams / Tech Stack */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[13px] top-2 w-6 h-6 bg-[#fcfcfc] flex items-center justify-center">
              <GitBranch className="w-4 h-4 text-slate-400" />
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm font-mono text-slate-600">
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-sm shadow-sm">
                <Terminal className="w-4 h-4 text-blue-600" /> Data Engineering
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-sm shadow-sm">
                <Database className="w-4 h-4 text-blue-600" /> Database Management
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-sm shadow-sm">
                <Activity className="w-4 h-4 text-blue-600" /> AWS Serverless
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-sm shadow-sm">
                <Cpu className="w-4 h-4 text-blue-600" /> LLM Agents / RAG
              </div>
            </div>
          </div>

          {/* Node 4: Output Sink / Actions */}
          <div className="relative pl-8 md:pl-12">
            {/* End Node Indicator */}
            <div className="absolute -left-[9px] top-3 w-4 h-4 bg-white border-2 border-slate-800 rounded-full"></div>
            <div className="absolute left-[-2px] top-6 w-1 h-8 bg-[#fcfcfc]"></div> {/* Hides the line going further down */}
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="group flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-sm font-semibold transition-all duration-200 shadow-md"
              >
                <Server className="w-4 h-4 text-slate-300" />
                [OUTPUT]: Execute_Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/Priyanshu_Dubey_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-8 py-3.5 rounded-sm font-semibold transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
                [FETCH]: Resume.pdf
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;