import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import type { Block } from "@/lib/content/types";

export type DocEntry = {
  eyebrow: string;
  title: string;
  intro?: string;
  chips?: string[];
  blocks: Block[];
};

export function DocPage({
  entry,
  backHref,
  backLabel,
}: {
  entry: DocEntry;
  backHref: string;
  backLabel: string;
}) {
  return (
    <div className="pb-28">
      <div className="bg-ink pt-36 pb-14 text-paper sm:pt-40">
        <Container>
          <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            {entry.eyebrow}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-h1 font-bold leading-[1.05] tracking-[-0.02em]">
            {entry.title}
          </h1>
          {entry.intro && (
            <p className="mt-4 max-w-2xl text-lead text-paper/65">
              {entry.intro}
            </p>
          )}
          {entry.chips && entry.chips.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {entry.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-paper/15 bg-paper/[0.05] px-3 py-1 text-xs font-medium text-paper/70"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
        </Container>
      </div>
      <Container className="max-w-3xl">
        <BlockRenderer blocks={entry.blocks} />
        <Link
          href={backHref}
          className="mt-16 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand-deep"
        >
          <Icon name="chevronRight" className="size-4 rotate-180" />
          {backLabel}
        </Link>
      </Container>
    </div>
  );
}

export function DocFallback() {
  return (
    <div className="bg-ink pt-36 pb-14 sm:pt-40">
      <Container>
        <div className="h-4 w-32 rounded-full bg-paper/10" />
        <div className="mt-6 h-12 w-2/3 rounded-2xl bg-paper/10" />
        <div className="mt-4 h-4 w-1/2 rounded-full bg-paper/10" />
      </Container>
    </div>
  );
}
