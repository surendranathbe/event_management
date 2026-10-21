import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import CtaBanner from "../components/CtaBanner";
import ProcessTimeline from "../components/ProcessTimeline";
import { servicesList } from "../data/services";

export default function Services({ onOpenConsultation, onSelectForInquiry }) {
  const [filter, setFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All 12 Services" },
    { id: "decor", label: "Décor & Stages" },
    { id: "av", label: "Entertainment & AV" },
    { id: "logistics", label: "Hospitality & Venues" },
  ];

  const filteredServices = servicesList.filter((s) => {
    if (filter === "all") return true;
    if (filter === "decor")
      return (
        s.id.includes("decor") ||
        s.id.includes("floral") ||
        s.id.includes("bridal") ||
        s.id.includes("stage")
      );
    if (filter === "av")
      return (
        s.id.includes("dj") ||
        s.id.includes("music") ||
        s.id.includes("sound") ||
        s.id.includes("photography")
      );
    if (filter === "logistics")
      return (
        s.id.includes("planning") ||
        s.id.includes("catering") ||
        s.id.includes("venue") ||
        s.id.includes("guest") ||
        s.id.includes("corporate") ||
        s.id.includes("invitation")
      );
    return true;
  });

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
            TURNKEY EVENT CRAFTSMANSHIP
          </div>
          <h1 className="section-title" style={{ color: "#ffffff" }}>
            12 Dedicated <span className="gold-highlight">Management Services</span>
          </h1>
          <p className="section-subtitle" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
            Meticulously planned, beautifully styled, and seamlessly orchestrated by our master production team.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-section">
        <div className="container">
          {/* Filter Pills */}
          <div className="gallery-filter-nav" style={{ marginBottom: "3rem" }}>
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                className={`gallery-filter-btn ${filter === tab.id ? "active" : ""}`}
                onClick={() => setFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onInquire={(title) => onSelectForInquiry(title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Signature 4-step process */}
      <ProcessTimeline />

      {/* Bottom CTA */}
      <CtaBanner onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
