import React from 'react';
import { Database, Server, GitBranch, Cpu, ArrowRight, Play, Terminal, Activity, FileText, MapPin } from 'lucide-react';

/* ── Typewriter ─────────────────────────────── */
function TypewriterRole() {
  return (
    <span className="text-[#6b2338] font-bold">Software Engineer · AI Products</span>
  );
}

/* ── Floating Code Snippet ──────────────────── */
function FloatingCard() {
  return (
    <div className="hidden 2xl:block animate-float shrink-0">
      <div className="w-[22rem] bg-slate-900 rounded-lg border border-slate-700 shadow-2xl overflow-hidden select-none">
        {/* Mac-style titlebar */}
        <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800/80 border-b border-slate-700">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-sm font-mono text-slate-300">ai_product.py</span>
        </div>
        {/* Code lines */}
        <div className="p-4 font-mono text-sm leading-6 space-y-0.5">
          <p><span className="text-purple-300">from</span> <span className="text-[#d7a5b2]">eviview</span> <span className="text-purple-300">import</span> <span className="text-slate-100">AIEngine</span></p>
          <p><span className="text-purple-300">from</span> <span className="text-[#d7a5b2]">openai</span> <span className="text-purple-300">import</span> <span className="text-slate-100">AsyncClient</span></p>
          <p className="text-slate-400">&nbsp;</p>
          <p><span className="text-[#d7a5b2]">class</span> <span className="text-yellow-200">ProductFeature</span><span className="text-slate-300">:</span></p>
          <p>&nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-[#a8793e]">__init__</span><span className="text-slate-400">(</span><span className="text-orange-300">self</span><span className="text-slate-400">):</span></p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-300">self</span><span className="text-slate-400">.</span><span className="text-slate-200">llm</span> <span className="text-slate-400">=</span> <span className="text-yellow-300">AIEngine</span><span className="text-slate-400">()</span></p>
          <p className="text-slate-400">&nbsp;</p>
          <p>&nbsp;&nbsp;<span className="text-purple-400">async def</span> <span className="text-[#a8793e]">generate</span><span className="text-slate-400">(</span><span className="text-orange-300">self</span><span className="text-slate-400">, prompt):</span></p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return await</span> <span className="text-orange-300">self</span><span className="text-slate-400">.</span><span className="text-slate-200">llm</span><span className="text-slate-400">.</span><span className="text-[#a8793e]">stream</span><span className="text-slate-400">(</span></p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-200">prompt</span><span className="text-slate-400">,</span> <span className="text-slate-200">model</span><span className="text-slate-400">=</span><span className="text-green-400">"gpt-4o"</span></p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400">)</span></p>
          <p className="flex items-center gap-1 mt-2">
            <span className="w-2 h-2 bg-[#a8793e] rounded-full animate-pulse" />
            <span className="text-[#d9bd83] text-sm">shipping to prod...</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Hero ───────────────────────────────────── */
const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] bg-[#fbfaf7] text-slate-900 flex items-center justify-center overflow-hidden pt-24 pb-12 noise hero-grid">

      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6b2338]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#6b2338]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-14 flex items-center gap-8 2xl:gap-14">

        {/* Pipeline Container */}
        <div className="w-full max-w-[1200px] min-w-0 flex-1 relative border-l-2 border-[#ded8cb] ml-2 md:ml-4 py-6 space-y-10">

          {/* Node 1: Identity */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#fbfaf7] border-2 border-[#a8793e] rounded-full" />

            {/* Status Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6 mt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#e2dcd2] text-[#47504a] text-sm font-mono rounded-sm shadow-sm">
                <Play className="w-3 h-3 text-slate-400" /> [NODE_01]: CONNECTED
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#e2dcd2] text-[#47504a] text-sm font-mono rounded-sm shadow-sm">
                <MapPin className="w-3 h-3 text-slate-400" /> [ENV]: PUNE, IN
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f3eee2] border border-[#e6ddc9] text-[#765628] text-xs font-mono font-bold rounded-sm shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8793e] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a8793e]" />
                </span>
                [STATUS]: SWE_AI @ EVIVIEW | REMOTE
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Priyanshu.</span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#6b2338] to-[#6b2338] rounded-full opacity-60" />
              </span>
            </h1>

            <div className="mt-4 text-xl sm:text-2xl font-semibold text-[#49353b] min-h-9 flex items-center">
              <TypewriterRole />
            </div>
          </div>

          {/* Node 2: Description */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-[10px] top-4 w-5 h-5 bg-[#6b2338] border-4 border-[#fbfaf7] rounded-sm transition-transform group-hover:scale-110" />
            <div className="absolute left-0 top-6 w-8 h-0.5 bg-slate-200" />

            <div className="animated-border bg-white border border-slate-200 p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-150 relative">
              <div className="absolute top-0 right-0 bg-[#f3ece8] border-b border-l border-[#e3d7d3] px-3 py-1.5 text-[11px] font-mono text-[#5c1d30] font-bold">
                AI_PRODUCT_LAYER
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 mt-2">
                <span className="text-[#6b2338]">Building AI-Powered Products</span>
                <span className="text-slate-800"> & Full-Stack Systems</span>
              </h2>
              <p className="text-base text-[#454d49] leading-relaxed font-medium">
                I specialize in developing and shipping intelligent software products end-to-end. From designing AI-driven features and LLM-backed pipelines to building robust full-stack systems; I collaborate closely with product and engineering teams to rapidly iterate, improve, and deliver at the core platform level.
              </p>
            </div>
          </div>

          {/* Node 3: Tech Tags */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[13px] top-2 w-6 h-6 bg-[#fbfaf7] flex items-center justify-center">
              <GitBranch className="w-4 h-4 text-[#6b2338]" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-base font-mono text-[#3d4942]">
              {[
                { icon: Cpu,      label: "AI / LLM Products" },
                { icon: Terminal, label: "Full-Stack Eng" },
                { icon: Activity, label: "Python / Backend" },
                { icon: Database, label: "Product Dev" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2.5 rounded-sm shadow-sm hover:border-[#6b2338] hover:bg-[#f3ece8]/50 hover:text-[#6b2338] transition-all duration-200 card-lift cursor-default"
                >
                  <Icon className="w-4 h-4 text-[#6b2338] shrink-0" />
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Node 4: CTA Buttons */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-3 w-4 h-4 bg-[#fbfaf7] border-2 border-[#6b2338] rounded-full" />
            <div className="absolute left-[-2px] top-6 w-1 h-8 bg-[#fbfaf7]" />

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#6b2338] text-white px-8 py-3.5 rounded-sm font-semibold transition-all duration-200 shadow-md hover:shadow-[#6b2338] hover:shadow-lg"
              >
                <Server className="w-4 h-4 text-slate-300 group-hover:text-white" />
                [OUTPUT]: Execute_Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Priyanshu_Dubey_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#6b2338] text-slate-800 px-8 py-3.5 rounded-sm font-semibold transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-[#6b2338] transition-colors" />
                [FETCH]: Resume.pdf
              </a>
            </div>
          </div>

        </div>
        <FloatingCard />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fbfaf7] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
