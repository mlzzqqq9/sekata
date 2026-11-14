import type { APIRoute } from 'astro';
import { categories, products, articles } from '../data/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const productPaths = products.map((p) => {
    const cat = p.categorySlug || (
      p.kind.toLowerCase().includes('lebaran') ? 'hampers-lebaran' :
        p.kind.toLowerCase().includes('wedding') ? 'souvenir-wedding' :
          p.kind.toLowerCase().includes('haji') || p.kind.toLowerCase().includes('umrah') ? 'souvenir-haji-umrah' :
            'gift'
    );
    return `${cat}/${p.id}`;
  });

  const paths = [
    '',
    'gift',
    'hampers',
    'souvenir',
    'sekata',
    'kontak',
    'blog',
    'kebijakan-privasi',
    'syarat-ketentuan',
    'penulis/m-maulana-ishaq',
    'faq',
    'testimonials',
    ...categories.map((c) => c.slug),
    ...productPaths,
    ...articles.map((a) => 'blog/' + a.slug)
  ];

  const uniquePaths = Array.from(new Set(paths));






  const urlsXml = uniquePaths
    .map(
      (p) =>
        `  <url>\n    <loc>https://sekata.web.id/${p ? p + '/' : ''}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${p === '' ? '1.0' : p.includes('/') ? '0.7' : '0.8'}</priority>\n  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>\n`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
