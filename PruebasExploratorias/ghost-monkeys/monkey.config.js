const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId:"TSDL-Monkey-with-cypress",
    baseUrl:"http://localhost:2368/ghost/#/site",
    env:{
        appName:"App prueba",
        events:100,
        delay:300,
        seed:3000,
        pctClicks:19,
        pctScroll:17,
        pctSelectors:16,
        pctKeys:16,
        pctSpKeys:16,
        pctPgNav:16
    },
    specPattern: "./cypress/e2e/monkey/monkey.cy.js",
    pageLoadTimeout:120000,
    defaultCommandTimeout:120000,
    videosFolder:"./results",
    setupNodeEvents(on, config) {
        return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
