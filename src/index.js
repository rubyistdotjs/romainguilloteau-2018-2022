import React from 'react';
import { render } from 'react-snapshot';
import { IntlProvider, addLocaleData } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';

import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import messages from './i18n/locales';

import App from './App';
import * as serviceWorker from './serviceWorker';

addLocaleData([...en, ...fr]);

render(
  <Router>
    <IntlProvider locale="fr" messages={messages.fr}>
      <App />
    </IntlProvider>
  </Router>,
  document.getElementById('root')
);

serviceWorker.register();
