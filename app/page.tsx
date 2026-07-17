"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronDown, Clock3, MapPin, Menu, Phone, ShieldCheck, Sparkles, X } from "lucide-react";
import { useState } from "react";

const services = [
  { no: "01", title: "Keep me healthy", copy: "Exams, hygiene, preventive care, and family visits that meet you where you are.", tag: "Family & preventive" },
  { no: "02", title: "Fix a problem", copy: "Thoughtful restorative options for a tooth that needs attention now.", tag: "Restorative care" },
  { no: "03", title: "Replace what’s missing", copy: "Explore implants, bridges, dentures, and a plan built around how you live.", tag: "Implant care" },
  { no: "04", title: "Refine my smile", copy: "Cosmetic options that protect the character of your natural smile.", tag: "Cosmetic care" },
];

const faqs = [
  ["Are you accepting new patients?", "We welcome new-patient appointment requests. Use online booking or call us and our team will help find the right visit type."],
  ["Can I book online?", "Yes. Online booking is designed for straightforward scheduling. If you need help choosing a visit, call the office for a human recommendation."],
  ["Do you take my insurance?", "Coverage and network participation vary by plan. Bring your insurance details so the team can explain the process before care begins."],
  ["What if I have tooth pain?", "For urgent dental concerns, call the office first for guidance. Severe swelling, uncontrolled bleeding, trouble breathing, or a medical emergency requires emergency care."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  return <main className="overflow-x-hidden bg-[#f8f7f4] text-[#173c3a]">
    <div className="utility"><span>Modern, thoughtful dentistry in Staten Island</span><a href="tel:+17182277400"><Phone size={13}/> Call the office</a></div>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Ideal Smiles Dental home"><span className="brand-mark">i</span><span>IDEAL<br/><em>SMILES</em></span><small>DENTAL</small></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#care">Care</a><a href="#about">Our approach</a><a href="#patients">New patients</a><a href="#resources">Resources</a></nav>
      <div className="header-actions"><a className="emergency-link" href="#emergency">Dental emergency</a><button className="button button-dark" onClick={() => setBookingOpen(true)}>Book a visit <ArrowRight size={16}/></button><button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu /></button></div>
    </header>

    <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><button aria-label="Close menu" onClick={() => setMenuOpen(false)}><X/></button><a href="#care" onClick={() => setMenuOpen(false)}>Care</a><a href="#about" onClick={() => setMenuOpen(false)}>Our approach</a><a href="#patients" onClick={() => setMenuOpen(false)}>New patients</a><a href="#emergency" onClick={() => setMenuOpen(false)}>Dental emergency</a><button className="button button-light" onClick={() => {setMenuOpen(false); setBookingOpen(true)}}>Book a visit</button></motion.div>}</AnimatePresence>

    <section id="top" className="hero section-wrap">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}>STAY CLOSE TO YOUR SMILE</motion.p>
        <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.08}}>Modern dentistry.<br/><i>Thoughtful care.</i></motion.h1>
        <motion.p className="hero-text" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.16}}>Clear guidance, careful treatment, and a smile that still feels like your own.</motion.p>
        <motion.div className="hero-ctas" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.24}}><button className="button button-dark" onClick={() => setBookingOpen(true)}>Book your visit <ArrowRight size={17}/></button><a className="text-link" href="#care">Explore care <ArrowRight size={16}/></a></motion.div>
        <div className="hero-meta"><span><MapPin size={17}/> 2955 Veterans Rd. W, Staten Island</span><span><Clock3 size={17}/> Hours to be confirmed</span></div>
      </div>
      <div className="hero-art" aria-label="A welcoming, calm dental care environment"><div className="sun-orb"/><div className="arch arch-one"/><div className="arch arch-two"/><div className="hero-note"><Sparkles size={16}/><span>Care that starts<br/>with listening.</span></div><div className="hero-line"/></div>
    </section>

    <section id="care" className="care-section section-wrap"><div className="section-intro"><p className="eyebrow">CARE, ORGANIZED AROUND YOU</p><h2>What brings you in?</h2><p>Start with your goal. We’ll help you understand the options and the next practical step.</p></div><div className="service-grid">{services.map((service, i) => <motion.a href="#booking" onClick={(e) => {e.preventDefault();setBookingOpen(true)}} className="service-card" key={service.no} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}><span>{service.no}</span><div><p className="service-tag">{service.tag}</p><h3>{service.title}</h3><p>{service.copy}</p></div><ArrowRight className="service-arrow" size={20}/></motion.a>)}</div></section>

    <section id="emergency" className="emergency"><div className="section-wrap emergency-inner"><div><p className="eyebrow">NEED HELP NOW?</p><h2>Tooth pain can’t wait.<br/><i>Clear help starts here.</i></h2></div><div className="emergency-copy"><p>If you have an urgent dental concern, call the office for guidance. For a life-threatening emergency, call 911 or go to the nearest emergency room.</p><a href="tel:+17182277400" className="button button-light"><Phone size={17}/> Call the office</a></div></div></section>

    <section id="about" className="approach section-wrap"><div className="approach-image"><div className="window"/><p>YOUR CARE<br/>SHOULD FEEL<br/>UNRUSHED.</p></div><div className="approach-copy"><p className="eyebrow">THE IDEAL SMILES APPROACH</p><h2>Clinical care, with room to breathe.</h2><p className="lead">Good dentistry starts with a conversation—not pressure. We take time to understand what matters to you, explain options plainly, and create a plan at a pace that makes sense.</p><div className="principles"><div><span>01</span><h3>Thoughtful guidance</h3><p>Questions are welcome. Options are explained in plain language.</p></div><div><span>02</span><h3>Modern convenience</h3><p>Clear next steps, flexible pathways, and respect for your time.</p></div><div><span>03</span><h3>Whole-smile thinking</h3><p>Care that connects today’s concern to your long-term health.</p></div></div></div></section>

    <section className="trust section-wrap"><div className="trust-title"><p className="eyebrow">WHAT MATTERS TO US</p><h2>Care is personal.<br/>The details should be, too.</h2></div><div className="trust-list"><div><ShieldCheck/><h3>Clear, no-pressure options</h3><p>We’ll make space for the questions behind the decision.</p></div><div><CalendarDays/><h3>A visit that fits your life</h3><p>Online booking when it helps. A real person when you need one.</p></div><div><Sparkles/><h3>Natural-looking goals</h3><p>Cosmetic and restorative care should still feel like you.</p></div></div></section>

    <section id="patients" className="patients"><div className="section-wrap patients-inner"><div><p className="eyebrow">NEW TO IDEAL SMILES?</p><h2>Your first visit should bring clarity, not pressure.</h2><p>We’ll help you prepare for your appointment, understand the process, and know who to contact with questions.</p><button className="button button-dark" onClick={() => setBookingOpen(true)}>Plan your first visit <ArrowRight size={17}/></button></div><ol><li><strong>01</strong><span><b>Choose your visit</b><small>Book online or call for help selecting the right appointment.</small></span></li><li><strong>02</strong><span><b>Tell us what you need</b><small>Share only the practical details needed to guide your visit.</small></span></li><li><strong>03</strong><span><b>Arrive feeling prepared</b><small>Bring your ID, insurance information, and any questions you have.</small></span></li></ol></div></section>

    <section id="resources" className="resources section-wrap"><div className="section-intro"><p className="eyebrow">HELPFUL, NOT OVERWHELMING</p><h2>Answers before your visit.</h2></div><div className="faq-list">{faqs.map(([q,a],i) => <div className="faq" key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{q}</span><ChevronDown className={openFaq === i ? "rotate" : ""}/></button><AnimatePresence>{openFaq === i && <motion.p initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}>{a}</motion.p>}</AnimatePresence></div>)}</div></section>

    <section className="closing section-wrap"><div><p className="eyebrow">READY WHEN YOU ARE</p><h2>Let’s make the next step simple.</h2></div><button className="button button-light" onClick={() => setBookingOpen(true)}>Book a visit <ArrowRight size={17}/></button></section>
    <footer><div className="section-wrap footer-grid"><a className="brand footer-brand" href="#top"><span className="brand-mark">i</span><span>IDEAL<br/><em>SMILES</em></span><small>DENTAL</small></a><div><b>Visit</b><p>2955 Veterans Rd. W<br/>Suite 2G<br/>Staten Island, NY 10309</p><a href="https://maps.google.com/?q=2955+Veterans+Rd+W+Staten+Island+NY+10309">Get directions</a></div><div><b>Connect</b><p><a href="tel:+17182277400">(718) 227-7400</a><br/><span>Office hours pending confirmation</span></p><a href="#emergency">Dental emergency</a></div><div><b>Patient resources</b><p><a href="#patients">New patients</a><br/><a href="#resources">Insurance & financing</a><br/><a href="#resources">Accessibility</a></p></div></div><div className="section-wrap legal"><span>© 2026 Ideal Smiles Dental</span><span>Privacy · Notice of Privacy Practices · Terms</span></div></footer>

    <AnimatePresence>{bookingOpen && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><motion.div className="booking-modal" initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} exit={{opacity:0,y:25}} role="dialog" aria-modal="true" aria-labelledby="booking-title"><button className="modal-close" aria-label="Close booking" onClick={() => setBookingOpen(false)}><X/></button><p className="eyebrow">REQUEST A VISIT</p><h2 id="booking-title">Start with the right appointment.</h2><p>Online scheduling will be available here after the practice confirms its booking partner. For immediate help, call the office.</p><a className="button button-dark" href="tel:+17182277400"><Phone size={17}/> Call (718) 227-7400</a><small>This request flow is not for medical emergencies or sharing sensitive health information.</small></motion.div></motion.div>}</AnimatePresence>
  </main>
}
