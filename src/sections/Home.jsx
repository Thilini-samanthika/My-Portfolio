
import StarBackground from "../components/StarBackground";
import TypingCode from "../components/TypingCode";
import HeroVideo from "../components/HeroVideo";

import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { portfolio } from "../data/portfolio";

export default function Home({ welcomeFinished = true }) {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen
                 w-full items-center overflow-hidden
                 bg-transparent px-5 pb-16 pt-28
                 sm:px-8 lg:px-12 lg:pt-32"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <StarBackground />
      </div>

      {/* Background glow */}
      <div
        className="pointer-events-none absolute
                   -right-20 top-20 h-72 w-72
                   rounded-full bg-indigo-500/20
                   blur-3xl"
      />

      <div
        className="pointer-events-none absolute
                   -left-20 bottom-0 h-72 w-72
                   rounded-full bg-purple-500/20
                   blur-3xl"
      />

      {/* Main content */}
      <div
        className="relative z-10 mx-auto grid
                   w-full max-w-7xl
                   grid-cols-1 items-center
                   gap-12 lg:grid-cols-2
                   lg:gap-14"
      >
        {/* LEFT SIDE */}
        <div className="min-w-0 text-center lg:text-left">

          {/* Internship badge */}
          <div
            className="mb-5 inline-flex items-center
                       gap-2 rounded-full
                       border border-indigo-500/30
                       bg-indigo-500/10 px-4 py-2
                       text-xs font-medium
                       text-indigo-600
                       dark:text-indigo-300"
          >
            <span
              className="h-2 w-2 rounded-full
                         bg-emerald-500"
            />
            Open to Internship Opportunities
          </div>

          <p
            className="mb-3 text-base font-medium
                       text-indigo-600
                       dark:text-indigo-400"
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h1
            className="text-3xl font-extrabold
                       leading-tight tracking-tight
                       sm:text-4xl
                       xl:text-5xl"
          >
            <span
              className="bg-gradient-to-r
                         from-violet-500
                         to-fuchsia-500
                         bg-clip-text
                         text-transparent"
            >
              Thilini Samanthika
            </span>
          </h1>

          {/* Professional roles */}
          <h2
            className="mt-5 text-lg font-semibold
                       leading-relaxed
                       text-slate-700
                       sm:text-xl
                       dark:text-slate-200"
          >
            {portfolio.role}
          </h2>

          {/* Education */}
          <p
            className="mt-2 text-sm font-medium
                       text-indigo-600
                       dark:text-indigo-400"
          >
            {portfolio.subtitle}
          </p>

          {/* Short introduction */}
          <p
            className="mx-auto mt-5 max-w-lg
                       text-sm leading-7
                       text-slate-600
                       sm:text-base
                       lg:mx-0
                       dark:text-slate-400"
          >
            I am an Information Technology undergraduate
            passionate about Software Engineering,
            DevOps, and AI-powered applications.
            I enjoy building practical solutions,
            solving technical challenges, and
            collaborating with teams.
          </p>

          {/* Existing typing animation */}
          <div className="mt-6 w-full min-w-0 max-w-lg">
            <TypingCode />
          </div>

          {/* Buttons */}
          <div
            className="mt-7 flex flex-wrap
                       justify-center gap-3
                       lg:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center
                         gap-2 rounded-xl
                         bg-indigo-600 px-5 py-3
                         text-sm font-semibold
                         text-white shadow-lg
                         transition duration-300
                         hover:-translate-y-1
                         hover:bg-indigo-700"
            >
              View My Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center
                         gap-2 rounded-xl
                         border border-slate-300
                         px-5 py-3 text-sm
                         font-semibold
                         text-slate-800
                         transition duration-300
                         hover:-translate-y-1
                         hover:border-indigo-500
                         dark:border-slate-700
                         dark:text-white"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          {/* Social links */}
          <div
            className="mt-7 flex items-center
                       justify-center gap-6
                       lg:justify-start"
          >
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500
                         transition hover:text-indigo-500"
            >
              <Github size={23} />
            </a>

            {portfolio.linkedin && (
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500
                           transition hover:text-indigo-500"
              >
                <Linkedin size={23} />
              </a>
            )}

            {portfolio.email && (
              <a
                href={`mailto:${portfolio.email}`}
                aria-label="Email"
                className="text-slate-500
                           transition hover:text-indigo-500"
              >
                <Mail size={23} />
              </a>
            )}
          </div>
        </div>

        {/* RIGHT SIDE - Existing hero video */}
        <div
          className="relative mx-auto
                     w-full min-w-0
                     max-w-md lg:max-w-lg"
        >
          <div
            className="pointer-events-none
                       absolute inset-8
                       -z-10 rounded-full
                       bg-indigo-500/20
                       blur-3xl"
          />

          <HeroVideo
            startAnimation={welcomeFinished}
          />
        </div>
      </div>
    </section>
  );
}
