
import { useState } from "react";
import {
  SiJavascript, SiTypescript, SiPython, SiPhp,
  SiReact, SiHtml5, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiSpringboot, SiFlask,
  SiMysql, SiMongodb, SiGit, SiGithub, SiDocker,
  SiPostman, SiGithubactions, SiFastapi,
  SiSocketdotio, SiFigma,
} from "react-icons/si";
import { FaJava, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Code2, Brain, Server, Layers3 } from "lucide-react";

const logos = {
  Java: [FaJava, "#f89820"],
  JavaScript: [SiJavascript, "#f7df1e"],
  Python: [SiPython, "#3776ab"],
  PHP: [SiPhp, "#777bb4"],
  TypeScript: [SiTypescript, "#3178c6"],
  "React.js": [SiReact, "#61dafb"],
  HTML5: [SiHtml5, "#e34f26"],
  CSS3: [FaCss3Alt, "#1572b6"],
  "Tailwind CSS": [SiTailwindcss, "#06b6d4"],
  Bootstrap: [SiBootstrap, "#7952b3"],
  "Node.js": [SiNodedotjs, "#5fa04e"],
  "Express.js": [SiExpress, "#cbd5e1"],
  "Spring Boot": [SiSpringboot, "#6db33f"],
  Flask: [SiFlask, "#cbd5e1"],
  "REST APIs": [Server, "#a78bfa"],
  MySQL: [SiMysql, "#4479a1"],
  MongoDB: [SiMongodb, "#47a248"],
  "SQL Server": [FaDatabase, "#cc2927"],
  Git: [SiGit, "#f05032"],
  GitHub: [SiGithub, "#ffffff"],
  Docker: [SiDocker, "#2496ed"],
  Postman: [SiPostman, "#ff6c37"],
  "VS Code": [VscVscode, "#007acc"],
  "GitHub Actions": [SiGithubactions, "#2088ff"],
  "Machine Learning": [Brain, "#c084fc"],
  FastAPI: [SiFastapi, "#009688"],
  "Socket.IO": [SiSocketdotio, "#ffffff"],
  Figma: [SiFigma, "#f24e1e"],
  Agile: [Layers3, "#a78bfa"],
};

export function TechnologyLogo({ name, size = 25 }) {
  const [Logo, color] = logos[name] || [
    Code2,
    "#a78bfa",
  ];

  return (
    <Logo
      size={size}
      style={{ color }}
      aria-hidden="true"
    />
  );
}


function MovingRow({ items, reverse = false }) {
  return (
    <div className="skills-video-row">
      <div
        className={`skills-video-track ${
          reverse ? "skills-video-reverse" : ""
        }`}
      >
        {[0, 1].map((copy) => (
          <div
            className="skills-video-group"
            key={copy}
            aria-hidden={copy === 1}
          >
            {items.map((name, index) => {
              const [Logo, color] = logos[name] || [
                Code2,
                "#a78bfa",
              ];

              return (
                <div
                  className="skills-video-item"
                  key={`${copy}-${name}-${index}`}
                >
                  
<div
  className="
    skills-video-circle
    border-2 border-violet-400/70
    bg-white
    shadow-[0_3px_12px_rgba(124,58,237,0.10)]
    transition-all duration-300
    hover:border-violet-500
    hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]
    dark:border-violet-500/70
    dark:bg-[#10172b]
  "
>
  <Logo
    size={25}
    style={{ color }}
    aria-hidden="true"
  />
</div>

<span
  className="
    skills-video-name
    text-xs font-semibold
    text-slate-900
    dark:text-white
  "
>
  {name}
</span>

                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee({ items = [] }) {
  const [paused, setPaused] = useState(false);

  const names = items.map((item) =>
    typeof item === "string" ? item : item.name
  );

  if (names.length === 0) return null;

  const middle = Math.ceil(names.length / 2);
  const firstRow = names.slice(0, middle);
  const secondRow = names.slice(middle);

  return (
    <div
      className={`skills-video-marquee ${
        paused ? "skills-video-paused" : ""
      }`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Technology skills"
    >
      <MovingRow items={firstRow} />
      {secondRow.length > 0 && (
        <MovingRow items={secondRow} reverse />
      )}
    </div>
  );
}
