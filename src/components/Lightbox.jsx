import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from "lucide-react";
import "../styles/gallery.css";

export default function Lightbox({ items, activeIndex, onClose, onNavigate }) {
  const currentItem = items[activeIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((activeIndex - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onNavigate((activeIndex + 1) % items.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, items.length, onClose, onNavigate]);

  if (!currentItem) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="lightbox-content-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          style={{ top: "1rem", right: "1rem" }}
          onClick={onClose}
          aria-label="Close image viewer"
        >
          <X size={20} />
        </button>

        <div className="lightbox-media">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="lightbox-img"
          />

          {items.length > 1 && (
            <>
              <button
                className="lightbox-nav-arrow lightbox-arrow-left"
                onClick={() =>
                  onNavigate((activeIndex - 1 + items.length) % items.length)
                }
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                className="lightbox-nav-arrow lightbox-arrow-right"
                onClick={() => onNavigate((activeIndex + 1) % items.length)}
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        <div className="lightbox-info">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <span className="badge-gold">{currentItem.categoryLabel}</span>
              <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>
                {activeIndex + 1} of {items.length}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.75rem",
                color: "#ffffff",
                marginBottom: "0.6rem",
              }}
            >
              {currentItem.title}
            </h3>

            {currentItem.location && (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.85rem",
                  color: "var(--gold-300)",
                  marginBottom: "1rem",
                }}
              >
                <MapPin size={15} />
                <span>{currentItem.location}</span>
              </p>
            )}

            <p
              style={{
                fontSize: "0.92rem",
                lineHeight: "1.6",
                color: "rgba(255, 255, 255, 0.85)",
                marginBottom: "1.5rem",
              }}
            >
              {currentItem.description}
            </p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {currentItem.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(212,175,55,0.3)",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    color: "var(--gold-200)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <Tag size={11} />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
              Event For You Signature Showcase • All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
