import { motion } from "framer-motion";
import { Blocks, Code2, Gauge, GitBranch, Globe2, Layers3, PlugZap, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  ["Reusable Architecture", "Shared components and patterns instead of repeated UI code.", Blocks],
  ["Responsive Development", "Layouts designed for phones, tablets, laptops and large screens.", Globe2],
  ["Clean Code", "Meaningful components, separated data and maintainable structure.", Code2],
  ["API Integration", "Clear loading, error, empty and success states around data.", PlugZap],
  ["Performance Focus", "Rendering, loading, bundle and asset choices are treated as product concerns.", Gauge],
  ["Cross-Browser Compatibility", "Practical testing across modern browsers and viewport sizes.", Layers3],
  ["Git/GitHub Workflow", "Version-controlled development with focused, reviewable changes.", GitBranch],
  ["Business-Focused Development", "Frontend decisions connected to user and business workflows.", Target]
];

export default function WhyMe() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="07 / Why Work With Me" title="The difference is in the implementation." />
        <div className="why-grid">
          {items.map(([title, text, Icon], i) => (
            <motion.article className="why-card" key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
              <Icon size={20} />
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
