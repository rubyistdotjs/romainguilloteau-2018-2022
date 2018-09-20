import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from 'react-snapshot';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line no-undef, react/jsx-filename-extension
render(<App />, document.getElementById('root'));
registerServiceWorker();
