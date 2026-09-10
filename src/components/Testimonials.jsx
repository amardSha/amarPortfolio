import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  { quote: "Replace this placeholder with a genuine client or colleague quote.", name: "[CLIENT / COLLEAGUE]", role: "[ROLE / COMPANY]" },
  { quote: "Keep testimonials factual and permission-based. Avoid invented outcomes or claims.", name: "[CLIENT / COLLEAGUE]", role: "[ROLE / COMPANY]" }
];

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="09 / Testimonials" title="What collaborators can say." text="Placeholder content is intentionally marked so it can be replaced with real, permission-based testimonials." />
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name + item.role}><Quote size={25} /><p>“{item.quote}”</p><footer><strong>{item.name}</strong><span>{item.role}</span></footer></article>
          ))}
        </div>
      </div>
    </section>
  );
}
