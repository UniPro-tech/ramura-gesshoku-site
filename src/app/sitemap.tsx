import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arane.uniproject.jp/gesshoku/",
      priority: 1,
    },
    {
      url: "https://arane.uniproject.jp/gesshoku/about",
      priority: 0.8,
    },
    {
      url: "https://arane.uniproject.jp/gesshoku/download",
      priority: 0.8,
    },
  ];
}
