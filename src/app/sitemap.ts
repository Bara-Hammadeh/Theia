import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/technology", priority: 0.9, changeFrequency: "monthly" },
  { path: "/research", priority: 0.9, changeFrequency: "monthly" },
  { path: "/partnerships", priority: 0.9, changeFrequency: "monthly" },
  { path: "/company", priority: 0.7, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/research-collaboration", priority: 0.6, changeFrequency: "monthly" },
  { path: "/regulatory-roadmap", priority: 0.6, changeFrequency: "monthly" },
  { path: "/security", priority: 0.5, changeFrequency: "yearly" },
  { path: "/data-governance", priority: 0.5, changeFrequency: "yearly" },
  { path: "/responsible-ai", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
