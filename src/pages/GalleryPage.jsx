import React from "react";
import Gallery from "../components/Gallery";
import CtaBanner from "../components/CtaBanner";
import Testimonials from "../components/Testimonials";

export default function GalleryPage({ onOpenConsultation }) {
  return (
    <main>
      {/* Header */}
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
            VISUAL OPULENCE
          </div>
          <h1 className="section-title" style={{ color: "#ffffff" }}>
            The Event For You <span className="gold-highlight">Portfolio</span>
          </h1>
          <p className="section-subtitle" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
            Explore our curated gallery of grand mandaps, vibrant Haldi setups, whimsical birthdays, and luxury galas.
          </p>
        </div>
      </section>

      {/* Full Gallery with all filters & lightbox */}
      <Gallery isPreview={false} />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CtaBanner onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
