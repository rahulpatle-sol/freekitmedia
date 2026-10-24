import { Container } from "@/components/ui/Container";
import { marqueeNames } from "@/content/site";
import { cn } from "@/lib/utils";

export function PartnerMarquee() {
  const names = [...marqueeNames, ...marqueeNames];
  return (
    <section aria-label="Hamare partner brands" className="overflow-hidden border-y border-grey-200 bg-paper py-6">
      <Container className="mb-4 text-xs font-semibold tracking-[0.18em] text-grey-400 uppercase">
        Kin brands ke saath kaam hua hai
      </Container>
      <div className="marquee overflow-hidden">
        <div className="marquee-track flex w-max items-center">
          {names.map((name, i) => (
            <span
              key={`${name}-${i}`}
              aria-hidden={i >= marqueeNames.length}
              className={cn(
                "font-display flex items-center text-xl font-extrabold tracking-tight whitespace-nowrap",
                i % 2 === 0 ? "text-ink" : "text-grey-400",
              )}
            >
              <span className="px-7">{name}</span>
              <span aria-hidden="true" className="size-1.5 bg-brand" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
