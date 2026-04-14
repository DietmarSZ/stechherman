import type { Metadata } from "next";
import Link from "next/link";
import { AppointmentRequestForm } from "@/components/appointment-request-form";
import { PhoneAction } from "@/components/phone-action";
import { getBreadcrumbSchema, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Request an online appointment with S-Tech Auto Repair in Sunnyvale for maintenance, diagnostics, repairs, and tires.",
  alternates: {
    canonical: "/schedule",
  },
};

export default function SchedulePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Schedule", url: `${site.url}/schedule` },
  ]);

  return (
    <main className="inner-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="inner-hero">
        <p className="eyebrow">Online Scheduling</p>
        <h1 className="schedule-hero-title">Request an appointment that fits your day.</h1>
        <p>
          Choose a service, pick a weekday time within shop hours, and send S-Tech a clean
          appointment request without needing to call first.
        </p>
        <div className="cta-row">
          <PhoneAction
            className="button button-primary"
            label={`Call ${site.phone}`}
            phone={site.phone}
            phoneHref={site.phoneHref}
          />
          <Link className="button button-secondary" href="/contact">
            Need directions?
          </Link>
        </div>
      </header>

      <AppointmentRequestForm />
    </main>
  );
}
