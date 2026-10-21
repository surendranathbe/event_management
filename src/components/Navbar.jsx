import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  ArrowRight, 
  Menu, 
  X, 
  Sparkles
} from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, PinterestIcon } from "./SocialIcons";
import Logo from "./Logo";
import { siteConfig } from "../data/siteConfig";
import "../styles/navbar.css";

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`header-wrapper ${isScrolled ? "header-scrolled" : ""}`}>
      {/* Top Announcement Bar matching the design reference */}
      <div className="announcement-bar">
        <div className="social-links" style={{ opacity: 0 }}>
          {/* spacer for perfect symmetry */}
          <span>•••</span>
        </div>

        <div className="announcement-text">
          <span className="floral-divider">❖</span>
          <span>{siteConfig.announcement}</span>
          <span className="floral-divider">❖</span>
        </div>

        <div className="social-links">
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-icon-btn"
          >
            <FacebookIcon size={14} />
          </a>
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-icon-btn"
          >
            <InstagramIcon size={14} />
          </a>
          <a
            href={siteConfig.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="social-icon-btn"
          >
            <YoutubeIcon size={14} />
          </a>
          <a
            href={siteConfig.socials.pinterest}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="social-icon-btn"
          >
            <PinterestIcon size={14} />
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-nav-container" aria-label="Main Navigation">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Nav Links */}
        <ul className="nav-menu-desktop">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `nav-item-link ${isActive ? "active" : ""}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section: Contact details & CTA Button */}
        <div className="nav-actions-group">
          <div className="nav-contact-info">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="nav-contact-item"
              title="Send an email"
            >
              <Mail size={13} />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="nav-contact-item"
              title="Call us directly"
            >
              <Phone size={13} />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>

          <button
            onClick={onOpenConsultation}
            className="btn-gold"
            id="nav-plan-event-btn"
          >
            <span>PLAN YOUR EVENT</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`mobile-drawer-panel ${mobileMenuOpen ? "open" : ""}`}>
        <div>
          <div className="mobile-drawer-header">
            <Logo size="normal" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{ color: "var(--burgundy-900)", padding: "0.25rem" }}
            >
              <X size={26} />
            </button>
          </div>

          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `mobile-nav-item ${isActive ? "active" : ""}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-drawer-footer">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="nav-contact-item"
              style={{ fontSize: "0.85rem" }}
            >
              <Mail size={15} />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="nav-contact-item"
              style={{ fontSize: "0.85rem" }}
            >
              <Phone size={15} />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="btn-gold"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <span>PLAN YOUR EVENT</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
