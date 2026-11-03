
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  GraduationCap,
  School,
  BookOpen,
  Award,
  Sparkles,
  CalendarDays,
  ExternalLink,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  education,
  certificates,
} from "../data/education";

const tabs = [
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
  },
  {
    id: "courses",
    label: "Courses",
    icon: BookOpen,
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: Award,
  },
];

function EducationCard({ item, index, reducedMotion }) {
  const Icon =
    item.type === "degree"
      ? GraduationCap
      : item.type === "school"
      ? School
      : item.type === "certificate"
      ? Award
      : BookOpen;

  return (
    <motion.article
      layout
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 35, scale: 0.95 }
      }
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={
        reducedMotion
          ? undefined
          : { opacity: 0, y: -20 }
      }
      transition={{
        duration: reducedMotion ? 0 : 0.45,
        delay: reducedMotion ? 0 : index * 0.08,
      }}
      whileHover={
        reducedMotion
          ? undefined
          : { y: -8, scale: 1.02 }
      }
      className="group relative flex h-full flex-col
        overflow-hidden rounded-3xl border
        border-violet-500/20 bg-white/80 p-6
        shadow-lg shadow-violet-500/5
        backdrop-blur-xl transition-colors
        duration-300 hover:border-violet-400/60
        hover:shadow-2xl hover:shadow-violet-500/15
        dark:bg-slate-800/70"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute
          -right-12 -top-12 h-40 w-40 rounded-full
          bg-violet-500/15 blur-3xl"
      />

      <div className="relative flex flex-1 flex-col">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div
            className="flex h-14 w-14 items-center
              justify-center rounded-2xl
              border border-violet-500/20
              bg-violet-500/10 text-violet-500"
          >
            <Icon size={27} />
          </div>

          <span
            className="rounded-full bg-violet-500/10
              px-3 py-1.5 text-xs font-semibold
              text-violet-600 dark:text-violet-300"
          >
            {item.label || "Achievement"}
          </span>
        </div>

        <h3
          className="text-lg font-bold leading-snug
            text-slate-900 dark:text-white"
        >
          {item.title}
        </h3>

        {item.institution && (
          <p
            className="mt-4 flex items-start gap-2
              text-sm text-slate-600 dark:text-slate-300"
          >
            <MapPin
              size={17}
              className="mt-0.5 shrink-0 text-violet-500"
            />
            {item.institution}
          </p>
        )}

        {item.period && (
          <p
            className="mt-3 flex items-center gap-2
              text-sm text-slate-500 dark:text-slate-400"
          >
            <CalendarDays
              size={17}
              className="shrink-0 text-violet-500"
            />
            {item.period}
          </p>
        )}

        {item.description && (
          <p
            className="mt-5 text-sm leading-7
              text-slate-600 dark:text-slate-400"
          >
            {item.description}
          </p>
        )}

        {item.highlights?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {item.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border
                  border-violet-500/15 bg-violet-500/5
                  px-3 py-1.5 text-xs
                  text-slate-700 dark:text-slate-300"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        <div
          className="mt-auto flex items-center
            justify-between gap-3 pt-7"
        >
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                text-sm font-semibold text-violet-600
                hover:underline dark:text-violet-300"
            >
              View Credential
              <ExternalLink size={15} />
            </a>
          ) : (
            <span
              className="text-xs text-slate-400"
            >
              Academic Journey
            </span>
          )}

          <ArrowUpRight
            size={18}
            className="text-violet-400 transition-transform
              group-hover:-translate-y-1
              group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function Education() {
  const [activeTab, setActiveTab] = useState("education");
  const reducedMotion = useReducedMotion();

  const degreeItems = education.filter(
    (item) =>
      item.type !== "course" &&
      item.type !== "certificate"
  );

  const courseItems = education.filter(
    (item) => item.type === "course"
  );

  const certificateItems = [
    ...education.filter(
      (item) => item.type === "certificate"
    ),
    ...certificates,
  ];

  const groups = {
    education: degreeItems,
    courses: courseItems,
    certificates: certificateItems,
  };

  const activeItems = groups[activeTab] || [];

  const milestones = [
    {
      label: "Education",
      count: degreeItems.length,
      icon: GraduationCap,
    },
    {
      label: "Courses",
      count: courseItems.length,
      icon: BookOpen,
    },
    {
      label: "Certificates",
      count: certificateItems.length,
      icon: Award,
    },
  ];

  return (
    <section
  id="education"
  className="min-h-screen bg-transparent py-20"
>
      {/* Background glow */}
      <div
        className="pointer-events-none absolute
          left-1/2 top-20 h-80 w-80
          -translate-x-1/2 rounded-full
          bg-violet-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span
            className="mb-4 inline-flex items-center gap-2
              rounded-full border border-violet-500/20
              bg-violet-500/10 px-4 py-2 text-xs
              font-semibold uppercase tracking-widest
              text-violet-500"
          >
            <Sparkles size={15} />
            Academic & Professional Growth
          </span>

          <h2
            className="text-3xl font-extrabold
              text-slate-900 dark:text-white
              sm:text-5xl"
          >
            Education{" "}
            <span
              className="bg-gradient-to-r
                from-violet-500 via-fuchsia-500
                to-blue-500 bg-clip-text
                text-transparent"
            >
              & Achievements
            </span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl
              text-sm leading-7 text-slate-600
              dark:text-slate-400"
          >
            My academic background, completed courses,
            and professional certifications.
          </p>
        </motion.div>

        {/* Animated milestone timeline */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-10 overflow-hidden
            rounded-3xl border border-violet-500/20
            bg-slate-50/80 px-4 py-8
            shadow-xl shadow-violet-500/5
            backdrop-blur-xl dark:bg-slate-800/70
            sm:px-10"
        >
          <div className="relative grid grid-cols-3 gap-2">
            <div
              className="absolute left-[16.66%]
                right-[16.66%] top-7 h-1
                rounded-full bg-violet-500/15"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0 : 1.5,
                }}
                style={{ transformOrigin: "left" }}
                className="h-full w-full rounded-full
                  bg-gradient-to-r from-violet-500
                  via-fuchsia-500 to-blue-500"
              />
            </div>

            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={
                    reducedMotion
                      ? false
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className="relative z-10 flex
                    flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={
                      reducedMotion
                        ? undefined
                        : { scale: 1.15, rotate: 5 }
                    }
                    className="flex h-14 w-14
                      items-center justify-center
                      rounded-2xl border
                      border-violet-400/40
                      bg-violet-500/15 text-violet-500"
                  >
                    <Icon size={24} />
                  </motion.div>

                  <p
                    className="mt-4 text-2xl font-extrabold
                      text-slate-900 dark:text-white"
                  >
                    {String(item.count).padStart(2, "0")}
                  </p>

                  <p
                    className="mt-1 text-xs font-semibold
                      text-slate-600 dark:text-slate-400
                      sm:text-sm"
                  >
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Education categories"
          className="mx-auto mb-9 flex w-full
            max-w-xl gap-1 rounded-2xl
            border border-violet-500/15
            bg-slate-100 p-1.5
            dark:bg-slate-800"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const selected = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex min-w-0 flex-1
                  items-center justify-center gap-2
                  rounded-xl px-2 py-3 text-xs
                  font-semibold sm:text-sm
                  ${
                    selected
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
              >
                {selected && (
                  <motion.span
                    layoutId="education-active-tab"
                    className="absolute inset-0 rounded-xl
                      bg-gradient-to-r from-violet-600
                      to-fuchsia-600 shadow-lg"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <Icon size={17} className="relative z-10" />
                <span className="relative z-10">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="min-h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                reducedMotion
                  ? undefined
                  : { opacity: 0, y: -15 }
              }
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2
                lg:grid-cols-3"
            >
              {activeItems.length > 0 ? (
                activeItems.map((item, index) => (
                  <EducationCard
                    key={item.id}
                    item={item}
                    index={index}
                    reducedMotion={reducedMotion}
                  />
                ))
              ) : (
                <p
                  className="col-span-full rounded-2xl
                    border border-dashed
                    border-violet-500/30 p-10
                    text-center text-slate-500"
                >
                  No entries added yet.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
