import React from "react";
import ContactSection from "../components/ContactSection";
import FaqAccordion from "../components/FaqAccordion";
import { siteConfig } from "../data/siteConfig";

export default function Contact({ preselectedEvent = "" }) {
  return (
    <main>
      {/* Contact Hero Banner */}
      <section className="contact-hero-banner">
        <div className="container">
          <div className="section-eyebrow" style={{ color: "var(--gold-300)" }}>
            CONNECT WITH OUR PLANNERS
          </div>
          <h1 className="section-title">
            Let’s Begin Your <span className="gold-highlight">Celebration</span>
          </h1>
          <p className="section-subtitle" style={{ color: "rgba(255, 255, 255, 0.88)" }}>
            Fill our detailed event inquiry below or reach out directly via WhatsApp, email, or telephone.
          </p>
        </div>
      </section>

      {/* Main Inquiry Form & Sidebar */}
      <ContactSection initialEvent={preselectedEvent} />

      {/* Frequently Asked Questions */}
      <FaqAccordion />
    </main>
  );
}
