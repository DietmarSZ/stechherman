"use client";

import { useEffect, useState } from "react";

const noticeExpiresAt = Date.parse("2026-05-26T00:00:00.000Z");

export function MemorialDayNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(Date.now() < noticeExpiresAt);
    }

    updateVisibility();
    const intervalId = window.setInterval(updateVisibility, 60 * 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="holiday-notice" role="note">
      <strong>We&apos;re closed for Memorial Day.</strong>
      <span>We will resume normal business hours on Tuesday.</span>
    </div>
  );
}
