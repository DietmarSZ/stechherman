import Image from "next/image";
import Link from "next/link";
import { PhoneAction } from "@/components/phone-action";
import { getBusinessSchema, getCurrentOffers, getFaqSchema, getOfferFallbackMonth, site } from "@/lib/site";

export const revalidate = 3600;

const proofPoints = [
  {
    title: "No Appointment Necessary",
    description:
      "Service designed around you—no appointment needed. Drop in at your convenience or schedule ahead with a quick call.",
  },
  {
    title: "Professional Staff",
    description:
      "Our team is made up of highly trained, experienced technicians who take pride in doing the job right. You can count on professional, consistent service every time you visit.",
  },
  {
    title: "Quality You Can Trust",
    description:
      "From routine maintenance to more involved repairs, we focus on careful work, clear communication, and dependable results.",
  },
];

export default function HomePage() {
  const businessSchema = getBusinessSchema();
  const faqSchema = getFaqSchema();
  const activeOffers = getCurrentOffers();
  const fallbackMonth = getOfferFallbackMonth();

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

      <section className="top-intro">
        <article className="top-intro-copy">
          <p>
            S-Tech Auto Repair offers inexpensive, efficient maintenance and repair services for your
            Asian or domestic automobile.
          </p>
        </article>

        <article className="top-intro-signals">
          <ul className="top-signal-list">
            {site.heroPoints.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </article>

        <div className="top-intro-media">
          <Image
            src="/images/service-wheel.jpg"
            alt="Technician working on a wheel and tire assembly in the repair bay"
            fill
            priority
            className="top-intro-image"
            sizes="(max-width: 960px) 100vw, 33vw"
          />
        </div>
      </section>

      <div className="hero-divider" aria-hidden="true" />

      <section className="section">
        <div className="section-heading">
          <h2>
            We&apos;re your neighborhood repair shop&#8212;powered by dealership-level tools,
            training, and standards. Our goal is simple: make car care easier, more transparent,
            and genuinely better.
          </h2>
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
        <div className="specials-heading">
          <div className="specials-bar">
            <span>Current Specials</span>
          </div>
          <h2>Featured service offers available right now at S-Tech Auto Repair.</h2>
        </div>
        {activeOffers.length > 0 ? (
          <div className="offer-grid">
            {activeOffers.map((offer) => (
              <article key={offer.title} className="offer-card">
                <Image
                  src="/images/logo-square.png"
                  alt="S-Tech Auto Repair logo"
                  width={74}
                  height={36}
                  className="offer-logo"
                />
                <p className="service-kicker">Offer</p>
                <h3>{offer.title}</h3>
                <p className="offer-price">{offer.price}</p>
                <p>{offer.description}</p>
                <p className="offer-disclosure">{offer.disclosure}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="offer-grid">
            {[0, 1].map((cardIndex) => (
              <article key={cardIndex} className="offer-fallback-card">
                <p>This special has ended. We&apos;re getting a new offer ready for {fallbackMonth}.</p>
                <Image
                  src="/images/logo-square-white-text.png"
                  alt="S-Tech Auto Repair logo"
                  width={188}
                  height={97}
                  className="offer-fallback-logo"
                />
              </article>
            ))}
          </div>
        )}
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
          <PhoneAction
            className="button button-primary"
            label={`Call ${site.phone}`}
            phone={site.phone}
            phoneHref={site.phoneHref}
          />
          <Link className="button button-secondary" href="/contact">
            View Contact Details
          </Link>
        </div>
      </section>
    </main>
  );
}
