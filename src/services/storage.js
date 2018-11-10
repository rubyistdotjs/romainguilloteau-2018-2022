import localforage from 'localforage';

localforage.config({
  name: 'app',
  storeName: 'storage',
});

export default localforage;
