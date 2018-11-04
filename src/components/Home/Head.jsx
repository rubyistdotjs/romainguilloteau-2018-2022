import React from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

const i18n = defineMessages({
  metaTitle: {
    id: 'home.meta.title',
    defaultMessage: 'Romain Guilloteau - Full Stack Web Developer',
  },
  metaDescription: {
    id: 'home.meta.description',
    defaultMessage:
      'Full Stack Web Developer, mainly Ruby on Rails and JavaScript (Node.js, React et Vue.js), currently living in Montpellier, Hérault, France.',
  },
  jsonldJobTitle: {
    id: 'home.jsonld.jobTitle',
    defaultMessage: 'Full Stack Web Developer',
  },
  jsonldDescription: {
    id: 'home.jsonld.description',
    defaultMessage:
      'Full Stack Web Developer, mainly Ruby on Rails and JavaScript (Node.js, React et Vue.js), currently living in Montpellier, Hérault, France.',
  },
});

function Head({ intl }) {
  const { formatMessage } = intl;

  return (
    <Helmet>
      <title>{formatMessage(i18n.metaTitle)}</title>
      <meta name="description" content={formatMessage(i18n.metaDescription)} />
      <meta property="og:title" content={formatMessage(i18n.metaTitle)} />
      <meta
        property="og:description"
        content={formatMessage(i18n.metaDescription)}
      />
      <meta property="og:url" content="https://www.romainguilloteau.com" />
      <meta property="og:type" content="profile" />
      <meta property="profile:first_name" content="Romain" />
      <meta property="profile:last_name" content="Guilloteau" />
      <meta property="profile:gender" content="male" />
      <meta
        property="og:image"
        content="https://www.romainguilloteau.com/images/mugshot.jpg"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1256" />
      <meta property="og:image:height" content="1256" />
      <meta property="og:image:user_generated" content="false" />

      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Romain Guilloteau",
            "givenName": "Romain",
            "familyName": "Guilloteau",
            "image": "https://www.romainguilloteau.com/images/mugshot.jpg",
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
                "addressLocality": "Amiens"
              }
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "FR",
              "addressLocality": "Annecy",
              "postalCode": "74000"
            },
            "url": "https://www.romainguilloteau.com/",
            "sameAs": [
              "https://www.linkedin.com/in/romainguilloteau",
              "https://twitter.com/rubyistdotjs",
              "https://plus.google.com/110337874986223414450",
              "https://github.com/rubyistdotjs",
              "https://gitlab.com/rubyistdotjs"
            ]
          }
        `}
      </script>
    </Helmet>
  );
}

Head.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Head);
