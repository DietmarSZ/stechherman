export const runtime = "nodejs";

const DEFAULT_INTAKE_URL = "https://svwapp.com/api/appointments/intake";

type AppointmentRequestPayload = {
  service?: string;
  date?: string;
  time?: string;
  firstName?: string;
  phone?: string;
  email?: string;
  vehicleYear?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  notes?: string;
};

function buildVehicleDescription(payload: AppointmentRequestPayload) {
  const vehicle = [payload.vehicleYear, payload.vehicleMake, payload.vehicleModel]
    .map((value) => value?.trim() ?? "")
    .filter(Boolean)
    .join(" ");
  const service = payload.service?.trim() ?? "";

  return [vehicle, service].filter(Boolean).join(" • ");
}

function buildNotes(payload: AppointmentRequestPayload) {
  const lines = ["Source: stechautorepair.com"];

  if (payload.email?.trim()) {
    lines.push(`Email: ${payload.email.trim()}`);
  }

  if (payload.notes?.trim()) {
    lines.push("", "Customer notes:", payload.notes.trim());
  }

  return lines.join("\n");
}

export async function POST(request: Request) {
  const token = process.env.STECH_APPOINTMENT_INTAKE_TOKEN?.trim();

  if (!token) {
    return Response.json({ error: "Missing STECH_APPOINTMENT_INTAKE_TOKEN." }, { status: 503 });
  }

  let payload: AppointmentRequestPayload;

  try {
    payload = (await request.json()) as AppointmentRequestPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const intakeUrl = process.env.SVW_APPOINTMENT_INTAKE_URL?.trim() || DEFAULT_INTAKE_URL;

  try {
    const intakeResponse = await fetch(intakeUrl, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        appointmentDate: payload.date,
        appointmentTime: payload.time,
        customerName: payload.firstName,
        customerPhone: payload.phone,
        vehicleDescription: buildVehicleDescription(payload),
        notes: buildNotes(payload),
      }),
      cache: "no-store",
    });

    const intakeBody = (await intakeResponse.json().catch(() => null)) as
      | { appointmentId?: number | null; error?: string; status?: string }
      | null;

    if (!intakeResponse.ok) {
      return Response.json(
        { error: intakeBody?.error || "Unable to send the appointment request to S-Tech right now." },
        { status: intakeResponse.status },
      );
    }

    return Response.json(
      {
        appointmentId: intakeBody?.appointmentId ?? null,
        status: intakeBody?.status ?? "Appt made",
      },
      { status: 201 },
    );
  } catch {
    return Response.json(
      { error: "Unable to send the appointment request to S-Tech right now." },
      { status: 502 },
    );
  }
}
