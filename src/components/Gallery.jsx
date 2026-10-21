import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Maximize2, ArrowRight } from "lucide-react";
import { galleryCategories, galleryItems } from "../data/gallery";
import Lightbox from "./Lightbox";
import "../styles/gallery.css";

export default function Gallery({ isPreview = false }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const displayedItems = isPreview ? filteredItems.slice(0, 6) : filteredItems;

  return (
    <section className="gallery-section" id="gallery-section" aria-label="Signature Event Portfolio">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">PORTFOLIO & EXPERIENCES</div>
          <h2 className="section-title">
            CAPTURING <span className="gold-highlight">TIMELESS SPLENDOR</span>
          </h2>
          <p className="section-subtitle">
            A visual curation of grand weddings, intimate engagements, festive celebrations, and elite galas.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="gallery-filter-nav">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              className={`gallery-filter-btn ${
                activeCategory === cat.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="gallery-grid">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item-card"
              onClick={() => setLightboxIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setLightboxIndex(index);
              }}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery-item-img"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <div className="gallery-item-top">
                  <div className="gallery-zoom-badge" title="Expand photograph">
                    <Maximize2 size={16} />
                  </div>
                </div>

                <div className="gallery-item-bottom">
                  <span className="gallery-tag-pill">{item.categoryLabel}</span>
                  <h3 className="gallery-title">{item.title}</h3>
                  {item.location && (
                    <span className="gallery-location">{item.location}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA if on homepage preview */}
        {isPreview && (
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link to="/gallery" className="btn-burgundy">
              <span>EXPLORE COMPLETE PORTFOLIO ({galleryItems.length} WORKS)</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={displayedItems}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
}
