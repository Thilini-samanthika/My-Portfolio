
import { useState } from "react";
import AnimatedProfile from "../components/AnimatedProfile";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  FolderGit2,
  Award,
  UserRound,
  CalendarDays,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Check,
  Terminal,
  Server,
  Cloud,
  CircleCheck,
} from "lucide-react";

const techStack = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Java", "Python", "Node.js", "Express", "PHP"],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: ["Git", "GitHub", "Docker", "MongoDB", "MySQL"],
  },
];

const details = {
  Personal:
    "I'm Thilini Samanthika, an Information Technology undergraduate at Horizon Campus, Sri Lanka. I enjoy learning new technologies, solving problems, and turning creative ideas into practical applications.",
  Professional:
    "My interests include software engineering, full-stack web development, AI, and machine learning. Through academic and personal projects, I'm developing hands-on experience in building applications and working with modern development tools.",
  Approach:
    "I value clean code, continuous learning, teamwork, and user-friendly design. My goal is to build reliable software solutions while growing into a skilled software engineer and future technical leader.",
};

const highlights = [
  "Passionate about software engineering",
  "Hands-on academic projects",
  "Interested in AI and machine learning",
  "Continuous learner",
  "Collaborative team mindset",
  "Focused on clean, maintainable code",
];

const stats = [
  {
    icon: GraduationCap,
    value: "BSc (Hons)",
    label: "IT Undergraduate",
  },
  {
    icon: FolderGit2,
    value: "Projects",
    label: "Practical Development",
  },
  {
    icon: Award,
    value: "Learning",
    label: "Courses & Certificates",
  },
  {
    icon: Code2,
    value: "Full Stack",
    label: "Development Interest",
  },
];

