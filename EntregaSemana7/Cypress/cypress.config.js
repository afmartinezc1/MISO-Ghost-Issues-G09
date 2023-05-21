const { defineConfig } = require("cypress");
require("./pageElements");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      pageElements: global.pageElements,
      USERNAME: "andressvx@gmail.com",
      PASSWORD: "PruebasMiso",
      URL: "http://localhost:2368/ghost/#/signin",
      EXISTING_URL: "http://localhost:2368/tag/getting-started/",
      BLOG: "http://localhost:2368",
      LOREM:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      LOREM1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      LOREM2:
        "Pharetra convallis posuere morbi leo urna molestie at elementum eu. Et netus et malesuada fames ac turpis egestas. Aliquet porttitor lacus luctus accumsan tortor posuere. Arcu non odio euismod lacinia at quis risus sed. Urna cursus eget nunc scelerisque viverra mauris in. Viverra nibh cras pulvinar mattis nunc sed blandit libero. In eu mi bibendum neque egestas congue. Sed arcu non odio euismod. Neque gravida in fermentum et sollicitudin ac. Accumsan tortor posuere ac ut. Senectus et netus et malesuada fames. Libero justo laoreet sit amet cursus sit. Sit amet volutpat consequat mauris nunc congue nisi vitae. Cursus risus at ultrices mi tempus imperdiet. Dui ut ornare lectus sit amet. Elit at imperdiet dui accumsan sit amet nulla facilisi. Est velit egestas dui id ornare arcu."
    },
  },
});
