import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import profile from "../data/profile";

const initial = { name: "", email: "", phone: "", projectType: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: "", message: "" });

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.message.trim()) {
      setStatus({ type: "error", message: "Please complete your name, valid email and message." });
      return;
    }
    setStatus({ type: "success", message: "Form validated. Connect this handler to your preferred email/API service to send messages." });
  };

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <SectionHeading eyebrow="11 / Contact" title="Have a React project in mind?" text="Let's build something fast, scalable and user-friendly." />
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><Mail size={18} /><span>{profile.email}</span></a>
              <a href={`tel:${profile.phone}`}><Phone size={18} /><span>{profile.phone}</span></a>
              <div><MapPin size={18} /><span>{profile.location}</span></div>
              <div className="social-row">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="form-row">
              <label>Name<input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" /></label>
              <label>Email<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" /></label>
            </div>
            <div className="form-row">
              <label>Phone<input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 ..." /></label>
              <label>Project Type<select value={form.projectType} onChange={(e) => update("projectType", e.target.value)}><option value="">Select</option><option>React application</option><option>Dashboard</option><option>UI conversion</option><option>Existing project</option><option>Other</option></select></label>
            </div>
            <label>Message<textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell me a little about the project..." rows="5" /></label>
            <button className="btn-primary" type="submit">Send Message <ArrowUpRight size={17} /></button>
            {status.message && <div className={`form-status ${status.type}`}>{status.type === "success" ? <CheckCircle2 size={17} /> : null}{status.message}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
