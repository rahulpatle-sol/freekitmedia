import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Digital Marketing Case Studies",
  description:
    "Selected FreeKit Media project stories, with outcomes and context from the available case-study data.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <SubpageHeader />
      <main id="main" className="flex-1">
        <section className="bg-ink py-16 text-paper sm:py-24">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Selected work / Case studies
            </p>
            <h1 className="font-display mt-5 max-w-4xl text-h1 font-extrabold leading-[0.98] tracking-[-0.04em]">
              Digital marketing work, with the context behind it.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 sm:text-lg">
              Project notes with the available strategy, execution, and
              outcomes. No results beyond what the source data provides.
            </p>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            {caseStudies.length > 0 ? (
              <div className="space-y-8">
                {caseStudies.map((study, index) => (
                  <article
                    key={study.slug}
                    className="grid gap-8 border-y border-ink/15 py-8 sm:py-12 lg:grid-cols-12 lg:gap-10"
                  >
                    <div className="lg:col-span-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-deep">
                        {study.industry} / {study.city} /{" "}
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="font-display mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
                        {study.title}
                      </h2>
                      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-grey-600 sm:text-base">
                        {study.summary}
                      </p>
                    </div>
                    <div className="flex flex-col justify-between gap-6 lg:col-span-5">
                      <ul className="flex flex-wrap gap-2">
                        {study.servicesUsed.map((service) => (
                          <li
                            key={service}
                            className="border border-ink/15 px-3 py-1.5 text-xs text-grey-600"
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-2 self-start text-sm font-semibold text-ink hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-deep"
                      >
                        Read the case study <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="border-y border-ink/15 py-8 text-grey-600">
                Case studies are being prepared. Check back soon.
              </p>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
