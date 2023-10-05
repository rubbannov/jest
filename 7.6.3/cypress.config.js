const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "7faq9d",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://petstore.swagger.io/v2",
  },
});
