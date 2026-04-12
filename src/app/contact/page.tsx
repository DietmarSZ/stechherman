import type { Metadata } from "next";
import Link from "next/link";
import { PhoneAction } from "@/components/phone-action";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact S-Tech Auto Repair in Sunnyvale, CA for maintenance, repair, diagnostics, and tire service questions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="inner-page">
      <header className="inner-hero">
        <p className="eyebrow">Find Us</p>
        <h1 className="contact-hero-title">
          We&apos;d love to hear from you.
          <br />
          Contact us today and let&apos;s connect.
        </h1>
        <p>
          {site.locationNote}
        </p>
        <div className="cta-row">
          <PhoneAction
            className="button button-primary"
            label={`Call ${site.phone}`}
            phone={site.phone}
            phoneHref={site.phoneHref}
          />
          <Link className="button button-secondary" href={site.emailHref}>
            Email the shop
          </Link>
        </div>
      </header>

      <section className="find-us-grid">
        <article className="panel panel-large map-panel">
          <div className="map-frame">
            <iframe
              title="S-Tech Auto Repair map"
              src="https://www.google.com/maps?q=1011%20E.%20El%20Camino%20Real%2C%20Sunnyvale%2C%20CA%2094087&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </article>

        <article className="panel info-block">
          <p className="eyebrow">Book your visit now</p>
          <h2>Contact Us</h2>
          <p>{site.locationNote}</p>
          <p>
            Call us at{" "}
            <PhoneAction
              className="inline-phone-link"
              label={site.phone}
              phone={site.phone}
              phoneHref={site.phoneHref}
            />{" "}
            or email{" "}
            <a href={site.emailHref}>{site.email}</a>.
          </p>
        </article>
      </section>

      <section className="contact-grid">
        <article className="panel">
          <p className="eyebrow">Address</p>
          <h2>{site.address.streetAddress}</h2>
          <p>
            {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}
          </p>
          <p>{site.directionsNote}</p>
        </article>

        <article className="panel">
          <p className="eyebrow">Working Hours</p>
          <h2>Monday to Friday</h2>
          <div className="hours">
            {site.hours.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </article>

        <article className="panel">
          <p className="eyebrow">Phone</p>
          <h2>{site.phone}</h2>
          <p>
            Call ahead if you want to talk through a repair, maintenance question, or visit timing.
          </p>
        </article>

        <article className="panel">
          <p className="eyebrow">Need service help?</p>
          <h2>Drive in or reach out before your visit.</h2>
          <p>
            We can keep building this section into a stronger booking flow, but this version already
            gives customers the core information they need to find the shop and get in touch quickly.
          </p>
          <div className="cta-row">
            <PhoneAction
              className="button button-primary"
              label="Call now"
              phone={site.phone}
              phoneHref={site.phoneHref}
            />
            <Link className="button button-secondary" href="/services">
              See services
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
