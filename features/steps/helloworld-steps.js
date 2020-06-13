// cucumber imports
const { Before, Given, When, Then, AfterAll  } = require('cucumber');
const assert = require('assert');

// webdriver imports
const driver = require('./driver-builder.js');
const { Builder, By, until } = require('selenium-webdriver');


// the werkenbij page loads slow because of scripts...
When('we request the werkenbij homepage', {timeout: 10 * 5000},  async function () {

	await driver.get('https://www.werkenbijcapgemini.nl/');

});


Then('we should see something', {timeout: 5 * 5000}, async function () {
	
	var h1 = await driver.findElement(By.css('h1'));
	
	assert.equal(await h1.getText(), "Ontdek Capgemini");
});