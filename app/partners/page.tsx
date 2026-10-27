import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import { Container } from "@/components/ui/Container";
import { partners } from "@/content/partners";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Brands and businesses FreeKit Media has worked alongside across Chhattisgarh.",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <SubpageHeader />
      <main id="main" className="flex-1">
        <section className="bg-ink py-16 text-paper sm:py-24">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Partners / The work, together
            </p>
            <h1 className="font-display mt-5 max-w-4xl text-h1 font-extrabold leading-[0.98] tracking-[-0.04em]">
              Relationships built on real work.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 sm:text-lg">
              A look at the partner brands and the work described in our
              project notes.
            </p>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <div className="grid gap-px bg-ink/15 md:grid-cols-2">
              {partners.map((partner) => (
                <article
                  key={partner.slug}
                  className="flex min-h-64 flex-col bg-paper p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-grey-400">
                    <span>{partner.industry}</span>
                    <span>
                      {partner.city}
                      {partner.franchise ? " / Franchise" : ""}
                    </span>
                  </div>
                  <h2 className="font-display mt-8 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                    {partner.name}
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-grey-600 sm:text-base">
                    {partner.oneLine}
                  </p>
                  <Link
                    href={`/partners/${partner.slug}`}
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-ink hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-deep"
                  >
                    Explore partner
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only">: {partner.name}</span>
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
