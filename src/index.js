import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import App from './App';

const rootDOMElement = document.getElementById('root');
const root = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (rootDOMElement.hasChildNodes()) {
  hydrate(root, rootDOMElement);
} else {
  render(root, rootDOMElement);
}

serviceWorker.register();
