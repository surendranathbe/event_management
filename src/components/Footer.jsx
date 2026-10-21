import React from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  ChevronRight 
} from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, PinterestIcon } from "./SocialIcons";
import Logo from "./Logo";
import { siteConfig } from "../data/siteConfig";
import { eventCategories } from "../data/events";
import { servicesList } from "../data/services";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-wrapper" aria-label="Event For You Footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Logo variant="light" size="normal" />
            <p className="footer-brand-desc">
              {siteConfig.tagline} Extraordinary events, beautifully planned — from intimate moments to grand celebrations. Creating bespoke experiences across India.
            </p>

            <div className="footer-social-row">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="YouTube"
              >
                <YoutubeIcon size={16} />
              </a>
              <a
                href={siteConfig.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Pinterest"
              >
                <PinterestIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-nav-link">
                  <ChevronRight size={14} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-nav-link">
                  <ChevronRight size={14} />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="footer-nav-link">
                  <ChevronRight size={14} />
                  <span>Event Categories</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-nav-link">
                  <ChevronRight size={14} />
                  <span>Management Services</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-nav-link">
                  <ChevronRight size={14} />
                  <span>Portfolio & Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-nav-link">
                  <ChevronRight size={14} />
                  <span>Contact & Inquiries</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Celebrations Links */}
          <div>
            <h4 className="footer-col-title">Celebrations</h4>
            <ul className="footer-links-list">
              {eventCategories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link to="/events" className="footer-nav-link">
                    <ChevronRight size={14} />
                    <span>{cat.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Get In Touch</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-row">
                <MapPin size={18} className="footer-contact-icon" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="footer-contact-row">
                <Phone size={18} className="footer-contact-icon" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  style={{ color: "inherit" }}
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="footer-contact-row">
                <Mail size={18} className="footer-contact-icon" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  style={{ color: "inherit" }}
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div style={{ marginTop: "1.25rem" }}>
              <Link to="/contact" className="btn-gold" style={{ padding: "0.6rem 1.2rem", fontSize: "0.78rem" }}>
                <span>BOOK A CONSULTATION</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright & Demo Disclosure Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} <strong>{siteConfig.brandName}</strong>. All Rights Reserved.
            <div className="footer-demo-disclaimer">
              * Frontend Prototype for Event For You. No backend database connected.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span>Crafted with luxury & passion</span>
            <Heart size={14} fill="#e5c158" stroke="none" />
          </div>
        </div>
      </div>
    </footer>
  );
}
