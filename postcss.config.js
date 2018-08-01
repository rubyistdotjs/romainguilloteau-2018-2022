module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require("postcss-color-function"),
    require('autoprefixer'),
  ],
};
