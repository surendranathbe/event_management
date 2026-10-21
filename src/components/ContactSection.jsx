import React from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import InquiryForm from "./InquiryForm";
import { siteConfig } from "../data/siteConfig";
import "../styles/contact.css";

export default function ContactSection({ initialEvent = "" }) {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Hello Event For You! I would like to inquire about planning an event."
  )}`;

  return (
    <section className="contact-page-wrapper" id="contact-section">
      <div className="container">
        <div className="contact-main-grid">
          {/* Main Form Column */}
          <div className="contact-form-column">
            <InquiryForm initialEvent={initialEvent} />
          </div>

          {/* Sidebar Column */}
          <aside className="contact-sidebar">
            {/* WhatsApp Direct Action Card */}
            <div className="whatsapp-action-card">
              <span className="badge-gold" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>
                Instant Concierge
              </span>
              <h4
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.45rem",
                  marginTop: "0.75rem",
                  marginBottom: "0.4rem",
                }}
              >
                Chat on WhatsApp
              </h4>
              <p style={{ fontSize: "0.85rem", opacity: 0.9, lineHeight: "1.5" }}>
                Need immediate inspiration or venue guidance? Connect directly with our lead event curator on WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                id="whatsapp-direct-btn"
              >
                <MessageSquare size={18} />
                <span>Connect via WhatsApp</span>
              </a>
            </div>

            {/* Direct Contact Card */}
            <div className="contact-card-box">
              <h4 className="contact-card-title">Studio & Office</h4>
              <p className="contact-card-sub">
                We welcome bespoke appointments at our design studio.
              </p>

              <div className="contact-direct-links">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="contact-link-row"
                >
                  <div className="contact-icon-wrapper">
                    <Phone size={18} />
                  </div>
                  <div className="contact-link-text">
                    <h5>Direct Hotline</h5>
                    <p>{siteConfig.contact.phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="contact-link-row"
                >
                  <div className="contact-icon-wrapper">
                    <Mail size={18} />
                  </div>
                  <div className="contact-link-text">
                    <h5>Official Inquiries</h5>
                    <p>{siteConfig.contact.email}</p>
                  </div>
                </a>

                <div className="contact-link-row">
                  <div className="contact-icon-wrapper">
                    <MapPin size={18} />
                  </div>
                  <div className="contact-link-text">
                    <h5>Design Studio Location</h5>
                    <p>{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="contact-link-row">
                  <div className="contact-icon-wrapper">
                    <Clock size={18} />
                  </div>
                  <div className="contact-link-text">
                    <h5>Consultation Hours</h5>
                    <p>{siteConfig.contact.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality & Assurance Card */}
            <div
              style={{
                background: "var(--bg-cream)",
                border: "1px solid var(--border-gold-subtle)",
                borderRadius: "14px",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.85rem",
              }}
            >
              <ShieldCheck size={26} color="var(--gold-600)" style={{ flexShrink: 0 }} />
              <div>
                <h5 style={{ fontSize: "0.88rem", fontWeight: "700", color: "var(--burgundy-900)" }}>
                  Frontend Prototype Guarantee
                </h5>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                  This web application runs independently without server dependencies or external database exposure.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
