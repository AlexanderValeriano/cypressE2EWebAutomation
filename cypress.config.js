const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  projectId: "8twm1f",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  experimentalWebKitSupport: true,
  defaultCommandTimeout: 6000,
});
