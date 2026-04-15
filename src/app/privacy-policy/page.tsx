import type { Metadata } from "next";
import { site } from "@/lib/site";

const sections = [
  { id: "information-we-collect", title: "1. Information We Collect" },
  { id: "how-we-use-your-information", title: "2. How We Use Your Information" },
  { id: "sharing-of-information", title: "3. Sharing of Information" },
  { id: "cookies-and-tracking-technologies", title: "4. Cookies and Tracking Technologies" },
  { id: "data-security", title: "5. Data Security" },
  { id: "your-privacy-rights", title: "6. Your Privacy Rights (California Residents)" },
  { id: "data-retention", title: "7. Data Retention" },
  { id: "third-party-links", title: "8. Third-Party Links" },
  { id: "changes-to-this-policy", title: "9. Changes to This Policy" },
  { id: "contact-us", title: "10. Contact Us" },
];

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the S-Tech Auto Repair privacy policy to understand how appointment and website information is collected, used, and protected.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="inner-page privacy-page">
      <header className="inner-hero privacy-hero">
        <p className="eyebrow">Stech Auto Repair</p>
        <h1 className="schedule-hero-title">Privacy Policy</h1>
        <p>Effective Date: April 14, 2026</p>

        <div className="privacy-summary">
          <p>
            <strong>Simple Summary:</strong> We only collect the information needed to schedule
            and service your vehicle. We never sell your data and keep everything as simple,
            secure, and transparent as possible.
          </p>
        </div>

        <div className="privacy-pill">No spam. No data selling. Just straightforward service.</div>
      </header>

      <nav className="panel privacy-nav" aria-label="Privacy policy sections">
        <p className="eyebrow">Quick Links</p>
        <div className="privacy-nav-grid">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.title}
            </a>
          ))}
        </div>
      </nav>

      <article className="panel privacy-article">
        <p>
          Stech Auto Repair (&ldquo;Stech,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;) is a service brand operated by DDS Enterprises Inc.
          (&ldquo;DDS Enterprises&rdquo;), the parent company of Sunnyvale Volkswagen. We are
          committed to protecting your privacy and ensuring transparency in how your information is
          collected and used.
        </p>

        <section id="information-we-collect" className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p>
            We collect only the information necessary to provide our services and improve your
            experience. This may include:
          </p>
          <ul>
            <li>First name</li>
            <li>Mobile phone number</li>
            <li>Vehicle information (make, model, year, and optionally VIN)</li>
            <li>Appointment details and service requests</li>
            <li>Basic website usage data (for example, browser type and pages visited)</li>
          </ul>
          <p>
            We do not collect sensitive personal information such as Social Security numbers or
            financial account details through this website.
          </p>
        </section>

        <section id="how-we-use-your-information" className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information collected to:</p>
          <ul>
            <li>Schedule and manage service appointments</li>
            <li>Communicate with you regarding your vehicle or service request</li>
            <li>Provide customer support</li>
            <li>Improve our website functionality and user experience</li>
          </ul>
          <p>We do not sell your personal information.</p>
        </section>

        <section id="sharing-of-information" className="privacy-section">
          <h2>3. Sharing of Information</h2>
          <p>We may share your information only in limited circumstances:</p>
          <ul>
            <li>With service providers who help us operate our website or scheduling tools</li>
            <li>When required by law or legal process</li>
            <li>Within DDS Enterprises Inc. for operational purposes</li>
          </ul>
          <p>All third parties are expected to maintain appropriate data protection standards.</p>
        </section>

        <section id="cookies-and-tracking-technologies" className="privacy-section">
          <h2>4. Cookies and Tracking Technologies</h2>
          <p>Our website may use basic cookies or similar technologies to:</p>
          <ul>
            <li>Improve website performance</li>
            <li>Understand user behavior</li>
            <li>Enhance your browsing experience</li>
          </ul>
          <p>You can adjust your browser settings to refuse cookies if you prefer.</p>
        </section>

        <section id="data-security" className="privacy-section">
          <h2>5. Data Security</h2>
          <p>
            We take reasonable administrative and technical measures to protect your information.
            While no system is completely secure, we strive to safeguard your data from
            unauthorized access or disclosure.
          </p>
        </section>

        <section id="your-privacy-rights" className="privacy-section">
          <h2>6. Your Privacy Rights (California Residents)</h2>
          <p>
            If you are a California resident, you may have rights under applicable California
            privacy laws, including:
          </p>
          <ul>
            <li>The right to request access to personal information we collect</li>
            <li>The right to request deletion of your information</li>
            <li>The right to know how your data is used</li>
          </ul>
          <p>To make a request, please contact us using the information below.</p>
        </section>

        <section id="data-retention" className="privacy-section">
          <h2>7. Data Retention</h2>
          <p>
            We retain your information only as long as necessary to fulfill the purposes outlined
            in this policy or as required by law.
          </p>
        </section>

        <section id="third-party-links" className="privacy-section">
          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the
            privacy practices of those sites.
          </p>
        </section>

        <section id="changes-to-this-policy" className="privacy-section">
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated effective date.
          </p>
        </section>

        <section id="contact-us" className="privacy-section">
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how your information is handled,
            please contact:
          </p>

          <div className="privacy-contact-card">
            <p className="privacy-contact-name">{site.displayName}</p>
            <p>Operated by DDS Enterprises Inc.</p>
            <p>
              1025 E. El Camino Real
              <br />
              Sunnyvale, CA 94087
            </p>
            <p>{site.phone}</p>
            <p>Info@sunnyvalevw.com</p>
          </div>
        </section>
      </article>
    </main>
  );
}
