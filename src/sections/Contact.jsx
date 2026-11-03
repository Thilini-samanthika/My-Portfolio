
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  UserRound,
  MessageSquare,
  ArrowUpRight,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

// Replace these details with your actual information.
const CONTACT_EMAIL = "thilinisadtwnika@gmail.com";
const GITHUB_URL = "https://github.com/Thilini-samanthika";
const LINKEDIN_URL ="https://www.linkedin.com/in/thilini-samanthika-7335a634b/";
const LOCATION = "Malabe,Sri Lanka";

const contactLinks = [
  {
    title: "Email",
    value: "thilinisadtwnika@gmail.com",
    icon: Mail,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    title: "GitHub",
    value: "github.com/Thilini-samanthika",
    icon: Github,
    href: GITHUB_URL,
  },
  ...(LINKEDIN_URL
    ? [{
        title: "LinkedIn",
        value: "www.linkedin.com/in/thilini-samanthika-7335a634b",
        icon: Linkedin,
        href: LINKEDIN_URL,
      }]
    : []),
  {
    title: "Location",
    value: LOCATION,
    icon: MapPin,
    href: null,
  },
];

const inputStyle =
  "w-full rounded-xl border border-indigo-400/25 " +
  "bg-[#0b1530] px-4 py-3.5 text-sm text-white " +
  "placeholder:text-slate-500 outline-none " +
  "transition-all duration-300 " +
  "hover:border-violet-400/50 " +
  "focus:border-violet-400 focus:ring-4 " +
  "focus:ring-violet-500/15 " +
  "focus:shadow-[0_0_20px_rgba(139,92,246,0.16)]";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function ContactItem({ item }) {
  const Icon = item.icon;

  const content = (
    <>
      <div
        className="flex h-12 w-12 shrink-0 items-center
          justify-center rounded-xl border
          border-violet-500/40 bg-violet-500/15
          text-violet-300 transition-all
          group-hover:bg-violet-500/25
          group-hover:shadow-[0_0_18px_rgba(139,92,246,0.2)]"
      >
        <Icon size={21} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-violet-400">
          {item.title}
        </p>
        <p className="mt-1 break-all text-sm text-slate-200">
          {item.value}
        </p>
      </div>

      {item.href && (
        <ArrowUpRight
          size={17}
          className="shrink-0 text-violet-400
            transition-transform duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1"
        />
      )}
    </>
  );

  const className =
    "group flex items-center gap-4 rounded-xl " +
    "border border-indigo-400/15 bg-[#0b1430]/70 " +
    "p-3 transition-all duration-300 " +
    "hover:border-violet-500/45";

  if (!item.href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={item.href}
      target={item.href.startsWith("https://") ? "_blank" : undefined}
      rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  );
}

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) return;

    const subject = encodeURIComponent(
      `Portfolio Contact - ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
  id="contact"
  className="min-h-screen bg-transparent py-20"
>
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-28
          h-80 w-80 rounded-full bg-violet-700/20
          blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0
          h-80 w-80 rounded-full bg-indigo-600/15
          blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading: Scroll Reveal */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mb-12 text-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full
              border border-violet-500/50 bg-violet-500/10
              px-5 py-2 text-xs font-semibold uppercase
              tracking-[0.2em] text-violet-300"
          >
            <Mail size={15} />
            Get In Touch
          </span>

          <h2
            className="mt-5 text-4xl font-extrabold
              tracking-tight sm:text-5xl"
          >
            Contact{" "}
            <span className="bg-gradient-to-r from-violet-400
              to-indigo-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mt-5 text-sm text-slate-400 sm:text-base">
            Have an internship opportunity or project idea?
            Let's connect.
          </p>
        </motion.div>

        {/* Two columns: Staggered Cards */}
        <motion.div
          variants={reduceMotion ? undefined : stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.12 }}
          className="grid items-stretch gap-6
            lg:grid-cols-[0.9fr_1.2fr]"
        >
          {/* LEFT CARD */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="rounded-3xl border border-indigo-500/35
              bg-[#0a1430]/90 p-6
              shadow-[0_12px_45px_rgba(0,0,0,0.2)]
              sm:p-8"
          >
            <div className="flex items-center gap-3">
              <UserRound className="text-violet-400" size={25} />
              <h3 className="text-xl font-bold">
                Let's Connect
              </h3>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              I'm open to internship opportunities,
              collaborative projects, and exciting ideas.
              Feel free to reach out through any of the
              platforms below.
            </p>

            <div className="mt-7 space-y-3">
              {contactLinks.map((item) => (
                <ContactItem key={item.title} item={item} />
              ))}
            </div>

            <div
              className="mt-7 rounded-2xl border
                border-emerald-500/40 bg-emerald-500/5
                p-5"
            >
              <div className="flex items-start gap-3">
                <BriefcaseBusiness
                  size={22}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />
                <div>
                  <h4 className="font-bold text-slate-100">
                    Open to Opportunities
                  </h4>
                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Currently seeking software engineering
                    internship opportunities and collaborative
                    projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD: Animated Gradient Border */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="relative isolate overflow-hidden
              rounded-3xl p-[1px]
              shadow-[0_0_35px_rgba(139,92,246,0.16)]"
          >
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute
                -inset-[100%]
                bg-[conic-gradient(from_0deg,transparent_0%,#8b5cf6_20%,transparent_40%,#4f46e5_65%,transparent_85%)]"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: 14,
                ease: "linear",
                repeat: Infinity,
              }}
            />

            <div
              className="relative h-full rounded-[23px]
                bg-[#0b1531] p-6 sm:p-8"
            >
              <div className="mb-7 flex items-start gap-3">
                <Send size={27} className="text-violet-400" />

                <div>
                  <h3 className="text-xl font-bold">
                    Send Me a Message
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Fill in your details and open a
                    ready-to-send email draft.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Name <span className="text-rose-400">*</span>
                  </label>

                  <div className="relative">
                    <UserRound
                      size={18}
                      className="pointer-events-none absolute
                        left-4 top-1/2 -translate-y-1/2
                        text-violet-400"
                    />
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      placeholder=""
                      value={form.name}
                      onChange={handleChange}
                      className={`${inputStyle} pl-11`}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email <span className="text-rose-400">*</span>
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute
                        left-4 top-1/2 -translate-y-1/2
                        text-violet-400"
                    />
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      placeholder=""
                      value={form.email}
                      onChange={handleChange}
                      className={`${inputStyle} pl-11`}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Message <span className="text-rose-400">*</span>
                  </label>

                  <div className="relative">
                    <MessageSquare
                      size={18}
                      className="pointer-events-none absolute
                        left-4 top-4 text-violet-400"
                    />
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      minLength={5}
                      maxLength={3000}
                      rows={6}
                      placeholder="Your message"
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputStyle} resize-y pl-11`}
                    />
                  </div>
                </div>

                {/* Button Hover */}
                <motion.button
                  type="submit"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -3, scale: 1.01 }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : { scale: 0.98 }
                  }
                  className="group flex w-full items-center
                    justify-center gap-3 rounded-xl
                    bg-gradient-to-r from-violet-500
                    to-indigo-600 px-6 py-4
                    text-sm font-semibold text-white
                    shadow-lg shadow-violet-900/25
                    transition-shadow duration-300
                    hover:shadow-violet-500/30"
                >
                  <Send
                    size={18}
                    className="transition-transform duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1"
                  />
                  Open Email Draft
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300
                      group-hover:translate-x-1"
                  />
                </motion.button>

                <p className="text-center text-xs text-slate-400">
                  Opens your email app. This website does
                  not send the message directly.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
