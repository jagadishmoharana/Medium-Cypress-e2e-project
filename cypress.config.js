const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    defaultCommandTimeout: 10000, 
    pageLoadTimeout: 10000,       
    requestTimeout: 6000,         
    responseTimeout: 10000,   
    testIsolation:false,    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
