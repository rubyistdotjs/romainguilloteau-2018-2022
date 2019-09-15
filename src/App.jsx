import React from 'react';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { Switch, Route, Redirect } from 'react-router-dom';

import { addLocaleData } from './utils/locales';
import messages from './i18n/locales';

import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';

import './application.css';

addLocaleData();

function App() {
  return (
    <IntlProvider locale="en" messages={messages['en']}>
      <div className="app">
        <Helmet>
          <html lang="en" />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="rubyistdotjs" />
          <meta name="robots" content="noarchive" />
          <meta
            name="google-site-verification"
            content={process.env.REACT_APP_GOOGLE_SITE_VERIFICATION_KEY}
          />
        </Helmet>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/404" component={NotFoundScreen} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </IntlProvider>
  );
}

export default App;
