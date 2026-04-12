import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Antonio, Roboto } from "next/font/google";
import "./globals.css";
import { PhoneAction } from "@/components/phone-action";
import { SiteNav } from "@/components/site-nav";
import { site } from "@/lib/site";

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
  description:
    "Sunnyvale auto repair website rebuild with stronger service content, local trust signals, and answer-engine-friendly structure for maintenance, diagnostics, smog help, tires, and repair planning.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.displayName,
    description:
      "Auto repair and maintenance in Sunnyvale with clearer service pages, local trust content, and booking-focused design.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.displayName,
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
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <div className="site-frame">
          <div className="top-shell">
            <div className="utility-bar">
              <div className="utility-content">
                <p>{site.address.streetAddress}, {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}</p>
                <span className="utility-tagline">In the heart of the Silicon Valley.</span>
                <PhoneAction
                  className="utility-phone"
                  label={`Call Us Now ${site.phone}`}
                  phone={site.phone}
                  phoneHref={site.phoneHref}
                />
              </div>
            </div>
            <header className="site-header">
              <Link className="brand-mark" href="/">
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

          {children}

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
              <Link href="/contact">Contact</Link>
            </div>
            <div>
              <PhoneAction
                className="footer-phone"
                label={site.phone}
                phone={site.phone}
                phoneHref={site.phoneHref}
              />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
