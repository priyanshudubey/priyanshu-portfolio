/**
 * All portfolio content lives here. Edit this file to update the site —
 * components only handle layout.
 *
 * Icons are lucide-react components: https://lucide.dev/icons
 */
import {
  Activity,
  Bot,
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  GraduationCap,
  Package,
  Server,
} from "lucide-react";

export const site = {
  name: "Priyanshu Dubey",
  shortName: "P.DUBEY",
  role: "Software Engineer · AI Products",
  url: "https://priyanshudubey.com",
  location: "Pune, India",
  email: "priyanshu0dubey@gmail.com",
  github: "https://github.com/priyanshudubey",
  linkedin: "https://www.linkedin.com/in/priyanshudubey/",
  // Injected at build time by vite.config.js — empty when the PDF is missing.
  resume: typeof __RESUME_PATH__ !== "undefined" ? __RESUME_PATH__ : "",
  current: { title: "Software Engineer – AI", company: "EviView", url: "https://eviview.com" },
};

/** Navigation follows page order. `id` must match a section id. */
export const navLinks = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
];

export const hero = {
  // Cycles after "Software Engineer ·" in the hero. The first one is what
  // search engines and screen readers see.
  roles: ["AI Products", "LLM & RAG Systems", "Cloud Backends", "Data Platforms"],
  headline: "Building AI-powered products & the systems behind them.",
  intro:
    "I design and ship intelligent software end-to-end — from LLM-backed features and retrieval pipelines to the cloud-native backends that keep them reliable. I work closely with product and engineering teams to iterate quickly and deliver at the core-platform level.",
  focus: [
    { icon: Cpu, label: "AI / LLM products" },
    { icon: Server, label: "Backend systems" },
    { icon: Cloud, label: "Cloud & serverless" },
    { icon: Database, label: "Data platforms" },
  ],
};

export const about = {
  bio: "I'm a software engineer with 4+ years of experience building AI products, cloud-native backend systems and data platforms. At EviView I work with product and engineering teams to turn ideas into features and dependable production systems. I enjoy connecting thoughtful system design with practical product delivery.",
  // Only facts that are backed up elsewhere on the page.
  stats: [
    { value: "4+", label: "Years building software" },
    { value: "M.Sc.", label: "Advanced Computer Science" },
    // 4 employers + 2 freelance clients, as listed below.
    { value: "6", label: "Teams & clients shipped for" },
  ],
};

export const experiences = [
  {
    title: "Software Engineer – AI",
    company: "EviView",
    url: "https://eviview.com",
    location: "Remote",
    duration: "Jul 2026 – Present",
    type: "Full-time",
    current: true,
    icon: Cpu,
    // TODO(priyanshu): replace with 2–3 concrete outcomes — what you shipped,
    // the model/stack, and a measurable result.
    description:
      "Developing and improving EviView's in-house AI-powered products, working closely with product and engineering to build, iterate on and ship features for the core platform.",
    achievements: [
      "Building AI-powered product features end-to-end for the core platform",
      "Iterating rapidly on product improvements and new capabilities",
      "Working across the stack, from model integration to user-facing features",
    ],
    technologies: ["Python", "LLMs", "Full-stack", "Product development"],
  },
  {
    title: "Backend & Systems Engineer",
    company: "Tata Consultancy Services",
    location: "Pune, India",
    duration: "Jul 2021 – Jan 2024",
    type: "Full-time",
    icon: Server,
    description:
      "Built and optimised high-throughput serverless backends for a leading North American airline. Tuned SQL using explain plans and added Redis caching to cut query latency and Lambda cold starts. Secured APIs with API Gateway, Cognito and custom JWT authorisers, ran CI/CD through CloudFormation nested stacks, and built event-driven pipelines on Kafka monitored with CloudWatch and Kibana.",
    achievements: [
      "Scaled serverless APIs to handle high, spiky production traffic reliably",
      "Reduced database latency with Redis caching and SQL plan tuning",
      "Automated zero-downtime deployments with CloudFormation",
      "Implemented IAM and JWT-based role-based access control",
    ],
    technologies: [
      "Python",
      "Node.js",
      "AWS Lambda",
      "API Gateway",
      "Redis",
      "Kafka",
      "PySpark",
      "CloudFormation",
      "Kibana",
    ],
  },
  {
    title: "Conversational AI Engineer Intern",
    company: "Triluxo Technologies",
    location: "Remote",
    duration: "Oct 2020 – Dec 2020",
    type: "Internship",
    icon: Bot,
    description:
      "Built an intent-driven conversational agent for hotel service automation using Google Dialogflow and Node.js, including the NLP routing logic and webhook integrations that turn free-text requests into structured database operations.",
    achievements: [
      "Built intent-based routing for a hotel-services chatbot",
      "Mapped unstructured user queries to backend database actions",
      "Integrated external APIs through secure webhooks",
    ],
    technologies: ["Node.js", "Dialogflow", "NLP", "Webhooks"],
  },
  {
    title: "Backend Developer Intern",
    company: "Gallant Fusion Tech",
    location: "Remote",
    duration: "Jul 2020 – Sep 2020",
    type: "Internship",
    icon: Database,
    description:
      "Designed the MySQL schema and data models for a multiplayer gaming application and built its REST API in Node.js and Express, with Passport-JWT authentication.",
    achievements: [
      "Designed relational schemas in MySQL",
      "Built REST APIs for concurrent game-state management",
      "Secured endpoints with JWT middleware",
    ],
    technologies: ["Node.js", "Express", "MySQL", "Passport-JWT"],
  },
];

