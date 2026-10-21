import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Send, 
  CheckCircle, 
  Sparkles, 
  AlertCircle, 
  MessageSquare,
  ArrowRight,
  RotateCcw
} from "lucide-react";
import { eventCategories } from "../data/events";
import { servicesList } from "../data/services";
import { siteConfig } from "../data/siteConfig";

export default function InquiryForm({ initialEvent = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    eventCategory: initialEvent || "Weddings & Receptions",
    preferredDate: "",
    eventLocation: "",
    guestCount: "200 - 500 Guests",
    budgetRange: "₹5 Lakhs - ₹15 Lakhs",
    requiredServices: ["Wedding and Stage Decoration"],
    additionalRequirements: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const budgetOptions = [
    "Under ₹5 Lakhs",
    "₹5 Lakhs - ₹15 Lakhs",
    "₹15 Lakhs - ₹30 Lakhs",
    "₹30 Lakhs - ₹50 Lakhs",
    "₹50 Lakhs - ₹1 Crore+",
  ];

  const guestOptions = [
    "Under 100 Guests (Intimate)",
    "100 - 300 Guests",
    "300 - 600 Guests",
    "600 - 1,200 Guests",
    "1,200+ Guests (Grand Ballroom)",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleServiceToggle = (serviceTitle) => {
    setFormData((prev) => {
      const exists = prev.requiredServices.includes(serviceTitle);
      return {
        ...prev,
        requiredServices: exists
          ? prev.requiredServices.filter((s) => s !== serviceTitle)
          : [...prev.requiredServices, serviceTitle],
      };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Please enter your mobile phone number";
    } else if (!/^[0-9+() -]{8,18}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Please enter a valid phone number";
    }
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email format";
    }
    if (!formData.eventLocation.trim()) {
      newErrors.eventLocation = "Please specify city or venue location";
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please pick your prospective event date";
    }
    if (formData.requiredServices.length === 0) {
      newErrors.requiredServices = "Please select at least one required service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Fire celebratory confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#5c0926", "#d4af37", "#f3e5ab", "#c59b27"],
        });
      } catch (err) {
        // fallback gracefully
      }

      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: "",
      mobileNumber: "",
      emailAddress: "",
      eventCategory: "Weddings & Receptions",
      preferredDate: "",
      eventLocation: "",
      guestCount: "200 - 500 Guests",
      budgetRange: "₹5 Lakhs - ₹15 Lakhs",
      requiredServices: ["Wedding and Stage Decoration"],
      additionalRequirements: "",
    });
    setErrors({});
  };

  // Generate pre-filled WhatsApp link
  const getWhatsAppLink = () => {
    if (!submittedData) return `https://wa.me/${siteConfig.contact.whatsapp}`;
    const text = encodeURIComponent(
      `Hello Event For You Team!\n\nI just filled an event inquiry on your website.\n*Name:* ${submittedData.fullName}\n*Event:* ${submittedData.eventCategory}\n*Date:* ${submittedData.preferredDate}\n*Location:* ${submittedData.eventLocation}\n*Guests:* ${submittedData.guestCount}\n*Budget:* ${submittedData.budgetRange}\n*Services:* ${submittedData.requiredServices.join(", ")}\n\nPlease let me know your availability for a free consultation!`
    );
    return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
  };

  if (isSubmitted && submittedData) {
    return (
      <div className="inquiry-form-card">
        <div className="demo-success-box">
          <div className="demo-badge-banner">
            <Sparkles size={14} />
            <span>Frontend Demo Inquiry Validated</span>
          </div>

          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "var(--gold-btn-gradient)",
              color: "#1a0f05",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.25rem auto",
              boxShadow: "0 6px 20px rgba(212, 175, 55, 0.4)",
            }}
          >
            <CheckCircle size={32} />
          </div>

          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.85rem",
              color: "var(--burgundy-900)",
              marginBottom: "0.5rem",
            }}
          >
            Thank You, {submittedData.fullName}!
          </h3>

          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-body)",
              maxWidth: "540px",
              margin: "0 auto 1.5rem auto",
              lineHeight: "1.6",
            }}
          >
            Your celebration inquiry for{" "}
            <strong>{submittedData.eventCategory}</strong> on{" "}
            <strong>{submittedData.preferredDate}</strong> at{" "}
            <strong>{submittedData.eventLocation}</strong> has been structured successfully.
          </p>

          <div
            style={{
              background: "#ffffff",
              border: "1px dashed rgba(92, 9, 38, 0.3)",
              borderRadius: "12px",
              padding: "1.25rem",
              marginBottom: "1.75rem",
              textAlign: "left",
              fontSize: "0.85rem",
              color: "var(--text-dark)",
            }}
          >
            <p style={{ fontWeight: "700", color: "var(--burgundy-800)", marginBottom: "0.5rem" }}>
              📋 Client-Side Demo Notice:
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.5" }}>
              This project is built strictly as a client-side React frontend without an active server or database. Your inquiry data was verified locally in your browser. To initiate a live discussion with the Event For You team, click the button below to send this summary directly via WhatsApp!
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
              style={{ width: "auto", margin: 0, padding: "0.8rem 1.6rem" }}
            >
              <MessageSquare size={16} />
              <span>Forward to WhatsApp</span>
            </a>

            <button
              onClick={handleReset}
              className="btn-burgundy"
              style={{ padding: "0.8rem 1.6rem" }}
            >
              <RotateCcw size={15} />
              <span>Submit Another Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="inquiry-form-card">
      <div style={{ marginBottom: "2rem" }}>
        <span className="section-eyebrow" style={{ marginBottom: "0.4rem" }}>
          BEGIN YOUR CELEBRATION
        </span>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.85rem",
            color: "var(--burgundy-900)",
            lineHeight: "1.2",
          }}
        >
          Plan Your Dream Event
        </h3>
        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>
          Share your celebration aspirations. We'll craft a bespoke proposal tailored to your vision.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Row 1: Name and Phone */}
        <div className="form-group-grid">
          <div className="form-control-item">
            <label className="form-label" htmlFor="fullName">
              <span>Full Name</span>
              <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="e.g. Priyadarshini Reddy"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`form-input ${errors.fullName ? "has-error" : ""}`}
            />
            {errors.fullName && <span className="form-error-msg">{errors.fullName}</span>}
          </div>

          <div className="form-control-item">
            <label className="form-label" htmlFor="mobileNumber">
              <span>Mobile Number</span>
              <span className="required-star">*</span>
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="+91 98765 43210"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className={`form-input ${errors.mobileNumber ? "has-error" : ""}`}
            />
            {errors.mobileNumber && (
              <span className="form-error-msg">{errors.mobileNumber}</span>
            )}
          </div>
        </div>

        {/* Row 2: Email and Event Category */}
        <div className="form-group-grid">
          <div className="form-control-item">
            <label className="form-label" htmlFor="emailAddress">
              <span>Email Address</span>
              <span className="required-star">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="name@example.com"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className={`form-input ${errors.emailAddress ? "has-error" : ""}`}
            />
            {errors.emailAddress && (
              <span className="form-error-msg">{errors.emailAddress}</span>
            )}
          </div>

          <div className="form-control-item">
            <label className="form-label" htmlFor="eventCategory">
              <span>Event Category</span>
              <span className="required-star">*</span>
            </label>
            <select
              id="eventCategory"
              name="eventCategory"
              value={formData.eventCategory}
              onChange={handleInputChange}
              className="form-select"
            >
              {eventCategories.map((c) => (
                <option key={c.id} value={c.title}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3: Date and Location */}
        <div className="form-group-grid">
          <div className="form-control-item">
            <label className="form-label" htmlFor="preferredDate">
              <span>Preferred Event Date</span>
              <span className="required-star">*</span>
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              className={`form-input ${errors.preferredDate ? "has-error" : ""}`}
            />
            {errors.preferredDate && (
              <span className="form-error-msg">{errors.preferredDate}</span>
            )}
          </div>

          <div className="form-control-item">
            <label className="form-label" htmlFor="eventLocation">
              <span>Event Location / Venue</span>
              <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="eventLocation"
              name="eventLocation"
              placeholder="e.g. Hyderabad / Taj Krishna / Destination"
              value={formData.eventLocation}
              onChange={handleInputChange}
              className={`form-input ${errors.eventLocation ? "has-error" : ""}`}
            />
            {errors.eventLocation && (
              <span className="form-error-msg">{errors.eventLocation}</span>
            )}
          </div>
        </div>

        {/* Row 4: Guest count and Budget range */}
        <div className="form-group-grid">
          <div className="form-control-item">
            <label className="form-label" htmlFor="guestCount">
              <span>Expected Guest Count</span>
            </label>
            <select
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleInputChange}
              className="form-select"
            >
              {guestOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control-item">
            <label className="form-label" htmlFor="budgetRange">
              <span>Estimated Budget Range</span>
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleInputChange}
              className="form-select"
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Required Services Checkboxes */}
        <div className="form-control-item full-width" style={{ marginBottom: "1.25rem" }}>
          <label className="form-label">
            <span>Required Services</span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "500" }}>
              (Select all that apply)
            </span>
          </label>
          <div className="services-checkbox-grid">
            {servicesList.slice(0, 8).map((srv) => {
              const isChecked = formData.requiredServices.includes(srv.title);
              return (
                <label
                  key={srv.id}
                  className={`service-checkbox-label ${isChecked ? "checked" : ""}`}
                >
                  <input
                    type="checkbox"
                    className="service-checkbox-input"
                    checked={isChecked}
                    onChange={() => handleServiceToggle(srv.title)}
                  />
                  <span>{srv.title}</span>
                </label>
              );
            })}
          </div>
          {errors.requiredServices && (
            <span className="form-error-msg">{errors.requiredServices}</span>
          )}
        </div>

        {/* Additional Requirements Textarea */}
        <div className="form-control-item full-width" style={{ marginBottom: "2rem" }}>
          <label className="form-label" htmlFor="additionalRequirements">
            <span>Special Requests & Vision Details</span>
          </label>
          <textarea
            id="additionalRequirements"
            name="additionalRequirements"
            rows={3}
            placeholder="Tell us about color themes, mandap preferences, cultural rituals, or music tastes..."
            value={formData.additionalRequirements}
            onChange={handleInputChange}
            className="form-textarea"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-burgundy"
          style={{ width: "100%", justifyContent: "center", padding: "1rem" }}
          id="submit-inquiry-btn"
        >
          <span>SUBMIT EVENT INQUIRY (DEMO)</span>
          <Send size={16} />
        </button>

        <p
          style={{
            fontSize: "0.74rem",
            color: "var(--text-muted)",
            textAlign: "center",
            marginTop: "0.85rem",
          }}
        >
          🔒 Client-side validation only. No server database connected. Your contact details remain safe on your device.
        </p>
      </form>
    </div>
  );
}
