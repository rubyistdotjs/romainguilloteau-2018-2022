const fs = require('fs');
const sm = require('sitemap');

const sitemap = sm.createSitemap({
  hostname: 'https://www.romainguilloteau.com/',
  urls: [
    {
      url: '/',
      changefreq: 'weekly',
      priority: 1,
      lastmodISO: new Date().toISOString(),
      img: [
        {
          url: 'https://www.romainguilloteau.com/images/mugshot.jpg',
          caption: 'Romain Guilloteau',
          title: 'Romain Guilloteau - Développeur full stack',
          geoLocation: 'Annecy, France',
          license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
        },
      ],
    },
  ],
});

fs.writeFileSync('build/sitemap.xml', sitemap.toString());
