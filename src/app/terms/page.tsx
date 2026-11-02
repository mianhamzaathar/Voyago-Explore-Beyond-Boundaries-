import Link from "next/link";
import { Compass } from "lucide-react";

export const metadata = { title: "Terms | Voyago", description: "Terms for using the Voyago website demonstration." };

export default function TermsPage() {
  return <main className="legal-page"><Link className="brand legal-brand" href="/"><span className="brand-mark"><Compass size={18}/></span><span>voyago<span className="brand-period">.</span></span></Link><span className="eyebrow">THE PRACTICAL BITS</span><h1>The fine print.</h1><p className="legal-lead">Voyago is a fictional travel agency website created for demonstration and assessment purposes.</p><section><h2>Travel searches and prices</h2><p>Flights, accommodation, rental cars, visa options, destinations, and prices shown on this site are mock examples only. They may not be accurate or available and cannot be purchased or booked here.</p></section><section><h2>Forms and contact details</h2><p>Forms provide local confirmation only and do not submit information. The contact details and office address displayed on the website are fictional sample details.</p></section><section><h2>Use of this demonstration</h2><p>The site is provided to demonstrate frontend design and interactions. Do not rely on it for travel, visa, pricing, or booking decisions.</p></section><Link className="legal-back" href="/">Back to Voyago</Link></main>;
}
