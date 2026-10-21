import React from "react";
import { X, CheckCircle2, Users, Sparkles, ArrowRight } from "lucide-react";
import "../styles/modal.css";

export default function EventModal({ event, onClose, onInquire }) {
  if (!event) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-container event-detail-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="event-modal-grid">
          <div className="event-modal-media">
            <img src={event.image} alt={event.title} className="event-modal-img" />
            <div className="event-modal-badge">{event.badge || "Featured"}</div>
          </div>

          <div className="event-modal-body">
            <span className="section-eyebrow" style={{ marginBottom: "0.25rem" }}>
              {event.vibe}
            </span>
            <h2 className="event-modal-title">{event.title}</h2>
            <p className="event-modal-tagline">{event.tagline}</p>
            <p className="event-modal-desc">{event.description}</p>

            <div className="event-modal-meta">
              <div className="meta-pill">
                <Users size={16} />
                <span>{event.guestCapacity}</span>
              </div>
              <div className="meta-pill">
                <Sparkles size={16} />
                <span>Bespoke Décor & Production</span>
              </div>
            </div>

            <div className="event-modal-highlights">
              <h4>Signature Inclusions:</h4>
              <div className="highlights-grid">
                {event.highlights?.map((item, idx) => (
                  <div key={idx} className="highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="event-modal-actions">
              <button
                className="btn-gold"
                onClick={() => {
                  onClose();
                  onInquire(event.title);
                }}
              >
                <span>INQUIRE ABOUT THIS EVENT</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
