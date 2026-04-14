import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { PhoneAction } from "@/components/phone-action";
import { getBreadcrumbSchema, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact S-Tech Auto Repair in Sunnyvale, CA for maintenance, repair, diagnostics, and tire service questions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Contact", url: `${site.url}/contact` },
  ]);

  return (
    <main className="inner-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <header className="inner-hero">
        <p className="eyebrow">Find Us</p>
        <h1 className="contact-hero-title">
          We&apos;d love to hear from you. Contact us today and let&apos;s connect.
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
        <article className="panel info-block">
          <p className="eyebrow">Book your visit now</p>
          <h2>Contact Us</h2>
          <p>
            We are conveniently located in the heart of Silicon Valley, between Lawrence
            Expressway and Wolfe Road on East El Camino Real in Sunnyvale. The driveway is just
            before Starbucks and just past Sunnyvale Volkswagen (see arrival video below for more
            information).
          </p>
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

        <article className="panel">
          <p className="eyebrow">Address</p>
          <h2>{site.address.streetAddress}</h2>
          <p>
            {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}
          </p>
          <p>{site.directionsNote}</p>
          <p className="eyebrow">Mailing Address</p>
          <p>
            Mailing address: 1025 E. El Camino Real, Sunnyvale, CA 94087
          </p>
        </article>
      </section>

      <section className="find-us-grid">
        <article className="panel panel-large map-panel">
          <div className="map-card">
            <Image
              src="/images/logo-round.png"
              alt="S-Tech Auto Repair round logo"
              width={72}
              height={72}
              className="map-card-badge"
            />
            <p className="eyebrow">Map And Directions</p>
            <h2>Find us in Sunnyvale.</h2>
            <div className="map-frame">
              <iframe
                title="S-Tech Auto Repair map"
                src="https://www.google.com/maps?q=1011%20E.%20El%20Camino%20Real%2C%20Sunnyvale%2C%20CA%2094087&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p>
              Use your preferred map app for turn-by-turn directions to {site.address.streetAddress},{" "}
              {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}.
            </p>
            <p>{site.directionsNote}</p>
            <Link
              className="button button-primary"
              href="https://www.google.com/maps/search/?api=1&query=1011+E.+El+Camino+Real,+Sunnyvale,+CA+94087"
              target="_blank"
              rel="noreferrer"
              aria-label="Open S-Tech Auto Repair directions in Google Maps (opens in a new tab)"
            >
              Open In Google Maps
            </Link>
          </div>
        </article>

        <article className="panel video-panel">
          <p className="eyebrow">Arrival Video</p>
          <h2>See exactly where to turn in.</h2>
          <Link
            className="video-frame video-link"
            href="https://youtu.be/l6bIdxIBYMU"
            target="_blank"
            rel="noreferrer"
            aria-label="Watch the S-Tech Auto Repair arrival video on YouTube (opens in a new tab)"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.ytimg.com/vi/l6bIdxIBYMU/hqdefault.jpg"
              alt="Preview image for the S-Tech Auto Repair arrival and parking video"
            />
            <span className="video-play-button" aria-hidden="true">
              Play Video
            </span>
          </Link>
          <p>
            This quick walkthrough shows where to turn in and how to get parked once you arrive at
            the shop.
          </p>
        </article>
      </section>

      <section className="contact-grid">
        <article className="panel">
          <p className="eyebrow">Working Hours And Night Drop</p>
          <h2>Monday to Friday</h2>
          <div className="hours">
            {site.hours.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <p className="eyebrow">Night Drop</p>
          <p>
            Need to leave your car while we&apos;re closed? No problem. Use Sunnyvale Volkswagen,
            which is attached to our building. Pull into the first Volkswagen driveway marked
            &quot;Service,&quot; be sure to lock your car, and we&apos;ll call you the next business
            day morning as soon as we check your vehicle in.
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
