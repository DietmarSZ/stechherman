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
          <div className="map-card">
            <p className="eyebrow">Map And Directions</p>
            <h2>Open our location in Google Maps.</h2>
            <p>
              Use your preferred map app for turn-by-turn directions to {site.address.streetAddress},{" "}
              {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}.
            </p>
            <Link
              className="button button-primary"
              href="https://www.google.com/maps/search/?api=1&query=1011+E.+El+Camino+Real,+Sunnyvale,+CA+94087"
              target="_blank"
              rel="noreferrer"
            >
              Open In Google Maps
            </Link>
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

        <article className="panel video-panel">
          <p className="eyebrow">Arrival Video</p>
          <h2>Watch how to arrive and park.</h2>
          <Link
            className="video-frame video-link"
            href="https://youtu.be/BwByccpCaMY?si=H0MKRFjUj4-Z9Opv"
            target="_blank"
            rel="noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.ytimg.com/vi/BwByccpCaMY/hqdefault.jpg"
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
