import type { MetadataRoute } from "next";
import { servicePages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/contact", "/schedule"];
  const serviceRoutes = servicePages.map((servicePage) => `/services/${servicePage.slug}`);

  return [...routes, ...serviceRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.75 : 0.8,
  }));
}
