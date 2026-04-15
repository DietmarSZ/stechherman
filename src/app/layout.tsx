import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Antonio, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { PhoneAction } from "@/components/phone-action";
import { SiteNav } from "@/components/site-nav";
import { getWebsiteSchema, site } from "@/lib/site";

const headingFont = Antonio({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "S-Tech Auto Repair | Sunnyvale Auto Repair And Maintenance",
    template: `%s | ${site.displayName}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.displayName,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: site.imageUrls[0],
        alt: "Exterior of S-Tech Auto Repair in Sunnyvale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.displayName,
    description: site.description,
    images: [site.imageUrls[0]],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="site-frame">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
          <div className="top-shell">
            <div className="utility-bar">
              <div className="utility-content">
                <p>{site.address.streetAddress}, {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}</p>
                <span className="utility-tagline">In the heart of the Silicon Valley.</span>
                <span className="utility-value">Great prices on quality repairs.</span>
              </div>
            </div>
            <header className="site-header">
              <Link className="brand-mark" href="/" aria-label="S-Tech Auto Repair home">
                <Image
                  src="/images/logo-square.png"
                  alt="S-Tech Auto Repair logo"
                  width={217}
                  height={104}
                  priority
                />
              </Link>
              <SiteNav />
              <PhoneAction
                className="header-phone"
                label={site.phone}
                phone={site.phone}
                phoneHref={site.phoneHref}
              />
            </header>
          </div>

          <div id="main-content" tabIndex={-1}>
            {children}
          </div>

          <footer className="site-footer">
            <div>
              <Image
                src="/images/logo-square.png"
                alt="S-Tech Auto Repair logo"
                width={170}
                height={82}
                className="footer-logo"
              />
              <p>
                {site.address.streetAddress}, {site.address.addressLocality}, {site.address.addressRegion}{" "}
                {site.address.postalCode}
              </p>
            </div>
            <div className="footer-links">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/schedule">Schedule</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div>
              <PhoneAction
                className="footer-phone"
                label={site.phone}
                phone={site.phone}
                phoneHref={site.phoneHref}
              />
              <Link className="footer-privacy-link" href="/privacy-policy">
                Privacy Policy
              </Link>
            </div>
          </footer>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
