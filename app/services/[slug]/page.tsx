import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocFallback } from "@/components/blocks/DocPage";
import { Footer } from "@/components/sections/Footer";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { servicePageBySlug } from "@/content/service-pages";
import { repo } from "@/lib/content";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return repo.services.list().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePageBySlug(slug);
  if (!page) return {};
  return {
    title: `${page.title} — Service ${page.num}`,
    description: page.metaDescription,
    alternates: { canonical: `/services/${page.slug}` },
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
  const page = servicePageBySlug(slug);
  if (!page) notFound();
  return (
    <>
      <SubpageHeader />
      <ServiceDetail service={page} />
      <Footer />
    </>
  );
}
