type Offer = {
  title: string;
  price: string;
  description: string;
  disclosure: string;
  expiresOn: string;
};

const BUSINESS_TIME_ZONE = "America/Los_Angeles";

export const site = {
  name: "Stech Auto Repair",
  displayName: "S-Tech Auto Repair",
  url: "https://stechautorepair.com",
  phone: "(408) 389-5005",
  phoneHref: "tel:+14083895005",
  email: "service@stechautorepair.com",
  emailHref: "mailto:service@stechautorepair.com",
  address: {
    streetAddress: "1011 E. El Camino Real",
    addressLocality: "Sunnyvale",
    addressRegion: "CA",
    postalCode: "94087",
    addressCountry: "US",
  },
  hours: [
    "Monday to Friday: 8AM - 5PM",
  ],
  serviceArea: ["Sunnyvale", "Santa Clara", "Mountain View", "Cupertino", "San Jose"],
  locationNote:
    "We are conveniently located in the heart of Silicon Valley, between Lawrence Expressway and Wolfe Road on East El Camino Real in Sunnyvale. The driveway is just before Starbucks and just past Sunnyvale Volkswagen.",
  directionsNote:
    "If you enter the address into navigation, make sure you select East El Camino Real.",
  hero: {
    eyebrow: "Auto Repair In Sunnyvale, CA",
    title: "Quality service, great value, and fast repairs for Asian and domestic vehicles.",
    description:
      "S-Tech Auto Repair serves Sunnyvale drivers with straightforward maintenance, smog support, diagnostics, brakes, tires, and general repair work. The rebuild keeps the familiar shop message while giving the business a stronger modern website.",
  },
  primaryCtas: [
    { label: "Call The Shop", href: "tel:+14083895005" },
    { label: "View Services", href: "/services" },
  ],
  heroPoints: [
    "Fast service",
    "Quality repair",
    "Trained technicians",
    "No appointment needed",
    "Dealership style amenities",
  ],
  services: [
    {
      slug: "maintenance",
      kicker: "Service",
      title: "Factory-Scheduled Maintenance",
      summary:
        "Oil changes, fluid checks, filters, inspections, and mileage-based maintenance to keep your vehicle on schedule.",
      bullets: ["Routine maintenance", "Synthetic oil service", "Battery and belt checks"],
      image: "/images/service-battery.jpg",
      alt: "Technician checking under-hood components during scheduled maintenance.",
    },
    {
      slug: "smog-check",
      kicker: "Smog Certificate",
      title: "Smog Check And Repair Support",
      summary:
        "Guidance around failed inspections, emissions issues, and repair planning so you know the next step quickly.",
      bullets: ["Pre-test evaluation", "Emissions diagnosis", "Repair recommendations", "We are not a STAR station"],
      image: "/images/service-exhaust.jpg",
      alt: "Detailed undercar exhaust and emissions system view inside the shop.",
    },
    {
      slug: "diagnostics-repair",
      kicker: "Diagnostic And Repair Work",
      title: "Diagnostics And General Repair",
      summary:
        "Brake work, engine concerns, electrical issues, drivability complaints, and practical repair plans you can approve with confidence.",
      bullets: ["Check engine light", "Brake and suspension repair", "Electrical troubleshooting"],
      image: "/images/service-diagnostic.jpg",
      alt: "Technician using a diagnostic tablet while inspecting an engine bay.",
    },
    {
      slug: "tires-alignment",
      kicker: "Tires And Wheels",
      title: "Tires And Alignment",
      summary:
        "Access to popular tire brands plus alignment support that protects ride quality, tire life, and safe handling.",
      bullets: ["New tires", "Rotation and balancing", "Alignment inspections"],
      image: "/images/service-wheel.jpg",
      alt: "Technician working on a wheel and tire assembly in the repair bay.",
    },
  ],
  faqs: [
    {
      question: "What kinds of vehicles do you service?",
      answer:
        "S-Tech Auto Repair focuses on Asian and domestic vehicles and handles a wide mix of routine maintenance and repair work. At this time, we do not service Tesla vehicles or European vehicles.",
    },
    {
      question: "Can I bring my car in without an appointment?",
      answer:
        "Yes. You’re welcome to stop by between 8AM and 5PM. If the office door is locked when you arrive, just give us a call and someone will meet you there within minutes. You can also call ahead if you’d like to schedule a time.",
    },
    {
      question: "Do you help with check engine light and emissions issues?",
      answer:
        "We offer smog-related services, but we are not a STAR station and do not perform STAR-certified inspections. We do diagnose check engine lights and handle emissions-related repair work.",
    },
    {
      question: "Why build the site around AEO as well as SEO?",
      answer:
        "Answer Engine Optimization helps the shop appear in AI-assisted search and rich results by using clearer service explanations, structured data, local entity signals, and concise answers to customer questions.",
    },
  ],
  offers: [
    {
      title: "Synthetic Oil Change Plus",
      price: "$79.95*",
      description: "Includes tire rotation, a multi-point inspection, and a cleaner offer presentation we can keep updated.",
      disclosure:
        "*Shop fees, environmental fees, core charges, taxes, and other federal, state, or locally mandated fees are extra. Discount applied before fees/taxes. Limit 1 discount per transaction. Mention offer at arrival. Not applicable to all vehicles or circumstances. Offer expires 4/30/26",
      expiresOn: "2026-04-30",
    },
    {
      title: "Introductory Service Offer",
      price: "20% Off*",
      description: "A cleaner version of the current new-customer promotion, ready for updated terms and valid dates.",
      disclosure:
        "*Does not include windshields, or tires. See dealer for complete details. Some restrictions apply. Prices subject to change without notice. Percentage off not to exceed $200. Shop fees, environmental fees, core charges, taxes, and other federal, state or locally mandated fees are in addition to this offer. One discount per transaction. Mention offer at arrival. Not applicable to all vehicles. Offer expires 4/30/26",
      expiresOn: "2026-04-30",
    },
  ] satisfies Offer[],
};

function getDateKey(date = new Date(), timeZone = BUSINESS_TIME_ZONE) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const parts = formatter.formatToParts(date);
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

function getMonthNameFromKey(dateKey: string) {
  const [year, month] = dateKey.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", { month: "long", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  );
}

function getNextMonthKey(dateKey: string) {
  const [year, month] = dateKey.split("-").map(Number);
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;
  return `${nextYear}-${String(nextMonth).padStart(2, "0")}-01`;
}

function isOfferActive(offer: Offer, now = new Date()) {
  const todayKey = getDateKey(now);
  return todayKey <= offer.expiresOn;
}

export function getCurrentOffers(now = new Date()) {
  return site.offers.filter((offer) => isOfferActive(offer, now));
}

export function getOfferFallbackMonth(now = new Date()) {
  const todayKey = getDateKey(now);
  const latestExpiryKey = [...site.offers]
    .map((offer) => offer.expiresOn)
    .sort((a, b) => b.localeCompare(a))[0] ?? todayKey;
  const monthKey = getNextMonthKey(latestExpiryKey);

  return getMonthNameFromKey(monthKey);
}

export function getBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      ...site.address,
    },
    areaServed: site.serviceArea,
    priceRange: "$$",
    image: `${site.url}/og-image.jpg`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:30",
      },
    ],
    makesOffer: site.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
      },
    })),
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
