"use client";

import { useEffect, useRef, useState } from "react";

type PhoneActionProps = {
  className?: string;
  label: string;
  phone: string;
  phoneHref: string;
};

function shouldUseDirectCall() {
  if (typeof window === "undefined") {
    return false;
  }

  return /Android|iPhone|iPod/i.test(window.navigator.userAgent);
}

export function PhoneAction({ className, label, phone, phoneHref }: PhoneActionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const copyButtonRef = useRef<HTMLButtonElement | null>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      if (wasOpenRef.current) {
        triggerRef.current?.focus();
      }

      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    copyButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleOpen() {
    if (shouldUseDirectCall()) {
      window.location.href = phoneHref;
      return;
    }

    setIsOpen(true);
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(phone);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <>
      <button
        ref={triggerRef}
        className={className}
        type="button"
        onClick={handleOpen}
      >
        {label}
      </button>

      {isOpen ? (
        <div className="phone-modal-overlay" role="presentation" onClick={() => setIsOpen(false)}>
          <div
            className="phone-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="phone-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="eyebrow">Call S-Tech Auto Repair</p>
            <h2 id="phone-modal-title">{phone}</h2>
            <p>
              On desktop, your browser may hand phone links off to another app. You can copy the
              number below or continue anyway.
            </p>
            <div className="phone-modal-actions">
              <button
                ref={copyButtonRef}
                className="button button-primary"
                type="button"
                onClick={handleCopy}
              >
                {copied ? "Copied" : "Copy Number"}
              </button>
              <a className="button button-secondary" href={phoneHref}>
                Continue to call app
              </a>
            </div>
            <button className="phone-modal-close" type="button" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
