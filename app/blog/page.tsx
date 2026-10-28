import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { repo } from "@/lib/content";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Digital Marketing Guides",
  description:
    "Practical digital marketing guides from FreeKit Media on content, ads, social media and online growth.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = repo.blog.list();
  return (
    <>
      <SubpageHeader />
      <main id="main" className="flex-1 pb-16 lg:pb-0">
        <div className="bg-ink pt-16 pb-14 text-paper">
          <Container>
            <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
              Blog
            </p>
            <h1 className="font-display mt-4 max-w-3xl text-h1 leading-[1.05] font-extrabold tracking-[-0.02em]">
              Digital marketing guides,{" "}
              <span className="text-brand">growth ke logic</span>, jhooth ke
              bina
            </h1>
          </Container>
        </div>
        <Container className="max-w-5xl pt-14">
          <div className="border-t border-ink/10">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group border-b border-ink/10 py-8 sm:py-10"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-grey-400 tabular-nums">
                  <span>{post.updated}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.minutes} min read</span>
                </div>
                <h2 className="font-display mt-3 text-h3 leading-tight font-extrabold tracking-tight">
                  <Link href={`/blog/${post.slug}`} className="link-underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-grey-600 sm:text-base">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand-deep"
                >
                  Explore this article
                  <Icon
                    name="arrowRight"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
