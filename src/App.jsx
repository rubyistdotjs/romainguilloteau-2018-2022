import React from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import Home from './components/Home';

import './app.css';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(process.env.REACT_APP_ANALYTICS_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export default function App() {
  return (
    <div className="app">
      <Helmet>
        <html lang="fr" />
        <meta property="og:locale" content="fr_FR" />
        <meta
          name="google-site-verification"
          content={process.env.REACT_APP_GOOGLE_SITE_VERIFICATION_KEY}
        />
      </Helmet>
      <Home />
    </div>
  );
}
