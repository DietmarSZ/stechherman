import type { Offer } from "@/lib/site";

type CouponArtProps = {
  offer: Offer;
};

function getCouponDetails(title: string) {
  if (title === "Synthetic Oil Change") {
    return {
      className: "coupon-art-oil",
      kicker: "Synthetic Oil Change",
      badge: "Oil + inspection",
      points: ["Up to 5 quarts synthetic oil", "Multi-point inspection", "Fast service"],
    };
  }

  if (title === "Smog Certificate") {
    return {
      className: "coupon-art-smog",
      kicker: "Smog Certificate",
      badge: "Non-STAR certificate",
      points: ["Non-STAR certificate only", "Plus $8.25 certificate fee", "Clear next steps"],
    };
  }

  return {
    className: "coupon-art-repair",
    kicker: "Repair Savings",
    badge: "Capped at $200",
    points: ["Qualifying repair work", "Cannot be combined", "Quality service"],
  };
}

export function CouponArt({ offer }: CouponArtProps) {
  const details = getCouponDetails(offer.title);

  return (
    <div className={`coupon-art ${details.className}`}>
      <div className="coupon-art-main">
        <span className="coupon-art-ribbon">Limited Time Offer!</span>
        <p className="coupon-art-kicker">{details.kicker}</p>
        <strong className="coupon-art-price">{offer.price}</strong>
        <p className="coupon-art-description">{offer.description}</p>
      </div>
      <div className="coupon-art-side">
        <span className="coupon-art-logo">S-Tech Auto Repair</span>
        <span className="coupon-art-badge">{details.badge}</span>
        <ul>
          {details.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      <p className="coupon-art-disclosure">{offer.disclosure}</p>
    </div>
  );
}
