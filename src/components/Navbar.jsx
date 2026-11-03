import {useEffect} from "react";
import MusicToggle from "./MusicToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar({ dark, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  useEffect(()=>{let last=window.scrollY;const onScroll=()=>{const y=window.scrollY;setHidden(y>200&&y>last+4);last=y;const sections=[...document.querySelectorAll("main section[id]")];const current=sections.filter(el=>el.getBoundingClientRect().top<=180).at(-1);if(current)setActive(current.id);};window.addEventListener("scroll",onScroll,{passive:true});onScroll();return()=>window.removeEventListener("scroll",onScroll)},[]);

  return (
    <nav className={`fixed top-0 z-50 w-full border-b transition-transform duration-300 ${hidden?"-translate-y-full":"translate-y-0"}
                    border-slate-200/70 bg-white/90 backdrop-blur-xl
                    dark:border-slate-800 dark:bg-slate-950/90`}>
      <div className="mx-auto flex max-w-7xl items-center
                      justify-between px-6 py-4">
        <a href="#home"
           className="text-2xl font-extrabold tracking-tight
                      text-indigo-600 dark:text-indigo-400">
          TS<span className="text-slate-900 dark:text-white">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([name, href]) => (
            <a key={name} href={href}
               className={`text-sm font-medium transition hover:text-indigo-600 dark:hover:text-indigo-400 ${active===href.slice(1)?"text-indigo-600 dark:text-indigo-400":"text-slate-600 dark:text-slate-300"}`}>
              {name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <MusicToggle />
          <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
          <button
            className="md:hidden dark:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t
                        border-slate-200 bg-white px-6 py-5
                        dark:border-slate-800 dark:bg-slate-950 md:hidden">
          {links.map(([name, href]) => (
            <a key={name} href={href}
               onClick={() => setOpen(false)}
               className="text-slate-700 dark:text-slate-200">
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}