import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { availableLocales, detectBrowserLocale } from './utils/locales';
import * as serviceWorker from './serviceWorker';

import App from './App';

const rootDOMElement = document.getElementById('root');
const root = (
  <BrowserRouter>
    <Switch>
      <Route path={`/:locale(${availableLocales.join('|')})`} component={App} />
      <Redirect from="/" exact to={`/${detectBrowserLocale()}`} />
      <Redirect from="/*" to={`/${detectBrowserLocale()}/*`} />
    </Switch>
  </BrowserRouter>
);

if (rootDOMElement.hasChildNodes()) {
  hydrate(root, rootDOMElement);
} else {
  render(root, rootDOMElement);
}

serviceWorker.register();
