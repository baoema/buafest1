const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl":"https://www.demoblaze.com/", // mio 
    "chromeWebSecurity":false,
    setupNodeEvents(on, config) {
      return require('./cypress/plugin/index')(on, config)
    },
    specPattern:'cypress/e2e/BDD-Features',
    excludeSpecPattern:['*.js', '*.md']
  }
});
