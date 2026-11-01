import React from "react";
import { Github, Linkedin, Mail, Terminal, Radio } from "lucide-react";
import useReveal from "../hooks/useReveal";

const Contact = () => {
  const ref = useReveal();
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" ref={ref} className="relative w-full pt-24 pb-8 bg-[#f5f1e9] text-slate-900 overflow-hidden border-t border-[#e7e1d7]">
      
      {/* Dark grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(107,35,56,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(107,35,56,0.035)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-[#6b2338]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-14 flex flex-col items-center text-center">

        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#6b2338]/10 border border-[#6b2338]/30 text-[#6b2338] text-base font-mono mb-8 shadow-sm">
            <Radio className="w-3.5 h-3.5 text-[#6b2338] animate-pulse" />
            [PORT]: 8080_LISTENING
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-[#1d2925]">
            Establish <span className="gradient-text">Connection</span>
          </h2>
          <p className="text-lg text-[#68736c] max-w-2xl leading-relaxed font-medium">
            Whether you are looking to build AI products, architect scalable systems, or just want to talk tech — my inbox is always open.
          </p>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mt-8">

          {/* Email Node */}
          <a
            href="mailto:priyanshu0dubey@gmail.com"
            className="group bg-white border border-[#e7e1d7] p-8 rounded-sm hover:border-[#6b2338]/60 hover:shadow-lg hover:shadow-[#6b2338]/10 transition-all duration-200 flex flex-col items-center justify-center gap-4 relative card-lift reveal delay-200"
          >
            <div className="absolute top-0 right-0 bg-[#f3eee8] border-b border-l border-[#e7e1d7] px-2 py-1 text-base font-mono text-[#68736c] group-hover:text-[#6b2338] transition-colors">
              PROTOCOL: SMTP
            </div>
            <Mail className="w-8 h-8 text-[#8c7958] group-hover:text-[#6b2338] transition-colors" />
            <span className="font-bold text-[#59645e] group-hover:text-[#1d2925]">Email Me</span>
          </a>

          {/* LinkedIn Node */}
          <a
            href="https://www.linkedin.com/in/priyanshudubey/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-[#e7e1d7] p-8 rounded-sm hover:border-[#6b2338]/60 hover:shadow-lg hover:shadow-[#6b2338]/10 transition-all duration-200 flex flex-col items-center justify-center gap-4 relative card-lift reveal delay-300"
          >
            <div className="absolute top-0 right-0 bg-[#f3eee8] border-b border-l border-[#e7e1d7] px-2 py-1 text-base font-mono text-[#68736c] group-hover:text-[#6b2338] transition-colors">
              PROTOCOL: HTTPS
            </div>
            <Linkedin className="w-8 h-8 text-[#8c7958] group-hover:text-[#6b2338] transition-colors" />
            <span className="font-bold text-[#59645e] group-hover:text-[#1d2925]">LinkedIn</span>
          </a>

          {/* GitHub Node */}
          <a
            href="https://github.com/priyanshudubey"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-[#e7e1d7] p-8 rounded-sm hover:border-slate-400/60 hover:shadow-lg transition-all duration-200 flex flex-col items-center justify-center gap-4 relative card-lift reveal delay-400"
          >
            <div className="absolute top-0 right-0 bg-[#f3eee8] border-b border-l border-[#e7e1d7] px-2 py-1 text-base font-mono text-[#68736c] group-hover:text-slate-200 transition-colors">
              PROTOCOL: SSH
            </div>
            <Github className="w-8 h-8 text-[#8c7958] group-hover:text-[#1d2925] transition-colors" />
            <span className="font-bold text-[#59645e] group-hover:text-[#1d2925]">GitHub</span>
          </a>

        </div>

        {/* Footer Bottom */}
        <div className="w-full mt-24 pt-12 border-t border-[#e7e1d7]/60 flex flex-col items-center">
          
          {/* Authentic Terminal Exit Sequence */}
          <div className="w-full max-w-lg mx-auto bg-[#1d2925] rounded-md shadow-xl mb-12 overflow-hidden border border-slate-800">
            
            {/* Terminal Header */}
            <div className="bg-[#293630] px-4 py-2 flex items-center gap-2 border-b border-[#42534a]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="text-base font-mono text-[#c5c7bd] ml-2">bash - root@system</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-5 flex flex-wrap items-center gap-2 font-mono text-base sm:text-base text-left">
              <span className="text-[#a8793e] font-bold">priyanshu@prod:~$</span>
              <span className="text-slate-200">cd /home/pipeline && exit 0</span>
              <span className="w-2.5 h-5 bg-slate-400 animate-pulse rounded-sm"></span>
            </div>
            
          </div>

          {/* Copyright */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-base font-mono text-[#8c7958]">
            <p>&copy; {currentYear} Priyanshu Dubey. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#6b2338] rounded-full animate-pulse" />
              Engineered with React & Tailwind
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
