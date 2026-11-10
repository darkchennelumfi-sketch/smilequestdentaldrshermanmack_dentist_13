import { NextResponse } from "next/server";

import { bookingSchema } from "@/lib/booking";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again.", fields: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // A hidden field catches basic form spam without involving the patient.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  // In production this is where the request would be delivered to the practice.
  console.info("[SmileQuest] Appointment request", {
    name: `${parsed.data.firstName} ${parsed.data.lastName}`,
    email: parsed.data.email,
    phone: parsed.data.phone,
    appointmentType: parsed.data.appointmentType,
  });

  return NextResponse.json({ ok: true });
}
