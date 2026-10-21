import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqsData } from "../data/faqs";

export default function FaqAccordion() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      style={{
        padding: "5.5rem 0 6rem 0",
        backgroundColor: "var(--bg-ivory)",
        borderTop: "1px solid rgba(212, 175, 55, 0.2)",
      }}
      aria-label="Frequently Asked Questions"
    >
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">COMMON QUESTIONS</div>
          <h2 className="section-title">
            FREQUENTLY ASKED <span className="gold-highlight">QUESTIONS</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about planning, booking lead times, custom decor, and celebration execution.
          </p>
        </div>

        <div style={{ maxWidth: "840px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{
                  background: "#ffffff",
                  border: `1px solid ${isOpen ? "var(--gold-500)" : "rgba(212, 175, 55, 0.28)"}`,
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: isOpen ? "0 8px 24px rgba(32, 4, 13, 0.08)" : "none",
                  transition: "all var(--transition-fast)",
                }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  style={{
                    width: "100%",
                    padding: "1.25rem 1.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    textAlign: "left",
                    color: isOpen ? "var(--burgundy-800)" : "var(--text-dark)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    fontFamily: "var(--font-serif)",
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <HelpCircle size={18} color="var(--gold-600)" style={{ flexShrink: 0 }} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.75rem 1.5rem 3.25rem",
                      fontSize: "0.92rem",
                      color: "var(--text-body)",
                      lineHeight: "1.65",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
