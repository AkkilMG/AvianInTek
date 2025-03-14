import { MetadataRoute } from "next";

const BASE = "https://avianintek.com";

export default async function SiteMap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${BASE}/`,
            lastModified: "2025-03-14",
            changeFrequency: "daily",
            priority: 1.0
        }
    ]
}

