const path = require('path');
const fs = require('fs');
const { mapValues, isPlainObject } = require('lodash');

const languages = ['en', 'fr'];
const databaseFolder = './src/database/';
const rawFolder = path.join(databaseFolder, 'raw');
const fsPromises = fs.promises;

function isI18nObject(object) {
  return Object.keys(object).some(key => languages.includes(key));
}

function extractI18n(object, lang) {
  if (Object.keys(object).includes(lang)) return object[lang];
  return `Missing translation for ${lang}`;
}

function inspectObject(obj, lang) {
  return mapValues(obj, val => inspect(val, lang));
}

function inspectArray(arr, lang) {
  return arr.map(val => inspect(val, lang));
}

function inspect(val, lang) {
  if (isPlainObject(val) && isI18nObject(val)) return extractI18n(val, lang);
  if (Array.isArray(val) && val.length > 0) return inspectArray(val, lang);
  if (isPlainObject(val)) return inspectObject(val, lang);
  return val;
}

async function createLocaleFolder(lang) {
  const folder = path.join(databaseFolder, lang);
  await fsPromises.mkdir(folder).catch(err => {
    if (err.code === 'EEXIST') return;
    throw err;
  });
}

async function createLocaleFolders() {
  await Promise.all(languages.map(createLocaleFolder));
}

async function createLocaleFile(filename, lang, rawJSON) {
  const localeFilePath = path.join(databaseFolder, lang, filename);
  const localeJSON = inspect(rawJSON, lang);
  await fsPromises.writeFile(localeFilePath, JSON.stringify(localeJSON));
}

async function localizeFile(filename) {
  const rawFilePath = path.join(rawFolder, filename);
  const rawData = await fsPromises.readFile(rawFilePath);
  const rawJSON = JSON.parse(rawData);
  await Promise.all(languages.map(l => createLocaleFile(filename, l, rawJSON)));
}

createLocaleFolders().then(() => {
  fsPromises.readdir(rawFolder).then(file => {
    file.forEach(localizeFile);
  });
});
