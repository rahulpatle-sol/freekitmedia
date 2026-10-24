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
      title: `Talk through your ${entry.name.toLowerCase()} business goals`,
      text: "Request a relaxed digital audit. We’ll review your online presence and discuss practical next steps.",
      href: "/contact",
      label: "Request a free audit",
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
      backHref="/industries"
      backLabel="Browse all industries"
    />
  );
}
