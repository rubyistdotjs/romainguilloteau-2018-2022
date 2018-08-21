const fs = require('fs');
const sm = require('sitemap');

const sitemap = sm.createSitemap({
  hostname: 'https://www.romainguilloteau.com/',
  urls: [
    {
      url: '/' ,
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date().toISOString(),
    },
  ],
});

fs.writeFileSync("build/sitemap.xml", sitemap.toString());
