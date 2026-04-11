import type { Metadata } from "next";
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
          <header className="site-header">
            <Link className="brand-mark" href="/">
              <span>Stech</span>
              <span>Auto Repair</span>
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
              <p className="eyebrow">Stech Auto Repair</p>
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
