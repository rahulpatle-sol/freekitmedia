import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { repo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "FreeKit Media ka blog — digital growth ki simple guide, Hinglish mein.",
};

export default function BlogIndex() {
  const posts = repo.blog.list();
  return (
    <main id="main" className="pb-28">
      <div className="bg-ink pt-36 pb-14 text-paper sm:pt-40">
        <Container>
          <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            Blog
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-h1 font-bold leading-[1.05] tracking-[-0.02em]">
            Simple guides, <span className="text-brand">growth ke logic</span>,
            jhooth ke bina
          </h1>
        </Container>
      </div>
      <Container className="max-w-5xl pt-14">
        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-3xl border border-grey-200 bg-white p-8 transition-shadow hover:shadow-[0_20px_50px_-24px_rgba(11,11,11,0.25)]"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-grey-400">
                <span>{post.updated}</span>
                <span aria-hidden="true">•</span>
                <span>{post.minutes} min read</span>
              </div>
              <h2 className="font-display mt-3 text-h3 font-bold tracking-tight">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-grey-600 sm:text-base">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand-deep"
              >
                Padho
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
  );
}
