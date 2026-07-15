"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Offer } from "@/lib/site";

type SpecialsRotatorProps = {
  offers: Offer[];
};

export function SpecialsRotator({ offers }: SpecialsRotatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollToSpecials() {
    document.getElementById("current-specials")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  useEffect(() => {
    if (offers.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % offers.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [offers.length]);

  if (offers.length === 0) {
    return (
      <Image
        src="/images/service-wheel.jpg"
        alt="Technician working on a wheel and tire assembly in the repair bay"
        fill
        priority
        className="top-intro-image"
        sizes="(max-width: 960px) 100vw, 33vw"
      />
    );
  }

  const activeOffer = offers[activeIndex];

  return (
    <button
      type="button"
      className="top-offer-rotator"
      onClick={scrollToSpecials}
      aria-label={`View all current specials, including ${activeOffer.title}: ${activeOffer.price}.`}
    >
      <Image
        key={activeOffer.image}
        src={activeOffer.image}
        alt={activeOffer.imageAlt}
        fill
        priority
        className="top-offer-rotator-image"
        sizes="(max-width: 960px) 100vw, 33vw"
      />
      <span className="coupon-disclosure-overlay">{activeOffer.disclosure}</span>
      <span className="top-offer-rotator-cta">View all specials</span>
      {offers.length > 1 ? (
        <span className="top-offer-rotator-dots" aria-hidden="true">
          {offers.map((offer, index) => (
            <span
              key={offer.title}
              className={index === activeIndex ? "active" : undefined}
            />
          ))}
        </span>
      ) : null}
    </button>
  );
}
