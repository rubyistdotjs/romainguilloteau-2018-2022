import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: 'AIzaSyDOxfIAHCu1TaCNLk4270bPcFn4g3x9NcA',
  authDomain: 'romainguilloteau-af1c1.firebaseapp.com',
  databaseURL: 'https://romainguilloteau-af1c1.firebaseio.com',
  projectId: 'romainguilloteau-af1c1',
  storageBucket: 'romainguilloteau-af1c1.appspot.com',
  messagingSenderId: '348648773457',
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
