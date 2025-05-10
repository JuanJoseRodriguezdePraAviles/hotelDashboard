const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://hotel-dashboard-96.s3-website.eu-north-1.amazonaws.com/#/'
  }
});