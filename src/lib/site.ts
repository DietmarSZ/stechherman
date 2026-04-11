export const site = {
  name: "Stech Auto Repair",
  url: "https://stechautorepair.com",
  phone: "(408) 389-5005",
  phoneHref: "tel:+14083895005",
  address: {
    streetAddress: "1011 E. El Camino Real",
    addressLocality: "Sunnyvale",
    addressRegion: "CA",
    postalCode: "94087",
    addressCountry: "US",
  },
  hours: [
    "Mon-Fri: 8:00 AM - 5:30 PM",
    "Sat: By appointment",
    "Sun: Closed",
  ],
  serviceArea: ["Sunnyvale", "Santa Clara", "Mountain View", "Cupertino", "San Jose"],
  hero: {
    eyebrow: "Auto Repair In Sunnyvale, CA",
    title: "Straightforward repairs, trusted maintenance, and smarter service content built for how people search now.",
    description:
      "Stech Auto Repair helps Silicon Valley drivers keep Asian and domestic vehicles reliable with practical maintenance, diagnostics, smog support, brakes, tires, and repair guidance that is easy to understand before you book.",
  },
  primaryCtas: [
    { label: "Call The Shop", href: "tel:+14083895005" },
    { label: "View Services", href: "/services" },
  ],
  services: [
    {
      slug: "maintenance",
      title: "Factory-Scheduled Maintenance",
      summary:
        "Oil changes, fluid checks, filters, inspections, and mileage-based maintenance to keep your vehicle on schedule.",
      bullets: ["Routine maintenance", "Synthetic oil service", "Battery and belt checks"],
    },
    {
      slug: "smog-check",
      title: "Smog Check And Repair Support",
      summary:
        "Guidance around failed inspections, emissions issues, and repair planning so you know the next step quickly.",
      bullets: ["Pre-test evaluation", "Emissions diagnosis", "Repair recommendations"],
    },
    {
      slug: "diagnostics-repair",
      title: "Diagnostics And General Repair",
      summary:
        "Brake work, engine concerns, electrical issues, drivability complaints, and practical repair plans you can approve with confidence.",
      bullets: ["Check engine light", "Brake and suspension repair", "Electrical troubleshooting"],
    },
    {
      slug: "tires-alignment",
      title: "Tires And Alignment",
      summary:
        "Access to popular tire brands plus alignment support that protects ride quality, tire life, and safe handling.",
      bullets: ["New tires", "Rotation and balancing", "Alignment inspections"],
    },
  ],
  faqs: [
    {
      question: "What kinds of vehicles do you service?",
      answer:
        "Stech Auto Repair focuses on Asian and domestic vehicles and handles a wide mix of routine maintenance and repair work.",
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
};

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
