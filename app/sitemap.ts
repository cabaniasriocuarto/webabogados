import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL ?? "https://estudiobendersky.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/consulta-online`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
    },
  ];
}
