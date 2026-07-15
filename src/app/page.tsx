import Image from "next/image";
import Link from "next/link";
import { PhoneAction } from "@/components/phone-action";
import { SpecialsRotator } from "@/components/specials-rotator";
import {
  getBusinessSchema,
  getCurrentOffers,
  getFaqSchema,
  getOfferFallbackMonth,
  servicePages,
  site,
} from "@/lib/site";

export const revalidate = 3600;

const proofPoints = [
  {
    title: "Easy Communication",
    description:
      "You’ll get clear updates, honest recommendations, and a service experience that feels straightforward from start to finish.",
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

const offerDisplayOrder = ["Synthetic Oil Change", "Repair Savings", "Smog Certificate"];

export default function HomePage() {
  const businessSchema = getBusinessSchema();
  const faqSchema = getFaqSchema();
  const activeOffers = getCurrentOffers();
  const displayOffers = [...activeOffers].sort(
    (firstOffer, secondOffer) =>
      offerDisplayOrder.indexOf(firstOffer.title) - offerDisplayOrder.indexOf(secondOffer.title),
  );
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
          <span className="top-intro-brand">S-Tech Auto Repair</span>
          <span className="top-intro-rule" aria-hidden="true" />
          <span className="top-intro-offers">Offers</span>
          <p>
            <span>Inexpensive, efficient</span> maintenance and repair services for your{" "}
            <span>Asian or domestic</span> automobile.
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
          <SpecialsRotator offers={displayOffers} />
        </div>
      </section>

      <div className="hero-divider" aria-hidden="true" />

      <section className="section">
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
          <p className="eyebrow">Core Services</p>
          <h2>From routine maintenance to more involved repairs, we help drivers keep their vehicles safe, reliable, and ready for the road.</h2>
        </div>
        <div className="service-grid">
          {servicePages.map((service) => (
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
              <p className="service-kicker">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.highlights.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Link className="service-card-link" href={`/services/${service.slug}`}>
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <article className="panel panel-large">
          <p className="eyebrow">Service Area</p>
          <h2>{site.nearbyMarketHeading}</h2>
          <p>{site.nearbyMarketNote}</p>
        </article>
        <article className="panel panel-accent">
          <p className="eyebrow">Service That Fits Your Day</p>
          <h2>We know car care has to fit into real life.</h2>
          <p>
            Our goal is to make each visit efficient, professional, and easier to work into your
            schedule.
          </p>
        </article>
      </section>

      <section className="section" id="current-specials">
        <div className="specials-heading">
          <div className="specials-bar">
            <span>Current Specials</span>
          </div>
          <h2>Featured service offers available right now at S-Tech Auto Repair.</h2>
        </div>
        {displayOffers.length > 0 ? (
          <div className="offer-visual-grid">
            {displayOffers.map((offer) => (
              <Link
                key={offer.title}
                className="offer-visual-card"
                href="/schedule"
                aria-label={`Request an appointment for ${offer.title}: ${offer.price}. ${offer.description}`}
              >
                <Image
                  src={offer.image}
                  alt={offer.imageAlt}
                  width={1536}
                  height={1024}
                  className="offer-visual-image"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="coupon-disclosure-overlay">{offer.disclosure}</span>
              </Link>
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
          <h2>Helpful answers before you stop by.</h2>
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
          <p className="eyebrow">Book Service Your Way</p>
          <h2>Book online, call the shop, or stop by when it works for you.</h2>
        </div>
        <div className="cta-row">
          <Link className="button button-primary" href="/schedule">
            Book Online
          </Link>
          <PhoneAction
            className="button button-secondary"
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
