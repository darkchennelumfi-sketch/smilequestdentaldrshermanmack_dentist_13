"use client";

import * as React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  CheckCircle2,
  Loader2,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input, Select, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { bookingSchema, type BookingValues } from "@/lib/booking";
import { appointmentTypes, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const DRAFT_KEY = "smilequest-booking-draft";

type FieldErrorProps = {
  id: string;
  message?: string;
};

function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-oxblood">
      {message}
    </p>
  );
}

export function BookingForm() {
  const [step, setStep] = React.useState<1 | 2>(1);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      appointmentType: "",
      message: "",
      acknowledge: false,
      company: "",
    },
  });

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = form;

  const watched = useWatch({ control });

  React.useEffect(() => {
    try {
      const raw = window.localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Partial<BookingValues>;
        reset({ ...form.getValues(), ...saved });
      }
    } catch {
      // A malformed draft should never block the form.
    }
  }, [form, reset]);

  const persistDraft = () => {
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(form.getValues()));
    } catch {
      // Storage may be unavailable in private browsing.
    }
  };

  const continueToStepTwo = async () => {
    const valid = await trigger(["firstName", "lastName", "email", "phone"]);
    if (valid) setStep(2);
  };

  const onSubmit = handleSubmit(
    async (values) => {
      setSubmitError(null);
      try {
        const response = await fetch("/api/appointment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        window.localStorage.removeItem(DRAFT_KEY);
        setSubmitted(true);
      } catch {
        setSubmitError(
          "We couldn’t send your request just now. Please call us at 701-662-8191 and we’ll take care of you.",
        );
      }
    },
    (formErrors) => {
      if (
        formErrors.firstName ||
        formErrors.lastName ||
        formErrors.email ||
        formErrors.phone
      ) {
        setStep(1);
      }
    },
  );

  if (submitted) {
    const firstName = form.getValues("firstName");
    return (
      <div className="relative overflow-hidden rounded-3xl border border-forest/10 bg-ivory p-8 text-center shadow-soft sm:p-12">
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 size-64 -translate-x-1/2 rounded-full bg-sage-pale/60 blur-3xl"
        />
        <div className="relative">
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-forest text-cream">
            <CheckCircle2 className="size-7" />
          </span>
          <p className="mt-6 text-eyebrow text-oxblood">Request received</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            Thank you{firstName ? `, ${firstName}` : ""}.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-forest/70">
            Our team will reach out to confirm your appointment time. If you need
            care sooner, please call us directly.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="dark">
              <a href={site.phoneHref}>
                <Phone />
                Call {site.phone}
              </a>
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                reset();
                setStep(1);
                setSubmitted(false);
              }}
            >
              Send another request
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const progress = step === 1 ? 50 : 100;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-forest/10 bg-ivory shadow-soft">
      <div className="border-b border-forest/10 px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-eyebrow text-oxblood">Appointment request</p>
          <p className="font-mono text-[0.65rem] tracking-[0.18em] text-forest/65">
            STEP 0{step} / 02
          </p>
        </div>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-forest/10">
          <div
            className="h-full rounded-full bg-oxblood transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        onChange={persistDraft}
        noValidate
        className="p-6 sm:p-8"
      >
        <div className="sr-only" aria-hidden="true">
          <Label htmlFor="company">Company</Label>
          <Input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
        </div>

        {step === 1 ? (
          <div className="animate-[fade-in_300ms_ease]">
            <div className="mb-6 flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-bone text-forest">
                <CalendarCheck className="size-4" />
              </span>
              <div>
                <h2 className="font-display text-2xl text-forest">First, tell us about you.</h2>
                <p className="mt-1 text-sm text-forest/70">
                  We’ll only use these details to follow up about your request.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName">
                  First name <span className="text-oxblood">*</span>
                </Label>
                <Input
                  id="firstName"
                  autoComplete="given-name"
                  placeholder="First name"
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  {...register("firstName")}
                />
                <FieldError id="firstName-error" message={errors.firstName?.message} />
              </div>
              <div>
                <Label htmlFor="lastName">
                  Last name <span className="text-oxblood">*</span>
                </Label>
                <Input
                  id="lastName"
                  autoComplete="family-name"
                  placeholder="Last name"
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  {...register("lastName")}
                />
                <FieldError id="lastName-error" message={errors.lastName?.message} />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="email">
                  Email <span className="text-oxblood">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  {...register("email")}
                />
                <FieldError id="email-error" message={errors.email?.message} />
              </div>
              <div>
                <Label htmlFor="phone">
                  Phone <span className="text-oxblood">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(701) 000-0000"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  {...register("phone")}
                />
                <FieldError id="phone-error" message={errors.phone?.message} />
              </div>
            </div>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-forest/65">
                Prefer to talk? Call{" "}
                <a href={site.phoneHref} className="text-forest underline">
                  {site.phone}
                </a>
                .
              </p>
              <Button type="button" onClick={continueToStepTwo}>
                Continue
                <ArrowRight />
              </Button>
            </div>
          </div>
        ) : (
          <div className="animate-[fade-in_300ms_ease]">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-bone text-forest">
                  <CalendarCheck className="size-4" />
                </span>
                <div>
                  <h2 className="font-display text-2xl text-forest">How can we help?</h2>
                  <p className="mt-1 text-sm text-forest/70">
                    Choose the reason for your visit and add anything we should know.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex shrink-0 items-center gap-1.5 text-xs text-forest/65 transition-colors hover:text-forest"
              >
                <ArrowLeft className="size-3.5" />
                Edit details
              </button>
            </div>

            <div className="rounded-2xl bg-bone/70 p-4 text-xs text-forest/70">
              <span className="font-medium text-forest">
                {watched.firstName} {watched.lastName}
              </span>
              <span className="mx-2 text-forest/65">·</span>
              {watched.email}
              <span className="mx-2 text-forest/65">·</span>
              {watched.phone}
            </div>

            <div className="mt-5">
              <Label htmlFor="appointmentType">
                I am making an appointment for <span className="text-oxblood">*</span>
              </Label>
              <Select
                id="appointmentType"
                aria-invalid={Boolean(errors.appointmentType)}
                aria-describedby={errors.appointmentType ? "appointmentType-error" : undefined}
                {...register("appointmentType")}
              >
                <option value="">Choose an option</option>
                {appointmentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
              <FieldError
                id="appointmentType-error"
                message={errors.appointmentType?.message}
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="message">How can we help you?</Label>
              <Textarea
                id="message"
                placeholder="Share anything you’d like our team to know before we call."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                {...register("message")}
              />
              <FieldError id="message-error" message={errors.message?.message} />
            </div>

            <div className="mt-5">
              <label
                htmlFor="acknowledge"
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-2xl border p-4 text-xs leading-5 transition-colors",
                  errors.acknowledge
                    ? "border-oxblood/50 bg-oxblood/5"
                    : "border-forest/10 bg-bone/40 hover:border-forest/20",
                )}
              >
                <span className="relative mt-0.5 grid size-5 shrink-0 place-items-center">
                  <input
                    id="acknowledge"
                    type="checkbox"
                    aria-invalid={Boolean(errors.acknowledge)}
                    aria-describedby={errors.acknowledge ? "acknowledge-error" : undefined}
                    className="peer size-5 appearance-none rounded-md border border-forest/25 bg-white transition-colors checked:border-oxblood checked:bg-oxblood focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
                    {...register("acknowledge")}
                  />
                  <Check className="pointer-events-none absolute size-3 text-cream opacity-0 peer-checked:opacity-100" strokeWidth={3} />
                </span>
                <span className="text-forest/70">
                  I understand this is an appointment request. Our team will reach
                  out to confirm the time.
                  <span className="block text-forest/65">
                    Please don’t include private health details in this form.
                  </span>
                </span>
              </label>
              <FieldError id="acknowledge-error" message={errors.acknowledge?.message} />
            </div>

            {submitError ? (
              <p role="alert" className="mt-4 rounded-xl bg-oxblood/8 p-3 text-xs leading-5 text-oxblood">
                {submitError}
              </p>
            ) : null}

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-1.5 text-xs text-forest/65">
                <ShieldCheck className="size-3.5" />
                Your information stays with our team.
              </p>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Sending request
                  </>
                ) : (
                  <>
                    Submit request
                    <ArrowRight />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </form>

      <div className="border-t border-forest/10 bg-bone/50 px-6 py-4 text-center text-[0.68rem] text-forest/65 sm:px-8">
        Prefer to call?{" "}
        <a href={site.phoneHref} className="font-medium text-forest/70 underline">
          {site.phone}
        </a>{" "}
        ·{" "}
        <Link href="/plan-your-visit" className="font-medium text-forest/70 underline">
          What to expect
        </Link>
      </div>
    </div>
  );
}
