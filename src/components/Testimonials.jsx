import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { testimonialsList } from "../data/testimonials";
import "../styles/testimonials.css";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const current = testimonialsList[currentIndex];

  return (
    <section className="testimonials-section" aria-label="Celebration Reflections">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">CELEBRATION VOICES</div>
          <h2 className="section-title">
            MOMENTS THAT <span className="gold-highlight">TOUCHED HEARTS</span>
          </h2>
          <p className="section-subtitle">
            Reflections from cherished families and visionary hosts we've had the honor of serving.
          </p>
        </div>

        <div className="testimonials-carousel-wrapper">
          <div className="testimonial-card-single">
            <span className="testimonial-quote-mark">“</span>

            <div className="testimonial-rating-row">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="var(--gold-500)" stroke="none" />
              ))}
            </div>

            <p className="testimonial-quote-text">“{current.quote}”</p>

            <div className="testimonial-author-row">
              <div className="author-profile">
                <img
                  src={current.avatar}
                  alt={current.clientName}
                  className="author-avatar"
                />
                <div className="author-info">
                  <h4>{current.clientName}</h4>
                  <p>{current.eventType}</p>
                  <span className="author-venue">
                    <MapPin size={12} style={{ display: "inline", marginRight: "3px" }} />
                    {current.venue}
                  </span>
                </div>
              </div>

              <div className="testimonial-demo-badge">
                <span>{current.isDemoNote}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="testimonials-nav-row">
            <button
              onClick={handlePrev}
              className="testimonial-nav-btn"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              {testimonialsList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: idx === currentIndex ? "24px" : "10px",
                    height: "10px",
                    borderRadius: "5px",
                    background:
                      idx === currentIndex ? "var(--burgundy-800)" : "rgba(212, 175, 55, 0.4)",
                    transition: "all 0.3s ease",
                  }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="testimonial-nav-btn"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
