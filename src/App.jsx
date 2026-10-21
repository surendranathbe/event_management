import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Services from "./pages/Services";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";

import { MessageSquare } from "lucide-react";
import { siteConfig } from "./data/siteConfig";

function AppContent() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedEventForInquiry, setSelectedEventForInquiry] = useState("");
  const navigate = useNavigate();

  const handleOpenConsultation = (eventTitle = "") => {
    setSelectedEventForInquiry(typeof eventTitle === "string" ? eventTitle : "");
    setIsConsultationOpen(true);
  };

  const handleSelectForInquiry = (eventTitle) => {
    setSelectedEventForInquiry(eventTitle);
    navigate("/contact");
  };

  const whatsappDirectUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Hello Event For You! I would like to inquire about planning an event."
  )}`;

  return (
    <div className="app-shell" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <ScrollToTop />

      {/* Global Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Page Routes */}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenConsultation={() => handleOpenConsultation()}
                onSelectForInquiry={handleSelectForInquiry}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About onOpenConsultation={() => handleOpenConsultation()} />
            }
          />
          <Route
            path="/events"
            element={
              <Events
                onOpenConsultation={() => handleOpenConsultation()}
                onSelectForInquiry={handleSelectForInquiry}
              />
            }
          />
          <Route
            path="/services"
            element={
              <Services
                onOpenConsultation={() => handleOpenConsultation()}
                onSelectForInquiry={handleSelectForInquiry}
              />
            }
          />
          <Route
            path="/gallery"
            element={
              <GalleryPage onOpenConsultation={() => handleOpenConsultation()} />
            }
          />
          <Route
            path="/contact"
            element={<Contact preselectedEvent={selectedEventForInquiry} />}
          />
          <Route
            path="*"
            element={
              <Home
                onOpenConsultation={() => handleOpenConsultation()}
                onSelectForInquiry={handleSelectForInquiry}
              />
            }
          />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        selectedEvent={selectedEventForInquiry}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 999,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#25d366",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(37, 211, 102, 0.45)",
          border: "2px solid #ffffff",
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1) translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(37, 211, 102, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 211, 102, 0.45)";
        }}
      >
        <MessageSquare size={26} />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
