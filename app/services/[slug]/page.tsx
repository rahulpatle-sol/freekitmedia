import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocPage, DocFallback } from "@/components/blocks/DocPage";
import { repo } from "@/lib/content";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return repo.services.list().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = repo.services.bySlug(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.description,
  };
}

export default function ServicePage(props: PageProps<"/services/[slug]">) {
  return (
    <Suspense fallback={<DocFallback />}>
      <Content slugPromise={props.params} />
    </Suspense>
  );
}

async function Content({ slugPromise }: { slugPromise: Promise<Params> }) {
  const { slug } = await slugPromise;
  const entry = repo.services.bySlug(slug);
  if (!entry) notFound();
  return (
    <DocPage
      entry={{
        eyebrow: `Service ${entry.num} — ${entry.short}`,
        title: entry.title,
        intro: entry.description,
        chips: ["In-house team", "Monthly report", "City-specific strategy"],
        blocks: [
          { type: "heading", text: "Isme kya-kya hota hai", level: 2 },
          { type: "list", items: entry.points },
          {
            type: "cta",
            title: "Is service aapke business mein fit hai ya nahi?",
            text: "30 minute ke free audit mein bata denge — bilkul honest.",
            href: "/#contact",
            label: "Free Digital Audit Lo",
          },
        ],
      }}
      backHref="/#services"
      backLabel="Sab services dekho"
    />
  );
}
