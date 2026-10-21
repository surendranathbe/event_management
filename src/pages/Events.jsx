import React from "react";
import EventCategories from "../components/EventCategories";
import CtaBanner from "../components/CtaBanner";
import StatsBanner from "../components/StatsBanner";

export default function Events({ onOpenConsultation, onSelectForInquiry }) {
  return (
    <main>
      {/* Page Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #2b0412 0%, #5c0926 60%, #3a0415 100%)",
          color: "#ffffff",
          padding: "5rem 1.5rem 4rem 1.5rem",
          textAlign: "center",
          borderBottom: "2px solid var(--gold-500)",
        }}
      >
        <div className="container">
          <div className="section-eyebrow" style={{ color: "var(--gold-300)" }}>
            PORTFOLIO OF OCCASIONS
          </div>
          <h1 className="section-title" style={{ color: "#ffffff" }}>
            12 Bespoke <span className="gold-highlight">Event Categories</span>
          </h1>
          <p className="section-subtitle" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
            From grand royal mandaps and vibrant Haldi rituals to corporate galas and intimate family ceremonies.
          </p>
        </div>
      </section>

      {/* Complete 12 Categories with Filter */}
      <EventCategories isFullPage={true} onSelectForInquiry={onSelectForInquiry} />

      {/* Stats Banner */}
      <StatsBanner onOpenConsultation={onOpenConsultation} />

      {/* CTA */}
      <CtaBanner onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
