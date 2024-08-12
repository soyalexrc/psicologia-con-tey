import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseSitemap: MetadataRoute.Sitemap = [
        {
            url: 'https://psicologiacontey.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://psicologiacontey.com/productos/ebook',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9,
        }
    ];
    return baseSitemap;
}
