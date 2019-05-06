const fs = require('fs');
const sm = require('sitemap');

const locales = ['en', 'fr'];

const sitemap = sm.createSitemap({
  hostname: 'https://www.romainguilloteau.dev/',
});

const url = ({ path, changefreq, priority }) => {
  locales.forEach(locale => {
    sitemap.add({
      url: `/${locale}/${path}`,
      changefreq: 'monthly',
      priority: 1,
      links: links({ path }),
    });
  });
};

const links = ({ path }) => {
  return locales.map(locale => ({
    lang: locale,
    url: `${locale}/${path}`,
  }));
};

url({ path: '/', changefreq: 'monthly', priority: 1 });

fs.writeFileSync('build/sitemap.xml', sitemap.toString());
