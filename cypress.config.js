const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here  
    },
    
    viewportHeight: 2500,
    viewportWidth: 2800,
    baseUrl: 'https://demo.nopcommerce.com',
   

  },
});
