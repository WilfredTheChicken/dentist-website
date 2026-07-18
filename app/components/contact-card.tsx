"use client";

import { Mail, Phone, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

const phone = "+17182277400";
const phoneLabel = "(718) 227-7400";
const email = "idealsmilesdental@gmail.com";

export function ContactCard() {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const dialogId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) setIsOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="contact-card-container" ref={cardRef}>
      <button className="contact-card-trigger" type="button" aria-expanded={isOpen} aria-controls={dialogId} onClick={() => setIsOpen((open) => !open)}>
        Ask about this care <span aria-hidden="true">→</span>
      </button>
      {isOpen && (
        <section className="contact-popover" id={dialogId} role="dialog" aria-label="Contact Ideal Smiles Dental">
          <button className="contact-popover-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close contact options"><X size={16} aria-hidden="true" /></button>
          <p className="contact-popover-eyebrow">IDEAL SMILES DENTAL</p>
          <p className="contact-popover-title">Let’s talk about your care.</p>
          <a className="contact-detail" href={`tel:${phone}`}><Phone size={15} aria-hidden="true" />{phoneLabel}</a>
          <a className="contact-detail contact-email" href={`mailto:${email}`}><Mail size={15} aria-hidden="true" />{email}</a>
          <div className="contact-popover-actions">
            <a className="button button-dark" href={`tel:${phone}`}>Call Now</a>
            <a className="button button-outline" href={`mailto:${email}`}>Email Us</a>
          </div>
        </section>
      )}
    </div>
  );
}