export const projects = {
  featured: {
    title: "DevElevator",
    subtitle: "Code-aware RAG engine for GitHub repositories",
    description:
      "An agentic AI system that ingests GitHub repositories and lets you ask questions about them in natural language. A custom RAG pipeline uses AST parsing to chunk code at function and class boundaries, so retrieved context stays semantically whole. OpenAI embeddings stored in Supabase (pgvector) power similarity search, and answers are grounded in the retrieved code to keep the model from making things up.",
    highlights: [
      "AST-based semantic chunking",
      "pgvector similarity search",
      "Answers grounded in retrieved code",
    ],
    technologies: ["Python", "FastAPI", "Supabase (pgvector)", "OpenAI embeddings", "AST parsing"],
    // Shown as an animated diagram next to the description (when there's no image).
    pipeline: [
      { label: "GitHub repository", detail: "ingest source files" },
      { label: "AST chunker", detail: "split at function & class boundaries" },
      { label: "OpenAI embeddings", detail: "vectorise each chunk" },
      { label: "pgvector search", detail: "find the most relevant code" },
      { label: "LLM answer", detail: "grounded in retrieved code" },
    ],
    icon: Cpu,
    github: "https://github.com/priyanshudubey/develevetor-web",
    live: "https://develevator.me/",
    // TODO(priyanshu): add a screenshot at public/projects/develevator.png and set:
    // image: "/projects/develevator.png",
  },
  freelance: [
    {
      title: "VST Industrial ERP",
      subtitle: "Inventory & dispatch system",
      description:
        "A full inventory and dispatch system tracking incoming and outgoing steel products, with an analytics dashboard over historical sales data to surface supply-chain bottlenecks.",
      technologies: ["React", "Python", "Node.js", "SQL"],
      icon: Package,
      live: "https://inventory.vstbokaro.com",
    },
    {
      title: "Smart POS & Analytics",
      subtitle: "Restaurant, United Kingdom",
      description:
        "A contactless QR menu connected to a central POS dashboard, plus a data pipeline that aggregates daily orders into revenue and demand analytics.",
      technologies: ["Node.js", "React", "Python"],
      icon: Activity,
      note: "Private client deployment — no public link",
    },
    {
      title: "VST Corporate Website",
      subtitle: "B2B presence for a steel trader",
      description:
        "A fast, responsive corporate site for an industrial steel-trading business, built with attention to SEO and load time.",
      technologies: ["React", "Tailwind CSS", "SEO"],
      icon: Server,
      live: "https://vstbokaro.com",
    },
  ],
};

export const skills = [
  {
    title: "AI & LLM engineering",
    description: "LLM-backed features, retrieval and agentic workflows.",
    icon: Brain,
    items: ["Python", "FastAPI", "OpenAI APIs", "pgvector", "RAG pipelines", "Agentic workflows"],
  },
  {
    title: "Backend & distributed systems",
    description: "High-throughput, low-latency services.",
    icon: Server,
    items: ["Node.js", "Express", "REST APIs", "Serverless", "System design", "JWT & IAM"],
  },
  {
    title: "Cloud & DevOps",
    description: "Automated, zero-downtime delivery on AWS.",
    icon: Cloud,
    items: ["AWS Lambda", "CloudFormation", "API Gateway", "CI/CD", "Kafka", "CloudWatch & Kibana"],
  },
  {
    title: "Data engineering",
    description: "Reliable pipelines and analytical workloads.",
    icon: Database,
    items: ["Airflow", "dbt", "PySpark", "Databricks", "Pandas & NumPy", "Data modelling"],
  },
  {
    title: "Storage & performance",
    description: "Caching tiers and well-tuned relational databases.",
    icon: Code,
    items: ["PostgreSQL", "MySQL", "Redis", "SQL optimisation", "Docker", "Linux"],
  },
];

export const marquee = [
  "Python",
  "FastAPI",
  "OpenAI",
  "Node.js",
  "React",
  "AWS Lambda",
  "Kafka",
  "Redis",
  "PostgreSQL",
  "Docker",
  "PySpark",
  "Airflow",
  "dbt",
  "Supabase",
  "RAG",
  "pgvector",
  "CloudFormation",
  "Databricks",
];

export const education = [
  {
    degree: "M.Sc. Advanced Computer Science",
    institution: "Swansea University",
    location: "Wales, United Kingdom",
    duration: "Jan 2024 – Mar 2025",
    result: "Pass with Merit",
    icon: GraduationCap,
    details:
      "Focused on cloud computing, artificial intelligence and distributed systems, with an emphasis on scalable software architecture.",
    highlights: [
      "Cloud computing",
      "AI & machine learning",
      "Distributed systems",
      "Software architecture",
    ],
  },
  {
    degree: "B.Tech. Computer Science & Technology",
    institution: "Sagar Institute of Science and Technology",
    location: "Bhopal, India",
    duration: "Aug 2017 – Jun 2021",
    result: "Honours",
    icon: Cpu,
    details:
      "Foundations in data structures, algorithms, systems software design and database systems.",
    highlights: ["Software engineering", "Data structures", "Algorithms", "Database systems"],
  },
];
