import React from 'react';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { Switch, Route, Redirect } from 'react-router-dom';
import omit from 'lodash/omit';

import { addLocaleData } from './utils/locales';
import messages from './i18n/locales';

import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';

import './application.css';

addLocaleData();

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
        <Switch>
          <Route path="/:locale" exact component={HomeScreen} />
          <Route path="/:locale/404" component={NotFoundScreen} />
          <Redirect to="/:locale/404" />
        </Switch>
      </div>
    </IntlProvider>
  );
}

export default App;
