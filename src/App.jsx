import React from 'react';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import ReactGA from 'react-ga';
import omit from 'lodash/omit';

import HomeScreen from './screens/HomeScreen';

import { addLocaleData } from './utils/locales';
import messages from './i18n/locales';

import './application.css';

addLocaleData();

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(process.env.REACT_APP_ANALYTICS_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App({ match }) {
  const locale = match.params.locale;
  const langs = { fr: 'fr_FR', en: 'en_US' };
  const lang = langs[locale];

  const alternates = Object.values(omit(langs, locale)).map(alternate => (
    <meta key={alternate} property="og:locale:alternate" content={alternate} />
  ));

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="app">
        <Helmet>
          <html lang={locale} />
          <meta property="og:locale" content={lang} />
          {alternates}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="rubyistdotjs" />
          <meta name="robots" content="noarchive" />
          <meta
            name="google-site-verification"
            content={process.env.REACT_APP_GOOGLE_SITE_VERIFICATION_KEY}
          />
        </Helmet>
        <HomeScreen />
      </div>
    </IntlProvider>
  );
}

export default App;
