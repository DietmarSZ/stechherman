import Link from "next/link";
import { getBusinessSchema, getFaqSchema, site } from "@/lib/site";

const signals = [
  "ASE-certified technicians",
  "Asian and domestic vehicle care",
  "Smog, maintenance, repair, and tire support",
  "Sunnyvale location near the heart of Silicon Valley",
];

const proofPoints = [
  {
    title: "Clarity Before Approval",
    description:
      "We are rebuilding the site to explain common repair paths in plain language, which makes it easier for drivers to understand what they are authorizing.",
  },
  {
    title: "Built For Modern Search",
    description:
      "Pages are written to answer the kinds of questions customers ask Google, Maps, and AI assistants before they choose a shop.",
  },
  {
    title: "Designed To Convert",
    description:
      "Clear contact actions, service pathways, and local trust details help the right customers call, visit, or book faster.",
  },
];

export default function HomePage() {
  const businessSchema = getBusinessSchema();
  const faqSchema = getFaqSchema();

  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1>{site.hero.title}</h1>
          <p className="lede">{site.hero.description}</p>
          <div className="cta-row">
            {site.primaryCtas.map((cta) => (
              <Link key={cta.href} className="button button-primary" href={cta.href}>
                {cta.label}
              </Link>
            ))}
          </div>
          <ul className="signal-list">
            {signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>

        <aside className="hero-card">
          <p className="card-label">Visit The Shop</p>
          <h2>{site.name}</h2>
          <p>
            {site.address.streetAddress}
            <br />
            {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}
          </p>
          <a href={site.phoneHref}>{site.phone}</a>
          <div className="hours">
            {site.hours.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Why This Rebuild Matters</p>
          <h2>A stronger local website should do more than look polished.</h2>
          <p>
            The current site establishes the basics, but this rebuild is designed to answer customer
            questions, strengthen local relevance, and create a cleaner path from search to booked
            service.
          </p>
        </div>
        <div className="three-up">
          {proofPoints.map((point) => (
            <article key={point.title} className="panel">
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contrast">
        <div className="section-heading">
          <p className="eyebrow">Service Paths</p>
          <h2>Core repair categories with room to grow into dedicated landing pages.</h2>
          <p>
            We are starting with the service pillars already visible on the live site, then expanding
            them into more searchable, more useful content for real customer intent.
          </p>
        </div>
        <div className="service-grid">
          {site.services.map((service) => (
            <article key={service.slug} className="service-card">
              <p className="service-kicker">/{service.slug}</p>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <article className="panel panel-large">
          <p className="eyebrow">Local Trust</p>
          <h2>Built around the details people look for before they hand over their keys.</h2>
          <p>
            This first version highlights your Sunnyvale location, the types of vehicles you service,
            the practical benefits of your shop, and the value of having a site that clearly explains
            maintenance, diagnostics, and repair work.
          </p>
        </article>
        <article className="panel panel-accent">
          <p className="eyebrow">Next Content Layer</p>
          <h2>What we can add as soon as your photos and shop details are ready.</h2>
          <ul className="check-list">
            <li>Original photography galleries and shop atmosphere</li>
            <li>Brand-specific service pages</li>
            <li>Coupons and specials that stay current</li>
            <li>Reviews, FAQs, and neighborhood-specific location content</li>
          </ul>
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Common Questions</p>
          <h2>Answer-friendly content that can support both AI search and traditional SEO.</h2>
        </div>
        <div className="faq-list">
          {site.faqs.map((faq) => (
            <article key={faq.question} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section final-cta">
        <div>
          <p className="eyebrow">Ready To Keep Building</p>
          <h2>This is the foundation for the full custom Stech Auto Repair rebuild.</h2>
        </div>
        <div className="cta-row">
          <Link className="button button-primary" href="/services">
            Explore Service Overview
          </Link>
          <Link className="button button-secondary" href="/contact">
            View Contact Details
          </Link>
        </div>
      </section>
    </main>
  );
}
