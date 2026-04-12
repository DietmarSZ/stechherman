import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the S-Tech Auto Repair website rebuild, local service philosophy, and the trust-building content we are using for Sunnyvale drivers.",
  alternates: {
    canonical: "/about",
  },
};

const commitments = [
  "Explain maintenance and repair work in practical language",
  "Structure the site around local intent and service clarity",
  "Create pages that are easy for customers and answer engines to understand",
];

export default function AboutPage() {
  return (
    <main className="inner-page">
      <header className="inner-hero">
        <p className="eyebrow">About The Rebuild</p>
        <h1>A custom site gives the shop control over trust, messaging, and local visibility.</h1>
        <p>
          The current live site establishes a presence, but this rebuild is designed to go much
          further. We are shaping a site that better reflects a real service business: clear answers,
          stronger local entity signals, and cleaner conversion paths for drivers in and around{" "}
          {site.address.addressLocality}.
        </p>
        <div className="cta-row">
          <Link className="button button-primary" href="/services">
            Explore Services
          </Link>
          <Link className="button button-secondary" href="/contact">
            Contact The Shop
          </Link>
        </div>
      </header>

      <section className="contact-grid">
        <article className="panel panel-large">
          <p className="eyebrow">What This Version Improves</p>
          <h2>Better architecture for both human visitors and AI-assisted discovery.</h2>
          <p>
            Instead of a thin marketing page, the new structure supports service intent, location
            context, FAQs, business details, and future expansion into brand-specific or problem-specific
            pages.
          </p>
        </article>
        <article className="panel panel-accent">
          <p className="eyebrow">Core Commitments</p>
          <ul className="check-list">
            {commitments.map((commitment) => (
              <li key={commitment}>{commitment}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
