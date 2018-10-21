const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: './src/i18n/messages',
  translationsDirectory: './src/i18n/locales/',
  whitelistsDirectory: './src/i18n/locales/whitelists',
  detectDuplicateIds: true,
  languages: ['fr', 'en'],
  jsonOptions: {
    space: 2,
    trailingNewline: true,
  },
});
