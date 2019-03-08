import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import App from './App';
import { availableLocales, detectBrowserLocale } from './utils/locales';
import * as serviceWorker from './serviceWorker';

const rootDOMElement = document.getElementById('root');
const root = (
  <BrowserRouter>
    <Switch>
      <Route path={`/:locale(${availableLocales.join('|')})`} component={App} />
      <Redirect to={detectBrowserLocale()} />
    </Switch>
  </BrowserRouter>
);

if (rootDOMElement.hasChildNodes()) {
  hydrate(root, rootDOMElement);
} else {
  render(root, rootDOMElement);
}

serviceWorker.register();
