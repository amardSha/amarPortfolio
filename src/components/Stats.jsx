import { motion } from "framer-motion";
import stats from "../data/stats";

export default function Stats() {
  return (
    <section className="stats-strip">
      <div className="container stats-grid">
        {stats.map((item, i) => (
          <motion.div
            className="stat-item"
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
