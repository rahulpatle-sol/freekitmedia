"use client";

import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceVisual } from "@/components/services/visuals";
import {
  otherServices,
  type ServicePage,
  type SignatureStep,
} from "@/content/service-pages";
import { site } from "@/content/site";
import { useReveal } from "@/lib/use-reveal";
import { cn, whatsappLink } from "@/lib/utils";

const problemAccentStyles = [
  { badge: "bg-[#302644] text-white" },
  { badge: "bg-[#9673D8] text-white" },
  { badge: "bg-[#C4B5FD] text-[#302644]" },
  { badge: "bg-[#F1ECF9] text-[#8060BB] border border-[#9673D8]/25" },
];

const deliverableCardStyles = [
  { card: "border-[#302644]/10 bg-white", badge: "bg-[#302644] text-white", span: "lg:col-span-7" },
  { card: "border-[#302644]/10 bg-[#F1ECF9]", badge: "bg-[#9673D8] text-white", span: "lg:col-span-5" },
  { card: "border-[#302644]/10 bg-[#F1ECF9]", badge: "bg-[#9673D8] text-white", span: "lg:col-span-5" },
  { card: "border-[#302644]/10 bg-white", badge: "bg-[#302644] text-white", span: "lg:col-span-7" },
];

const signatureRowIcons: IconName[] = ["eye", "phone", "trendingUp", "megaphone"];

function SectionMark({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-reveal
      className="flex items-center justify-between gap-4 border-t border-[#302644]/12 pt-4"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8060BB]">
        {children}
      </p>
      <span aria-hidden="true" className="font-mono text-xs text-[#8C849C]">
        ────
      </span>
    </div>
  );
}

/* ---------------- Signature module ---------------- */

function PipelineModule({
  steps,
  note,
}: {
  steps: SignatureStep[];
  note: string;
}) {
  return (
    <div data-reveal>
      <ol className="relative flex flex-col gap-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className="group relative border-b border-white/10 py-5 pl-12 sm:border-b-0 sm:pb-8 sm:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-6 grid size-8 place-items-center rounded-full border border-[#C4B5FD]/30 bg-[#211B2E] font-mono text-[11px] text-[#C4B5FD] sm:relative sm:top-0 sm:size-9"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <p className="font-display text-base font-bold tracking-[-0.03em] text-white sm:mt-4 lg:text-[0.95rem]">
              {step.label}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-[#D0BDFB]/80 sm:text-[13px]">
              {step.detail}
            </p>

            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-4 top-[3.75rem] h-[calc(100%-2.4rem)] w-px bg-gradient-to-b from-[#9673D8]/45 to-transparent sm:left-8 sm:top-14 sm:h-px sm:w-[calc(100%-2rem)]"
              />
            )}
          </li>
        ))}
      </ol>

      <p className="mt-2 max-w-2xl border-t border-white/10 pt-5 text-sm leading-relaxed text-[#D0BDFB]/75">
        {note}
      </p>
    </div>
  );
}

