import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main id="main" className="relative flex flex-1 flex-col bg-mist">
      <Container className="flex flex-1 flex-col py-10 sm:py-14">
        <div className="flex items-center justify-between">
          <Link href="/" className="py-2" aria-label={site.name}>
            <Logo />
          </Link>
          <Link
            href="/contact"
            className="link-underline text-sm font-semibold text-ink"
          >
            {site.cta.audit}
          </Link>
        </div>

        <div className="flex flex-1 flex-col justify-center py-14">
          <p className="font-display flex items-start text-hero leading-none font-extrabold tracking-[-0.04em] text-ink sm:text-hero">
            <span>4</span>
            <span
              aria-hidden="true"
              className="mx-[0.06em] inline-block bg-ink px-[0.14em] text-brand"
            >
              0
            </span>
            <span>4</span>
          </p>
          <h1 className="font-display mt-10 max-w-2xl text-h1 leading-[1.08] font-extrabold tracking-[-0.02em]">
            Yeh page mila nahi.{" "}
            <span className="bg-brand px-2.5 box-decoration-clone">
              Aapka brand ban sakta hai.
            </span>
          </h1>
          <p className="mt-5 max-w-md text-lead leading-relaxed text-grey-600">
            Chinta mat karo — home se poora site, services aur partners sab
            yahan se pahunchte hain.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="/" size="lg">
              Return home
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              {site.cta.audit}
            </Button>
            <Link
              href="/blog"
              className="link-underline px-2 text-sm font-medium text-grey-600"
            >
              Browse the blog
            </Link>
          </div>
        </div>

        <nav
          aria-label="Services"
          className="border-t border-ink/10 pt-8 pb-4 sm:pb-8"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
            Explore our services
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between gap-4 border-t border-ink/10 py-4"
                >
                  <span className="font-display text-sm font-bold tracking-tight text-ink">
                    {service.title}
                  </span>
                  <Icon
                    name="arrowRight"
                    className="size-4 text-ink/40 transition-all group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </main>
  );
}
