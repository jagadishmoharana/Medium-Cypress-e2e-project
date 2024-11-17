const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 20000, 
    pageLoadTimeout: 60000,       
    requestTimeout: 6000,         
    responseTimeout: 30000,   
    testIsolation:false,    

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
