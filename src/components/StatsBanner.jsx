import React from "react";
import { Link } from "react-router-dom";
import { Users, Star, Heart, Trophy, ArrowRight } from "lucide-react";
import "../styles/stats.css";

export default function StatsBanner({ onOpenConsultation }) {
  return (
    <section className="stats-banner-strip" aria-label="Our Milestones and Heritage">
      <div className="stats-banner-container">
        {/* Metrics List matching the reference image */}
        <div className="stats-metrics-list">
          <div className="stat-metric-item">
            <Users size={32} className="stat-icon" strokeWidth={1.6} />
            <div className="stat-text-stack">
              <span className="stat-number">500+</span>
              <span className="stat-label">Events Planned</span>
            </div>
          </div>

          <div className="stat-metric-item">
            <Star size={32} className="stat-icon" strokeWidth={1.6} />
            <div className="stat-text-stack">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>

          <div className="stat-metric-item">
            <Heart size={32} className="stat-icon" strokeWidth={1.6} />
            <div className="stat-text-stack">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
          </div>

          <div className="stat-metric-item">
            <Trophy size={32} className="stat-icon" strokeWidth={1.6} />
            <div className="stat-text-stack">
              <span className="stat-number">50+</span>
              <span className="stat-label">Corporate Clients</span>
            </div>
          </div>
        </div>

        {/* Right CTA Callout */}
        <div className="stats-action-right">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <span className="stats-script-text">
              Let's Create Something Beautiful Together
            </span>
            <span className="demo-disclaimer-tag">
              *Sample metrics for presentation purposes
            </span>
          </div>

          <Link
            to="/contact"
            className="btn-gold"
            id="stats-get-in-touch"
          >
            <span>GET IN TOUCH</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
