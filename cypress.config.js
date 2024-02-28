const { defineConfig } = require('cypress');



module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto 1'

    },

    baseUrl:"https://cac-tat.s3.eu-central-1.amazonaws.com/index.html",
    defaultCommandTimeout: 5000,
    setupNodeEvents (on, config){
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  },
});
