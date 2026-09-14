import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import profile from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-8 md:py-12">
      <div className="container mx-auto px-5 md:px-8">

        <div className="grid min-h-[680px] overflow-hidden rounded-[26px] border border-slate-700/60 bg-[#10141c] lg:grid-cols-[43%_57%]">

          {/* LEFT SIDE */}
          <div className="bg-gradient-to-br from-[#18232e] via-[#121923] to-[#10151d] px-7 py-12 md:px-12 md:py-16 lg:px-16 lg:py-[70px]">

            <SectionHeading
              eyebrow="11 / Contact"
              title="Have a React project in mind?"
              text="Let's build something fast, scalable and user-friendly."
            />

            {/* Contact Details */}
            <div className="mt-10 flex flex-col gap-5">

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3.5 text-sm text-slate-400 transition hover:text-white"
              >
                <Mail size={18} />
                <span>{profile.email}</span>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3.5 text-sm text-slate-400 transition hover:text-white"
              >
                <Phone size={18} />
                <span>{profile.phone}</span>
              </a>

              <div className="flex items-center gap-3.5 text-sm text-slate-400">
                <MapPin size={18} />
                <span>{profile.location}</span>
              </div>

              {/* Social Links */}
              <div className="mt-2 flex gap-2.5">

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition hover:-translate-y-0.5 hover:border-slate-500 hover:text-white"
                >
                  <Linkedin size={19} />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition hover:-translate-y-0.5 hover:border-slate-500 hover:text-white"
                >
                  <Github size={19} />
                </a>

              </div>
            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center bg-[#11151d] p-5 md:p-10 lg:p-14">

            <div className="w-full max-w-[560px] rounded-[22px] border border-slate-700/70 bg-[#161c26]/80 p-6 shadow-2xl md:p-8">

              {/* Top */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[1px] text-slate-300">

                  <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.6)]" />

                  Available for work

                </div>

                <ArrowUpRight
                  size={22}
                  className="text-slate-500"
                />

              </div>


              {/* Main Content */}
              <div className="mt-12 md:mt-16">

                <p className="mb-3 text-xs font-bold tracking-[1.5px] text-cyan-400">
                  LET'S WORK TOGETHER
                </p>

                <h3 className="text-3xl font-normal leading-tight tracking-[-1.5px] text-slate-100 md:text-[42px] md:leading-[1.05]">
                  Have an idea?
                  <br />
                  Let's make it real.
                </h3>

                <p className="mt-5 max-w-[460px] text-sm leading-7 text-slate-400">
                  I'm open to interesting projects, product ideas and
                  opportunities where I can create meaningful digital
                  experiences.
                </p>

              </div>


              {/* Skills */}
              <div className="mt-7 flex flex-wrap gap-2">

                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "AI",
                  "UI Engineering",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-900/30 px-3 py-2 text-xs text-slate-400"
                  >
                    {skill}
                  </span>
                ))}

              </div>


              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Start a Conversation
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm text-slate-400 transition hover:border-slate-500 hover:text-white"
                >
                  View My Work
                </a>

              </div>


              {/* Footer */}
              <div className="mt-8 flex flex-col gap-3 border-t border-slate-700/70 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-green-400"
                  />
                  <span>Open to new opportunities</span>
                </div>

                <span>Based in India</span>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}