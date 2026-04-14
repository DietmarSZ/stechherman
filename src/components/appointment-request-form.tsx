"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type FormState = {
  service: string;
  date: string;
  time: string;
  firstName: string;
  phone: string;
  email: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  notes: string;
};

type SubmissionState = FormState & {
  formattedDate: string;
  formattedTime: string;
  mailtoHref: string;
  googleCalendarHref: string;
  icsHref: string;
};

const BUSINESS_TIME_ZONE = "America/Los_Angeles";
const SLOT_INTERVAL_MINUTES = 30;
const APPOINTMENT_DURATION_MINUTES = 60;
const TIME_SLOTS = getTimeSlots();

const INITIAL_FORM_STATE: FormState = {
  service: site.services[0]?.title ?? "",
  date: "",
  time: "",
  firstName: "",
  phone: "",
  email: "",
  vehicleYear: "",
  vehicleMake: "",
  vehicleModel: "",
  notes: "",
};

function formatDateForInput(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: BUSINESS_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formatter.format(date);
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function getTimeSlots() {
  const slots: Array<{ value: string; label: string }> = [];

  for (let minutes = 8 * 60; minutes <= 16 * 60 + 30; minutes += SLOT_INTERVAL_MINUTES) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const value = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
    const label = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: BUSINESS_TIME_ZONE,
    }).format(new Date(Date.UTC(2026, 0, 1, hour, minute)));

    slots.push({ value, label });
  }

  return slots;
}

function isWeekend(dateValue: string) {
  const date = new Date(`${dateValue}T12:00:00`);
  const day = date.getDay();
  return day === 0 || day === 6;
}

function getFormattedDate(dateValue: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: BUSINESS_TIME_ZONE,
  }).format(new Date(`${dateValue}T12:00:00`));
}

function getFormattedTime(timeValue: string) {
  const [hours, minutes] = timeValue.split(":").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: BUSINESS_TIME_ZONE,
  }).format(new Date(Date.UTC(2026, 0, 1, hours, minutes)));
}

function toCalendarDate(dateValue: string, timeValue: string) {
  return new Date(`${dateValue}T${timeValue}:00-07:00`);
}

