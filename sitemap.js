const { createWriteStream } = require('fs');
const { SitemapStream } = require('sitemap');

const sitemap = new SitemapStream({
  hostname: 'https://www.romainguilloteau.dev',
});

const writeStream = createWriteStream('./build/sitemap.xml');
sitemap.pipe(writeStream);

sitemap.write({ url: '/', changefreq: 'monthly', priority: 1 });
sitemap.end();