function Panel({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className={`rounded-2xl border border-slate-700/80
        bg-[#090f1c]/90 shadow-xl shadow-black/10
        ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState("Approach");

  return (
   <section
  id="about"
  className="min-h-screen bg-transparent py-20"
>
    
      {/* Subtle background particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-violet-300/40"
            style={{
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 23 + 17) % 100}%`,
            }}
            animate={{
              opacity: [0.15, 0.65, 0.15],
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span
            className="inline-flex items-center gap-2
              rounded-lg border border-violet-500/30
              bg-violet-500/10 px-4 py-2
              text-[11px] font-semibold uppercase
              tracking-widest text-violet-300"
          >
            <Sparkles size={13} />
            About Me
          </span>

          <h2
            className="mt-5 text-4xl font-extrabold
              leading-tight tracking-tight
              text-slate-100 sm:text-5xl"
          >
            Transforming
            <br />
            <span className="text-violet-400">
              Ideas Into Reality
            </span>
          </h2>

          <p className="mt-5 text-sm text-slate-400">
            Building digital experiences through creativity,
            technology, and continuous learning.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.9fr_0.9fr]">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Profile card */}
            <Panel className="overflow-hidden border-violet-500/40">
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-4">
                  {/* Profile image placeholder */}
                  <div
                    className="relative flex h-24 w-20
                      shrink-0 items-center justify-center
                      overflow-hidden rounded-xl
                      border border-violet-500/50
                      bg-gradient-to-br from-violet-800/50
                      to-slate-900"
                  >
                    <img
  src="/profile.png"
  alt="Thilini Samanthika"
  className="h-full w-full object-cover"
/>

                    <span
                      className="absolute bottom-1 right-1
                        h-3 w-3 rounded-full
                        border-2 border-[#090f1c]
                        bg-emerald-400"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold text-white">
                      Thilini Samanthika
                    </h3>
                    <p className="mt-1 text-xs text-violet-400">
                      IT Undergraduate | Aspiring Software Engineer
                    </p>

                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                          <div
                            key={stat.label}
                            className="rounded-lg border
                              border-slate-700/80
                              bg-[#070b15] p-2.5"
                          >
                            <div className="flex items-center gap-1.5">
                              <Icon
                                size={13}
                                className="shrink-0 text-violet-400"
                              />
                              <span
                                className="truncate text-xs
                                  font-bold text-white"
                              >
                                {stat.value}
                              </span>
                            </div>
                            <p className="mt-1 text-[10px] text-slate-400">
                              {stat.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Personal / Professional / Approach tabs */}
                <div
                  className="mt-6 grid grid-cols-3
                    border-b border-slate-700"
                >
                  {Object.keys(details).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`relative py-3 text-xs
                        font-semibold transition-colors
                        ${
                          activeTab === tab
                            ? "text-violet-300"
                            : "text-slate-400 hover:text-white"
                        }`}
                    >
                      {tab}

                      {activeTab === tab && (
                        <motion.span
                          layoutId="about-active-tab"
                          className="absolute bottom-0 left-0
                            h-0.5 w-full bg-violet-500"
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="min-h-32 py-5">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-center text-sm
                        leading-7 text-slate-300"
                    >
                      {details[activeTab]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </Panel>

            {/* Tech Stack */}
            <Panel className="p-5 sm:p-6">
              <h3
                className="mb-5 flex items-center gap-2
                  text-base font-bold text-white"
              >
                <Code2 size={19} className="text-violet-400" />
                Tech Stack Overview
              </h3>

              <div className="grid gap-3 sm:grid-cols-3">
                {techStack.map((group) => {
                  const Icon = group.icon;

                  return (
                    <div
                      key={group.title}
                      className="rounded-xl border
                        border-slate-700 bg-[#070c17]
                        p-4 transition-colors
                        hover:border-violet-500/60"
                    >
                      <div className="mb-4 flex items-center gap-2">
                        <span
                          className="rounded-md
                            bg-violet-500/10 p-1.5"
                        >
                          <Icon
                            size={14}
                            className="text-violet-400"
                          />
                        </span>

                        <h4 className="text-xs font-bold text-white">
                          {group.title}
                        </h4>
                      </div>

                      <div className="space-y-2">
                        {group.skills.map((skill) => (
                          <p
                            key={skill}
                            className="flex items-center gap-2
                              text-xs text-slate-300"
                          >
                            <span
                              className="h-1.5 w-1.5
                                rounded-full bg-violet-500"
                            />
                            {skill}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Panel>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-5">
            {/* Let's Work Together */}
            <Panel className="p-5">
              <h3 className="text-base font-bold text-white">
                Let's Work Together
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <a
                  href="#projects"
                  className="flex items-center
                    justify-center gap-2 rounded-lg
                    bg-violet-600 px-3 py-3
                    text-center text-xs font-semibold
                    text-white transition-colors
                    hover:bg-violet-500"
                >
                  <ArrowUpRight size={15} />
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="flex items-center
                    justify-center gap-2 rounded-lg
                    border border-slate-700 px-3 py-3
                    text-center text-xs font-semibold
                    text-slate-200 transition-colors
                    hover:border-violet-500"
                >
                  <Mail size={15} />
                  Contact Me
                </a>
              </div>

              <div
                className="mt-4 rounded-xl border
                  border-slate-700 p-3 text-center"
              >
                <p className="text-xs font-semibold text-white">
                  Quick Connect
                </p>

                <div
                  className="mt-3 flex items-center
                    justify-center gap-5"
                >
                  <a
                    href="https://github.com/Thilini-samanthika"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-slate-400 hover:text-violet-400"
                  >
                    <Github size={17} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/thilini-samanthika-7335a634b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn contact"
                    className="text-slate-400 hover:text-violet-400"
                  >
                    <Linkedin size={17} />
                  </a>

                  <a
                    href="mailto:thilinisadtwnika@gmail.com"
                    aria-label="Email contact"
                    className="text-slate-400 hover:text-violet-400"
                  >
                    <Mail size={17} />
                  </a>
                </div>
              </div>
            </Panel>

            {/* Why Choose Me */}
            <Panel className="p-5">
              <h3
                className="flex items-center gap-2
                  text-sm font-bold text-white"
              >
                <Sparkles
                  size={17}
                  className="text-violet-400"
                />
                Why Choose Me
              </h3>

              <div className="mt-5 space-y-4">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5
                        shrink-0 rounded-full
                        bg-violet-500"
                    />
                    <p className="text-xs leading-5 text-slate-300">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </Panel>

            {/* Availability */}
            <Panel className="p-4">
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full
                    bg-emerald-400"
                />
                <span className="text-xs font-bold text-white">
                  Career Opportunities
                </span>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                Interested in software engineering internships
                and opportunities to learn and contribute.
              </p>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}
