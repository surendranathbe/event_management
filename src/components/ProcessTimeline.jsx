import React from "react";
import { siteConfig } from "../data/siteConfig";

export default function ProcessTimeline() {
  return (
    <section
      style={{
        padding: "5.5rem 0 6rem 0",
        backgroundColor: "var(--bg-white)",
        borderTop: "1px solid rgba(212, 175, 55, 0.2)",
      }}
      aria-label="How We Plan Your Event"
    >
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">THE SIGNATURE PROCESS</div>
          <h2 className="section-title">
            HOW WE CRAFT <span className="gold-highlight">PERFECTION</span>
          </h2>
          <p className="section-subtitle">
            A methodical, stress-free four-stage journey from your earliest vision to unforgettable celebration day.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
            marginTop: "3rem",
          }}
        >
          {siteConfig.processSteps.map((step) => (
            <div
              key={step.step}
              style={{
                background: "var(--bg-cream)",
                border: "1px solid var(--border-gold-subtle)",
                borderRadius: "16px",
                padding: "2.25rem 1.75rem",
                position: "relative",
                transition: "all var(--transition-normal)",
              }}
              className="process-card"
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.8rem",
                  fontWeight: "800",
                  color: "var(--gold-400)",
                  opacity: 0.6,
                  lineHeight: 1,
                  marginBottom: "1rem",
                }}
              >
                {step.step}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  color: "var(--burgundy-900)",
                  marginBottom: "0.6rem",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-muted)",
                  lineHeight: "1.6",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
