import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import { Container } from "@/components/ui/Container";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry-specific marketing considerations and digital services from FreeKit Media.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <SubpageHeader />
      <main id="main" className="flex-1">
        <section className="bg-[#F7F6F2] py-16 sm:py-24">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep">
              Industries / Local context matters
            </p>
            <h1 className="font-display mt-5 max-w-4xl text-h1 font-extrabold leading-[0.98] tracking-[-0.04em]">
              Different businesses. Different customer journeys.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-grey-600 sm:text-lg">
              Explore the challenges and approaches described for the
              industries we serve.
            </p>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <div className="grid gap-x-12 sm:grid-cols-2">
              {industries.map((industry, index) => (
                <article
                  key={industry.slug}
                  className="border-t border-ink/15 py-7 sm:py-9"
                >
                  <p className="font-mono text-xs text-brand-deep">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display mt-4 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                    {industry.name}
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-grey-600 sm:text-base">
                    {industry.problemLine}
                  </p>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-deep"
                  >
                    See our approach <span aria-hidden="true">↗</span>
                    <span className="sr-only"> for {industry.name}</span>
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
