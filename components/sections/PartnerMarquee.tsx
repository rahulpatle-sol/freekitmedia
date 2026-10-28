
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { partners } from "@/content/partners";

export function PartnerMarquee() {
  const items = [...partners, ...partners];

  return (
    <section
      id="partners"
      aria-label="Our partner brands"
      className="overflow-hidden border-y border-[#171517]/10 bg-white py-8 sm:py-10"
    >
      <Container className="mb-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#171517]/50 sm:text-xs">
          Brands we’ve worked with
        </p>
      </Container>

      <div className="brand-marquee relative overflow-hidden">
        {/* Edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-24"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-24"
        />

        <ul className="brand-marquee-track flex w-max items-center">
          {items.map((partner, index) => {
            const duplicate = index >= partners.length;

            return (
              <li
                key={`${partner.slug}-${index}`}
                aria-hidden={duplicate || undefined}
                className="flex h-16 w-40 shrink-0 items-center justify-center px-8 sm:h-20 sm:w-52 sm:px-10"
              >
                <Link
                  href={`/partners/${partner.slug}`}
                  tabIndex={duplicate ? -1 : undefined}
                  aria-label={`View our work with ${partner.name}`}
                  className="flex h-full w-full flex-col items-center justify-center gap-1 outline-offset-4"
                >
                  {partner.logo && (
                    <Image
                      src={partner.logo}
                      alt=""
                      width={300}
                      height={100}
                      sizes="(max-width: 640px) 144px, 160px"
                      className="max-h-8 w-full object-contain opacity-65 transition duration-300 hover:scale-105 hover:opacity-100 motion-reduce:transition-none sm:max-h-9"
                    />
                  )}
                  <span className="text-center text-xs font-semibold text-[#171517] sm:text-sm">
                    {partner.name}
                    {partner.franchise && (
                      <span className="ml-1 font-normal text-[#171517]/55">
                        Franchise
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
        .brand-marquee-track {
          animation: brand-logo-scroll 30s linear infinite;
        }

        .brand-marquee:hover .brand-marquee-track,
        .brand-marquee:focus-within .brand-marquee-track {
          animation-play-state: paused;
        }

        @keyframes brand-logo-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-marquee-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
