export type Offer = {
  title: string;
  price: string;
  description: string;
  disclosure: string;
  expiresOn: string;
  image: string;
  imageAlt: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  image: string;
  alt: string;
  highlights: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
};

const BUSINESS_TIME_ZONE = "America/Los_Angeles";

export const site = {
  name: "Stech Auto Repair",
  displayName: "S-Tech Auto Repair",
  url: "https://www.stechautorepair.com",
  description:
    "S-Tech Auto Repair provides quality service, great value, and fast repairs for Asian and domestic vehicles in Sunnyvale.",
  phone: "(408) 389-5005",
  phoneHref: "tel:+14083895005",
  phoneSchema: "+14083895005",
  email: "service@stechautorepair.com",
  emailHref: "mailto:service@stechautorepair.com",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=1011+E.+El+Camino+Real,+Sunnyvale,+CA+94087",
  logoUrl: "https://www.stechautorepair.com/images/logo-square.png",
  imageUrls: [
    "https://www.stechautorepair.com/images/about-building.jpg",
    "https://www.stechautorepair.com/images/service-diagnostic.jpg",
    "https://www.stechautorepair.com/images/service-wheel.jpg",
  ],
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
  nearbyMarketHeading: "Serving Sunnyvale And The South Bay",
  nearbyMarketNote:
    "S-Tech Auto Repair is located in Sunnyvale and serves nearby drivers from Santa Clara, Mountain View, Cupertino, and San Jose. Many San Jose customers choose us when they need auto repair near the Sunnyvale and Santa Clara area.",
  locationNote:
    "We are conveniently located in the heart of Silicon Valley, between Lawrence Expressway and Wolfe Road on East El Camino Real in Sunnyvale. The driveway is just before Starbucks and just past Sunnyvale Volkswagen.",
  directionsNote:
    "If you enter the address into navigation, make sure you select East El Camino Real.",
  hero: {
    eyebrow: "Auto Repair In Sunnyvale, CA",
    title: "Quality service, great value, and fast repairs for Asian and domestic vehicles.",
    description:
      "S-Tech Auto Repair serves Sunnyvale drivers with straightforward maintenance, smog support, diagnostics, brakes, tires, and general repair work.",
  },
  primaryCtas: [
    { label: "Call The Shop", href: "tel:+14083895005" },
    { label: "View Services", href: "/services" },
  ],
  heroPoints: [
    "Fast service",
    "Quality repair",
    "Trained technicians",
    "Online scheduling available",
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
        "Yes. Walk-ins are welcome between 8AM and 5PM. If the office door is locked when you arrive, just give us a call and someone will meet you there within minutes. If you’d rather plan ahead, you can also request an appointment online or call ahead.",
    },
    {
      question: "Do you help with check engine light and emissions issues?",
      answer:
        "We offer smog-related services, but we are not a STAR station and do not perform STAR-certified inspections. We do diagnose check engine lights and handle emissions-related repair work.",
    },
    {
      question: "Serving Bay Area Commuters And Locals",
      answer:
        "We’re proud to care for vehicles from customers who live nearby as well as those who work in Silicon Valley and commute in from across the Bay Area.",
    },
  ],
  offers: [
    {
      title: "Synthetic Oil Change",
      price: "$99.95*",
      description:
        "Includes a synthetic oil change, tire rotation, and multi-point inspection. Limit 5 quarts synthetic oil.",
      disclosure:
        "*Some vehicles may be higher. Includes up to 5 quarts synthetic oil. Plus $2.17 environmental fee and applicable taxes. Limit 1 discount per transaction. Mention offer at arrival. Not applicable to all vehicles or circumstances. BAR Ard#89968. Offer expires 7/31/26",
      expiresOn: "2026-07-31",
      image: "/images/special-synthetic-oil-change.png",
      imageAlt:
        "Limited time synthetic oil change offer for $99.95 including synthetic oil change, tire rotation, and multi-point inspection.",
    },
    {
      title: "Smog Certificate",
      price: "$79.50*",
      description: "Non-STAR smog certificate service, plus certificate fee and environmental fee.",
      disclosure:
        "*Non-STAR certificate only. Certificate fee of $8.25 is additional. Plus $2.17 environmental fee and applicable taxes. Limit 1 discount per transaction. Mention offer at arrival. Not applicable to all vehicles or circumstances. BAR Ard#89968. Offer expires 7/31/26",
      expiresOn: "2026-07-31",
      image: "/images/special-smog-certificate.png",
      imageAlt:
        "Limited time non-STAR smog certificate offer for $79.50 plus certificate fee.",
    },
    {
      title: "Repair Savings",
      price: "10% Off*",
      description: "Save on qualifying repair work at S-Tech Auto Repair.",
      disclosure:
        "*Discount applies to qualifying repairs and is capped at $200. Plus $2.17 environmental fee and applicable taxes. Cannot be combined with other advertised specials or coupons. Limit 1 discount per transaction. Mention offer at arrival. Not applicable to all vehicles or circumstances. BAR Ard#89968. Offer expires 7/31/26",
      expiresOn: "2026-07-31",
      image: "/images/special-repair-savings.png",
      imageAlt:
        "Limited time repair savings offer for 10 percent off qualifying repair work, capped at $200.",
    },
  ] satisfies Offer[],
};

