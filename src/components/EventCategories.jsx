import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { eventCategories } from "../data/events";
import EventModal from "./EventModal";
import "../styles/events.css";

export default function EventCategories({ isFullPage = false, onSelectForInquiry }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // On homepage, show the 6 core categories from the reference image
  // On /events page, show all 12 categories with filter
  const displayedCategories = isFullPage
    ? activeFilter === "all"
      ? eventCategories
      : activeFilter === "featured"
      ? eventCategories.filter((e) => e.featured)
      : eventCategories.filter(
          (e) =>
            e.id.includes(activeFilter) ||
            e.vibe.toLowerCase().includes(activeFilter)
        )
    : eventCategories.slice(0, 6);

  const handleInquireFromModal = (eventTitle) => {
    if (onSelectForInquiry) {
      onSelectForInquiry(eventTitle);
    }
  };

  return (
    <section className="events-section" id="events-section" aria-label="Our Event Categories">
      {/* Decorative background watermark */}
      <svg
        className="events-bg-watermark"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="90" stroke="#5c0926" strokeWidth="2" strokeDasharray="6 6" />
        {[...Array(12)].map((_, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="100"
            rx="15"
            ry="75"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1.5"
            transform={`rotate(${i * 15} 100 100)`}
          />
        ))}
      </svg>

      <div className="container">
        {/* Header matching reference image: OUR EVENTS / CELEBRATE EVERY CHAPTER */}
        <div className="section-header">
          <div className="section-eyebrow">OUR EVENTS</div>
          <h2 className="section-title">
            CELEBRATE <span className="gold-highlight">EVERY CHAPTER</span>
          </h2>
          <p className="section-subtitle">
            From cherished traditions to modern celebrations, we bring your special moments to life.
          </p>
        </div>

        {/* Filter Bar (Only shown on full /events page) */}
        {isFullPage && (
          <div className="events-filter-bar">
            {[
              { id: "all", label: "All 12 Celebrations" },
              { id: "featured", label: "Featured" },
              { id: "wedding", label: "Weddings & Pre-Wedding" },
              { id: "traditional", label: "Traditional & Family" },
              { id: "corporate", label: "Corporate & Galas" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`filter-pill-btn ${activeFilter === tab.id ? "active" : ""}`}
                onClick={() => setActiveFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Cards Grid */}
        <div className="events-cards-grid">
          {displayedCategories.map((item) => (
            <div
              key={item.id}
              className="event-card"
              onClick={() => setSelectedEvent(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedEvent(item);
              }}
              aria-label={`Explore ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="event-card-img"
                loading="lazy"
              />
              <div className="event-card-overlay">
                <div className="event-card-footer">
                  <h3 className="event-card-title">{item.shortTitle}</h3>
                  <div className="event-card-arrow-circle">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for homepage */}
        {!isFullPage && (
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link
              to="/events"
              className="btn-burgundy"
              style={{ padding: "0.85rem 2.2rem" }}
            >
              <span>EXPLORE ALL 12 EVENT CATEGORIES</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onInquire={handleInquireFromModal}
        />
      )}
    </section>
  );
}
