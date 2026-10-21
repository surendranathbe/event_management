import React from "react";
import {
  ClipboardCheck,
  Crown,
  Flower2,
  Camera,
  Music,
  Sparkles,
  UtensilsCrossed,
  Building2,
  Gift,
  Sparkle,
  Briefcase,
  Car,
  ArrowRight,
} from "lucide-react";
import "../styles/services.css";

const serviceIconMap = {
  ClipboardCheck,
  Crown,
  Flower2,
  Camera,
  Music,
  Sparkles,
  UtensilsCrossed,
  Building2,
  Gift,
  Sparkle,
  Briefcase,
  Car,
};

export default function ServiceCard({ service, onInquire }) {
  const IconComponent = serviceIconMap[service.icon] || Sparkles;

  return (
    <article className="service-card">
      <div className="service-card-media">
        <img
          src={service.image}
          alt={service.title}
          className="service-card-img"
          loading="lazy"
        />
        <div className="service-card-media-overlay" />
        <div className="service-icon-badge">
          <IconComponent size={22} strokeWidth={2} />
        </div>
      </div>

      <div className="service-card-content">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-subtitle">{service.subtitle}</p>
        <p className="service-card-desc">{service.description}</p>

        <ul className="service-card-features">
          {service.features?.map((feature, idx) => (
            <li key={idx} className="service-feature-row">
              <span className="service-feature-bullet">✦</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="service-card-action">
          <button
            onClick={() => onInquire(service.title)}
            className="service-inquire-btn"
            aria-label={`Inquire about ${service.title}`}
          >
            <span>Inquire for This Service</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}
