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
import "./LandingPage.css";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const navItems = ["What", "Why", "About", "Sample Scan"];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(" ", "-"))
                }
                className="tc-nav-item"
              >
                {item}
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
                key={item}
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection(item.toLowerCase().replace(" ", "-"));
                }}
                className="tc-mobile-nav-item"
              >
                {item}
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
        <section className="tc-hero">
          <motion.div
            className="tc-hero-left"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="tc-title">
              See your resume the way hiring systems do.
            </h1>
            <p className="tc-subtitle">
              Talent Connects analyzes your resume against any job description
              and shows ATS-style diagnostics — without selling you anything.
            </p>

            <div className="tc-hero-cta">
              <button className="tc-btn tc-btn-primary" onClick={runSampleScan}>
                Try Sample Scan
              </button>
              <button
                className="tc-btn tc-btn-outline"
                onClick={() => scrollToSection("what")}
              >
                How It Works
              </button>
            </div>

            <div className="tc-hero-metrics">
              <div className="tc-metric">
                <span className="tc-metric-value">82</span>
                <span className="tc-metric-label">Sample Score</span>
              </div>
              <div className="tc-metric">
                <span className="tc-metric-value">95%</span>
                <span className="tc-metric-label">Resume Clarity</span>
              </div>
              <div className="tc-metric">
                <span className="tc-metric-value">3</span>
                <span className="tc-metric-label">Missing Skills</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="tc-hero-right"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {!showScore ? (
              <div className="tc-card tc-premium-card">
                <div className="tc-card-top">
                  <span className="tc-card-title">Ready to Test?</span>
                  <span className="tc-card-score">Click Scan</span>
                </div>

                <div className="tc-card-body">
                  <div className="tc-card-row">
                    <span>Resume vs JD</span>
                    <span className="tc-warning">Not Scanned</span>
                  </div>
                  <div className="tc-card-row">
                    <span>ATS Score</span>
                    <span className="tc-warning">Not Scanned</span>
                  </div>
                  <div className="tc-card-row">
                    <span>Suggestions</span>
                    <span className="tc-warning">Not Scanned</span>
                  </div>
                </div>

                <div className="tc-card-footer">
                  Click “Run Sample Scan” to see real ATS results.
                </div>

                <button
                  className="tc-btn tc-btn-primary tc-scan-btn"
                  onClick={runSampleScan}
                >
                  Run Sample Scan
                </button>
              </div>
            ) : (
              <div className="tc-card">
                <div className="tc-card-top">
                  <span className="tc-card-title">Sample Scan</span>
                  <span className="tc-card-score">Score 82</span>
                </div>

                <div className="tc-card-body">
                  <div className="tc-card-row">
                    <span>React</span>
                    <span className="tc-good">Present</span>
                  </div>
                  <div className="tc-card-row">
                    <span>Node.js</span>
                    <span className="tc-warning">Partial</span>
                  </div>
                  <div className="tc-card-row">
                    <span>AWS</span>
                    <span className="tc-bad">Missing</span>
                  </div>
                </div>

                <div className="tc-card-footer">
                  Add AWS to skills section to improve compatibility.
                </div>
              </div>
            )}

            {/* <div className="tc-lottie">
              <Lottie
                animationData={require("../../assets/ats.json")}
                loop
                autoplay
              />
            </div> */}
          </motion.div>
        </section>

        {/* Sections */}
        <section id="what" className="tc-features">
          <div className="tc-section-title">What Talent Connects does</div>
          <div className="tc-feature-grid">
            <div className="tc-feature-card">
              <div className="tc-feature-title">ATS-style Diagnostics</div>
              <div className="tc-feature-desc">
                Score + explanation for every resume–JD match.
              </div>
            </div>

            <div className="tc-feature-card">
              <div className="tc-feature-title">Actionable Guidance</div>
              <div className="tc-feature-desc">
                Add, remove or rephrase based on JD needs.
              </div>
            </div>

            <div className="tc-feature-card">
              <div className="tc-feature-title">Privacy First</div>
              <div className="tc-feature-desc">
                No resume storage for public scans (MVP).
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="tc-why">
          <div className="tc-section-title">Why use it?</div>
          <p className="tc-why-desc">
            Save time, avoid mismatches, and improve your resume before
            applying. It’s not a job portal — it’s a preparation tool.
          </p>
        </section>

        <section id="about" className="tc-about">
          <div className="tc-section-title">About</div>
          <p className="tc-about-desc">
            Talent Connects is a portfolio-grade product that demonstrates
            resume–JD compatibility analysis.
          </p>
        </section>

        <section id="sample-scan" className="tc-sample">
          <div className="tc-section-title">Sample Scan</div>
          <div className="tc-sample-box">
            <div className="tc-sample-left">
              <div className="tc-sample-title">Sample JD</div>
              <div className="tc-sample-text">
                Looking for a React + Node developer with AWS experience.
              </div>
            </div>
            <div className="tc-sample-right">
              <div className="tc-sample-title">Sample Resume</div>
              <div className="tc-sample-text">
                React, Node.js, Express, MongoDB.
              </div>
              <button
                className="tc-btn tc-btn-primary tc-sample-btn"
                onClick={runSampleScan}
              >
                Run Sample Scan
              </button>
            </div>
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
        className="tc-scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpIcon className="tc-scroll-icon" />
      </button>
    </div>
  );
}
