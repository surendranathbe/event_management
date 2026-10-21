import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CtaBanner({ onOpenConsultation }) {
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #28030f 0%, #5c0926 50%, #300311 100%)",
        color: "#ffffff",
        padding: "5rem 1.5rem",
        textAlign: "center",
        borderTop: "2px solid var(--gold-500)",
        borderBottom: "2px solid var(--gold-500)",
        overflow: "hidden",
      }}
      aria-label="Book Consultation Call to Action"
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 5, maxWidth: "800px" }}>
        <div className="badge-gold" style={{ background: "rgba(255,255,255,0.12)", color: "#ffffff", marginBottom: "1.25rem", borderColor: "rgba(212, 175, 55, 0.5)" }}>
          <Sparkles size={14} />
          <span>YOUR DREAM CELEBRATION AWAITS</span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2.8rem",
            fontWeight: 800,
            marginBottom: "1rem",
            lineHeight: 1.2,
            color: "#ffffff",
          }}
        >
          Let’s Transform Your Vision Into An Unforgettable Memory
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255, 255, 255, 0.88)",
            lineHeight: "1.6",
            marginBottom: "2.5rem",
          }}
        >
          Whether you're organizing a royal destination wedding or an intimate milestone anniversary, our curators are ready to bring your imagination to life.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          <button onClick={onOpenConsultation} className="btn-gold" id="cta-plan-now">
            <span>GET A FREE CONSULTATION</span>
            <ArrowRight size={16} />
          </button>

          <Link to="/contact" className="btn-translucent">
            <span>VISIT OUR DESIGN STUDIO</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
