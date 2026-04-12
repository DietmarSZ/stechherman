import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore maintenance, smog support, diagnostics, general repair, and tire service categories for S-Tech Auto Repair in Sunnyvale.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <header className="inner-hero">
        <p className="eyebrow">Service Overview</p>
        <h1 className="services-hero-title">
          Quality service, great value, and fast repairs for Asian and domestic vehicles.
        </h1>
        <p>
          This page gives the new site a stronger information architecture than the current build.
          Each section can later become a standalone page with photos, FAQs, and service-specific
          schema.
        </p>
        <div className="cta-row">
          <Link className="button button-primary" href="/">
            Back Home
          </Link>
          <Link className="button button-secondary" href="/contact">
            Contact The Shop
          </Link>
        </div>
      </header>

      <section className="service-grid">
        {site.services.map((service) => (
          <article key={service.slug} className="service-card">
            <div className="service-media">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="service-image"
                sizes="(max-width: 960px) 100vw, 50vw"
              />
            </div>
            <p className="service-kicker">{service.kicker}</p>
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
            <ul>
              {service.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
