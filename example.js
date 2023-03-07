const plugin = require('tailwindcss/plugin')

module.exports = function({ addUtilities }) {
  const newUtilities = {
    '.example-utility': {'background-color':'salmon', 'color': 'white'}
  };

  addUtilities(newUtilities);
};
