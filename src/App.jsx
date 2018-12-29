import React from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import omit from 'lodash/omit';
import { injectIntl, intlShape } from 'react-intl';

import Home from './components/Home';

import './application.css';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(process.env.REACT_APP_ANALYTICS_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App({ intl }) {
  const langs = { fr: 'fr_FR', en: 'en_US' };
  const lang = langs[intl.locale];

  const alternates = Object.values(omit(langs, intl.locale)).map(alternate => (
    <meta key={alternate} property="og:locale:alternate" content={alternate} />
  ));

  return (
    <div className="app">
      <Helmet>
        <html lang={intl.locale} />
        <meta property="og:locale" content={lang} />
        {alternates}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="rubyistdotjs" />
        <meta name="robots" content="nofollow, noarchive" />
        <meta
          name="google-site-verification"
          content={process.env.REACT_APP_GOOGLE_SITE_VERIFICATION_KEY}
        />
      </Helmet>
      <Home />
    </div>
  );
}

App.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(App);
