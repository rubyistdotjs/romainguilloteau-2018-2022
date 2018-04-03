import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import Experience from './components/Experience';

// import { addLocaleData } from 'react-intl';
// import en from 'react-intl/locale-data/en';
// import fr from 'react-intl/locale-data/fr';

import './app.css';

// addLocaleData([...en, ...fr]);

ReactGA.initialize('UA-116738567-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <html lang="fr" />
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
          <meta property="og:locale" content="fr_FR" />
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

        <header className="px-8 flex flex-col items-center h-screen bg-grey-darkest">
          <div className="pb-8 flex flex-col justify-center text-center flex-grow">
            <h1 className="text-4xl md:text-5xl text-white font-normal leading-normal antialiased">
              Romain Guilloteau
            </h1>
            <p className="text-3xl md:text-4xl text-white-dark antialiased">
              Développeur full stack Ruby on Rails et JavaScript
            </p>
          </div>
          <p className="mb-8 text-yellow-dark">
            Site en cours de développement
          </p>
        </header>

        <Experience />
      </div>
    );
  }
}

export default App;
