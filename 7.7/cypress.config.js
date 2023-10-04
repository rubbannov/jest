const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "ry5ivg",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    e2e: {
      baseUrl: "http://qamid.tmweb.ru",
    },
  },
});
