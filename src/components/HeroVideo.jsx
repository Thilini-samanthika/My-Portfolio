
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroVideo() {
  const [error, setError] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
        initial={{
    opacity: 0,
    x: -120,
    y: -350,
    rotate: -8,
    scale: 0.8,
  }}
  animate={{
    opacity: 1,
    x: [-120, -90, -90, -50, -50, 0, 0],
    y: [-350, -250, -270, -160, -180, 0, 0],
    rotate: [-8, 5, -4, 4, -2, 0, 0],
    scale: [0.8, 0.9, 0.9, 0.95, 0.95, 1, 1],
  }}
  transition={{
    duration: 2.8,
    ease: "easeInOut",
    times: [0, 0.18, 0.28, 0.46, 0.56, 0.85, 1],
  }}
      className="relative mx-auto w-full max-w-[350px] lg:max-w-[380px]"
    >
      {/* Purple glow */}
      <div
        className="pointer-events-none absolute -inset-5
        rounded-full bg-violet-500/20 blur-3xl"
      />

      {/* Video card */}
      <div
        className="relative overflow-hidden rounded-[30px]
        border border-violet-400/20
        bg-slate-950 shadow-2xl shadow-violet-500/20"
      >
        {!error ? (
          <video
            src="/videos/girl-developer.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onError={() => setError(true)}
            className="block h-[350px] w-full
            object-cover object-center
            sm:h-[390px] lg:h-[420px]"
            aria-label="Animated girl developer video"
          />
        ) : (
          <div
            className="flex h-[350px] items-center
            justify-center p-6 text-center
            text-sm text-white/70"
          >
            Video failed to load.
          </div>
        )}

        {/* Bottom gradient */}
        <div
          className="pointer-events-none absolute inset-x-0
          bottom-0 h-24 bg-gradient-to-t
          from-slate-950/60 to-transparent"
        />
      </div>
    </motion.div>
  );
}
