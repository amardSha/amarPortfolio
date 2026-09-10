import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="03 / Technical Expertise" title="A toolkit built for real applications." text="No misleading percentage bars—just the technologies and techniques used across frontend work." />
        <div className="skills-grid">
          {skills.map((group, i) => (
            <motion.article className="skill-card" key={group.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <span className="skill-number">0{i + 1}</span>
              <h3>{group.title}</h3>
              <div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
