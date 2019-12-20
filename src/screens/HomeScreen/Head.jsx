import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, defineMessages } from 'react-intl';

const i18n = defineMessages({
  metaTitle: {
    id: 'home.meta.title',
    defaultMessage: 'Romain Guilloteau - Senior Full Stack Developer',
  },
  metaDescription: {
    id: 'home.meta.description',
    defaultMessage:
      "Aka rubyistdotjs, I'm a Senior Full Stack Developer, with 7 years of professional experiences, currently working at Lunchr in Montpellier, France.",
  },
  openGraphTitle: {
    id: 'home.og.title',
    defaultMessage: 'Romain Guilloteau - Senior Full Stack Developer',
  },
  openGraphDescription: {
    id: 'home.og.description',
    defaultMessage:
      "Also known as rubyistdotjs, I'm a Senior Full Stack Developer, mainly Ruby on Rails and JavaScript (Node.js and React), with 7 years of professional experiences, currently working at Lunchr in Montpellier, Hérault, France.",
  },
  jsonldJobTitle: {
    id: 'home.jsonld.jobTitle',
    defaultMessage: 'Senior Full Stack Developer',
  },
  jsonldDescription: {
    id: 'home.jsonld.description',
    defaultMessage:
      "Also known as rubyistdotjs, I'm a Senior Full Stack Developer, mainly Ruby on Rails and JavaScript (Node.js and React), with 7 years of professional experiences, currently working at Lunchr in Montpellier, Hérault, France.",
  },
});

function Head() {
  const { formatMessage } = useIntl();

  return (
    <Helmet>
      <title>{formatMessage(i18n.metaTitle)}</title>
      <meta name="description" content={formatMessage(i18n.metaDescription)} />
      <meta property="og:title" content={formatMessage(i18n.openGraphTitle)} />
      <meta
        property="og:description"
        content={formatMessage(i18n.openGraphDescription)}
      />
      <meta property="og:url" content="https://www.romainguilloteau.dev" />
      <meta property="og:type" content="profile" />
      <meta property="profile:first_name" content="Romain" />
      <meta property="profile:last_name" content="Guilloteau" />
      <meta property="profile:gender" content="male" />
      <meta
        property="og:image"
        content="https://www.romainguilloteau.dev/images/mugshot.jpg"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="920" />
      <meta property="og:image:height" content="920" />
      <meta property="og:image:user_generated" content="false" />
      <link rel="canonical" content="https://www.romainguilloteau.dev" />

      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Romain Guilloteau",
            "givenName": "Romain",
            "familyName": "Guilloteau",
            "alternateName": "rubyistdotjs",
            "image": "https://www.romainguilloteau.dev/images/mugshot.jpg",
            "jobTitle": "${formatMessage(i18n.jsonldJobTitle)}",
            "description": "${formatMessage(i18n.jsonldDescription)}",
            "gender": "Male",
            "nationality": "FR",
            "birthDate": "1992-08-13",
            "birthPlace": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR",
                "addressLocality": "Amiens",
                "postalCode": "80000"
              }
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "FR",
              "addressLocality": "Montpellier",
              "postalCode": "34000"
            },
            "url": "https://www.romainguilloteau.dev",
            "sameAs": [
              "https://about.me/romainguilloteau",
              "https://www.linkedin.com/in/romainguilloteau",
              "https://twitter.com/rubyistdotjs",
              "https://www.crunchbase.com/person/romain-guilloteau",
              "https://github.com/rubyistdotjs"
            ]
          }
        `}
      </script>
    </Helmet>
  );
}

export default Head;
