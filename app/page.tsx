import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { GoogleReviews } from "./components/google-reviews";

const zocdocUrl = "https://www.zocdoc.com/practice/ideal-smiles-dental-25968?LocIdent=55562&utm_source=reservewithgoogle&utm_medium=seosynd&utm_campaign=hai&entity_id=pt_bju8kS_cBEW8DzoOXQWgiB-lo_SuAaUPXJtU2gpNFoeX8MLh-entity&rwg_token=AE37R_gJO30BDqLZvBf-LQN9pskpv9dFPwv5HiFzZ2d4qAwByD7p34B73awjFL8qVCGyWs3HEp8fFQ7KDus3wFyzziv98yPI-Q%3D%3D";

export default function Home() {
  return <main>
    <div className="utility"><span>Modern, thoughtful dentistry in Staten Island</span><a href="tel:+17182277400" aria-label="Call Ideal Smiles Dental at 718-227-7400"><Phone size={13}/> (718) 227-7400</a></div>
    <header className="site-header">
      <Link className="brand logo-brand" href="/"><img src="/ideal-smiles-logo.png" alt="Ideal Smiles Dental"/></Link>
      <nav className="desktop-nav"><Link className="active" href="/">Home</Link><Link href="/services">Services</Link><Link href="/team">Meet Our Team</Link><a href="#why">Why Choose Us</a></nav>
      <a className="button button-dark" href={zocdocUrl} target="_blank" rel="noopener noreferrer">Book a visit <ArrowRight size={16}/></a>
    </header>
    <section className="hero section-wrap">
      <div className="hero-copy"><p className="eyebrow">DENTISTRY FOR YOUR WHOLE FAMILY</p><h1>Modern dentistry.<br/><i>Thoughtful care.</i></h1><p className="hero-text">Clear guidance, careful treatment, and a smile that still feels like your own.</p><a className="button button-dark" href={zocdocUrl} target="_blank" rel="noopener noreferrer">Book your visit <ArrowRight size={17}/></a><div className="hero-meta" aria-label="Office contact information"><div className="hero-contact-item"><MapPin size={18} aria-hidden="true"/><div><strong>Address</strong><address>2955 Veterans Rd W<br/>Staten Island, NY 10309</address></div></div><div className="hero-contact-item"><Phone size={18} aria-hidden="true"/><a href="tel:+17182277400"><strong>Phone</strong><span>(718) 227-7400</span></a></div><div className="hero-contact-item"><Mail size={18} aria-hidden="true"/><a href="mailto:info@dentistryonveterans.com"><strong>Email</strong><span>info@dentistryonveterans.com</span></a></div><div className="hero-contact-item hero-hours"><Clock size={18} aria-hidden="true"/><div><strong>Office Hours</strong><dl><div><dt>Saturday</dt><dd>9:00 AM – 4:00 PM</dd></div><div><dt>Sunday</dt><dd>Closed</dd></div><div><dt>Monday</dt><dd>9:00 AM – 8:00 PM</dd></div><div><dt>Tuesday</dt><dd>9:00 AM – 7:00 PM</dd></div><div><dt>Wednesday</dt><dd>9:00 AM – 8:00 PM</dd></div><div><dt>Thursday</dt><dd>9:00 AM – 5:00 PM</dd></div><div><dt>Friday</dt><dd>9:00 AM – 5:00 PM</dd></div></dl></div></div></div></div>
      <div className="hero-art"><img src="/hero-dental.png" alt="Dentist speaking with a smiling patient in a bright treatment room"/></div>
    </section>
    <section id="why" className="why-choose"><div className="section-wrap"><GoogleReviews/></div></section>
    <footer><div className="section-wrap footer-grid"><Link className="brand logo-brand footer-brand" href="/"><img src="/ideal-smiles-logo.png" alt="Ideal Smiles Dental"/></Link><div><b>Visit</b><p>2955 Veterans Rd. W<br/>Suite 2G<br/>Staten Island, NY 10309</p></div><div><b>Connect</b><p><a href="tel:+17182277400">(718) 227-7400</a></p></div></div></footer>
  </main>;
}
