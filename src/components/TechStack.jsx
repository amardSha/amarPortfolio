import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiAxios,
  SiVite,
} from "react-icons/si";

import { Globe2 } from "lucide-react";

const technologies = [
  {
    name: "React.js",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
    color: "#764ABC",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: SiCss,
    color: "#1572B6",
  },
  {
    name: "SCSS",
    icon: SiSass,
    color: "#CC6699",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
  },
  {
    name: "REST API",
    icon: Globe2,
    color: "#38BDF8",
  },
  {
    name: "Axios",
    icon: SiAxios,
    color: "#5A29E4",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "#646CFF",
  },
];

export default function TechStack() {
  return (
    <section
      className="tech-strip"
      aria-label="Technology stack"
    >
      <div className="tech-marquee">
        {[...technologies, ...technologies].map(
          ({ name, icon: Icon, color }, index) => (
            <div
              key={`${name}-${index}`}
              className="tech-item"
            >
              <Icon
                size={17}
                style={{ color }}
                className="tech-icon"
              />

              <span>{name}</span>
            </div>
          )
        )}
      </div>
    </section>
  );
}