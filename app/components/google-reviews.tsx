"use client";

import { BadgeCheck, ExternalLink, MessageCircle, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";

const profileUrl = "https://www.google.com/maps/place/Ideal+Smiles+Dental+at+Best+Dentists+Staten+Island/@40.5274548,-74.2328151,17z/data=!3m1!5s0x89c3b5442cd6ca79:0x4ac9536523d455e7!4m12!1m2!2m1!1sbest+dentist+staten+island!3m8!1s0x89c3b5442d2af61f:0x4aaf853dfdf301ba!8m2!3d40.5274548!4d-74.2328151!9m1!1b1!15sChpiZXN0IGRlbnRpc3Qgc3RhdGVuIGlzbGFuZFocIhpiZXN0IGRlbnRpc3Qgc3RhdGVuIGlzbGFuZJIBB2RlbnRpc3SaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTmZjamxpVVU1QkVBReABAPoBBQjZAhBG!16s%2Fg%2F1tj5m2vg";
type Review = { author: string; text: string; rating: number; time: string };
type Reviews = { rating: number; count: number; mapsUrl: string; reviews: Review[] };

const fallbackReviews = [
  ["Joyce Asabor", "The best dentist ever! Respectful, warm and chairside manner is impeccable."],
  ["Natasha M.", "Dr. Daniel Kluchman proved me wrong. His knowledge, expertise and personal attention are beyond expectations."],
] as const;

export function GoogleReviews() {
  const [data, setData] = useState<Reviews | null>(null);
  useEffect(() => { fetch("/api/google-reviews").then(r => r.ok ? r.json() : null).then(setData).catch(() => setData(null)); }, []);
  const destination = data?.mapsUrl || profileUrl;
  return <>
    <div className="why-heading reviews-heading"><div><p className="eyebrow">WHY CHOOSE IDEAL SMILES?</p><h2>Trusted by the people we care for.</h2><p>Google feedback, broad dental care, and a team focused on thoughtful treatment decisions.</p></div></div>
    <div className="practice-stats proof-metrics">
      <a href={destination} target="_blank" rel="noreferrer"><Star/><strong>{data ? `${data.rating.toFixed(1)}/5` : "Google"}</strong><span>{data ? "live Google rating" : "official rating profile"}</span></a>
      <a href={destination} target="_blank" rel="noreferrer"><MessageCircle/><strong>{data ? data.count.toLocaleString() : "Google"}</strong><span>{data ? "live Google reviews" : "reviews on Google"}</span></a>
      <div><Sparkles/><strong>20+</strong><span>dental services</span></div>
      <div className="trust-statement"><BadgeCheck/><strong>Experienced dental team</strong><span>Comprehensive care, clear guidance, and tailored treatment.</span></div>
    </div>
    {data?.reviews?.length ? <div className="live-review-grid">{data.reviews.slice(0,3).map((review) => <article key={`${review.author}-${review.time}`}><div className="review-card-top"><b>{review.author}</b><span>Google</span></div><div className="star-row">{"★★★★★"}</div><p>“{review.text}”</p><small>{review.time}</small></article>)}</div> : <div className="live-review-grid">{fallbackReviews.map(([author, text]) => <article key={author}><div className="review-card-top"><b>{author}</b><span>Google</span></div><div className="star-row">★★★★★</div><p>“{text}”</p><small>Google review</small></article>)}<article className="reviews-cta"><div><b>Read more patient stories.</b><p>See recent feedback on the official Ideal Smiles Google Business Profile.</p></div><a className="button button-dark" href={destination} target="_blank" rel="noreferrer">View all Google reviews <ExternalLink size={15}/></a></article></div>}
    {data?.reviews?.length ? <a className="button button-dark all-reviews" href={destination} target="_blank" rel="noreferrer">View all Google reviews <ExternalLink size={15}/></a> : null}
  </>;
}
