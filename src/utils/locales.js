export const langToLocale = (language) => language.split('-')[0];
export const availableLangs = ['en-US', 'fr-FR'];
export const defaultLang = availableLangs[0];
export const availableLocales = availableLangs.map((l) => langToLocale(l));
export const defaultLocale = availableLocales[0];

export const detectBrowserLocale = () => {
  const browserLang = window.navigator.languages.find(
    (lang) => lang && availableLocales.indexOf(langToLocale(lang)) >= 0
  );

  return browserLang ? langToLocale(browserLang) : defaultLocale;
};
