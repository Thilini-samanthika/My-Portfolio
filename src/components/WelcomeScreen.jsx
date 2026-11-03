
import { motion } from "framer-motion";

export default function WelcomeScreen({ onSkip }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050816] px-6"
    >
      {/* Purple background glow */}
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />

      {/* Skip button */}
      <button
        type="button"
        onClick={onSkip}
        className="absolute right-5 top-5 z-20 rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:border-violet-400 hover:bg-white/10"
      >
        Skip Intro →
      </button>

      <div className="relative z-10 text-center">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-violet-400/30 bg-violet-500/10 text-4xl font-bold text-violet-400"
        >
          TS.
        </motion.div>

        {/* Welcome heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4 text-3xl font-bold text-white sm:text-5xl"
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl"
        >
          Thilini Samanthika
        </motion.p>

        {/* Animated loading bar */}
        <div className="mx-auto mt-10 h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.6,
              ease: "easeInOut",
            }}
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-5 text-sm text-slate-400"
        >
          Software Engineering • DevOps • Innovation
        </motion.p>
      </div>
    </motion.div>
  );
}
