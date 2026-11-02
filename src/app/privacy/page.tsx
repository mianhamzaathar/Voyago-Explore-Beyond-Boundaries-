import Link from "next/link";
import { Compass } from "lucide-react";

export const metadata = { title: "Privacy | Voyago", description: "Privacy information for the Voyago website demonstration." };

export default function PrivacyPage() {
  return <main className="legal-page"><Link className="brand legal-brand" href="/"><span className="brand-mark"><Compass size={18}/></span><span>voyago<span className="brand-period">.</span></span></Link><span className="eyebrow">THE PRACTICAL BITS</span><h1>A little privacy, please.</h1><p className="legal-lead">This Voyago site is a frontend demonstration. It does not send or store form submissions.</p><section><h2>Information you enter</h2><p>The newsletter and contact forms validate in your browser and show a sample confirmation. No email address, message, or other form value is transmitted to a server or saved by this site.</p></section><section><h2>Images and external services</h2><p>Travel photography is loaded from Unsplash. Your browser makes a request to Unsplash to retrieve those images; its own privacy practices apply to that request.</p></section><section><h2>Mock travel data</h2><p>Search results and prices are illustrative local data. Searches do not book travel, contact a supplier, or create a reservation.</p></section><Link className="legal-back" href="/">Back to Voyago</Link></main>;
}
