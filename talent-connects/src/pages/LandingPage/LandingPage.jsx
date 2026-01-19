import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  UserPlusIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/solid";

import {
  DocumentArrowUpIcon,
  CpuChipIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

import "./LandingPage.css";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const navItems = [
    { label: "How It Works", id: "how-it-works" },
    { label: "Why Talent Connects", id: "why" },
    { label: "About", id: "about" },
    { label: "Sample Scan", id: "sample-scan" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 80; // adjust based on header height
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.history.pushState(null, "", `#${id}`);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const steps = [
    {
      id: 1,
      title: "Input",
      desc: "Upload your resume (PDF/DOC) and paste the job description you want to match against.",
      icon: DocumentArrowUpIcon,
    },
    {
      id: 2,
      title: "Parsing & Extraction",
      desc: "Resume content is securely parsed and key sections like Skills, Experience, Projects, and Education are identified.",
      icon: CpuChipIcon,
    },
    {
      id: 3,
      title: "Compatibility Analysis",
      desc: "Required vs present skills are matched using exact, partial, and synonym-based comparisons. Resume clarity and structure are also evaluated.",
      icon: ChartBarIcon,
    },
    {
      id: 4,
      title: "Transparent Scoring",
      desc: "An ATS-style compatibility score is generated with clear explanations behind every point awarded or missed.",
      icon: ArrowTrendingUpIcon,
    },
    {
      id: 5,
      title: "Actionable Feedback",
      desc: "Get clear guidance on what to add, rephrase, improve, or remove — no black-box logic, everything is explainable.",
      icon: CheckCircleIcon,
    },
  ];

  const runSampleScan = () => {
    setShowScore(true);
    scrollToSection("sample-scan");
  };

  return (
    <div className="tc-bg min-h-screen text-white">
      {/* Header */}
      <header className="tc-header">
        <div className="tc-container tc-header-inner">
          <div className="tc-logo">
            <div className="tc-logo-icon" />
            <div className="tc-logo-text">Talent Connects</div>
          </div>

          <nav className="tc-nav cursor-pointer">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="tc-nav-item"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="tc-actions">
            <button className="tc-btn tc-btn-outline">Login</button>
            <button className="tc-btn tc-btn-primary">Signup</button>
          </div>

          <button
            className="tc-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <XMarkIcon className="tc-menu-icon" />
            ) : (
              <Bars3Icon className="tc-menu-icon" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="tc-mobile-menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="tc-nav-item"
              >
                {item.label}
              </a>
            ))}

            <div className="tc-mobile-actions">
              <button className="tc-icon-btn">
                <UserIcon className="tc-icon" />
              </button>
              <button className="tc-icon-btn">
                <UserPlusIcon className="tc-icon" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <main className="tc-container">
        <section className="tc-hero pt-28 pb-20">
          <motion.div
            className="
       w-full
      max-w-7xl
      mx-auto
      px-4 sm:px-6 lg:px-8
      text-center lg:text-left
    "
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h1
              className="
        text-3xl sm:text-4xl lg:text-5xl
        font-bold
        tracking-tight
        leading-tight
        text-white
      "
            >
              See your resume the way{" "}
              <span className="text-cyan-400">hiring systems</span> do.
            </h1>

            {/* Sub headline */}
            <p
              className="
        mt-4
        text-base sm:text-lg
        text-white/80
        leading-relaxed
      "
            >
              Talent Connects analyzes your resume against a job description and
              shows ATS-style diagnostics — transparent, explainable, and
              unbiased.
            </p>

            {/* Quantified value points */}
            <ul
              className="
        mt-6
        space-y-3
        text-sm sm:text-base
        text-white/75
      "
            >
              <li>• Resume–JD compatibility score (0–100)</li>
              <li>• Skill match %, missing skills & partial overlaps</li>
              <li>• Section-wise clarity & structure feedback</li>
              <li>• ATS-friendly language & formatting checks</li>
            </ul>

            {/* Trust statement */}
            <p
              className="
        mt-4
        text-sm
        text-white/60
      "
            >
              No resume building. No upselling. Only clarity.
            </p>

            {/* CTA */}
            <div
              className="
        mt-8
        flex flex-col sm:flex-row
        gap-3
        justify-center lg:justify-start
      "
            >
              <button
                className="
          tc-btn tc-btn-primary
          w-full sm:w-auto
        "
                onClick={() => scrollToSection("sample-scan")}
              >
                Try Sample Scan
              </button>

              <button
                className="
          tc-btn tc-btn-outline
          w-full sm:w-auto
        "
                onClick={() => scrollToSection("how-it-works")}
              >
                How It Works
              </button>
            </div>
          </motion.div>
        </section>

        {/* Sections */}
        <section id="how-it-works" className="tc-features">
          <h2 className="tc-section-title mb-6 text-center">
            How Talent Connects works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative rounded-xl p-4
                   bg-white/5 backdrop-blur
                   border border-white/10
                   hover:border-cyan-400/40
                   transition"
              >
                {/* Step number */}
                <span
                  className="absolute -top-2 -left-2 w-6 h-6
                     rounded-full
                     bg-gradient-to-br from-indigo-500 to-cyan-400
                     text-white text-[11px] font-bold
                     flex items-center justify-center"
                >
                  {step.id}
                </span>

                {/* Icon */}
                <step.icon className="w-5 h-5 text-cyan-400 mb-2" />

                {/* Title */}
                <h3 className="text-sm font-semibold text-white leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-[12px] leading-snug text-white/65">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="why" className="mt-10">
          <h2 className="tc-section-title mb-6 text-center">
            Why use Talent Connects?
          </h2>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div
              className="
        rounded-xl
        bg-white/5 backdrop-blur
        border border-white/10
        p-5
        hover:border-cyan-400/40
        transition
      "
            >
              <h3 className="text-sm font-semibold text-cyan-400 mb-2">
                Avoid Resume–JD Mismatch
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Instantly see how well your resume aligns with a specific job
                description before applying — no guesswork, no blind
                submissions.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
        rounded-xl
        bg-white/5 backdrop-blur
        border border-white/10
        p-5
        hover:border-indigo-400/40
        transition
      "
            >
              <h3 className="text-sm font-semibold text-indigo-400 mb-2">
                Think Like an ATS
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Understand how hiring systems interpret skills, experience, and
                structure — and why resumes get filtered out early.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
        rounded-xl
        bg-white/5 backdrop-blur
        border border-white/10
        p-5
        hover:border-pink-400/40
        transition
      "
            >
              <h3 className="text-sm font-semibold text-pink-400 mb-2">
                Improve With Clear Feedback
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Get actionable suggestions on what to add, rephrase, or remove —
                every insight is explainable, not black-box scoring.
              </p>
            </div>
          </div>

          <div
            className="
      max-w-3xl mx-auto mt-8
      text-center
      rounded-xl
      bg-gradient-to-r from-indigo-500/10 to-cyan-400/10
      border border-white/10
      p-5
    "
          >
            <p className="text-sm text-white/80 leading-relaxed">
              Talent Connects is not about applying faster — it’s about applying
              smarter with clarity, confidence, and alignment.
            </p>
          </div>
        </section>

        <section id="about" className="mt-10">
          <h2 className="tc-section-title mb-6 text-center">
            About Talent Connects
          </h2>

          <div
            className="
      max-w-4xl mx-auto
      rounded-2xl
      bg-white/5 backdrop-blur
      border border-white/10
      p-6 md:p-8
    "
          >
            <p className="text-white/75 text-sm leading-relaxed">
              <span className="font-semibold text-white">Talent Connects</span>{" "}
              is a portfolio-grade, public utility project built to simulate how
              modern Applicant Tracking Systems (ATS) evaluate resumes against
              job descriptions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* What it is */}
              <div
                className="
          rounded-xl
          bg-white/5
          border border-white/10
          p-5
        "
              >
                <h3 className="text-sm font-semibold text-cyan-400 mb-3">
                  What it is
                </h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Resume–Job Description compatibility analyzer</li>
                  <li>• ATS-style scoring with transparent logic</li>
                  <li>• Skill gap & section-wise diagnostics</li>
                  <li>• Learning-oriented, explainable feedback system</li>
                </ul>
              </div>

              {/* What it is not */}
              <div
                className="
          rounded-xl
          bg-white/5
          border border-white/10
          p-5
        "
              >
                <h3 className="text-sm font-semibold text-pink-400 mb-3">
                  What it is not
                </h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Not a job portal or recruitment platform</li>
                  <li>• Not an official ATS used by companies</li>
                  <li>• Not a resume builder or paid upsell tool</li>
                  <li>• Not affiliated with any hiring organization</li>
                </ul>
              </div>
            </div>

            <div
              className="
        mt-6
        rounded-xl
        bg-gradient-to-r from-indigo-500/10 to-cyan-400/10
        border border-white/10
        p-5
      "
            >
              <p className="text-sm text-white/80 leading-relaxed">
                This project is built to demonstrate{" "}
                <span className="text-white font-semibold">
                  system thinking, performance optimization, real-world hiring
                  problem understanding,
                </span>{" "}
                and the ability to translate complex evaluation logic into a
                clear, user-friendly experience.
              </p>
            </div>
          </div>
        </section>

        <section id="sample-scan" className="mt-10">
          <h2 className="tc-section-title mb-6 text-center">
            Scan Your Resume with Job Description
          </h2>

          <div
            className="
      max-w-6xl mx-auto
      rounded-2xl
      bg-white/5 backdrop-blur
      border border-white/10
      p-6 md:p-8
    "
          >
            {/* Intro */}
            <p className="text-center text-white/75 text-sm max-w-3xl mx-auto">
              Paste the job description and your resume below to see how well
              they align — just like an ATS would evaluate them.
            </p>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              {/* Job Description */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-cyan-400 mb-2">
                  Job Description
                </label>
                <textarea
                  placeholder="Paste the job description here..."
                  rows={15}
                  className="
            w-full
            rounded-lg
            bg-black/30
            border border-white/10
            text-sm text-white/80
            placeholder-white/40
            p-3
            resize-none
            focus:outline-none
            focus:border-cyan-400/60
          "
                />
              </div>

              {/* Resume */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-indigo-400 mb-2">
                  Your Resume
                </label>
                <textarea
                  placeholder="Paste your resume content here..."
                  rows={15}
                  className="
            w-full
            rounded-lg
            bg-black/30
            border border-white/10
            text-sm text-white/80
            placeholder-white/40
            p-3
            resize-none
            focus:outline-none
            focus:border-indigo-400/60
          "
                />
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-center">
              <button
                className="
          tc-btn tc-btn-primary
          px-10
          py-3
          text-sm
        "
              >
                Run ATS Scan
              </button>
            </div>

            {/* Helper text */}
            <p className="mt-4 text-center text-xs text-white/50">
              This is a demo scan for portfolio purposes. No data is stored.
            </p>
          </div>
        </section>
      </main>

      <footer className="tc-footer">
        <div className="tc-container">
          <div className="tc-footer-text">
            © {new Date().getFullYear()} Talent Connects • ATS-style diagnostics
            only
          </div>
        </div>
      </footer>

      {/* Scroll Top */}
      <button
        className="tc-scroll-top
         fixed bottom-6 right-6 z-50
    w-12 h-12 rounded-full
    bg-white/10 backdrop-blur
    border border-white/20
    flex items-center justify-center
    hover:bg-white/20 hover:scale-110
    transition-all duration-300
    shadow-lg
        "
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpIcon className="tc-scroll-icon" />
      </button>
    </div>
  );
}
