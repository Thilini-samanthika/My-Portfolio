
import { useEffect, useState } from "react";

const code = `const developer = {
  name: "Thilini Samanthika",
  role: "Software Engineering",
  skills: ["React", "Java", "Python"],
  interests: ["DevOps", "AI", "Projects"],
  goal: "Become a Technical Leader"
};

console.log("Welcome to my portfolio!");`;

export default function TypingCode() {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= code.length) {
      const timeout = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, 3500);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayed(code.slice(0, index + 1));
      setIndex(index + 1);
    }, 35);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-violet-500/20 bg-slate-900/90 shadow-xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-500" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />

        <span className="ml-3 text-xs text-slate-400">
          developer.js
        </span>
      </div>

      <div className="min-h-[260px] p-5">
        <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-6 text-violet-200">
          <code>{displayed}</code>
          <span className="ml-1 animate-pulse text-pink-400">
            |
          </span>
        </pre>
      </div>
    </div>
  );
}
