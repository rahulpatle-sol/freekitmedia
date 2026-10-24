import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { repo } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  return [
    { url: base, lastModified: now, priority: 1 },
    { url: `${base}/contact`, lastModified: now, priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, priority: 0.6 },
    { url: `${base}/services`, lastModified: now, priority: 0.8 },
    { url: `${base}/partners`, lastModified: now, priority: 0.6 },
    { url: `${base}/industries`, lastModified: now, priority: 0.6 },
    { url: `${base}/case-studies`, lastModified: now, priority: 0.7 },
    ...repo.services.list().map((entry) => ({
      url: `${base}/services/${entry.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...repo.partners.list().map((entry) => ({
      url: `${base}/partners/${entry.slug}`,
      lastModified: now,
      priority: 0.6,
    })),
    ...repo.industries.list().map((entry) => ({
      url: `${base}/industries/${entry.slug}`,
      lastModified: now,
      priority: 0.6,
    })),
    ...repo.caseStudies.list().map((entry) => ({
      url: `${base}/case-studies/${entry.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...repo.blog.list().map((entry) => ({
      url: `${base}/blog/${entry.slug}`,
      lastModified: now,
      priority: 0.5,
    })),
  ];
}
