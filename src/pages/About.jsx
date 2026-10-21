import React from "react";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Compass, ShieldCheck, ArrowRight, Award } from "lucide-react";
import CtaBanner from "../components/CtaBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import "../styles/about.css";

export default function About({ onOpenConsultation }) {
  return (
    <main>
      {/* Hero Header */}
      <section className="about-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color: "var(--gold-300)" }}>
            OUR STORY & ETHOS
          </div>
          <h1 className="section-title">
            Passionate About Every <span className="gold-highlight">Celebration</span>
          </h1>
          <p className="section-subtitle" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
            Discover our dedication to transforming life's defining moments into artistic, seamless celebrations.
          </p>
        </div>
      </section>

      {/* Feature Strip */}
      <WhyChooseUs />

      {/* Intro Narrative Section with Required Sample Intro */}
      <section className="about-intro-section">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <span className="section-eyebrow">OUR PHILOSOPHY</span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.3rem",
                  color: "var(--burgundy-900)",
                  marginBottom: "1.5rem",
                  lineHeight: "1.25",
                }}
              >
                Where Creative Passion Meets Flawless Execution
              </h2>

              {/* Exact Required Sample Intro from prompt */}
              <blockquote className="about-lead-quote">
                “At Event For You, we believe every celebration deserves to be extraordinary. From elegant weddings and vibrant traditional ceremonies to joyful birthdays and professional corporate events, we bring your ideas to life through creative planning, beautiful décor, and seamless coordination.”
              </blockquote>

              <p className="about-lead-text">
                Every host carries a personal dream for their gathering: the scent of fresh rajnigandha blossoms lining a wedding aisle, the infectious laughter echoing through a Haldi carnival, or the sophisticated precision of an executive corporate gala.
              </p>

              <p className="about-lead-text">
                Our approach is rooted in empathetic listening and bespoke artistry. Rather than recycling templates, we study your heritage, tastes, and preferences to compose an event identity that feels distinctively, authentically yours.
              </p>

              <div style={{ marginTop: "2rem" }}>
                <button onClick={onOpenConsultation} className="btn-gold">
                  <span>MEET WITH OUR CREATIVE TEAM</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="about-image-composition">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                alt="Event For You planning and styling"
                className="about-main-img"
              />
              <div className="about-floating-badge">
                <Sparkles size={28} color="var(--gold-600)" />
                <div>
                  <div style={{ fontWeight: "800", color: "var(--burgundy-900)", fontSize: "1.1rem" }}>
                    Bespoke Artistry
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    Tailored To Your Vision
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="about-value-icon">
                <Compass size={24} />
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--burgundy-900)", marginBottom: "0.5rem" }}>
                Empathetic Listening
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                We prioritize understanding your familial traditions, budget boundaries, and personal aesthetics before recommending a single vendor or flower.
              </p>
            </div>

            <div className="about-value-card">
              <div className="about-value-icon">
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--burgundy-900)", marginBottom: "0.5rem" }}>
                Aesthetic Mastery
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                From rich royal velvet drapes to contemporary botanical glass installations, our floral and lighting stylists craft visual poetry.
              </p>
            </div>

            <div className="about-value-card">
              <div className="about-value-icon">
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--burgundy-900)", marginBottom: "0.5rem" }}>
                Punctual Precision
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                We believe peace of mind is the ultimate luxury. Our on-ground coordinators ensure strict adherence to muhurtham timelines and schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
