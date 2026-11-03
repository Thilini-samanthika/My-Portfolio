
import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedProfile() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 45, scale: 0.92 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        ease: "easeOut",
      }}
      className="relative mx-auto w-full max-w-[320px]"
    >
      {/* Floating animation */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -10, 0] }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Purple glowing background */}
        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.3, 0.65, 0.3],
                  scale: [1, 1.06, 1],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute
            -inset-3 rounded-[32px]
            bg-violet-500/25 blur-2xl"
        />

        {/* Gradient border */}
        <div
          className="relative rounded-[30px]
            bg-gradient-to-br
            from-violet-400 via-indigo-500
            to-fuchsia-500 p-[3px]
            shadow-[0_20px_60px_rgba(124,58,237,0.20)]"
        >
          {/* Profile image */}
          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : { scale: 1.035 }
            }
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-[27px]
              bg-slate-900"
          >
            <img
              src="/images/profile.jpg"
              alt="Thilini Samanthika profile portrait"
              className="h-[370px] w-full
                object-cover object-center
                sm:h-[400px]"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Decorative floating dot */}
        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -8, 0] }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-3 top-8
            h-5 w-5 rounded-full
            border-4 border-[#0b1022]
            bg-violet-400
            shadow-[0_0_18px_rgba(167,139,250,0.7)]"
        />
      </motion.div>
    </motion.div>
  );
}
