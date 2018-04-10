import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head() {
  return (
    <Helmet>
      <title>Romain Guilloteau - Développeur full stack</title>
      <meta
        name="description"
        content="Développeur full stack, principalement Ruby on Rails et JavaScript (Node.js, React et Vue.js) avec une sensibilité pour le design, basé à Annecy, Haute-Savoie, France."
      />
      <meta
        property="og:title"
        content="Romain Guilloteau - Développeur full stack"
      />
      <meta
        property="og:description"
        content="Développeur full stack, principalement Ruby on Rails et JavaScript (Node.js, React et Vue.js) avec une sensibilité pour le design, basé à Annecy, Haute-Savoie, France."
      />
      <meta property="og:url" content="https://www.romainguilloteau.com" />
      <meta property="og:type" content="profile" />
      <meta property="profile:first_name" content="Romain" />
      <meta property="profile:last_name" content="Guilloteau" />
      <meta property="profile:gender" content="male" />
      <meta
        property="og:image"
        content="https://www.romainguilloteau.com/images/og-large.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://www.romainguilloteau.com/images/og-large.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="" />
      <meta property="og:image:user_generated" content="false" />
      <meta name="twitter:card" content="summary" />
      <meta name="robots" content="none" />

      <script type="application/ld+json">{`
      {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Romain Guilloteau",
        "givenName": "Romain",
        "familyName": "Guilloteau",
        "jobTitle": "Lead developer & Software architect",
        "description": "Développeur full stack, principalement Ruby on Rails et JavaScript (Node.js, React et Vue.js) avec une sensibilité pour le design, basé à Annecy, Haute-Savoie, France.",
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
          "https://www.linkedin.com/in/romainguilloteau"
        ]
      }
    `}</script>
    </Helmet>
  );
}
