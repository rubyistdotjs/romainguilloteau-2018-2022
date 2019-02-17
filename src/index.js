import React from 'react';
import { render } from 'react-snapshot';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import App from './App';
import { availableLocales, detectBrowserLocale } from './utils/locales';
import * as serviceWorker from './serviceWorker';

render(
  <BrowserRouter>
    <Switch>
      <Route path={`/:locale(${availableLocales.join('|')})`} component={App} />
      <Redirect to={detectBrowserLocale()} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.register();
