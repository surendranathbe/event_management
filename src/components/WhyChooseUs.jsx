import React from "react";
import { Users, Flower2, CalendarCheck, Gem } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import "../styles/features.css";

const iconMap = {
  planning: Users,
  decor: Flower2,
  coordination: CalendarCheck,
  moments: Gem,
};

export default function WhyChooseUs() {
  return (
    <section className="features-strip" aria-label="Why Choose Event For You">
      <div className="features-grid">
        {siteConfig.whyChooseUs.map((feature) => {
          const IconComponent = iconMap[feature.id] || Flower2;
          return (
            <div key={feature.id} className="feature-item-col">
              <div className="feature-icon-circle">
                <IconComponent size={24} strokeWidth={1.75} />
              </div>
              <div className="feature-text-group">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-subtitle">{feature.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
