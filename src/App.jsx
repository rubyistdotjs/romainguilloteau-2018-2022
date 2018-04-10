import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import Home from './components/Home';

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
          <meta property="og:locale" content="fr_FR" />
        </Helmet>

        <Home />

      </div>
    );
  }
}

export default App;
