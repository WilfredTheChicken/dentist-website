import { ArrowRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { GoogleReviews } from "./components/google-reviews";

export default function Home() {
  return <main>
    <div className="utility"><span>Modern, thoughtful dentistry in Staten Island</span><a href="tel:+17182277400"><Phone size={13}/> Call the office</a></div>
    <header className="site-header">
      <Link className="brand logo-brand" href="/"><img src="/ideal-smiles-logo.png" alt="Ideal Smiles Dental"/></Link>
      <nav className="desktop-nav"><Link className="active" href="/">Home</Link><Link href="/services">Services</Link><Link href="/team">Meet Our Team</Link><a href="#why">Why Choose Us</a></nav>
      <a className="button button-dark" href="tel:+17182277400">Book a visit <ArrowRight size={16}/></a>
    </header>
    <section className="hero section-wrap">
      <div className="hero-copy"><p className="eyebrow">DENTISTRY FOR YOUR WHOLE FAMILY</p><h1>Modern dentistry.<br/><i>Thoughtful care.</i></h1><p className="hero-text">Clear guidance, careful treatment, and a smile that still feels like your own.</p><a className="button button-dark" href="tel:+17182277400">Book your visit <ArrowRight size={17}/></a><div className="hero-meta"><span><MapPin size={17}/> 2955 Veterans Rd. W, Staten Island</span></div></div>
      <div className="hero-art"><img src="/hero-dental.png" alt="Dentist speaking with a smiling patient in a bright treatment room"/></div>
    </section>
    <section id="why" className="why-choose"><div className="section-wrap"><GoogleReviews/></div></section>
    <footer><div className="section-wrap footer-grid"><Link className="brand logo-brand footer-brand" href="/"><img src="/ideal-smiles-logo.png" alt="Ideal Smiles Dental"/></Link><div><b>Visit</b><p>2955 Veterans Rd. W<br/>Suite 2G<br/>Staten Island, NY 10309</p></div><div><b>Connect</b><p><a href="tel:+17182277400">(718) 227-7400</a></p></div></div></footer>
  </main>;
}
