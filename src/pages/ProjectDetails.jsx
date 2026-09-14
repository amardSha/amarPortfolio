import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  Check,
  Zap,
  Code2,
  Gauge,
  AlertTriangle,
  CircleCheck
} from "lucide-react";

import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import projects from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function handleImageError(event, fallback) {
  const image = event.currentTarget;

  if (fallback && image.dataset.fallback !== "used") {
    image.dataset.fallback = "used";
    image.src = fallback;
    return;
  }

  image.style.display = "none";
}

export default function ProjectDetails() {
  const { projectId } = useParams();

  const index = projects.findIndex(
    (p) => String(p.id) === projectId
  );

  const project = projects[index];



  if (!project) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-white">
              Project not found
            </h1>

            <Link
              className="mt-6 inline-flex items-center rounded-full bg-lime-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-lime-300"
              to="/"
            >
              Back to portfolio
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const previous =
    projects[(index - 1 + projects.length) % projects.length];

  const next =
    projects[(index + 1) % projects.length];

  const detailSections = project.detailSections ?? {};
  const detailContent = project.detailContent ?? {};

  return (
    <>
      <Navbar />

      <main className="project-details">
        <div className="container">

          {/* =====================================================
              BACK LINK
          ===================================================== */}
          <Link
            className="mb-0 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            to="/"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>


          {/* =====================================================
              HERO
          ===================================================== */}
          <motion.div
            className="grid min-h-[460px] grid-cols-1 items-center gap-10 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-5 lg:py-5"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >

            {/* LEFT CONTENT */}
            <div className="relative z-10">

              <span className="eyebrow">
                {project.number} / {project.category}
              </span>

              <h1 className="mt-6 max-w-[680px] text-[clamp(30px,4vw,50px)] font-medium leading-[1.1] tracking-[-0.055em] text-white">
                {project.title}
              </h1>

              <p className="mt-8 max-w-[620px] text-lg leading-relaxed text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>


            {/* RIGHT IMAGE */}
            <motion.div
              className="relative flex min-h-[420px] w-full items-center justify-center overflow-visible lg:min-h-[500px]"
              initial={{
                opacity: 0,
                x: 40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <img
                src={project.imageInner || project.image}
                alt={project.title}
                loading="eager"
                onError={(event) => handleImageError(event, project.image)}
                className={`${project.border === "yes" ? 'border border-cyan-400/25' : ''} h-auto overflow-hidden rounded-3xl transition-transform duration-500 hover:scale-[1.12]`}
              />
            </motion.div>

          </motion.div>


          {/* ===================================================== w-full max-w-[780px] scale-[1.08] object-contain object-center
              PROJECT CASE STUDY
          ===================================================== */}
          {/* =====================================================
    PROJECT CASE STUDY
===================================================== */}
          <div className="mt-20 space-y-5">

            {/* =================================================
      01 — OVERVIEW
  ================================================= */}
            <section className="relative overflow-hidden rounded-3xl border border-cyan-400/25 bg-[#071016] p-5 md:p-8 lg:p-8">

              {/* subtle glow */}
              <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1.4fr_0.7fr] lg:items-center">

                <div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                      01 / Overview
                    </span>

                    <span className="h-px w-10 bg-cyan-400/40" />
                  </div>

                  <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                    {detailContent.overviewTitle}
                    <br />
                    <span className="text-cyan-400">
                      {detailContent.overviewAccent}
                    </span>
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                    {project.solution}
                  </p>

                </div>


                {/* ROLE CARD */}
                <div className="rounded-2xl border border-cyan-400/25 bg-[#09141c] p-6">

                  <div className="flex items-start gap-4">

                    {/* ICON */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                      <Code2 size={22} />
                    </div>

                    <div>

                      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        My Role
                      </span>

                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {project.role}
                      </h3>

                    </div>

                  </div>

                  <div className="my-5 h-px bg-cyan-400/10" />

                  <p className="text-sm leading-6 text-slate-400">
                    {detailContent.roleDescription}
                  </p>

                </div>

              </div>
            </section>


            {/* =================================================
      02 — PROBLEM + SOLUTION
  ================================================= */}
            <div className="grid gap-5 lg:grid-cols-2">

              {/* PROBLEM */}
              <section className="rounded-3xl border border-cyan-400/25 bg-[#071016] p-7 transition-colors duration-300 hover:border-cyan-400/40 md:p-8">

                <div className="flex items-start gap-5">

                  {/* ICON */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                    <AlertTriangle size={20} />
                  </div>

                  <div className="flex-1">

                    <div className="flex items-center gap-4">

                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        02 / The Problem
                      </span>

                      <span className="h-px w-8 bg-cyan-400/40" />

                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {detailContent.problemTitle}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {project.problem}
                    </p>

                  </div>

                </div>

              </section>


              {/* SOLUTION */}
              <section className="rounded-3xl border border-cyan-400/25 bg-[#071016] p-7 transition-colors duration-300 hover:border-cyan-400/40 md:p-8">

                <div className="flex items-start gap-5">

                  {/* ICON */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                    <Zap size={20} />
                  </div>

                  <div className="flex-1">

                    <div className="flex items-center gap-4">

                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        The Solution
                      </span>

                      <span className="h-px w-8 bg-cyan-400/40" />

                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {detailContent.solutionTitle}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {project.solution}
                    </p>

                  </div>

                </div>

              </section>

            </div>


            {/* =================================================
      03 — KEY FEATURES
  ================================================= */}
            <section className="pt-5">

              <div className="mb-5 flex items-center gap-4">

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  03 / Key Features
                </span>

                <span className="h-px w-10 bg-cyan-400/40" />

              </div>


              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                {project.features.map((feature, featureIndex) => (

                  <div
                    key={feature}
                    className="group flex items-center justify-between rounded-xl border border-cyan-400/20 bg-[#071016] px-5 py-4 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/[0.03]"
                  >

                    <div className="flex min-w-0 items-center gap-4">

                      {/* NUMBER */}
                      <span className="flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/5 px-2 font-mono text-[10px] text-cyan-400">
                        {String(featureIndex + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs text-slate-200">
                        {feature}
                      </span>

                    </div>


                    {/* CHECK */}
                    <span className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5">
                      <Check
                        size={14}
                        className="text-cyan-400"
                      />
                    </span>

                  </div>

                ))}

              </div>

            </section>


            {/* =================================================
      04 — RESPONSIBILITIES
  ================================================= */}
            <section className="rounded-3xl border border-cyan-400/25 bg-[#071016] p-7 md:p-9">

              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                {/* LEFT */}
                <div>

                  <div className="flex items-center gap-4">

                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                      04 / My Responsibilities
                    </span>

                    <span className="h-px w-10 bg-cyan-400/40" />

                  </div>

                  <h2 className="mt-5 max-w-md text-2xl font-semibold leading-tight text-white md:text-3xl">
                    {detailContent.responsibilitiesTitle}
                    <br />
                    <span className="text-cyan-400">
                      {detailContent.responsibilitiesAccent}
                    </span>
                  </h2>

                </div>


                {/* RIGHT */}
                <div className="grid gap-2 sm:grid-cols-2">

                  {detailContent.responsibilities.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-cyan-400/15 bg-[#09141c] px-4 py-3 transition-colors hover:border-cyan-400/30"
                    >

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400">
                        <Check size={13} />
                      </span>

                      <span className="text-xs text-slate-300">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </section>


            {/* =================================================
      05 — CHALLENGES + 06 — PERFORMANCE
  ================================================= */}
            <div className="grid gap-5 lg:grid-cols-2">

              {/* CHALLENGES */}
              <section className="rounded-3xl border border-cyan-400/25 bg-[#071016] p-7 md:p-8">

                <div className="flex items-center gap-4">

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                    05 / Challenges
                  </span>

                  <span className="h-px w-10 bg-cyan-400/40" />

                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {detailContent.challengesTitle}
                </h3>


                <div className="mt-6 space-y-4">

                  {project.challenges.map((challenge, challengeIndex) => (

                    <div
                      key={challenge}
                      className="flex items-start gap-3"
                    >

                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />

                      <p className="text-sm leading-6 text-slate-400">
                        {challenge}
                      </p>

                    </div>

                  ))}

                </div>

              </section>


              {/* PERFORMANCE */}
              <section className="rounded-3xl border border-cyan-400/25 bg-[#071016] p-7 md:p-8">

                <div className="flex items-center gap-4">

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                    06 / Performance
                  </span>

                  <span className="h-px w-10 bg-cyan-400/40" />

                </div>


                <div className="mt-5 flex items-start gap-5">

                  {/* ICON */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                    <Gauge size={21} />
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-white">
                      {detailContent.performanceTitle}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {project.optimization}
                    </p>

                  </div>

                </div>


                {/* TAGS */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {detailContent.performanceTags.map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1.5 text-[11px] font-medium text-cyan-300"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </section>

            </div>


            {/* =================================================
      TECHNOLOGY
  ================================================= */}
            <section className="rounded-3xl border border-cyan-400/25 bg-[#071016] p-7">

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                    Technology
                  </span>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {detailContent.technologyTitle}
                  </h3>

                </div>


                <div className="flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-300 transition hover:border-cyan-400/40"
                    >
                      {technology}
                    </span>

                  ))}

                </div>

              </div>

            </section>

            {detailSections.dashboard ? (
              <section className="rounded-3xl border border-cyan-400/25 bg-[#071016]">
                <div className="mx-auto max-w-[1550px]">

                  {/* Dashboard Heading */}
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="flex mt-5 items-center justify-center rounded-b-2xl shadow-[0_15px_30px_rgba(0,0,0,0.12)]">
                        <h2 className="font-serif text-xl font-bold tracking-wide text-white">
                          {detailSections.dashboard.title}
                        </h2>
                      </div>

                      {/* Vertical line from dashboard */}
                      <div className="absolute left-1/2 top-full h-20 w-[1px] bg-slate-400/40" />
                    </div>
                  </div>

                  {/* Horizontal connector */}
                  <div className="relative mt-20">
                    <div className="absolute left-0 right-0 top-0 h-px bg-slate-400/25 " />

                    {/* Dashboard Columns */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 lg:grid-cols-8 m-4">
                      {detailSections.dashboard.items.map((section) => (
                        <div
                          key={section.number}
                          className="relative flex flex-col items-center"
                        >
                          {/* Vertical connector */}
                          <div className="absolute -top-1 h-10 w-px bg-slate-400/25" />

                          {/* Number */}
                          <div className="mt-10 text-sm text-cyan-400">
                            {section.number}
                          </div>

                          {/* Title */}
                          <h3 className="mt-2 text-center text-[14px] leading-6 text-slate-400">
                            {section.title}
                          </h3>

                          {/* Cards */}
                          <div className="mt-6 flex w-full flex-col gap-3">
                            {section.items.map((item) => (
                              <div
                                key={item}
                                className="flex items-center rounded-[3px] border border-slate-400/25 px-2 py-1 text-[13px] text-slate-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#cfc5ff] hover:shadow-md"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </section>
            ) : null}
            {detailSections.chartImage ? (
              <section className="rounded-3xl border border-cyan-400/25">
                <img
                  src={detailSections.chartImage || project.image}
                  alt={detailSections.chartAlt}
                  loading="eager"
                  onError={(event) => handleImageError(event, project.image)}
                  className="block h-auto overflow-hidden rounded-3xl transition-transform duration-500 hover:scale-[1.12]"
                />
              </section>
            ) : null}
            <div className="mb-5 flex items-center gap-4">

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Final product experience
              </span>

              <span className="h-px w-10 bg-cyan-400/40" />

            </div>
            {detailSections.showcases?.length ? detailSections.showcases.map((showcase) => (
              <section
                className="overflow-hidden"
                key={showcase.number}
              >
                <div
                  className="mx-auto grid max-w-[1700px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                  {/* ================= LEFT CONTENT ================= */}
                  <div className="flex gap-4">
                    {/* Number */}
                    <div className="mt-2 flex min-h-[35px] h-[35px] min-w-[35px] items-center justify-center rounded-[4px] bg-[#eee9ff] text-[18px]  
                                    font-semibold text-[#5735ff] transition-colors duration-500">
                      {showcase.number}
                    </div>
                    <div>
                      
                      {/* Heading */}
                      <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#111827] transition-colors duration-500
                                sm:text-5xl lg:text-[26px] xl:text-[36px] text-white">
                        {showcase.title}
                      </h2>

                      <p className="mt-2 max-w-[500px]text-lg leading-8 text-[#374151] transition-colors duration-500 text-[#a5a5ad]">
                        {showcase.description}
                      </p>

                      {/* Features */}
                      <div className="mt-8 space-y-4">
                        {showcase.features.map((feature) => (
                          <div className="flex items-center gap-2" key={feature}>
                            <CircleCheck size={26} strokeWidth={1.8} className="shrink-0 text-[#5735ff]" />
                            <span className="text-lg text-[#eeeeee]">
                              {feature}
                            </span>
                          </div>
                        ))}

                        {/* Item */}
                        <div className="hidden">
                          <CircleCheck size={26} strokeWidth={1.8}
                            className="shrink-0 text-[#5735ff] transition-colors duration-500 group-data-[theme=dark]:text-[#9b84ff]" />
                          <span className="text-lg text-[#111827] transition-colors duration-500  group-data-[theme=dark]:text-[#eeeeee]">
                            Registration Tracking dfdf
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ================= RIGHT IMAGE ================= */}
                  <div
                    className="relative overflow-hidden w-full shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 rounded-2xl border border-cyan-400/25"
                  >

                    <img
                      src={showcase.image || project.image}
                      alt={showcase.alt}
                      onError={(event) => handleImageError(event, project.image)}
                      className="relative z-10 block h-auto w-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full experience-list mt-4"></div>
              </section>
            )) : null}

          </div>




          {/* =====================================================
              PROJECT LINKS
          ===================================================== */}
          <div className="mt-12 flex flex-wrap gap-3">

            {project.liveUrl ? (
              <a
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-lime-300"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.06]"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>
            ) : null}

          </div>




          {/* =====================================================
              PREVIOUS / NEXT
          ===================================================== */}
          <div className="mt-16 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 md:grid-cols-2">

            <Link
              to={`/projects/${previous.id}`}
              className="group rounded-2xl border border-white/10 p-6 transition hover:border-white/20 hover:bg-white/[0.02]"
            >

              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-600">
                <ArrowLeft size={15} />
                Previous
              </span>

              <strong className="mt-3 block text-lg font-medium text-white transition group-hover:text-lime-400">
                {previous.title}
              </strong>

            </Link>


            <Link
              to={`/projects/${next.id}`}
              className="group rounded-2xl border border-white/10 p-6 text-left transition hover:border-white/20 hover:bg-white/[0.02] md:text-right"
            >

              <span className="flex items-center justify-start gap-2 text-xs uppercase tracking-[0.2em] text-zinc-600 md:justify-end">
                Next
                <ArrowRight size={15} />
              </span>

              <strong className="mt-3 block text-lg font-medium text-white transition group-hover:text-lime-400">
                {next.title}
              </strong>

            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
