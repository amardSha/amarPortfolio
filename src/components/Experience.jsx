import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import experience from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="05 / Experience" title="Career, measured in shipped work." text="Edit the timeline from src/data/experience.js without touching the UI." />
        <div className="experience-list">
          {experience.map((item, i) => (
            <motion.article className="experience-item" key={`${item.company}-${i}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="experience-marker">{String(i + 1).padStart(2, "0")}</div>
              <div className="experience-main">
                <div className="experience-head">
                  <div><h3>{item.position}</h3><p>{item.company}</p></div>
                  <div className="experience-date">{item.duration}<br />{item.location}</div>
                </div>
                <div className="tag-list experience-tags">{item.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <div className="experience-columns">
                  <div><h4>Responsibilities</h4><ul>{item.responsibilities.map((x) => <li key={x}>{x}</li>)}</ul></div>
                  <div><h4>Key achievements</h4><ul>{item.achievements.map((x) => <li key={x}>{x}</li>)}</ul></div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