export const servicePages = [
  {
    slug: "oil-change-sunnyvale",
    title: "Oil Change in Sunnyvale, CA",
    metaTitle: "Oil Change Sunnyvale, CA",
    metaDescription:
      "Schedule synthetic oil change service in Sunnyvale at S-Tech Auto Repair, including filter replacement, fluid checks, and a multi-point inspection.",
    eyebrow: "Maintenance Service",
    summary:
      "S-Tech Auto Repair provides synthetic oil changes, filter replacement, fluid checks, and multi-point inspections for Asian and domestic vehicles in Sunnyvale, CA.",
    image: "/images/service-oil-change.jpg",
    alt: "Technician pouring engine oil during an oil change service.",
    highlights: [
      "Synthetic oil change service",
      "Oil filter replacement",
      "Fluid and maintenance checks",
      "Multi-point inspection",
    ],
    sections: [
      {
        heading: "Routine maintenance for Sunnyvale drivers",
        body: [
          "Oil changes are one of the simplest ways to protect your engine, especially for commuters who spend time on El Camino Real, Lawrence Expressway, Highway 101, 237, or local stop-and-go streets. At S-Tech Auto Repair, our oil change service is built for practical car care: the right oil, the right filter, and a careful look at the vehicle while it is in the shop.",
          "We service many Asian and domestic vehicles and help customers stay current with mileage-based maintenance. If your vehicle is due for a synthetic oil change, overdue for service, or showing a dashboard maintenance reminder, we can help you understand what is needed without turning a basic visit into a confusing sales pitch.",
        ],
      },
      {
        heading: "What is included",
        body: [
          "A typical oil change visit includes replacing the engine oil and oil filter, checking accessible fluids, and performing a multi-point inspection. That inspection gives us a chance to spot visible wear, leaks, tire concerns, battery issues, or maintenance items that may need attention soon.",
          "If we find something important, we explain it clearly and help you prioritize. Some items can wait, some should be watched, and some are best handled before they become a larger repair. Our goal is to make routine maintenance useful, not stressful.",
        ],
      },
      {
        heading: "When to schedule service",
        body: [
          "Your ideal oil change interval depends on the vehicle, engine, oil type, mileage, and driving conditions. Many modern vehicles can go longer than older cars, but short trips, heavy traffic, heat, and age can all affect the schedule. If you are not sure what interval applies, call the shop or request an appointment and we can help you check.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer synthetic oil changes?",
        answer:
          "Yes. S-Tech Auto Repair provides synthetic oil change service for many Asian and domestic vehicles.",
      },
      {
        question: "Is an inspection included with an oil change?",
        answer:
          "Yes. Oil change service can include a multi-point inspection so we can check key maintenance and safety items while the vehicle is here.",
      },
      {
        question: "Can I request an oil change appointment online?",
        answer:
          "Yes. You can request an appointment online or call the shop during business hours.",
      },
    ],
    relatedSlugs: ["asian-domestic-auto-repair-sunnyvale", "tires-alignment-sunnyvale"],
  },
  {
    slug: "brake-repair-sunnyvale",
    title: "Brake Repair in Sunnyvale, CA",
    metaTitle: "Brake Repair Sunnyvale, CA",
    metaDescription:
      "Brake inspection and repair in Sunnyvale for Asian and domestic vehicles, including pads, rotors, noise concerns, vibration, and stopping performance.",
    eyebrow: "Brake Service",
    summary:
      "S-Tech Auto Repair inspects and repairs brake concerns for Sunnyvale drivers, from worn brake pads to noise, vibration, and stopping performance issues.",
    image: "/images/service-brake-repair.jpg",
    alt: "Technician using an impact wrench near a wheel during brake service.",
    highlights: ["Brake inspections", "Pad and rotor service", "Brake noise diagnosis", "Stopping performance checks"],
    sections: [
      {
        heading: "Brake service you can feel confident about",
        body: [
          "Brakes are one of the most important systems on your vehicle, and changes in noise, pedal feel, vibration, or stopping distance should be checked before they become bigger safety concerns. S-Tech Auto Repair provides brake inspections and repair planning for Asian and domestic vehicles in Sunnyvale.",
          "Customers often come in because they hear squeaking, grinding, or scraping, feel a shake when braking, see a brake warning light, or notice that the vehicle does not stop as smoothly as it used to. We inspect the system and explain what is worn, what is still usable, and what should be addressed.",
        ],
      },
      {
        heading: "How we approach brake repair",
        body: [
          "A brake concern can come from pads, rotors, calipers, hardware, fluid, tires, suspension, or a combination of parts. That is why we start with inspection instead of guessing. We look for visible wear, uneven pad contact, rotor condition, leaks, and other signs that affect braking performance.",
          "When repair is needed, we focus on clear recommendations. If pads and rotors need service, we explain why. If a noise is not immediately urgent but should be monitored, we say that too. The goal is to help you make a practical decision based on the condition of the vehicle.",
        ],
      },
      {
        heading: "Local brake repair in Sunnyvale",
        body: [
          "Our shop is located at 1011 E. El Camino Real in Sunnyvale, convenient for local residents and Silicon Valley commuters. You can request an appointment online, call the shop, or stop by during business hours if you need help deciding whether a brake concern should be inspected right away.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are signs I may need brake service?",
        answer:
          "Common signs include squeaking, grinding, vibration while braking, a soft pedal, longer stopping distance, or a brake warning light.",
      },
      {
        question: "Do you inspect brakes before recommending repairs?",
        answer:
          "Yes. We inspect the brake system first so recommendations are based on the vehicle's actual condition.",
      },
      {
        question: "Do you service Asian and domestic vehicle brakes?",
        answer:
          "Yes. S-Tech Auto Repair focuses on Asian and domestic vehicles.",
      },
    ],
    relatedSlugs: ["tires-alignment-sunnyvale", "check-engine-light-diagnostics-sunnyvale"],
  },
  {
    slug: "check-engine-light-diagnostics-sunnyvale",
    title: "Check Engine Light Diagnostics in Sunnyvale, CA",
    metaTitle: "Check Engine Light Diagnostics Sunnyvale, CA",
    metaDescription:
      "Check engine light diagnostics in Sunnyvale for Asian and domestic vehicles, including drivability concerns, warning lights, and emissions-related issues.",
    eyebrow: "Diagnostics",
    summary:
      "S-Tech Auto Repair diagnoses check engine lights, drivability concerns, and warning lights for Asian and domestic vehicles in Sunnyvale.",
    image: "/images/service-check-engine-diagnostics.jpg",
    alt: "Technician using a diagnostic tablet while inspecting an engine bay.",
    highlights: ["Check engine light diagnosis", "Warning light support", "Drivability troubleshooting", "Emissions-related repair planning"],
    sections: [
      {
        heading: "Clear answers when a warning light comes on",
        body: [
          "A check engine light can mean many different things. Sometimes the vehicle still seems to drive normally. Other times it may run rough, hesitate, lose power, smell unusual, or fail a smog inspection. S-Tech Auto Repair helps Sunnyvale drivers understand what is happening and what should be done next.",
          "Diagnostics is more than reading a code. A code points us toward a system, but the actual cause may be a sensor, wiring issue, leak, ignition problem, fuel concern, emissions component, or mechanical issue. We use the code as a starting point and then test carefully so the repair plan makes sense.",
        ],
      },
      {
        heading: "What diagnostic service can include",
        body: [
          "Depending on the concern, diagnostic work may include a scan for stored codes, review of live data, visual inspection, road testing, component testing, and checking related service information. The goal is to avoid unnecessary parts replacement and give you a practical explanation of the issue.",
          "If a repair is recommended, we explain the likely cause, the next step, and whether the concern is urgent. Some warning lights should be handled quickly, especially if the check engine light is flashing or the vehicle is running poorly.",
        ],
      },
      {
        heading: "Diagnostics for commuters and local drivers",
        body: [
          "Located on E. El Camino Real in Sunnyvale, S-Tech Auto Repair is convenient for drivers from Sunnyvale, Santa Clara, Mountain View, Cupertino, and San Jose. You can request service online or call the shop if you are unsure whether it is safe to keep driving.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I drive with the check engine light on?",
        answer:
          "It depends. If the light is flashing or the vehicle runs poorly, avoid driving and call for guidance. If it is steady, schedule diagnostics soon.",
      },
      {
        question: "Is reading the code enough to know the repair?",
        answer:
          "Usually no. Codes identify a system or symptom, but testing is needed to confirm the cause.",
      },
      {
        question: "Can diagnostics help with smog-related issues?",
        answer:
          "Yes. We diagnose emissions-related faults and can recommend repair steps when a vehicle has a check engine light or smog-related problem.",
      },
    ],
    relatedSlugs: ["smog-repair-sunnyvale", "asian-domestic-auto-repair-sunnyvale"],
  },
  {
    slug: "smog-repair-sunnyvale",
    title: "Smog Repair Support in Sunnyvale, CA",
    metaTitle: "Smog Repair Sunnyvale, CA",
    metaDescription:
      "Smog repair support and emissions diagnostics in Sunnyvale. S-Tech Auto Repair helps with failed inspections, check engine lights, and emissions repairs.",
    eyebrow: "Smog Support",
    summary:
      "S-Tech Auto Repair helps Sunnyvale drivers with smog-related diagnostics, emissions repair planning, and non-STAR smog certificate service.",
    image: "/images/service-smog-repair.jpg",
    alt: "Detailed undercar exhaust and emissions system view inside the shop.",
    highlights: ["Smog-related diagnostics", "Emissions repair support", "Failed inspection guidance", "Non-STAR certificate service"],
    sections: [
      {
        heading: "Help with smog and emissions concerns",
        body: [
          "If your vehicle fails a smog inspection, has a check engine light, or is not ready for testing, it can be hard to know what to do next. S-Tech Auto Repair helps drivers in Sunnyvale understand emissions-related problems and plan practical repairs.",
          "We are not a STAR station and do not perform STAR-certified inspections. We do provide smog-related support, non-STAR certificate service when applicable, and diagnostic help for check engine lights, readiness monitor concerns, and emissions system faults.",
        ],
      },
      {
        heading: "What smog repair support can include",
        body: [
          "Smog-related issues may involve sensors, evaporative emissions parts, catalytic converter efficiency codes, ignition or fuel problems, vacuum leaks, exhaust leaks, or readiness monitors that have not completed. The right next step depends on the code, inspection result, vehicle history, and current symptoms.",
          "Our process is built around diagnosis and explanation. We review the concern, inspect and test relevant systems, and explain what is likely preventing the vehicle from passing or completing its readiness checks. From there, you can decide how to proceed with repairs.",
        ],
      },
      {
        heading: "Local support before and after testing",
        body: [
          "Whether you are preparing for registration renewal or responding to a failed inspection, our Sunnyvale shop can help you avoid guesswork. Call the shop or request an appointment online and include any smog paperwork or fault codes you already have.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are you a STAR smog station?",
        answer:
          "No. S-Tech Auto Repair is not a STAR station and does not perform STAR-certified inspections.",
      },
      {
        question: "Can you repair emissions-related problems?",
        answer:
          "Yes. We diagnose check engine lights and emissions-related problems and can recommend repair steps.",
      },
      {
        question: "Should I bring smog test paperwork?",
        answer:
          "Yes. If you have a failed inspection report or related paperwork, bring it with the vehicle.",
      },
    ],
    relatedSlugs: ["check-engine-light-diagnostics-sunnyvale", "oil-change-sunnyvale"],
  },
  {
    slug: "tires-alignment-sunnyvale",
    title: "Tires and Alignment in Sunnyvale, CA",
    metaTitle: "Tires and Alignment Sunnyvale, CA",
    metaDescription:
      "Tire service and alignment support in Sunnyvale, including tire replacement, rotation, balancing, and alignment inspections for Asian and domestic vehicles.",
    eyebrow: "Tires And Wheels",
    summary:
      "S-Tech Auto Repair helps Sunnyvale drivers with tire replacement, rotation, balancing, and alignment support to protect ride quality and tire life.",
    image: "/images/service-tires-alignment.jpg",
    alt: "Technician inspecting suspension and tire components under a raised vehicle.",
    highlights: ["New tires", "Rotation and balancing", "Alignment inspections", "Tire wear checks"],
    sections: [
      {
        heading: "Tire service that protects the whole vehicle",
        body: [
          "Tires affect safety, braking, handling, comfort, fuel economy, and the way your vehicle feels every day. S-Tech Auto Repair provides tire and alignment support for Sunnyvale drivers who need new tires, rotations, balancing, or help understanding uneven tire wear.",
          "If your vehicle pulls, shakes, drifts, wears tires unevenly, or feels less stable on the road, the issue may involve tire condition, balance, alignment, suspension, or wheel damage. We look at the whole picture so you are not replacing tires without understanding why they wore the way they did.",
        ],
      },
      {
        heading: "Tires, rotations, balancing, and alignment support",
        body: [
          "We can help with tire replacement options, rotation schedules, balancing concerns, and alignment inspections. Regular rotation helps even out tread wear, while balancing can reduce vibration. Alignment support helps protect tire life and steering feel.",
          "For commuters in Sunnyvale and nearby cities, tire wear can build up quickly from highway miles, city traffic, and rough pavement. A tire check during routine maintenance can catch low tread, sidewall damage, uneven wear, or pressure concerns before they become a bigger problem.",
        ],
      },
      {
        heading: "Convenient Sunnyvale tire help",
        body: [
          "Our shop is located near Lawrence Expressway and Wolfe Road on E. El Camino Real. If you are not sure whether you need tires, balancing, or an alignment inspection, request an appointment and we can inspect the vehicle and explain your options.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you sell new tires?",
        answer:
          "Yes. S-Tech Auto Repair can help customers with tire replacement options for many Asian and domestic vehicles.",
      },
      {
        question: "What causes uneven tire wear?",
        answer:
          "Uneven wear can come from alignment issues, worn suspension parts, tire pressure problems, missed rotations, or driving conditions.",
      },
      {
        question: "Can tire issues cause vibration?",
        answer:
          "Yes. Vibration can come from tire balance, tire damage, wheel concerns, alignment, or suspension issues.",
      },
    ],
    relatedSlugs: ["brake-repair-sunnyvale", "oil-change-sunnyvale"],
  },
  {
    slug: "asian-domestic-auto-repair-sunnyvale",
    title: "Asian and Domestic Auto Repair in Sunnyvale, CA",
    metaTitle: "Asian and Domestic Auto Repair Sunnyvale, CA",
    metaDescription:
      "General auto repair in Sunnyvale for Asian and domestic vehicles, including maintenance, diagnostics, brakes, tires, and repair planning.",
    eyebrow: "General Auto Repair",
    summary:
      "S-Tech Auto Repair provides maintenance, diagnostics, brake repair, tires, smog support, and general repair for Asian and domestic vehicles in Sunnyvale.",
    image: "/images/service-auto-repair.jpg",
    alt: "Technician using a power tool while working near a vehicle battery.",
    highlights: ["Asian vehicle service", "Domestic vehicle service", "Maintenance and diagnostics", "General repair planning"],
    sections: [
      {
        heading: "Sunnyvale auto repair for everyday drivers",
        body: [
          "S-Tech Auto Repair is a neighborhood repair shop in Sunnyvale focused on Asian and domestic vehicles. We help customers with routine maintenance, check engine lights, brake concerns, tires, alignment support, smog-related issues, and general repair work.",
          "Our approach is straightforward: listen to the concern, inspect the vehicle, explain what we find, and help you decide what makes sense. Some visits are simple maintenance. Others require diagnosis and repair planning. In both cases, we want the process to feel clear and practical.",
        ],
      },
      {
        heading: "A practical alternative for local service",
        body: [
          "Many drivers want dealership-level standards without a confusing or impersonal experience. We use professional tools, training, and repair practices while keeping communication direct. If the vehicle needs work, we explain the reason. If a concern can be monitored, we tell you that too.",
          "We do not service Tesla vehicles or European vehicles at this time. Our focus on Asian and domestic vehicles helps us provide more consistent support for the cars, trucks, vans, and SUVs we see most often.",
        ],
      },
      {
        heading: "Located on E. El Camino Real",
        body: [
          "You can find S-Tech Auto Repair at 1011 E. El Camino Real in Sunnyvale, near Lawrence Expressway and Wolfe Road. We serve local drivers as well as commuters from Santa Clara, Mountain View, Cupertino, San Jose, and the surrounding Bay Area.",
        ],
      },
    ],
    faqs: [
      {
        question: "What vehicles do you service?",
        answer:
          "S-Tech Auto Repair focuses on Asian and domestic vehicles. We do not service Tesla or European vehicles at this time.",
      },
      {
        question: "Can I book service online?",
        answer:
          "Yes. You can request an appointment online, call the shop, or stop by during business hours.",
      },
      {
        question: "Where is the shop located?",
        answer:
          "S-Tech Auto Repair is located at 1011 E. El Camino Real, Sunnyvale, CA 94087.",
      },
    ],
    relatedSlugs: ["oil-change-sunnyvale", "check-engine-light-diagnostics-sunnyvale"],
  },
] satisfies ServicePage[];

export function getServicePage(slug: string) {
  return servicePages.find((servicePage) => servicePage.slug === slug);
}

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
    alternateName: site.displayName,
    description: site.description,
    url: site.url,
    telephone: site.phoneSchema,
    email: site.email,
    logo: site.logoUrl,
    image: site.imageUrls,
    hasMap: site.mapUrl,
    address: {
      "@type": "PostalAddress",
      ...site.address,
    },
    areaServed: site.serviceArea,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00:00",
        closes: "17:00:00",
      },
    ],
    makesOffer: servicePages.map((servicePage) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        serviceType: servicePage.title,
        name: servicePage.title,
        description: servicePage.summary,
        url: `${site.url}/services/${servicePage.slug}`,
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

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.displayName,
    description: site.description,
    publisher: {
      "@id": `${site.url}/#business`,
    },
    inLanguage: "en-US",
  };
}

type BreadcrumbItem = {
  name: string;
  url: string;
};

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getServicesPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/services/#page`,
    url: `${site.url}/services`,
    name: "Services",
    description:
      "Maintenance, smog support, diagnostics, repair, and tire services for Asian and domestic vehicles in Sunnyvale.",
    isPartOf: {
      "@id": `${site.url}/#website`,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: servicePages.map((servicePage, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${site.url}/services/${servicePage.slug}`,
        item: {
          "@type": "Service",
          name: servicePage.title,
          serviceType: servicePage.title,
          description: servicePage.summary,
          provider: {
            "@id": `${site.url}/#business`,
          },
          areaServed: site.serviceArea,
        },
      })),
    },
  };
}

export function getServicePageSchema(servicePage: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${servicePage.slug}/#service`,
    name: servicePage.title,
    serviceType: servicePage.title,
    description: servicePage.summary,
    url: `${site.url}/services/${servicePage.slug}`,
    image: `${site.url}${servicePage.image}`,
    provider: {
      "@id": `${site.url}/#business`,
    },
    areaServed: site.serviceArea,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${site.url}/schedule`,
      servicePhone: site.phoneSchema,
    },
  };
}

export function getServiceFaqSchema(servicePage: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: servicePage.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
