import { Container } from "@/components/ui/Container";
import { marqueeNames } from "@/content/site";
import { cn } from "@/lib/utils";

export function PartnerMarquee() {
  const names = [...marqueeNames, ...marqueeNames];
  return (
    <section aria-label="Hamare partner brands" className="border-y border-grey-200 bg-mist py-6">
      <div className="marquee overflow-hidden">
        <div className="marquee-track flex w-max items-center">
          {names.map((name, i) => (
            <span
              key={`${name}-${i}`}
              aria-hidden={i >= marqueeNames.length}
              className={cn(
                "font-display flex items-center text-xl font-semibold tracking-tight whitespace-nowrap",
                i % 2 === 0 ? "text-ink" : "text-grey-400",
              )}
            >
              <span className="px-6">{name}</span>
              <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
            </span>
          ))}
        </div>
      </div>
      <Container className="mt-2 text-center text-xs text-grey-400">
        Franchise partners ke official stores ke saath kaam karte hain — logos aane waale news mein.
      </Container>
    </section>
  );
}
