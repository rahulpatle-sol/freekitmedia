import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/content/site";

export function SubpageHeader() {
  return (
    <header className="border-b border-grey-200 bg-paper">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="py-2" aria-label={site.name}>
          <Logo />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-2">
          <div className="hidden items-center gap-1 lg:flex">
            {site.navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                className="px-2 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/blog"
              className="px-2 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              Blog
            </Link>
          </div>
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none border border-ink/15 px-3 py-2 text-sm font-medium text-ink">
              Menu
            </summary>
            <div className="absolute right-0 top-full z-20 mt-2 w-56 border border-ink/10 bg-paper p-2 shadow-xl">
              {site.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  className="block px-3 py-2.5 text-sm font-medium text-ink/75 hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                className="block px-3 py-2.5 text-sm font-medium text-ink/75 hover:text-ink"
              >
                Blog
              </Link>
            </div>
          </details>
          <Button href="/contact" size="sm">
            {site.cta.audit}
          </Button>
        </nav>
      </Container>
    </header>
  );
}
