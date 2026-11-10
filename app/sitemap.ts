import type { MetadataRoute } from "next";

import { legalPages, services } from "@/lib/site";

const baseUrl = "https://sqdental.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/plan-your-visit",
    "/request-appointment",
    ...services.map((service) => `/services/${service.slug}`),
    ...legalPages.map((page) => `/legal/${page.slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
