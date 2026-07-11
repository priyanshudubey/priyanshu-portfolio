import React from "react";
import { GraduationCap, Award, Calendar, MapPin, Terminal, Cpu } from "lucide-react";

const educationData = [
  {
    degree: "Master of Science - M.Sc",
    field: "Advanced Computer Science",
    institution: "Swansea University",
    duration: "January 2024 - March 2025",
    details:
      "Advanced Computer Science with a core focus on emerging tech, cloud computing, artificial intelligence, and distributed systems. Specialized in scalable software architectures and distributed runtime practices.",
    location: "Wales, United Kingdom",
    gpa: "PASS_WITH_MERIT",
    highlights: [
      "Cloud Computing",
      "AI & Machine Learning",
      "Distributed Systems",
      "Software Architecture",
    ],
    icon: GraduationCap,
  },
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Technology",
    institution: "Sagar Institute Of Science and Technology",
    duration: "August 2017 - June 2021",
    details:
      "Computer Science engineering foundation specializing in core Data Structures, Algorithms, Systems Software Design, and enterprise database systems management.",
    location: "Bhopal, Madhya Pradesh, India",
    gpa: "BTECH_WITH_HONORS",
    highlights: [
      "Software Engineering",
      "Data Structures",
      "Algorithms",
      "Database Systems",
    ],
    icon: Cpu,
  },
];

const Education = () => {
  return (
    <section id="education" className="relative w-full py-24 bg-[#fcfcfc] text-slate-900 overflow-hidden border-t border-slate-200">
      
      {/* Precision Blueprint Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60"></div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Section Header - Fixed Width Container */}
        <div className="mb-16 max-w-4xl border-l-2 border-slate-900 pl-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Academic <span className="text-blue-600">Timeline</span>
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 bg-slate-900 rounded-md px-4 py-2.5 font-mono text-sm shadow-sm border border-slate-800 overflow-x-auto max-w-full">
            <span className="text-emerald-400 font-bold shrink-0">priyanshu@prod</span>
            <span className="text-slate-200 whitespace-nowrap">~ cat /var/log/education_history.log</span>
            <span className="w-2 h-4 bg-slate-400 animate-pulse rounded-sm inline-block shrink-0"></span>
          </div>
        </div>

        {/* Vertical Pipeline Framework */}
        <div className="w-full max-w-4xl relative border-l-2 border-slate-200 ml-2 md:ml-8 py-4 space-y-16">
          {educationData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="relative pl-8 md:pl-12 group">
                
                {/* Node Interconnection Point */}
                <div className="absolute -left-[10px] top-6 w-5 h-5 bg-white border-4 border-slate-400 rounded-full transition-transform group-hover:scale-110 group-hover:border-blue-600"></div>
                
                {/* Connection Branch */}
                <div className="absolute left-0 top-8 w-8 h-0.5 bg-slate-200"></div>

                {/* Processing Block Block */}
                <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-200 relative">
                  
                  {/* Node Hex Tag */}
                  <div className="absolute top-0 right-0 bg-slate-100 border-b border-l border-slate-200 px-3 py-1 text-[11px] font-mono text-slate-500">
                    [BLOCK_0{index + 1}]: ACADEMIC_RECORD
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6 mt-2">
                    {/* Primary Text */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-slate-100 text-slate-700">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">{item.degree}</h3>
                      </div>
                      
                      <p className="text-lg font-semibold text-blue-600 pl-1">
                        {item.field}
                      </p>
                      <p className="text-slate-600 font-medium pl-1">
                        {item.institution}
                      </p>
                    </div>

                    {/* Meta Architecture Logging */}
                    <div className="flex flex-col gap-2 text-xs font-mono text-slate-500 md:items-end min-w-[200px]">
                      <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-2 py-1 rounded-sm w-fit">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-2 py-1 rounded-sm w-fit">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-2 py-1 rounded-sm w-fit font-bold">
                        <Award className="w-3.5 h-3.5" />
                        <span>[METRIC]: {item.gpa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Operational Data Content */}
                  <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                    {item.details}
                  </p>

                  {/* Parallel Highlight Streams */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {item.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono bg-slate-50 text-slate-600 rounded-sm border border-slate-200"
                      >
                        <Terminal className="w-3 h-3 text-blue-500" />
                        {highlight}
                      </span>
                    ))}
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

export default Education;