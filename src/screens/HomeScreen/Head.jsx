import React from 'react';
import { Helmet } from 'react-helmet';

function Head() {
  return (
    <Helmet>
      <title>Romain Guilloteau - Senior Full Stack Developer</title>
      <meta
        name="description"
        content="Aka rubyistdotjs, I'm a Senior Full Stack Developer, with 8 years of professional experiences, currently working at Swile in Montpellier, France."
      />
      <meta
        property="og:title"
        content="Romain Guilloteau - Senior Full Stack Developer"
      />
      <meta
        property="og:description"
        content="Also known as rubyistdotjs, I'm a Senior Full Stack Developer, mainly Ruby on Rails and JavaScript (Node.js and React), with 8 years of professional experiences, currently working at Swile in Montpellier, Hérault, France."
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
            "jobTitle": "Senior Full Stack Developer",
            "description": "Also known as rubyistdotjs, I'm a Senior Full Stack Developer, mainly Ruby on Rails and JavaScript (Node.js and React), with 8 years of professional experiences, currently working at Swile in Montpellier, Hérault, France.",
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
