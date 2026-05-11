import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PhoneAction } from "@/components/phone-action";
import {
  getBreadcrumbSchema,
  getServiceFaqSchema,
  getServicePage,
  getServicePageSchema,
  servicePages,
  site,
} from "@/lib/site";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicePages.map((servicePage) => ({
    slug: servicePage.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const servicePage = getServicePage(slug);

  if (!servicePage) {
    return {};
  }

  return {
    title: servicePage.metaTitle,
    description: servicePage.metaDescription,
    alternates: {
      canonical: `/services/${servicePage.slug}`,
    },
    openGraph: {
      title: `${servicePage.metaTitle} | ${site.displayName}`,
      description: servicePage.metaDescription,
      url: `${site.url}/services/${servicePage.slug}`,
      images: [
        {
          url: `${site.url}${servicePage.image}`,
          alt: servicePage.alt,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const servicePage = getServicePage(slug);

  if (!servicePage) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Services", url: `${site.url}/services` },
    { name: servicePage.title, url: `${site.url}/services/${servicePage.slug}` },
  ]);
  const serviceSchema = getServicePageSchema(servicePage);
  const faqSchema = getServiceFaqSchema(servicePage);
  const relatedServices = servicePage.relatedSlugs
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter((relatedService) => relatedService !== undefined);

  return (
    <main className="inner-page service-detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="inner-hero service-detail-hero">
        <div className="service-detail-intro">
          <Image
            src="/images/logo-round.png"
            alt="S-Tech Auto Repair round logo"
            width={112}
            height={112}
            className="service-detail-logo"
          />
          <p className="eyebrow">{servicePage.eyebrow}</p>
          <h1 className="service-detail-title">{servicePage.title}</h1>
          <p className="lede">{servicePage.summary}</p>
          <div className="cta-row">
            <Link className="button button-primary" href="/schedule">
              Request Appointment
            </Link>
            <PhoneAction
              className="button button-secondary"
              label={`Call ${site.phone}`}
              phone={site.phone}
              phoneHref={site.phoneHref}
            />
          </div>
        </div>
        <div className="service-detail-media">
          <Image
            src={servicePage.image}
            alt={servicePage.alt}
            fill
            priority
            className="service-image"
            sizes="(max-width: 960px) 100vw, 44vw"
          />
        </div>
      </header>

      <section className="service-detail-grid">
        <article className="panel service-copy-panel">
          {servicePage.sections.map((section) => (
            <section key={section.heading} className="service-copy-section">
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>

        <aside className="service-sidebar">
          <article className="panel">
            <p className="eyebrow">Service Highlights</p>
            <h2>What We Help With</h2>
            <ul className="check-list">
              {servicePage.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>

          <article className="panel service-location-card">
            <Image
              src="/images/logo-round.png"
              alt="S-Tech Auto Repair round logo"
              width={112}
              height={112}
              className="service-location-logo"
            />
            <h2>Sunnyvale Auto Repair Specialists</h2>
            <p>
              {site.address.streetAddress}, {site.address.addressLocality},{" "}
              {site.address.addressRegion} {site.address.postalCode}
            </p>
            <p>{site.hours[0]}</p>
            <div className="cta-row">
              <Link className="button button-primary" href="/schedule">
                Book Online
              </Link>
              <Link className="button button-secondary" href="/contact">
                Directions
              </Link>
            </div>
          </article>

          <article className="panel">
            <p className="eyebrow">Service Area</p>
            <h2>{site.nearbyMarketHeading}</h2>
            <p>{site.nearbyMarketNote}</p>
          </article>
        </aside>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Service Questions</p>
          <h2>Helpful answers before you schedule.</h2>
        </div>
        <div className="faq-list">
          {servicePage.faqs.map((faq) => (
            <article key={faq.question} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {relatedServices.length > 0 ? (
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Related Services</p>
            <h2>More ways we can help keep your vehicle ready for the road.</h2>
          </div>
          <div className="related-service-grid">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.slug}
                className="panel related-service-card"
                href={`/services/${relatedService.slug}`}
              >
                <span className="service-kicker">{relatedService.eyebrow}</span>
                <h3>{relatedService.title}</h3>
                <p>{relatedService.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
