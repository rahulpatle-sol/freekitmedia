import { Container } from "@/components/ui/Container";
import { brandStyleClasses, brands } from "@/data/brands";
import { cn } from "@/lib/utils";

function LogoWordmark({
  name,
  style,
  hidden = false,
}: {
  name: string;
  style: keyof typeof brandStyleClasses;
  hidden?: boolean;
}) {
  return (
    <span
      aria-hidden={hidden || undefined}
      className={cn(
        "font-display whitespace-nowrap text-ink/40 transition-colors hover:text-ink/70",
        brandStyleClasses[style],
      )}
    >
      {name}
    </span>
  );
}

export function BrandDeals() {
  return (
    <section
      aria-label="Brands jo FreeKit Media ke saath hai"
      className="border-y border-ink/[0.06] bg-cream py-8 sm:py-10"
    >
      <Container>
        <p className="text-center text-xs font-semibold tracking-[0.18em] text-ink/50 uppercase">
          Brands jo humpe bharosa karte hain
        </p>
      </Container>
      <div className="marquee mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-14 pr-14">
          {brands.map((brand) => (
            <LogoWordmark key={brand.name} name={brand.name} style={brand.style} />
          ))}
          {brands.map((brand) => (
            <LogoWordmark key={`dup-${brand.name}`} name={brand.name} style={brand.style} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
