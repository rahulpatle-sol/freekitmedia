import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactChannels } from "@/components/sections/ContactChannels";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Request a Free Digital Audit",
  description: `${site.cta.auditNote} Tell us about your business and we’ll be in touch.`,
  openGraph: {
    type: "website",
    description: `${site.cta.auditNote} Tell us about your business and we’ll be in touch.`,
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-svh flex-col bg-ink text-paper">
      <header className="border-b border-paper/10">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="py-2" aria-label={site.name}>
            <Logo variant="light" />
          </Link>
          <Button
            href="/"
            variant="outlineLight"
            size="sm"
            className="!hidden sm:!inline-flex"
          >
            Return home
          </Button>
          <Link
            href="/"
            className="inline-flex min-h-9 items-center px-3 text-sm font-medium text-paper/85 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:!hidden"
          >
            ← Home
          </Link>
        </Container>
      </header>

      <main id="main" className="flex-1">
        <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
              Contact
            </p>
            <h1 className="font-display mt-4 text-hero leading-[1.02] font-extrabold tracking-[-0.03em]">
              Request a free digital audit
            </h1>
            <p className="mt-6 max-w-md text-lead leading-relaxed text-paper/65">
              Tell us a little about your business. We’ll review your online
              presence and discuss practical next steps during a relaxed
              30-minute conversation, online or at your office.
            </p>
            <div className="mt-10">
              <ContactChannels />
            </div>
            <p className="mt-8 text-xs leading-relaxed text-paper/50">
              {site.tagline} {site.address.line}
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-paper p-7 text-ink shadow-[0_48px_90px_-48px_rgba(0,0,0,0.55)] sm:p-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </main>

      <footer className="border-t border-paper/10">
        <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-5 text-xs text-paper/40">
          <p>{`© 2025–2026 ${site.name}`}</p>
          <Link href="/" className="link-underline text-paper/60">
            Return to the homepage
          </Link>
        </Container>
      </footer>
    </div>
  );
}
