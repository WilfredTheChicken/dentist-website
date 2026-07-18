import Link from "next/link";

const groups = [
  ["Preventive & family care", "Exams, hygiene, digital X-rays, fillings, pediatric/family visits, night guards, and oral health education."],
  ["Restorative dentistry", "Crowns, bridges, CEREC same-day crowns, dentures, fillings, root canal therapy, extractions, and full-mouth rehabilitation."],
  ["Cosmetic dentistry", "Veneers, Lumineers, cosmetic bonding, professional teeth whitening, Invisalign, and smile makeovers."],
  ["Implants & surgical care", "Dental implants, implant restorations, bone augmentation experience, and wisdom tooth or surgical extractions within current scope."],
  ["Gum, TMJ & functional care", "Gum disease management, oral hygiene support, TMJ-related care, mouth guards, and occlusal appliances."],
  ["Emergency dentistry", "Guidance for tooth pain, broken teeth, swelling, trauma, and other urgent dental concerns."],
];

export default function Services() {
  return <main><header className="site-header section-wrap"><Link className="brand logo-brand" href="/"><img src="/ideal-smiles-logo.png" alt="Ideal Smiles Dental"/></Link><nav className="desktop-nav"><Link href="/">Home</Link><Link className="active" href="/services">Services</Link><Link href="/team">Meet Our Team</Link><Link href="/#why">Google Reviews</Link></nav><a className="button button-dark" href="tel:+17182277400">Book a visit</a></header><section className="section-wrap services-page"><div className="services-lead"><div><p className="eyebrow">SERVICES</p><h1>Care for every stage of your smile.</h1><p className="hero-text">Find the care you need, understand the next step, and speak with our team when you are ready.</p></div><img src="/services-before-after.png" alt="Before-and-after cosmetic dentistry smile treatment"/></div><div className="service-detail-grid">{groups.map(([title,text], i) => <article key={title}><div className={`service-image service-image-${i}`} role="img" aria-label={`${title} treatment illustration`}/><h2>{title}</h2><p>{text}</p><a href="tel:+17182277400">Ask about this care →</a></article>)}</div></section></main>;
}
