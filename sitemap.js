const fs = require('fs');
const { createSitemap } = require('sitemap');

const sitemap = createSitemap({
  hostname: 'https://www.romainguilloteau.dev',
  urls: [{ url: '/', changefreq: 'monthly', priority: 1 }],
});

fs.writeFileSync('build/sitemap.xml', sitemap.toString());
