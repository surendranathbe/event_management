import React from "react";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import EventCategories from "../components/EventCategories";
import StatsBanner from "../components/StatsBanner";
import ServiceCard from "../components/ServiceCard";
import ProcessTimeline from "../components/ProcessTimeline";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import FaqAccordion from "../components/FaqAccordion";
import CtaBanner from "../components/CtaBanner";
import { servicesList } from "../data/services";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home({ onOpenConsultation, onSelectForInquiry }) {
  return (
    <main>
      {/* 1. Cinematic Hero Section */}
      <HeroSection onOpenConsultation={onOpenConsultation} />

      {/* 2. Four Feature Highlights Ribbon */}
      <WhyChooseUs />

      {/* 3. Event Categories Grid (Matches the 6 cards in reference design) */}
      <EventCategories onSelectForInquiry={onSelectForInquiry} />

      {/* 4. Deep Burgundy Stats & Callout Bar */}
      <StatsBanner onOpenConsultation={onOpenConsultation} />

      {/* 5. Featured Services Showcase */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">SIGNATURE CRAFTSMANSHIP</div>
            <h2 className="section-title">
              OUR BESPOKE <span className="gold-highlight">SERVICES</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive event production tailored to your exacting standards — from royal stage architecture to Michelin-standard hospitality.
            </p>
          </div>

          <div className="services-grid">
            {servicesList.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onInquire={(title) => onSelectForInquiry(title)}
              />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link to="/services" className="btn-burgundy">
              <span>EXPLORE ALL 12 SPECIALIZED SERVICES</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Signature 4-Step Planning Process */}
      <ProcessTimeline />

      {/* 7. Curated Gallery Showcase */}
      <Gallery isPreview={true} />

      {/* 8. Client Testimonials Carousel */}
      <Testimonials />

      {/* 9. Frequently Asked Questions */}
      <FaqAccordion />

      {/* 10. Consultation Callout Banner */}
      <CtaBanner onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
