import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Stech Auto Repair in Sunnyvale, CA for maintenance, repair, diagnostics, and tire service questions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="inner-page">
      <header className="inner-hero">
        <p className="eyebrow">Contact And Location</p>
        <h1>Easy contact details, clear local signals, and a stronger trust page than the current site.</h1>
        <p>
          This page is intentionally simple for now. Once you share updated hours, photos, and booking
          preferences, we can turn it into a complete conversion page.
        </p>
      </header>

      <section className="contact-grid">
        <article className="panel panel-large">
          <h2>{site.name}</h2>
          <p>
            {site.address.streetAddress}
            <br />
            {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}
          </p>
          <p>
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
          <div className="hours">
            {site.hours.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </article>

        <article className="panel">
          <h2>What We Should Add Next</h2>
          <ul className="check-list">
            <li>Google Maps embed or directions module</li>
            <li>Primary booking workflow or lead form</li>
            <li>Business hours confirmation</li>
            <li>Review links and financing or warranty details</li>
          </ul>
          <Link className="button button-primary" href="/services">
            See Services
          </Link>
        </article>
      </section>
    </main>
  );
}
