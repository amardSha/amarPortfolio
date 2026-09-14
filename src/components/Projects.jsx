import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const categories = ["All", "React", "Dashboard", "E-Commerce", "SaaS", "API Integration", "Management System", "UI Development"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) =>
      p.category === active ||
      p.technologies.includes(active) ||
      (active === "React" && p.technologies.includes("React"))
    );
  }, [active]);

  return (
    <section id="projects" className="section-pad section-tint">
      <div className="container">
        <SectionHeading eyebrow="06 / Selected Work" title="Projects built around real workflows." text="Case-study style project cards make the role, stack and product problem visible at a glance." />
        {/* <div className="filter-row" role="group" aria-label="Project categories">
          {categories.map((category) => (
            <button className={active === category ? "filter-btn active" : "filter-btn"} key={category} onClick={() => setActive(category)}>{category}</button>
          ))}
        </div> */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => <ProjectCard key={project.id} project={project} />)}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && <div className="empty-state">No projects are assigned to this category yet.</div>}
      </div>
    </section>
  );
}
