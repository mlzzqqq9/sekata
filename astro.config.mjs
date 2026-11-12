import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://sekata.web.id',
  trailingSlash: 'always',
  redirects: {
    '/blog/panduan-memilih-souvenir-wedding/': '/blog/panduan-memilih-souvenir-pernikahan/'
  }
});
