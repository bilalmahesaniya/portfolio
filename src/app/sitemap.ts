import { MetadataRoute } from "next";
import { SEED_PROJECTS } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bilalmahesaniya.com";

  const projectEntries: MetadataRoute.Sitemap = SEED_PROJECTS.map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: project.featured ? 0.9 : 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectEntries,
  ];
}
