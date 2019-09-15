const fs = require('fs');
const sm = require('sitemap');

const sitemap = sm.createSitemap({
  hostname: 'https://www.romainguilloteau.dev',
});

const url = ({ path, changefreq, priority }) =>
  sitemap.add({
    url: `/${path}`,
    changefreq: 'monthly',
    priority: 1,
  });

url({ path: '/', changefreq: 'monthly', priority: 1 });

fs.writeFileSync('build/sitemap.xml', sitemap.toString());
