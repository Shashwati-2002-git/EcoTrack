import React, { useEffect, useRef, useState } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, i])]);
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: "Smart Tracking",
      desc: "Monitor your daily and real-time carbon emissions across transport, diet, and energy usage with pinpoint accuracy.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
      title: "AI Suggestions",
      desc: "Receive personalised, data-driven recommendations that adapt to your lifestyle and help you cut your footprint faster.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Sustainable Living",
      desc: "Build eco-friendly habits with guided challenges, progress streaks, and a community of like-minded changemakers.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
      title: "Detailed Reports",
      desc: "Visualise monthly breakdowns, compare against national averages, and share your impact story with others.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Community Goals",
      desc: "Join local and global groups, set collective targets, and celebrate shared milestones together.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      title: "Offset Programs",
      desc: "Seamlessly offset unavoidable emissions through verified reforestation and renewable energy projects.",
    },
  ];

  const stats = [
    { value: "2M+", label: "Tonnes CO₂ offset" },
    { value: "500K", label: "Active users" },
    { value: "94%", label: "Satisfaction rate" },
    { value: "150+", label: "Countries" },
  ];

  const steps = [
    { num: "01", title: "Create your profile", desc: "Answer a few questions about your lifestyle — takes under 3 minutes." },
    { num: "02", title: "Get your baseline", desc: "See your current carbon footprint compared to the global average." },
    { num: "03", title: "Take action", desc: "Follow your personalised action plan and watch your impact shrink." },
  ];

  return (
    <div className="landing-container">

      {/* Navbar */}
      <header className={`landing-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
            EcoTrack
          </div>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#stats">Impact</a>
          </nav>
          <div className="header-actions">
            <button className="btn-ghost">Login</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <span className="badge-dot" />
          Now tracking 150+ countries
        </div>
        <h1 className="hero-headline">
          Track your carbon.<br />
          <span className="headline-accent">Change your world.</span>
        </h1>
        <p className="hero-sub">
          Understand your daily environmental impact and take confident, actionable steps towards a greener future — powered by AI.
        </p>
        <div className="hero-actions">
          <button className="btn-primary btn-lg">Start for free</button>
          <button className="btn-outline btn-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
            </svg>
            Watch demo
          </button>
        </div>
        <div className="hero-social-proof">
          <div className="avatar-stack">
            {["#4CAF50", "#66BB6A", "#81C784", "#A5D6A7"].map((c, i) => (
              <span key={i} className="avatar" style={{ background: c, zIndex: 4 - i }} />
            ))}
          </div>
          <span>Joined by <strong>500,000+</strong> eco-conscious users</span>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card">
            <p className="card-label">This week's footprint</p>
            <p className="card-value">12.4 <span>kg CO₂</span></p>
            <div className="card-bar-track">
              <div className="card-bar-fill" style={{ width: "38%" }} />
            </div>
            <p className="card-note">38% below your average</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" id="stats">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="section-header">
          <span className="section-tag">Features</span>
          <h2>Everything you need to go green</h2>
          <p>A complete toolkit for understanding and reducing your environmental footprint.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`feature-card ${visibleCards.includes(i) ? "visible" : ""}`}
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section" id="how-it-works">
        <div className="section-header">
          <span className="section-tag">How it works</span>
          <h2>Up and running in minutes</h2>
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div className="step-card" key={i}>
              <span className="step-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-inner">
          <span className="section-tag tag-light">Get started today</span>
          <h2>The planet can't wait.<br />Neither should you.</h2>
          <p>Join half a million people already making a measurable difference.</p>
          <button className="btn-primary btn-lg btn-white">Join EcoTrack — it's free</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo logo-light">
              <span className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              EcoTrack
            </div>
            <p>Built for a greener future.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Changelog</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 EcoTrack, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;