function toUtcCalendarStamp(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function buildMailtoHref(form: FormState, formattedDate: string, formattedTime: string) {
  const subject = `Appointment request: ${form.service} on ${formattedDate} at ${formattedTime}`;
  const body = [
    "Hello S-Tech Auto Repair,",
    "",
    "I'd like to request an appointment with the following details:",
    "",
    `Service: ${form.service}`,
    `Requested date: ${formattedDate}`,
    `Requested time: ${formattedTime}`,
    `First name: ${form.firstName}`,
    `Phone: ${form.phone || "Not provided"}`,
    `Email: ${form.email || "Not provided"}`,
    `Vehicle: ${form.vehicleYear} ${form.vehicleMake} ${form.vehicleModel}`,
    `Notes: ${form.notes || "None provided"}`,
  ].join("\n");

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildGoogleCalendarHref(form: FormState, formattedDate: string, formattedTime: string) {
  const start = toCalendarDate(form.date, form.time);
  const end = new Date(start.getTime() + APPOINTMENT_DURATION_MINUTES * 60 * 1000);
  const title = `Tentative S-Tech appointment: ${form.service}`;
  const details = [
    "This appointment time was booked through the S-Tech Auto Repair website.",
    "",
    `Customer: ${form.firstName}`,
    `Vehicle: ${form.vehicleYear} ${form.vehicleMake} ${form.vehicleModel}`,
    `Requested time: ${formattedDate} at ${formattedTime}`,
    `Notes: ${form.notes || "None provided"}`,
  ].join("\n");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${toUtcCalendarStamp(start)}/${toUtcCalendarStamp(end)}`,
    details,
    location: `${site.address.streetAddress}, ${site.address.addressLocality}, ${site.address.addressRegion} ${site.address.postalCode}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function buildIcsContent(form: FormState, formattedDate: string, formattedTime: string) {
  const start = toCalendarDate(form.date, form.time);
  const end = new Date(start.getTime() + APPOINTMENT_DURATION_MINUTES * 60 * 1000);
  const description = [
    "This appointment time was booked through the S-Tech Auto Repair website.",
    "",
    `Customer: ${form.firstName}`,
    `Phone: ${form.phone || "Not provided"}`,
    `Email: ${form.email || "Not provided"}`,
    `Vehicle: ${form.vehicleYear} ${form.vehicleMake} ${form.vehicleModel}`,
    `Requested time: ${formattedDate} at ${formattedTime}`,
    `Notes: ${form.notes || "None provided"}`,
  ]
    .join("\\n")
    .replace(/,/g, "\\,");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//S-Tech Auto Repair//Appointment Request//EN",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@stechautorepair.com`,
    `DTSTAMP:${toUtcCalendarStamp(new Date())}`,
    `DTSTART:${toUtcCalendarStamp(start)}`,
    `DTEND:${toUtcCalendarStamp(end)}`,
    `SUMMARY:Tentative S-Tech appointment: ${form.service}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${site.address.streetAddress}\\, ${site.address.addressLocality}\\, ${site.address.addressRegion} ${site.address.postalCode}`,
    "STATUS:TENTATIVE",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function AppointmentRequestForm() {
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);
  const [error, setError] = useState("");
  const [submission, setSubmission] = useState<SubmissionState | null>(null);

  const minDate = formatDateForInput(new Date());
  const maxDate = formatDateForInput(addDays(new Date(), 90));

  useEffect(() => {
    return () => {
      if (submission?.icsHref) {
        URL.revokeObjectURL(submission.icsHref);
      }
    };
  }, [submission]);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formState.phone && !formState.email) {
      setError("Please give S-Tech either a mobile number or an email so the shop can reach you about your appointment.");
      return;
    }

    if (isWeekend(formState.date)) {
      setError("Please choose a weekday appointment time. S-Tech scheduling is Monday through Friday.");
      return;
    }

    setError("");

    const formattedDate = getFormattedDate(formState.date);
    const formattedTime = getFormattedTime(formState.time);
    const mailtoHref = buildMailtoHref(formState, formattedDate, formattedTime);
    const googleCalendarHref = buildGoogleCalendarHref(formState, formattedDate, formattedTime);
    const icsContent = buildIcsContent(formState, formattedDate, formattedTime);
    const icsHref = URL.createObjectURL(new Blob([icsContent], { type: "text/calendar" }));

    setSubmission((current) => {
      if (current?.icsHref) {
        URL.revokeObjectURL(current.icsHref);
      }

      return {
        ...formState,
        formattedDate,
        formattedTime,
        mailtoHref,
        googleCalendarHref,
        icsHref,
      };
    });
  }

  return (
    <div className="appointment-request-grid">
      <article className="panel appointment-form-panel">
        <p className="eyebrow">Request Appointment</p>
        <h2>Choose a service, date, and time that works for you.</h2>
        <p>
          Keep it simple: first name, one contact method, your vehicle, and the service you need.
          No last name or VIN required.
        </p>

        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label className="field">
              <span>Requested service</span>
              <select
                name="service"
                value={formState.service}
                onChange={(event) => updateField("service", event.target.value)}
                required
              >
                {site.services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="General service consultation">General service consultation</option>
              </select>
            </label>

            <label className="field">
              <span>Requested date</span>
              <input
                type="date"
                name="date"
                min={minDate}
                max={maxDate}
                value={formState.date}
                onChange={(event) => updateField("date", event.target.value)}
                required
              />
            </label>

            <label className="field">
              <span>Requested time</span>
              <select
                name="time"
                value={formState.time}
                onChange={(event) => updateField("time", event.target.value)}
                required
              >
                <option value="" disabled>
                  Select a time
                </option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span>Mobile number</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                value={formState.phone}
                onChange={(event) => updateField("phone", event.target.value)}
              />
            </label>

            <label className="field">
              <span>First name</span>
              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                value={formState.firstName}
                onChange={(event) => updateField("firstName", event.target.value)}
                required
              />
            </label>

            <label className="field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={formState.email}
                onChange={(event) => updateField("email", event.target.value)}
              />
            </label>

            <label className="field">
              <span>Vehicle year</span>
              <input
                type="text"
                name="vehicleYear"
                inputMode="numeric"
                maxLength={4}
                value={formState.vehicleYear}
                onChange={(event) => updateField("vehicleYear", event.target.value)}
                required
              />
            </label>

            <label className="field">
              <span>Vehicle make</span>
              <input
                type="text"
                name="vehicleMake"
                value={formState.vehicleMake}
                onChange={(event) => updateField("vehicleMake", event.target.value)}
                required
              />
            </label>

            <label className="field">
              <span>Vehicle model</span>
              <input
                type="text"
                name="vehicleModel"
                value={formState.vehicleModel}
                onChange={(event) => updateField("vehicleModel", event.target.value)}
                required
              />
            </label>

            <label className="field field-wide">
              <span>Notes for the shop</span>
              <textarea
                name="notes"
                rows={5}
                value={formState.notes}
                onChange={(event) => updateField("notes", event.target.value)}
                placeholder="Tell us what you'd like checked, any warning lights, or anything helpful before your visit."
              />
            </label>
          </div>

          <p className="appointment-caption">
            Instant booking hours are Monday through Friday, 8AM to 5PM Pacific time. Add either a
            mobile number or an email so the shop has one reliable contact method.
          </p>

          {error ? (
            <p className="form-error" role="alert">
              {error}
            </p>
          ) : null}

          <button type="submit" className="button button-primary">
            Build My Appointment Request
          </button>
        </form>
      </article>

      <article className="panel appointment-sidebar">
        <p className="eyebrow">How It Works</p>
        <h2>Book online now with the minimum info the shop actually needs.</h2>
        <ul className="appointment-steps">
          <li>Pick a preferred service, weekday, and time within shop hours.</li>
          <li>Enter your first name, one contact method, and your vehicle year, make, and model.</li>
          <li>Save the appointment to Google Calendar, Apple Calendar, or Outlook right away.</li>
        </ul>
        <p>
          This keeps scheduling easy for customers without asking for last names, VINs, or anything
          extra the shop does not need to hold a time.
        </p>
      </article>

      {submission ? (
        <article className="panel appointment-summary">
          <p className="eyebrow">Ready To Send</p>
          <h2>Your appointment details are prepared.</h2>
          <p>
            {submission.firstName}, your request for <strong>{submission.service}</strong> is set
            for <strong>{submission.formattedDate}</strong> at <strong>{submission.formattedTime}</strong>.
          </p>
          <p>
            Send it to the shop now and add the time to your calendar so it stays on your day.
          </p>
          <div className="appointment-actions">
            <a className="button button-primary" href={submission.mailtoHref}>
              Email Request To S-Tech
            </a>
            <a
              className="button button-secondary"
              href={submission.googleCalendarHref}
              target="_blank"
              rel="noreferrer"
            >
              Add To Google Calendar
            </a>
            <a className="button button-secondary" href={submission.icsHref} download="stech-appointment.ics">
              Download Calendar File
            </a>
          </div>
        </article>
      ) : null}
    </div>
  );
}
