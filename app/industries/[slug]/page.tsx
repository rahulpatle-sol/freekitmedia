import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocPage, DocFallback } from "@/components/blocks/DocPage";
import type { Block } from "@/lib/content/types";
import { repo } from "@/lib/content";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return repo.industries.list().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = repo.industries.bySlug(slug);
  if (!entry) return {};
  return {
    title: `${entry.name} — digital marketing`,
    description: entry.problemLine,
  };
}

export default function IndustryPage(props: PageProps<"/industries/[slug]">) {
  return (
    <Suspense fallback={<DocFallback />}>
      <Content slugPromise={props.params} />
    </Suspense>
  );
}

async function Content({ slugPromise }: { slugPromise: Promise<Params> }) {
  const { slug } = await slugPromise;
  const entry = repo.industries.bySlug(slug);
  if (!entry) notFound();
  const blocks: Block[] = [
    { type: "heading", text: "Aaj ka problem", level: 2 },
    { type: "text", text: entry.problemLine },
    { type: "heading", text: "Hum kya karte hain", level: 2 },
    { type: "list", items: entry.weDo },
    {
      type: "cta",
      title: `${entry.name} business ho toh pehle yahi karo`,
      text: "Free digital audit mein hum aapki current online position check karke batate hain — customer aapko kahan miss kar raha hai.",
      href: "/#contact",
      label: "Free Digital Audit Lo",
    },
  ];
  return (
    <DocPage
      entry={{
        eyebrow: "Industry",
        title: entry.name,
        intro: entry.problemLine,
        blocks,
      }}
      backHref="/#proof"
      backLabel="Sab industries dekho"
    />
  );
}
