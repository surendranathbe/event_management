import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import "../styles/hero.css";

const heroSlides = [
  {
    id: 1,
    titleLine1: "Your Vision.",
    titleLine2: "Our Celebration.",
    description:
      "Extraordinary events, beautifully planned — from intimate moments to grand celebrations.",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85",
    calloutTop: "Making",
    calloutBottom: "Moments Unforgettable",
  },
  {
    id: 2,
    titleLine1: "Timeless Grandeur.",
    titleLine2: "Bespoke Artistry.",
    description:
      "Transforming dreamscapes into reality with majestic floral architecture, crystal chandeliers, and royal hospitality.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
    calloutTop: "Crafting",
    calloutBottom: "Cherished Memories",
  },
  {
    id: 3,
    titleLine1: "Vibrant Traditions.",
    titleLine2: "Electrifying Joy.",
    description:
      "From exuberant Haldi & Mehendi carnivals to concert-scale Sangeet dance stages that keep the celebration alive.",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2000&q=85",
    calloutTop: "Celebrating",
    calloutBottom: "Every Sacred Bond",
  },
];

export default function HeroSection({ onOpenConsultation }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="hero-wrapper" aria-label="Hero Showcase">
      {/* Background Slides */}
      {heroSlides.map((item, index) => (
        <div
          key={item.id}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
        >
          <img
            src={item.image}
            alt="Opulent Indian wedding stage decoration and lighting"
            className="hero-background-img"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="hero-overlay" />
          <div className="hero-vignette" />
        </div>
      ))}

      {/* Side Carousel Arrow Controls */}
      <button
        onClick={handlePrev}
        className="carousel-arrow-btn carousel-arrow-left"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="carousel-arrow-btn carousel-arrow-right"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Hero Foreground Content */}
      <div className="hero-content-container">
        <div className="hero-text-block">
          <div className="hero-eyebrow-line">
            <span>EVENT FOR YOU</span>
          </div>

          <h1 className="hero-main-title">
            {slide.titleLine1}
            <span className="gold-text">{slide.titleLine2}</span>
          </h1>

          <p className="hero-description">{slide.description}</p>

          <div className="hero-cta-group">
            <Link to="/services" className="btn-burgundy" id="hero-explore-services">
              <span>EXPLORE OUR SERVICES</span>
              <ArrowRight size={16} />
            </Link>

            <button
              onClick={onOpenConsultation}
              className="btn-translucent"
              id="hero-free-consultation"
            >
              <span>GET A FREE CONSULTATION</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Script Callout on the right matching reference image */}
        <div className="hero-decorative-right">
          <div className="script-callout">
            <span>{slide.calloutTop}</span>
            <span>{slide.calloutBottom}</span>
            <div className="script-heart-icon">
              <Heart size={28} strokeWidth={1.7} />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="hero-dots-container">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
