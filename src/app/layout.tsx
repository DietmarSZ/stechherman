import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Stech Auto Repair | Sunnyvale Auto Repair And Maintenance",
    template: "%s | Stech Auto Repair",
  },
  description:
    "Sunnyvale auto repair website rebuild with stronger service content, local trust signals, and answer-engine-friendly structure for maintenance, diagnostics, smog help, tires, and repair planning.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stech Auto Repair",
    description:
      "Auto repair and maintenance in Sunnyvale with clearer service pages, local trust content, and booking-focused design.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stech Auto Repair",
    description:
      "Auto repair and maintenance in Sunnyvale with stronger local content and booking pathways.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-frame">
          <div className="utility-bar">
            <div className="utility-content">
              <p>{site.address.streetAddress}, {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}</p>
              <a href={site.phoneHref}>Call Us Now {site.phone}</a>
            </div>
          </div>
          <header className="site-header">
            <Link className="brand-mark" href="/">
              <Image
                src="/images/logo-square.png"
                alt="Stech Auto Repair logo"
                width={217}
                height={104}
                priority
              />
            </Link>
            <nav className="site-nav" aria-label="Primary">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <a className="header-phone" href={site.phoneHref}>
              {site.phone}
            </a>
          </header>

          {children}

          <footer className="site-footer">
            <div>
              <Image
                src="/images/logo-square.png"
                alt="Stech Auto Repair logo"
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
              <Link href="/contact">Contact</Link>
            </div>
            <div>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
