import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocPage, DocFallback } from "@/components/blocks/DocPage";
import { JsonLd, breadcrumbJsonLd, openGraph } from "@/lib/seo";
import { repo } from "@/lib/content";

export const collectionKey = "partners";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return repo.partners.list().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/partners/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = repo.partners.bySlug(slug);
  if (!entry) return {};
  const title = `${entry.name} — ${entry.industry}`;
  return {
    title,
    description: entry.oneLine,
    alternates: { canonical: `/partners/${entry.slug}` },
    openGraph: openGraph({
      title,
      description: entry.oneLine,
      path: `/partners/${entry.slug}`,
      image: `/og/partners/${entry.slug}.png`,
    }),
  };
}

export default function PartnerPage(props: PageProps<"/partners/[slug]">) {
  return (
    <Suspense fallback={<DocFallback />}>
      <Content slugPromise={props.params} />
    </Suspense>
  );
}

async function Content({ slugPromise }: { slugPromise: Promise<Params> }) {
  const { slug } = await slugPromise;
  const entry = repo.partners.bySlug(slug);
  if (!entry) notFound();
  return (
    <>
      <DocPage
        entry={{
          eyebrow: `Partner — ${entry.industry}`,
          title: entry.name,
          intro: entry.oneLine,
          chips: [
            entry.industry,
            entry.city,
            ...(entry.franchise ? ["Franchise"] : []),
          ],
          blocks: [
            { type: "heading", text: "Humne kya kiya", level: 2 },
            { type: "text", text: entry.whatWeDid },
            ...entry.blocks,
          ],
        }}
        backHref="/partners"
        backLabel="Browse all partners"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Partners", path: "/partners" },
          { name: entry.name, path: `/partners/${entry.slug}` },
        ])}
      />
    </>
  );
}
