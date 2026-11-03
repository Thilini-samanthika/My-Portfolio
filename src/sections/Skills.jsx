
import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  Search,
  Sparkles,
  Layers3,
  ArrowUpRight,
  Code2,
  LayoutGrid,
  Server,
  Database,
  Wrench,
  Brain,
  X,
} from "lucide-react";

import { skillCategories } from "../data/skills";

import SkillsMarquee, {
  TechnologyLogo,
} from "../components/SkillsMarquee";

const categoryIcons = {
  code: Code2,
  layout: LayoutGrid,
  server: Server,
  database: Database,
  tools: Wrench,
  brain: Brain,
};

const categoryColors = [
  "#a78bfa",
  "#38bdf8",
  "#34d399",
  "#fbbf24",
  "#fb923c",
  "#f472b6",
];

function SkillCard({ name, index, reduceMotion }) {
  return (
    <motion.div
      layout
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 20, scale: 0.95 }
      }
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={
        reduceMotion
          ? undefined
          : { opacity: 0, scale: 0.95 }
      }
      transition={{
        duration: reduceMotion ? 0 : 0.3,
        delay: reduceMotion
          ? 0
          : Math.min(index * 0.04, 0.25),
      }}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -5, scale: 1.03 }
      }
      className="group flex min-h-32 flex-col
      items-center justify-center rounded-2xl
      border border-slate-200 bg-white/80
      p-4 text-center shadow-sm
      transition-colors duration-300
      hover:border-violet-400/60
      hover:shadow-lg hover:shadow-violet-500/10
      dark:border-white/10
      dark:bg-slate-800/70"
    >
      <div
        className="mb-3 flex h-14 w-14
        items-center justify-center rounded-2xl
        bg-violet-500/10
        transition-transform duration-300
        group-hover:scale-110"
      >
        <TechnologyLogo name={name} size={29} />
      </div>

      <h4
        className="text-sm font-semibold
        text-slate-900 dark:text-white"
      >
        {name}
      </h4>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("All Skills");
  const [search, setSearch] = useState("");
  const reduceMotion = useReducedMotion();

  // Preserve all 6 categories and 29 skills
  const allSkills = useMemo(
    () =>
      skillCategories.flatMap((category) =>
        category.skills.map((name) => ({
          name,
          category: category.title,
        }))
      ),
    []
  );

  const totalSkills = allSkills.length;

  const selectedCategory = skillCategories.find(
    (category) => category.title === active
  );

  const selectedIndex = skillCategories.findIndex(
    (category) => category.title === active
  );

  const ActiveIcon = selectedCategory
    ? categoryIcons[selectedCategory.icon] || Code2
    : Layers3;

  const activeColor =
    selectedIndex >= 0
      ? categoryColors[
          selectedIndex % categoryColors.length
        ]
      : "#a78bfa";

  const filtered = allSkills.filter((skill) => {
    const categoryMatch =
      active === "All Skills" ||
      skill.category === active;

    const keyword = search.trim().toLowerCase();

    const searchMatch =
      skill.name.toLowerCase().includes(keyword) ||
      skill.category.toLowerCase().includes(keyword);

    return categoryMatch && searchMatch;
  });

  const clearFilters = () => {
    setActive("All Skills");
    setSearch("");
  };

  const categories = [
    {
      title: "All Skills",
      icon: "all",
      skills: allSkills,
    },
    ...skillCategories,
  ];

  return (
    <section
  id="skills"
  className="min-h-screen bg-transparent py-20"
>
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span
            className="mb-4 inline-flex items-center
            gap-2 rounded-full border
            border-violet-500/20
            bg-violet-500/10 px-4 py-2
            text-xs font-semibold uppercase
            tracking-widest text-violet-500"
          >
            <Sparkles size={15} />
            Technical Expertise
          </span>

          <h2
            className="text-3xl font-extrabold
            tracking-tight text-slate-900
            dark:text-white sm:text-5xl"
          >
            My Skills{" "}
            <span
              className="bg-gradient-to-r
              from-violet-500 via-fuchsia-500
              to-blue-500 bg-clip-text
              text-transparent"
            >
              & Technologies
            </span>
          </h2>

          <p
            className="mx-auto mt-4 max-w-xl
            text-sm leading-7 text-slate-600
            dark:text-slate-400"
          >
            Explore the technologies and tools
            I use to build software projects.
          </p>
        </motion.div>

        {/* Main dashboard */}
        <div
          className="grid gap-5 rounded-3xl
          border border-slate-200
          bg-white/80 p-4 shadow-2xl
          shadow-violet-500/5 backdrop-blur-xl
          dark:border-white/10
          dark:bg-slate-900/80
          md:grid-cols-[250px_minmax(0,1fr)]
          md:p-6"
        >
          {/* Left category menu */}
          <aside className="space-y-2">
            <p
              className="mb-4 px-2 text-xs
              font-semibold uppercase
              tracking-widest text-slate-500"
            >
              Skill Categories
            </p>

            {categories.map((category, index) => {
              const Icon =
                category.icon === "all"
                  ? Layers3
                  : categoryIcons[category.icon] || Code2;

              const isActive =
                active === category.title;

              const color =
                index === 0
                  ? "#a78bfa"
                  : categoryColors[(index - 1) % 6];

              return (
                <motion.button
                  key={category.title}
                  type="button"
                  onClick={() => {
                    setActive(category.title);
                    setSearch("");
                  }}
                  aria-pressed={isActive}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { x: 4 }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : { scale: 0.98 }
                  }
                  className={`relative flex w-full
                    items-center gap-3 overflow-hidden
                    rounded-2xl border px-4 py-3
                    text-left transition-colors
                    ${
                      isActive
                        ? "border-violet-500/40"
                        : "border-transparent bg-slate-100/70 hover:bg-violet-500/5 dark:bg-slate-800/60"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-skill-category"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="absolute inset-0
                      bg-violet-500/15"
                    />
                  )}

                  <span
                    className="relative z-10 flex
                    h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-xl bg-slate-200/60
                    dark:bg-slate-950/60"
                  >
                    <Icon
                      size={21}
                      style={{ color }}
                    />
                  </span>

                  <span
                    className="relative z-10 min-w-0"
                  >
                    <span
                      className="block text-sm font-bold
                      text-slate-900 dark:text-white"
                    >
                      {category.title}
                    </span>

                    <span
                      className="mt-1 block text-xs
                      text-slate-500 dark:text-slate-400"
                    >
                      {category.skills.length} technologies
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </aside>

          {/* Right content */}
          <div
            className="min-w-0 rounded-3xl
            border border-violet-500/15
            bg-gradient-to-br from-violet-500/5
            via-transparent to-blue-500/5
            p-5 sm:p-7"
          >
            {/* Selected category */}
            <div
              className="mb-6 flex flex-wrap
              items-center gap-4"
            >
              <div
                className="flex h-14 w-14
                items-center justify-center
                rounded-2xl bg-violet-500/15"
                style={{ color: activeColor }}
              >
                <ActiveIcon size={28} />
              </div>

              <div className="min-w-0 flex-1">
                <h3
                  className="text-xl font-bold
                  text-slate-900 dark:text-white"
                >
                  {active}
                </h3>

                <p
                  className="mt-1 text-xs
                  text-slate-500 dark:text-slate-400"
                >
                  {filtered.length} technologies displayed
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="relative mb-7">
              <Search
                size={18}
                className="absolute left-4 top-1/2
                -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search technologies..."
                aria-label="Search technologies"
                className="w-full rounded-xl
                border border-slate-200
                bg-white/80 py-3 pl-11 pr-11
                text-sm text-slate-900 outline-none
                focus:border-violet-500
                focus:ring-2 focus:ring-violet-500/20
                dark:border-white/10
                dark:bg-slate-950/60
                dark:text-white"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2
                  -translate-y-1/2 text-slate-400
                  hover:text-violet-500"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            {/* Video-style All Skills marquee */}
            {active === "All Skills" ? (
              <SkillsMarquee items={filtered} />
            ) : (
              <motion.div
                layout
                className="grid grid-cols-2
                gap-3 sm:grid-cols-3
                xl:grid-cols-4"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((skill, index) => (
                    <SkillCard
                      key={`${skill.category}-${skill.name}`}
                      name={skill.name}
                      index={index}
                      reduceMotion={reduceMotion}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {filtered.length === 0 &&
              active !== "All Skills" && (
                <div
                  className="py-10 text-center"
                >
                  <p
                    className="text-sm text-slate-500
                    dark:text-slate-400"
                  >
                    No matching skills found.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-3 text-sm
                    font-semibold text-violet-500
                    hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}

            {/* Footer */}
            <div
              className="mt-8 flex flex-wrap
              items-center justify-between
              gap-3 border-t
              border-slate-200 pt-5
              dark:border-white/10"
            >
              <p
                className="text-xs text-slate-500
                dark:text-slate-400"
              >
                Continuously learning and building.
              </p>

              <a
                href="#projects"
                className="inline-flex items-center
                gap-2 text-sm font-semibold
                text-violet-600 hover:underline
                dark:text-violet-400"
              >
                Explore Projects
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
