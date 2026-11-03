import StarBackground from "../components/StarBackground";
import TypingCode from "../components/TypingCode";
import { useEffect, useState } from "react";
import HeroVideo from "../components/HeroVideo";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";
import NameTyping from "../components/NameTyping";


export default function Home({ welcomeFinished = true }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section
  id="home"
  className="min-h-screen bg-transparent py-20"
>
    
      <StarBackground />
      {/* Background effects */}
      <div className="pointer-events-none absolute -right-32 top-20
                      h-96 w-96 rounded-full bg-indigo-400/20
                      blur-3xl dark:bg-indigo-600/20" />
      <div className="pointer-events-none absolute -left-32 bottom-0
                      h-80 w-80 rounded-full bg-purple-400/20
                      blur-3xl dark:bg-purple-600/20" />

      <div className="relative mx-auto grid w-full max-w-7xl
                      items-center gap-14 lg:grid-cols-2">

        {/* Introduction */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2
                          rounded-full border border-indigo-200
                          bg-indigo-50 px-4 py-2 text-sm
                          font-medium text-indigo-700
                          dark:border-indigo-500/30
                          dark:bg-indigo-500/10 dark:text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Open to Internship Opportunities
          </div>

          <p className="mb-3 text-lg font-medium
                        text-indigo-600 dark:text-indigo-400">
            Hello, I'm
          </p>

          <h1 className="whitespace-nowrap text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
  <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
    Thilini Samanthika
  </span>
</h1>
          

          <h2 className="mt-6 text-xl font-semibold
                         text-slate-700 sm:text-2xl
                         dark:text-slate-200">
            {portfolio.role}
          </h2>

          <p className="mt-3 text-sm font-medium
                        text-indigo-600 dark:text-indigo-400">
            {portfolio.subtitle}
          </p>

          <p className="mt-5 max-w-xl text-base leading-8
                        text-slate-600 dark:text-slate-400">
            {portfolio.description}
          </p>

          <TypingCode />

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects"
               className="inline-flex items-center gap-2
                          rounded-xl bg-indigo-600 px-6 py-3
                          font-semibold text-white shadow-lg
                          shadow-indigo-500/20 transition
                          hover:-translate-y-1 hover:bg-indigo-700">
              View My Projects <ArrowRight size={18} />
            </a>

            <a href="/resume.pdf" download
               className="inline-flex items-center gap-2
                          rounded-xl border border-slate-300
                          px-6 py-3 font-semibold text-slate-800
                          transition hover:-translate-y-1
                          hover:border-indigo-500
                          dark:border-slate-700 dark:text-white">
              Download CV <Download size={18} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5">
            <a href={portfolio.github}
               target="_blank" rel="noopener noreferrer"
               aria-label="GitHub"
               className="text-slate-600 transition hover:text-indigo-600
                          dark:text-slate-400 dark:hover:text-indigo-400">
              <Github size={25} />
            </a>

            {portfolio.linkedin && (
              <a href={portfolio.linkedin}
                 target="_blank" rel="noopener noreferrer"
                 aria-label="LinkedIn"
                 className="text-slate-600 hover:text-indigo-600
                            dark:text-slate-400">
                <Linkedin size={25} />
              </a>
            )}

            {portfolio.email && (
              <a href={`mailto:${portfolio.email}`}
                 aria-label="Email"
                 className="text-slate-600 hover:text-indigo-600
                            dark:text-slate-400">
                <Mail size={25} />
              </a>
            )}
          </div>
        </div>

        {/* Interactive 3D hero: no external model download required */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="pointer-events-none absolute inset-12 rounded-full bg-indigo-500/20 blur-3xl dark:bg-purple-500/20" />
          <HeroVideo startAnimation={welcomeFinished} /> 
          <p className="text-center text-xs text-slate-500 dark:text-slate-400">
            
          </p>
        </div>
      </div>
    </section>
  );
}