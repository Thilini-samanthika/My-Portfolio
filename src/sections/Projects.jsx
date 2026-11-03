
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Github,
  FolderGit2,
  ExternalLink,
  X,
  Sparkles,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

const filters = [
  "All",
  "Full-Stack",
  "Artificial Intelligence",
  "Microservices",
  "DevOps",
  "Research",
];

function matchesFilter(project, filter) {
  if (filter === "All") return true;

  const category = project.category.toLowerCase();
  const selected = filter.toLowerCase();

  if (filter === "Full-Stack") {
    return (
      category.includes("full-stack") ||
      category.includes("web application")
    );
  }

  return category.includes(selected);
}

function ProjectPreview({ project, onClose }) {
  const closeRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        const elements = dialogRef.current?.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        );

        if (!elements?.length) return;

        const first = elements[0];
        const last = elements[elements.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center
                 justify-center bg-black/75 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="relative max-h-[90vh] w-full max-w-2xl
                   overflow-y-auto rounded-3xl border
                   border-slate-200 bg-white p-6 shadow-2xl
                   md:p-8 dark:border-slate-700
                   dark:bg-[#101528]"
        initial={{ opacity: 0, y: 25, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.97 }}
        transition={{ duration: 0.2 }}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project preview"
          className="absolute right-5 top-5 rounded-full
                     border border-slate-200 p-2
                     text-slate-600 hover:bg-slate-100
                     dark:border-slate-700 dark:text-white
                     dark:hover:bg-slate-800"
        >
          <X size={20} />
        </button>

        <p className="mb-3 pr-12 text-xs font-bold uppercase
                      tracking-widest text-indigo-600
                      dark:text-indigo-400">
          {project.category}
        </p>

        <h3
          id="project-dialog-title"
          className="pr-10 text-2xl font-extrabold
                     text-slate-900 md:text-3xl dark:text-white"
        >
          {project.title}
        </h3>

        <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        {project.contribution && (
          <div className="mt-6 rounded-2xl border
                          border-indigo-200 bg-indigo-50/70
                          p-5 dark:border-indigo-500/20
                          dark:bg-indigo-500/10">
            <h4 className="mb-2 flex items-center gap-2
                           font-bold text-indigo-700
                           dark:text-indigo-300">
              <Code2 size={18} />
              My Contribution
            </h4>
            <p className="text-sm leading-7 text-slate-700
                          dark:text-slate-300">
              {project.contribution}
            </p>
          </div>
        )}

        {project.highlights?.length > 0 && (
          <div className="mt-6">
            <h4 className="mb-4 font-bold text-slate-900
                           dark:text-white">
              Key Highlights
            </h4>

            <ul className="space-y-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm
                             text-slate-600 dark:text-slate-300"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-indigo-500"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-7">
          <h4 className="mb-3 font-bold text-slate-900 dark:text-white">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-indigo-50 px-3 py-1.5
                           text-xs font-semibold text-indigo-700
                           dark:bg-indigo-500/10
                           dark:text-indigo-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                         rounded-xl bg-indigo-600 px-5 py-3
                         text-sm font-semibold text-white
                         hover:bg-indigo-700"
            >
              <Github size={18} />
              Source Code
              <ArrowUpRight size={16} />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                         rounded-xl border border-indigo-300
                         px-5 py-3 text-sm font-semibold
                         text-indigo-700 hover:bg-indigo-50
                         dark:border-indigo-500/40
                         dark:text-indigo-300
                         dark:hover:bg-indigo-500/10"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [preview, setPreview] = useState(null);

  const filteredProjects = projects.filter((project) =>
    matchesFilter(project, activeFilter)
  );

  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 flex items-center justify-center
                        gap-2 font-semibold text-indigo-600
                        dark:text-indigo-400">
            <Sparkles size={18} />
            MY WORK
          </p>

          <h2 className="text-4xl font-extrabold
                         text-slate-900 md:text-5xl dark:text-white">
            Featured{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7
                        text-slate-600 dark:text-slate-400">
            Explore my work across artificial intelligence,
            full-stack development, microservices, DevOps,
            and research.
          </p>
        </div>

        <div
          className="mb-12 flex flex-wrap justify-center gap-3"
          aria-label="Filter projects"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full px-4 py-2.5
                text-sm font-semibold transition duration-200
                ${
                  activeFilter === filter
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                    : "border border-slate-200 bg-white/70 text-slate-600 hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden
                         rounded-2xl border border-slate-200
                         bg-white/85 shadow-sm backdrop-blur-md
                         transition-colors duration-300
                         hover:border-indigo-400
                         hover:shadow-2xl hover:shadow-indigo-500/10
                         dark:border-slate-800
                         dark:bg-slate-950/85
                         dark:hover:border-indigo-500/50"
            >
              <div
                className="relative flex h-48 items-center
                           justify-center overflow-hidden
                           bg-gradient-to-br from-indigo-600
                           via-purple-700 to-slate-900"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover
                               transition duration-500
                               group-hover:scale-105"
                  />
                ) : (
                  <FolderGit2
                    size={64}
                    aria-hidden="true"
                    className="text-white/80 transition
                               group-hover:scale-110"
                  />
                )}

                {project.featured && (
                  <span
                    className="absolute right-4 top-4
                               rounded-full bg-white/15
                               px-3 py-1 text-xs font-semibold
                               text-white backdrop-blur-md"
                  >
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-3 text-xs font-bold uppercase
                              tracking-wider text-indigo-600
                              dark:text-indigo-400">
                  {project.category}
                </p>

                <h3 className="mb-3 text-xl font-bold
                               text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-7
                              text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-indigo-50
                                 px-2.5 py-1.5 text-xs font-medium
                                 text-indigo-700
                                 dark:bg-indigo-500/10
                                 dark:text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="flex flex-wrap items-center gap-4
                             border-t border-slate-200 pt-5
                             dark:border-slate-800"
                >
                  <button
                    type="button"
                    onClick={() => setPreview(project)}
                    className="text-sm font-semibold
                               text-indigo-600
                               hover:text-indigo-800
                               dark:text-indigo-400"
                  >
                    Preview Details
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1
                                 text-sm font-semibold
                                 text-slate-700 hover:text-indigo-600
                                 dark:text-slate-300
                                 dark:hover:text-indigo-400"
                    >
                      <Github size={17} />
                      Code
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1
                                 text-sm font-semibold
                                 text-indigo-600 dark:text-indigo-400"
                    >
                      <ExternalLink size={17} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-slate-500">
            No projects found in this category.
          </p>
        )}
      </div>

      <AnimatePresence>
        {preview && (
          <ProjectPreview
            key={preview.id}
            project={preview}
            onClose={() => setPreview(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
