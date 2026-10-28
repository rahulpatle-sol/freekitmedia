import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import { Container } from "@/components/ui/Container";
import { locationPages } from "@/content/locations";

export const metadata: Metadata = {
  title: "Digital Marketing Locations in Chhattisgarh",
  description:
    "Explore FreeKit Media digital marketing support for businesses in Bilaspur, Ambikapur and Raipur, Chhattisgarh.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <SubpageHeader />
      <main id="main" className="flex-1">
        <section className="bg-ink py-16 text-paper sm:py-24">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Locations / Chhattisgarh
            </p>
            <h1 className="font-display mt-5 max-w-4xl text-h1 font-extrabold leading-[0.98] tracking-[-0.04em]">
              Digital marketing shaped around your city and customers.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 sm:text-lg">
              See how we approach local content, campaigns and customer
              enquiries in Bilaspur, Ambikapur and Raipur.
            </p>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <div className="grid gap-8 md:grid-cols-3">
              {locationPages.map((location) => (
                <article
                  key={location.slug}
                  className="flex flex-col border-t border-ink/15 py-6"
                >
                  <h2 className="font-display text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                    Digital marketing in {location.city}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-grey-600 sm:text-base">
                    {location.intro}
                  </p>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-deep"
                  >
                    Explore {location.city}
                    <span aria-hidden="true">↗</span>
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
