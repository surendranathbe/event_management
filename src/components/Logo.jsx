import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

export default function Logo({ variant = "dark", size = "normal" }) {
  const isLight = variant === "light";

  return (
    <Link to="/" className="brand-logo-link" aria-label="Event For You Home">
      {/* Intricate Floral Mandala SVG in Gold */}
      <svg
        className="brand-mandala-svg"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7e07a" />
            <stop offset="45%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#b68925" />
            <stop offset="100%" stopColor="#eecf79" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#9b761a" floodOpacity="0.4" />
          </filter>
        </defs>

        <g filter="url(#goldGlow)">
          {/* Outer 16-petal radiating ring */}
          {[...Array(16)].map((_, i) => (
            <ellipse
              key={`outer-${i}`}
              cx="50"
              cy="50"
              rx="6"
              ry="24"
              fill="url(#goldGradient)"
              opacity="0.85"
              transform={`rotate(${i * 22.5} 50 50)`}
            />
          ))}

          {/* Secondary 8-petal curved heart-like layer */}
          {[...Array(8)].map((_, i) => (
            <path
              key={`petal-${i}`}
              d="M50 50 C44 32 38 20 50 12 C62 20 56 32 50 50 Z"
              fill="url(#goldGradient)"
              stroke="#8a6111"
              strokeWidth="0.5"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}

          {/* Tertiary 8-petal inner flower */}
          {[...Array(8)].map((_, i) => (
            <ellipse
              key={`inner-${i}`}
              cx="50"
              cy="50"
              rx="4"
              ry="14"
              fill="url(#goldGradient)"
              opacity="0.95"
              transform={`rotate(${i * 45 + 22.5} 50 50)`}
            />
          ))}

          {/* Central sunburst bead */}
          <circle cx="50" cy="50" r="8" fill="#5c0926" stroke="url(#goldGradient)" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="4.5" fill="url(#goldGradient)" />
          <circle cx="50" cy="50" r="2" fill="#5c0926" />
        </g>
      </svg>

      <div className="brand-name-group">
        <span
          className="brand-primary-name"
          style={{
            color: isLight ? "#ffffff" : "var(--burgundy-900)",
            fontSize: size === "large" ? "1.85rem" : "1.5rem",
          }}
        >
          EVENT <span style={{ color: "var(--gold-500)" }}>FOR YOU</span>
        </span>
        <span
          className="brand-tagline-sub"
          style={{
            color: isLight ? "rgba(255, 255, 255, 0.75)" : "var(--text-muted)",
          }}
        >
          {siteConfig.subTagline}
        </span>
      </div>
    </Link>
  );
}
