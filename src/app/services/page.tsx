import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getBreadcrumbSchema, getServicesPageSchema, servicePages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore maintenance, smog support, diagnostics, general repair, and tire service categories for S-Tech Auto Repair in Sunnyvale.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Services", url: `${site.url}/services` },
  ]);
  const servicesPageSchema = getServicesPageSchema();

  return (
    <main className="inner-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }}
      />
      <header className="inner-hero">
        <p className="eyebrow">Service Overview</p>
        <h1 className="services-hero-title">
          Quality service, great value, and fast repairs for Asian and domestic vehicles.
        </h1>
      </header>

      <section className="service-grid">
        {servicePages.map((service) => (
          <article key={service.slug} id={service.slug} className="service-card">
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
            <h2>{service.title}</h2>
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
      </section>

      <section className="section">
        <article className="panel panel-large">
          <p className="eyebrow">Service Area</p>
          <h2>{site.nearbyMarketHeading}</h2>
          <p>{site.nearbyMarketNote}</p>
        </article>
      </section>
    </main>
  );
}
