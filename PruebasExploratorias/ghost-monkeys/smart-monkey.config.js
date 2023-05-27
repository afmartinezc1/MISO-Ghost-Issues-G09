const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId:"TSDL-Monkey-with-cypress",
    baseUrl:"http://localhost:2368/ghost/#/site",
    env:{
        appName:"App prueba",
        events:50,
        delay:300,
        seed:9000,
        pctClicks:12,
        pctScroll:12,
        pctSelectors:12,
        pctKeys:12,
        pctSpKeys:12,
        pctPgNav:12,
        pctBwChaos:12,
        pctActions:16
    },
    specPattern: "./cypress/e2e/monkey/smart-monkey.cy.js",
    pageLoadTimeout:120000,
    videosFolder:"./results",
    setupNodeEvents(on, config) {
        return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
