import React from 'react';
import { render } from 'react-snapshot';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import messages from './i18n/locales';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

addLocaleData([...en, ...fr]);

render(
  <IntlProvider locale="fr" messages={messages.fr}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);

registerServiceWorker();
