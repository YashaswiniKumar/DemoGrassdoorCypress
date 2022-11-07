const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "defaultCommandTimeout": 70000,
  "env": {
    "base_url": "https://demo.grassdoor.com/",
  },
  "pageLoadTimeout": 90000,
  "fixturesFolder": "cypress/fixtures",
  "viewportHeight": 768,
  "viewportWidth": 1366,
  "specPattern":"cypress/Integration/Tests/*.spec.js",
  "video": false,
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/report",
    "charts": true,
    "reportPageTitle": "Grassdoor reports"
  },
  "chromeWebSecurity": false,
  "videoCompression": false,
  "trashAssetsBeforeRuns": false,
  experimentalSessionAndOrigin:true,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
