type Offer = {
  title: string;
  price: string;
  description: string;
  disclosure: string;
  expiresOn: string;
};

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
      title: "Factory-Scheduled Maintenance",
      summary:
        "Oil changes, fluid checks, filters, inspections, and mileage-based maintenance to keep your vehicle on schedule.",
      bullets: ["Routine maintenance", "Synthetic oil service", "Battery and belt checks"],
      image: "/images/service-battery.jpg",
      alt: "Technician checking under-hood components during scheduled maintenance.",
    },
    {
      slug: "smog-check",
      title: "Smog Check And Repair Support",
      summary:
        "Guidance around failed inspections, emissions issues, and repair planning so you know the next step quickly.",
      bullets: ["Pre-test evaluation", "Emissions diagnosis", "Repair recommendations"],
      image: "/images/service-exhaust.jpg",
      alt: "Detailed undercar exhaust and emissions system view inside the shop.",
    },
    {
      slug: "diagnostics-repair",
      title: "Diagnostics And General Repair",
      summary:
        "Brake work, engine concerns, electrical issues, drivability complaints, and practical repair plans you can approve with confidence.",
      bullets: ["Check engine light", "Brake and suspension repair", "Electrical troubleshooting"],
      image: "/images/service-diagnostic.jpg",
      alt: "Technician using a diagnostic tablet while inspecting an engine bay.",
    },
    {
      slug: "tires-alignment",
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
        "S-Tech Auto Repair focuses on Asian and domestic vehicles and handles a wide mix of routine maintenance and repair work.",
    },
    {
      question: "Can I bring my car in without an appointment?",
      answer:
        "The current business messaging says online booking is available and drive-ins are welcome, so the site is designed to support both quick calls and planned visits.",
    },
    {
      question: "Do you help with check engine light and emissions issues?",
      answer:
        "Yes. The rebuild is structured around smog-related guidance and diagnostics so customers can understand likely causes and next steps before they visit.",
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
        "*Shop fees, environmental fees, core charges, taxes, and other federal, state, or locally mandated fees are extra. Discount applied before fees/taxes. Limit 1 discount per transaction. Mention offer at arrival. Not applicable to all vehicles or circumstances. Offer expires 4/11/26",
      expiresOn: "2026-04-11",
    },
    {
      title: "Introductory Service Offer",
      price: "20% Off*",
      description: "A cleaner version of the current new-customer promotion, ready for updated terms and valid dates.",
      disclosure:
        "*Does not include windshields, or tires. See dealer for complete details. Some restrictions apply. Prices subject to change without notice. Percentage off not to exceed $200. Shop fees, environmental fees, core charges, taxes, and other federal, state or locally mandated fees are in addition to this offer. One discount per transaction. Mention offer at arrival. Not applicable to all vehicles. Offer expires 4/11/26",
      expiresOn: "2026-04-11",
    },
  ] satisfies Offer[],
};

function parseDateOnly(value: string) {
  return new Date(`${value}T00:00:00`);
}

function isOfferActive(offer: Offer, today = new Date()) {
  const expiry = parseDateOnly(offer.expiresOn);
  expiry.setHours(23, 59, 59, 999);
  return today <= expiry;
}

export function getCurrentOffers(today = new Date()) {
  return site.offers.filter((offer) => isOfferActive(offer, today));
}

export function getOfferFallbackMonth(today = new Date()) {
  const futureDates = site.offers.map((offer) => parseDateOnly(offer.expiresOn));
  const latestExpiry = futureDates.sort((a, b) => b.getTime() - a.getTime())[0] ?? today;
  const monthSource = today > latestExpiry ? today : new Date(latestExpiry.getFullYear(), latestExpiry.getMonth() + 1, 1);

  return monthSource.toLocaleString("en-US", { month: "long" });
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
