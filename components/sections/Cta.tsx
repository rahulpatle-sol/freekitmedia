import { Button, WhatsAppButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

const reassurance = [
  { icon: "shield", label: "Govt. registered agency" },
  { icon: "clock", label: "Replies within 24 hrs" },
  { icon: "star", label: "4.9/5 average rating" },
] as const;

export function Cta() {
  return (
    <section id="contact" className="pb-24 md:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand px-6 py-14 text-center sm:px-12 sm:py-20">
          <span
            aria-hidden="true"
            className="absolute -right-20 -top-24 size-72 rounded-full border-[14px] border-ink/10"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-24 -left-16 size-56 rounded-full border-[10px] border-white/30"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
              Ready ho badhne ke liye?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
              15-min free call. Seedhi baat, saaf plan, transparent pricing — no
              gimmicks, no lock-in surprise.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <WhatsAppButton text={site.whatsapp.ctaText} variant="ink" size="lg">
                Free strategy call book karo
              </WhatsAppButton>
              <Button href="#plans" variant="white" size="lg">
                Pehle plans dekho
              </Button>
            </div>
            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5">
              {reassurance.map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-sm font-medium text-ink/75">
                  <Icon name={item.icon} className="size-4" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
