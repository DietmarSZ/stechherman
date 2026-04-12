import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbSchema, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about S-Tech Auto Repair in Sunnyvale, including the shop's mission, standards, and customer-first approach to service.",
  alternates: {
    canonical: "/about",
  },
};

const highlights = [
  "Asian and domestic vehicle service",
  "Clear communication and honest recommendations",
  "Great value with dependable repair work",
];

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "About", url: `${site.url}/about` },
  ]);

  return (
    <main className="inner-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <header className="inner-hero">
        <p className="eyebrow">About S-Tech</p>
        <h1 className="about-hero-title">
          A neighborhood repair shop with dealership-level standards.
        </h1>
        <p>
          We&apos;re your neighborhood repair shop powered by dealership-level tools, training, and
          standards. Our goal is simple: make car care easier, more transparent, and genuinely
          better.
        </p>
        <div className="cta-row">
          <Link className="button button-primary" href="/services">
            Explore Services
          </Link>
          <Link className="button button-secondary" href="/contact">
            Visit The Shop
          </Link>
        </div>
      </header>

      <section className="contact-grid">
        <article className="panel panel-large about-photo-panel">
          <Image
            src="/images/about-building.jpg"
            alt="Exterior of the S-Tech Auto Repair building in Sunnyvale"
            width={1024}
            height={768}
            className="about-photo"
          />
        </article>

        <article className="panel">
          <p className="eyebrow">What Drivers Can Expect</p>
          <h2>Professional service that feels straightforward from the start.</h2>
          <p>
            S-Tech is built around quality work, fair value, and a customer experience that feels
            easy to trust. Whether you&apos;re coming from nearby or commuting into Silicon Valley,
            we work hard to make each visit efficient, clear, and worthwhile.
          </p>
          <ul className="check-list">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="contact-grid">
        <article className="panel panel-large">
          <p className="eyebrow">Our Mission</p>
          <h2>Make car care easier, more transparent, and genuinely better.</h2>
          <p>
            We believe drivers deserve clear answers, dependable workmanship, and a shop that makes
            service feel less stressful. That means thoughtful communication, careful repair work,
            and standards that hold up over time.
          </p>
        </article>

        <article className="panel">
          <p className="eyebrow">Serving Sunnyvale And Beyond</p>
          <h2>Trusted by local drivers and Bay Area commuters alike.</h2>
          <p>
            Many of our customers work in and around Silicon Valley, so convenience matters just as
            much as quality. We&apos;re proud to care for vehicles from nearby neighborhoods as well
            as from drivers commuting in from across the Bay Area.
          </p>
        </article>
      </section>
    </main>
  );
}