function ReportModule({ steps }: { steps: SignatureStep[] }) {
  return (
    <div
      data-reveal
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#FDFCFF] text-[#29243A] shadow-[0_30px_90px_-40px_rgba(12,8,20,0.55)]"
    >
      <div className="flex items-center justify-between gap-4 border-b border-[#302644]/10 bg-[#302644] px-6 py-4 text-white sm:px-8">
        <p className="font-display text-sm font-bold tracking-tight sm:text-base">
          Monthly report
        </p>
        <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/65">
          <span className="size-1.5 rounded-full bg-[#C4B5FD]" />
          Same four. Every month.
        </p>
      </div>

      <ul className="grid sm:grid-cols-2">
        {steps.map((step, index) => {
          const IconComponent = signatureRowIcons[index] ?? "eye";
          return (
            <li
              key={step.label}
              className="flex items-start gap-4 border-b border-[#302644]/8 px-6 py-5 last:border-b-0 sm:px-8 sm:py-6 odd:sm:border-r odd:sm:border-[#302644]/8"
            >
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-[#F1ECF9] text-[#8060BB]">
                <Icon name={IconComponent} className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-[0.95rem] font-bold tracking-tight">
                  {step.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#746C83] sm:text-[13px]">
                  {step.detail}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F1ECF9] px-6 py-4 sm:px-8">
        <p className="text-xs font-medium text-[#514565] sm:text-[13px]">
          Nothing stays hidden — the report you see is the one we work from.
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7C928] px-3 py-1.5 text-[11px] font-bold text-[#302644]">
          <Icon name="badgeCheck" className="size-3.5" />
          Transparent
        </span>
      </div>
    </div>
  );
}

function BoardModule({ steps }: { steps: SignatureStep[] }) {
  return (
    <div data-reveal>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className="rounded-2xl border border-white/10 bg-[#211B2E]/60 p-5 sm:p-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C4B5FD]/70">
              Channel {String(index + 1).padStart(2, "0")}
            </p>
            <p className="font-display mt-3 text-lg font-bold tracking-[-0.03em] text-white">
              {step.label}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-[#D0BDFB]/75">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-6 max-w-2xl border-t border-white/10 pt-5 text-sm leading-relaxed text-[#D0BDFB]/75">
        All four are maintained together, every month — posting stops being the
        thing everyone forgets.
      </p>
    </div>
  );
}

function PathModule({ steps }: { steps: SignatureStep[] }) {
  return (
    <div data-reveal>
      <ol className="flex flex-col">
        {steps.map((step, index) => (
          <li key={step.label} className="relative flex gap-5 pb-8 last:pb-0">
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[1.15rem] top-12 h-[calc(100%-2.75rem)] w-px bg-gradient-to-b from-[#9673D8]/50 to-transparent"
              />
            )}
            <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-[#C4B5FD]/30 bg-[#211B2E] font-mono text-[11px] text-[#C4B5FD]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 pt-1">
              <p className="font-display text-lg font-bold tracking-[-0.03em] text-white">
                {step.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#D0BDFB]/75">
                {step.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="max-w-2xl border-t border-white/10 pt-5 text-sm leading-relaxed text-[#D0BDFB]/75">
        The first shoot is the hardest. After that, the face stops being
        stage-fright and starts being leverage.
      </p>
    </div>
  );
}

function SignatureModule({ service }: { service: ServicePage }) {
  const { signature } = service;
  const signatureModule =
    signature.kind === "pipeline" ? (
      <PipelineModule steps={signature.steps} note={signature.note} />
    ) : signature.kind === "report" ? (
      <ReportModule steps={signature.steps} />
    ) : signature.kind === "board" ? (
      <BoardModule steps={signature.steps} />
    ) : (
      <PathModule steps={signature.steps} />
    );

  return (
    <section className="relative overflow-hidden bg-[#302644] py-16 text-white sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 size-[26rem] rounded-full bg-[#9673D8]/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 size-[22rem] rounded-full bg-[#C4B5FD]/10 blur-[100px]"
      />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:items-start lg:gap-16">
          <div data-reveal className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C4B5FD]">
              <span className="size-2 rounded-full bg-[#F7C928]" />
              {signature.kicker}
            </p>

            <h2 className="font-display mt-5 text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-4xl">
              {signature.title}
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#D0BDFB]/80 sm:text-base">
              {signature.text}
            </p>

            {service.story && (
              <Link
                href={service.story.href}
                className="group mt-8 block max-w-sm rounded-2xl border border-[#C4B5FD]/25 bg-[#211B2E] p-5 transition-colors duration-300 hover:border-[#C4B5FD]/60 focus-visible:outline-2 focus-visible:outline-[#9673D8] focus-visible:outline-offset-2"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F7C928]">
                  Related story
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#D0BDFB]/85">
                  {service.story.text}
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  {service.story.label}
                  <Icon
                    name="arrowRight"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </p>
              </Link>
            )}
          </div>

          <div className="min-w-0">{signatureModule}</div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Page ---------------- */

export function ServiceDetail({ service }: { service: ServicePage }) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  const related = otherServices(service.slug);

  return (
    <main id="main" ref={ref} className="flex-1 bg-[#F8F7FC] text-[#29243A]">
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-[#302644] pb-14 pt-8 text-white sm:pb-20 sm:pt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(60%_100%_at_50%_100%,rgba(150,115,216,0.22),transparent_70%)]"
        />

        <Container className="relative">
          <div data-reveal className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-[#9673D8] focus-visible:outline-offset-4"
            >
              <Icon
                name="chevronRight"
                className="size-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5"
              />
              All services
            </Link>

            <p className="font-mono text-xs text-white/40">
              Service {service.num} / 04
            </p>
          </div>

          <div className="grid gap-10 pt-10 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-12">
            <div data-reveal className="min-w-0 lg:col-span-7">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C4B5FD]">
                <span className="size-2 rounded-full bg-[#F7C928]" />
                {service.tag}
              </p>

              <h1 className="font-display mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,4.25rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-white sm:mt-7">
                {service.headline}
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-8 text-white/70 sm:text-base sm:leading-8">
                {service.sub}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {service.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-white/75"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="primary" size="lg">
                  Get a free audit
                  <Icon
                    name="arrowRight"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Button>
                <Button
                  href={whatsappLink(
                    site.phone.primary.number,
                    site.whatsapp.ctaText,
                  )}
                  variant="outlineLight"
                  size="lg"
                >
                  Discuss on WhatsApp
                </Button>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-white/50">
                {site.cta.auditNote} Prefer to talk first? Call{" "}
                <a
                  href={`tel:${site.phone.primary.number}`}
                  className="font-semibold text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
                >
                  {site.phone.primary.display}
                </a>
                .
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#211B2E]/40 p-2 sm:p-3">
                <ServiceVisual
                  kind={service.visual}
                  className="aspect-[5/4] w-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- Problems ---------------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionMark>{service.title} · What it fixes</SectionMark>

          <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
            <div data-reveal className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <p className="flex items-center gap-2 text-xs font-semibold text-[#8060BB]">
                <span className="size-2 rounded-full bg-[#9673D8]" />
                The real reason it feels stuck
              </p>

              <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl">
                Where businesses lose customers first.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#746C83]">
                If any of these sound familiar, the fix is system — not more
                effort scattered in the same places.
              </p>
            </div>

            <div data-reveal-stagger className="min-w-0">
              {service.problems.map((problem, index) => (
                <div
                  key={problem.title}
                  data-reveal
                  className="flex items-start gap-4 border-b border-[#302644]/10 py-6 sm:gap-6 sm:py-7"
                >
                  <span
                    className={cn(
                      "grid size-8 shrink-0 place-items-center rounded-lg font-mono text-[11px] font-semibold",
                      problemAccentStyles[
                        index % problemAccentStyles.length
                      ].badge,
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold tracking-[-0.03em] sm:text-xl">
                      {problem.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-[#746C83]">
                      {problem.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- Deliverables ---------------- */}
      <section className="border-y border-[#302644]/8 bg-white py-16 sm:py-20">
        <Container>
          <SectionMark>Included</SectionMark>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 sm:mt-10">
            <h2
              data-reveal
              className="font-display max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl"
            >
              What this service delivers.
            </h2>

            <p
              data-reveal
              className="max-w-md text-sm leading-7 text-[#746C83]"
            >
              The scope is agreed before anything starts — sized to your
              business and city, then recountable at every monthly review.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {service.deliverables.map((group, index) => {
              const style = deliverableCardStyles[index % deliverableCardStyles.length];
              return (
                <div
                  key={group.group}
                  data-reveal
                  className={cn(
                    "rounded-2xl border p-6 sm:p-7",
                    style.span,
                    style.card,
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]",
                      style.badge,
                    )}
                  >
                    {group.group}
                  </span>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[#514565]"
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 size-4 shrink-0 text-[#8060BB]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------------- Signature ---------------- */}
      <SignatureModule service={service} />

      {/* ---------------- Process ---------------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionMark>The path</SectionMark>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 sm:mt-10">
            <h2
              data-reveal
              className="font-display max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl"
            >
              What happens after you contact us.
            </h2>

            <p
              data-reveal
              className="max-w-md text-sm leading-7 text-[#746C83]"
            >
              No mystery, no pressure. This is the route from your first
              message to your first monthly report.
            </p>
          </div>

          <ol
            data-reveal-stagger
            className={cn(
              "mt-10 grid gap-4",
              service.process.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4",
            )}
          >
            {service.process.map((step, index) => (
              <li
                key={step.title}
                data-reveal
                className="group relative rounded-2xl border border-[#302644]/10 bg-white p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="grid size-10 place-items-center rounded-full bg-[#302644] font-mono text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-[#8060BB]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {index === 0 && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1ECF9] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#8060BB]">
                      Step 01 · Free
                    </span>
                  )}
                </div>

                <h3 className="font-display mt-5 text-lg font-bold tracking-[-0.03em] sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#746C83]">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ---------------- Fits ---------------- */}
      <section className="border-y border-[#302644]/8 bg-white py-16 sm:py-20">
        <Container>
          <SectionMark>Fit check</SectionMark>

          <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
            <div data-reveal className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <p className="flex items-center gap-2 text-xs font-semibold text-[#8060BB]">
                <span className="size-2 rounded-full bg-[#9673D8]" />
                Where it works hardest
              </p>

              <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl">
                Built for these businesses.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#746C83]">
                We work across Chhattisgarh — Bilaspur, Ambikapur, Korba — and
                with selective online clients beyond the state.
              </p>
            </div>

            <ul data-reveal-stagger className="min-w-0">
              {service.fits.map((fit) => (
                <li
                  key={fit.label}
                  data-reveal
                  className="group flex flex-col gap-3 border-b border-[#302644]/10 py-6 sm:flex-row sm:items-start sm:gap-7 sm:py-7"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#9673D8]/25 bg-[#F1ECF9] text-[#8060BB] transition-colors duration-300 group-hover:bg-[#8060BB] group-hover:text-white">
                    <Icon name={fit.icon} className="size-5" />
                  </span>

                  <div className="min-w-0 sm:w-44 sm:shrink-0">
                    <h3 className="font-display text-lg font-bold tracking-[-0.03em]">
                      {fit.label}
                    </h3>
                  </div>

                  <p className="max-w-xl flex-1 text-sm leading-7 text-[#746C83]">
                    {fit.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionMark>Before you ask</SectionMark>
          <div className="mt-8 sm:mt-10">
            <ServiceFaq faqs={service.faqs} />
          </div>
        </Container>
      </section>

      {/* ---------------- Related ---------------- */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionMark>Where to next</SectionMark>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-[#302644]/10 bg-white px-5 py-4 transition-colors duration-300 hover:border-[#9673D8]/40 hover:bg-[#F1ECF9] focus-visible:outline-2 focus-visible:outline-[#9673D8] focus-visible:outline-offset-2"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="font-mono text-[11px] text-[#8060BB]">
                    {item.num}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-base font-bold tracking-[-0.025em] text-[#29243A]">
                      {item.title}
                    </span>
                    <span className="block text-xs text-[#746C83]">
                      {item.short}
                    </span>
                  </span>
                </span>

                <Icon
                  name="arrowRight"
                  className="size-4 shrink-0 text-[#746C83] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#8060BB]"
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- CTA band ---------------- */}
      <section className="relative overflow-hidden bg-[#302644] py-16 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-[24rem] rounded-full bg-[#9673D8]/12 blur-[110px]"
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div data-reveal className="min-w-0">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C4B5FD]">
                <span className="size-2 rounded-full bg-[#F7C928]" />
                Next step
              </p>

              <h2 className="font-display mt-5 max-w-2xl text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Start with the free audit.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                {site.cta.auditNote} We&apos;ll look at your full online
                presence, and you&apos;ll leave with a clear first move — even
                if we never work together.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="primary" size="lg">
                  Get a free audit
                  <Icon
                    name="arrowRight"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Button>
                <Button
                  href={whatsappLink(
                    site.phone.primary.number,
                    site.whatsapp.ctaText,
                  )}
                  variant="outlineLight"
                  size="lg"
                >
                  Message on WhatsApp
                </Button>
              </div>
            </div>

            <div
              data-reveal
              className="min-w-0 rounded-2xl border border-white/10 bg-[#211B2E]/60 p-6 sm:p-7"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C4B5FD]/70">
                Direct lines
              </p>

              <ul className="mt-4 space-y-3.5 text-sm">
                <li>
                  <a
                    href={`tel:${site.phone.primary.number}`}
                    className="group inline-flex min-h-10 items-center gap-3 text-white/85 transition-colors hover:text-white"
                  >
                    <span className="grid size-9 place-items-center rounded-xl bg-white/[0.06] text-[#C4B5FD]">
                      <Icon name="phone" className="size-4" />
                    </span>
                    {site.phone.primary.display}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex min-h-10 items-center gap-3 text-white/85 transition-colors hover:text-white"
                  >
                    <span className="grid size-9 place-items-center rounded-xl bg-white/[0.06] text-[#C4B5FD]">
                      <Icon name="mail" className="size-4" />
                    </span>
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <span className="grid size-9 place-items-center rounded-xl bg-white/[0.06] text-[#C4B5FD]">
                    <Icon name="mapPin" className="size-4" />
                  </span>
                  {site.cities.join(", ")}, and online beyond Chhattisgarh
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
