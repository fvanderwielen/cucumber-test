// cucumber imports
const { Before, Given, When, Then, AfterAll  } = require('cucumber');
const assert = require('assert');

// webdriver imports
const driver = require('./driver-builder.js');
const { Builder, By, until } = require('selenium-webdriver');


// Axe imports
let AxeBuilder = require('axe-webdriverjs');
let AxeReports = require('axe-reports');
 
 
 
// the werkenbij page loads slow because of scripts...
When('we request the politie homepage and look at its accessibility', {timeout: 10 * 5000}, async function () {
 
    await driver.get('https://www.werkenbijcapgemini.nl/');
	
	// the below await means the step declaration will again wait for it to be done
	await new Promise(resolve => {
		AxeBuilder(driver)
			.analyze(function(err, results) {
				if (err) {
					// Handle error somehow
					console.log(err);
				}
				AxeReports.processResults(results, 'csv', 'test-results', true);

				resolve();
			})
	});
});