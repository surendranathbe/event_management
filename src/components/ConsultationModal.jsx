import React from "react";
import { X } from "lucide-react";
import InquiryForm from "./InquiryForm";
import "../styles/modal.css";

export default function ConsultationModal({ isOpen, onClose, selectedEvent = "" }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-container"
        style={{ maxWidth: "800px", maxHeight: "90vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close consultation modal"
        >
          <X size={20} />
        </button>

        <div style={{ padding: "1.5rem" }}>
          <InquiryForm initialEvent={selectedEvent} />
        </div>
      </div>
    </div>
  );
}
