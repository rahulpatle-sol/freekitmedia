import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/content/site";
import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 items-center justify-center py-32">
      <Container className="flex flex-col items-center text-center">
        <Logo />
        <p className="font-display mt-10 text-hero font-bold leading-none tracking-[-0.03em] text-ink">
          4<span className="text-brand">0</span>4
        </p>
        <p className="font-display mt-6 text-h3 font-bold tracking-tight">
          Yeh page mila nahi —{" "}
          <span className="text-brand-deep">par aapka brand ban sakta hai</span>
        </p>
        <p className="mt-3 max-w-md text-lead text-grey-600">
          Chinta mat karo. Home pe wapas jao, ya seedha free digital audit lo —
          hum sambhal lenge.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary" size="lg">
            Home pe chalein
          </Button>
          <Button href="/#contact" variant="outline" size="lg">
            {site.cta.audit}
          </Button>
          <Link
            href="/blog"
            className="px-3 py-2 text-sm font-medium text-grey-600 underline-offset-4 hover:underline"
          >
            Blog dekho
          </Link>
        </div>
      </Container>
    </main>
  );
}
