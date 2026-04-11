import Image from "next/image";
import Link from "next/link";
import { getBusinessSchema, getFaqSchema, site } from "@/lib/site";

const proofPoints = [
  {
    title: "No Appointment Necessary",
    description:
      "Drive-ins stay front and center, just like the current website, so customers know they can stop by without a complicated booking process.",
  },
  {
    title: "Professional Staff",
    description:
      "We are rebuilding the site around clarity, trust, and clean service explanations instead of thin generic content.",
  },
  {
    title: "Modern Service Tools",
    description:
      "The new structure gives Stech Auto Repair a modern web presence while still feeling like the same practical neighborhood shop.",
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

      <section className="hero-banner">
        <div className="hero-banner-image">
          <Image
            src="/images/service-wheel.jpg"
            alt="Technician working on a wheel and tire assembly in the repair bay"
            fill
            priority
            className="banner-image"
            sizes="(max-width: 960px) 100vw, 50vw"
          />
        </div>
        <div className="hero-banner-fill" aria-hidden="true" />
      </section>

      <div className="hero-divider" aria-hidden="true" />

      <section className="intro-grid">
        <article className="hero-copy intro-primary">
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1>{site.hero.title}</h1>
          <p className="lede">{site.hero.description}</p>
          <div className="cta-row">
            {site.primaryCtas.map((cta) => (
              <Link key={cta.href} className="button button-primary" href={cta.href}>
                {cta.label}
              </Link>
            ))}
            <Link className="button button-secondary" href="/contact">
              Find Us
            </Link>
          </div>
        </article>

        <aside className="intro-side">
          <article className="panel info-block">
            <Image
              src="/images/logo-round.png"
              alt="Round Stech Auto Repair logo"
              width={74}
              height={73}
              className="info-badge"
            />
            <p className="card-label">Visit the shop</p>
            <h2>{site.name}</h2>
            <p>
              {site.address.streetAddress}
              <br />
              {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}
            </p>
            <a href={site.phoneHref}>{site.phone}</a>
          </article>

          <article className="panel signal-panel">
            <p className="card-label">Why drivers choose Stech</p>
            <ul className="signal-list">
              {site.heroPoints.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </article>
        </aside>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Located In The Heart Of Silicon Valley</p>
          <h2>A better version of the current shop website, with the same message but stronger structure.</h2>
          <p>
            The live site already says the right things: quality service, great prices, fast repairs,
            and support for Asian and domestic brands. This version keeps that identity and gives it a
            cleaner, more trustworthy presentation.
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
          <p className="eyebrow">Our Work</p>
          <h2>Core services carried over from the current site and organized more clearly.</h2>
          <p>
            We understand vehicle maintenance as well as mechanical failures. This section keeps the
            current service categories, but packages them in a way that is easier for customers and
            search engines to understand.
          </p>
        </div>
        <div className="service-grid">
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
              <p className="service-kicker">Service</p>
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
          <p className="eyebrow">Shop Confidence</p>
          <h2>Customers should immediately see what makes the shop easy to trust.</h2>
          <p>
            The current site mentions drive-ins, ASE-certified technicians, modern tools, and a
            comfortable waiting room. Those are exactly the kinds of trust signals we can keep and
            improve with real photos, updated details, and stronger content.
          </p>
        </article>
        <article className="panel panel-accent">
          <p className="eyebrow">What Comes Next</p>
          <h2>As soon as you send images and logos, we can make this feel like the real brand.</h2>
          <ul className="check-list">
            <li>More original photography galleries and exterior or interior shop shots</li>
            <li>Additional logo lockups if you have them</li>
            <li>Updated coupons and specials with current dates</li>
            <li>Reviews, FAQs, and neighborhood-specific location content</li>
          </ul>
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Current Specials</p>
          <h2>We can preserve the offers section without carrying over expired dates.</h2>
        </div>
        <div className="offer-grid">
          {site.offers.map((offer) => (
            <article key={offer.title} className="offer-card">
              <p className="service-kicker">Offer</p>
              <h3>{offer.title}</h3>
              <p className="offer-price">{offer.price}</p>
              <p>{offer.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Common Questions</p>
          <h2>Answer-friendly content that supports both AI search and practical customer questions.</h2>
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

      <section className="section final-cta cta-banner">
        <div>
          <p className="eyebrow">Drive In Or Call Now</p>
          <h2>No appointment necessary. Book by phone today or stop by the shop.</h2>
        </div>
        <div className="cta-row">
          <Link className="button button-primary" href={site.phoneHref}>
            Call {site.phone}
          </Link>
          <Link className="button button-secondary" href="/contact">
            View Contact Details
          </Link>
        </div>
      </section>
    </main>
  );
}
