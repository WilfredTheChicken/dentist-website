"use client";

import { ExternalLink, MapPin, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";

const profileUrl = "https://www.google.com/maps/place/Ideal+Smiles+Dental+at+Best+Dentists+Staten+Island/@40.5274548,-74.2328151,17z/data=!3m1!5s0x89c3b5442cd6ca79:0x4ac9536523d455e7!4m12!1m2!2m1!1sbest+dentist+staten+island!3m8!1s0x89c3b5442d2af61f:0x4aaf853dfdf301ba!8m2!3d40.5274548!4d-74.2328151!9m1!1b1!15sChpiZXN0IGRlbnRpc3Qgc3RhdGVuIGlzbGFuZFocIhpiZXN0IGRlbnRpc3Qgc3RhdGVuIGlzbGFuZJIBB2RlbnRpc3SaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTmZjamxpVVU1QkVBReABAPoBBQjZAhBG!16s%2Fg%2F1tj5m2vg";
type Review = { author: string; text: string; rating: number; time: string };
type Reviews = { rating: number; count: number; mapsUrl: string; reviews: Review[] };

export function GoogleReviews() {
  const [data, setData] = useState<Reviews | null>(null);
  useEffect(() => { fetch("/api/google-reviews").then(r => r.ok ? r.json() : null).then(setData).catch(() => setData(null)); }, []);
  const destination = data?.mapsUrl || profileUrl;
  return <>
    <div className="why-heading reviews-heading"><div><p className="eyebrow">WHY CHOOSE IDEAL SMILES?</p><h2>See what patients are saying.</h2><p>Live Google feedback and straightforward practice facts—so you can feel confident before you book.</p></div><a className="google-score" href={destination} target="_blank" rel="noreferrer"><span className="google-label">GOOGLE REVIEWS</span>{data ? <><strong>{data.rating.toFixed(1)}</strong><span className="star-row">★★★★★</span><small>Based on {data.count.toLocaleString()} Google reviews</small></> : <><span className="star-row">★★★★★</span><strong>View our rating</strong><small>Official Google Business Profile</small></>}</a></div>
    <div className="practice-stats"><div><Users/><strong>2</strong><span>dedicated dentists</span></div><div><MapPin/><strong>1</strong><span>Staten Island office</span></div><div><Star/><strong>{data ? data.count.toLocaleString() : "Live"}</strong><span>{data ? "Google reviews" : "Google rating & reviews"}</span></div></div>
    {data?.reviews?.length ? <div className="live-review-grid">{data.reviews.slice(0,3).map((review) => <article key={`${review.author}-${review.time}`}><div className="review-card-top"><b>{review.author}</b><span>Google</span></div><div className="star-row">{"★".repeat(Math.round(review.rating))}</div><p>“{review.text}”</p><small>{review.time}</small></article>)}</div> : <div className="reviews-cta"><div><b>Google ratings update here automatically.</b><p>This section is connected to the official Ideal Smiles Google Business Profile.</p></div><a className="button button-dark" href={destination} target="_blank" rel="noreferrer">View all Google reviews <ExternalLink size={15}/></a></div>}
    {data?.reviews?.length ? <a className="button button-dark all-reviews" href={destination} target="_blank" rel="noreferrer">View all Google reviews <ExternalLink size={15}/></a> : null}
  </>;
}
