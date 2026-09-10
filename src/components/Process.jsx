import { motion } from "framer-motion";
import { Compass, Code2, Rocket, Search, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  ["01", "Understand", "Understand requirements, users and business goals.", Search],
  ["02", "Plan", "Define components, architecture and API requirements.", Compass],
  ["03", "Build", "Develop reusable React components and responsive interfaces.", Code2],
  ["04", "Test", "Test responsiveness, functionality, API states and browser compatibility.", ShieldCheck],
  ["05", "Deploy", "Optimize and deploy the production-ready application.", Rocket]
];

export default function Process() {
  return (
    <section className="section-pad section-tint">
      <div className="container">
        <SectionHeading eyebrow="04 / Process" title="From requirement to release." text="A simple five-step delivery loop keeps the work understandable and shippable." />
        <div className="process-line">
          {steps.map(([number, title, text, Icon], i) => (
            <motion.article className="process-step" key={number} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="process-number">{number}</div>
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
