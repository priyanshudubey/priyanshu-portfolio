import React from "react";
import { Github, Linkedin, Mail, Terminal, Radio } from "lucide-react";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative w-full pt-24 pb-8 bg-[#fcfcfc] text-slate-900 overflow-hidden border-t border-slate-200">
      
      {/* Precision Blueprint Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col items-center text-center">

        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white border border-slate-200 text-slate-600 text-xs font-mono mb-8 shadow-sm">
            <Radio className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            [PORT]: 8080_LISTENING
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
            Establish <span className="text-blue-600">Connection</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
            Whether you are looking to architect scalable backend infrastructure, integrate agentic workflows, or just want to talk tech—my inbox is always open for high-signal conversations.
          </p>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mt-8">

          {/* Email Node */}
          <a
            href="mailto:priyanshu0dubey@gmail.com"
            className="group bg-white border border-slate-200 p-8 rounded-sm hover:border-blue-500 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center gap-4 relative"
          >
            <div className="absolute top-0 right-0 bg-slate-50 border-b border-l border-slate-200 px-2 py-1 text-[10px] font-mono text-slate-400 group-hover:text-blue-600 transition-colors">
              PROTOCOL: SMTP
            </div>
            <Mail className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-colors" />
            <span className="font-bold text-slate-700 group-hover:text-slate-900">Email Me</span>
          </a>

          {/* LinkedIn Node */}
          <a
            href="https://www.linkedin.com/in/priyanshudubey/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-slate-200 p-8 rounded-sm hover:border-blue-500 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center gap-4 relative"
          >
            <div className="absolute top-0 right-0 bg-slate-50 border-b border-l border-slate-200 px-2 py-1 text-[10px] font-mono text-slate-400 group-hover:text-blue-600 transition-colors">
              PROTOCOL: HTTPS
            </div>
            <Linkedin className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-colors" />
            <span className="font-bold text-slate-700 group-hover:text-slate-900">LinkedIn</span>
          </a>

          {/* GitHub Node */}
          <a
            href="https://github.com/priyanshudubey"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-slate-200 p-8 rounded-sm hover:border-slate-900 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center gap-4 relative"
          >
            <div className="absolute top-0 right-0 bg-slate-50 border-b border-l border-slate-200 px-2 py-1 text-[10px] font-mono text-slate-400 group-hover:text-slate-900 transition-colors">
              PROTOCOL: SSH
            </div>
            <Github className="w-8 h-8 text-slate-400 group-hover:text-slate-900 transition-colors" />
            <span className="font-bold text-slate-700 group-hover:text-slate-900">GitHub</span>
          </a>

        </div>

        {/* ========================================= */}
        {/* MERGED FOOTER SECTION                       */}
        {/* ========================================= */}
        <div className="w-full mt-24 pt-12 border-t border-slate-200 flex flex-col items-center">
          
          {/* Authentic Terminal Exit Sequence */}
          <div className="w-full max-w-lg mx-auto bg-slate-900 rounded-md shadow-xl mb-12 overflow-hidden border border-slate-800">
            
            {/* Terminal Header */}
            <div className="bg-slate-800/80 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="text-xs font-mono text-slate-400 ml-2">bash - root@system</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-5 flex flex-wrap items-center gap-2 font-mono text-sm sm:text-base text-left">
              <span className="text-emerald-400 font-bold">priyanshu@prod:~$</span>
              <span className="text-slate-200">cd /home/pipeline && exit 0</span>
              <span className="w-2.5 h-5 bg-slate-400 animate-pulse rounded-sm"></span>
            </div>
            
          </div>

          {/* Copyright & Stack Info */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400">
            <p>
              &copy; {currentYear} Priyanshu Dubey. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              Engineered with React & Tailwind
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;