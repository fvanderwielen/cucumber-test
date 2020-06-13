// cucumber imports
const { Before, Given, When, Then, AfterAll  } = require('cucumber');
const assert = require('assert');

// webdriver imports
const driver = require('./driver-builder.js');;
const {Key} = require('selenium-webdriver/lib/input');
const { Builder, By, until } = require('selenium-webdriver');

 
 
 
Given('the werkenbij vacature page', {timeout: 5 * 5000}, async function () {

	await driver.get('https://www.werkenbijcapgemini.nl/vacatures');
});



When('we search for frontend', {timeout: 5 * 5000}, async function () {
	
	// get the search input element
	var formInput = await driver.findElement(By.css('#search-input'));
	
	//type in frontend and hit enter
	await formInput.sendKeys('frontend', Key.ENTER);
	
	// wait for the page to properly respond
    await driver.wait(until.elementLocated(By.css('.filter-selection') ), 5000);
});
	

	
Then('we should see the frontend vacancy', async function () {
	
	// get the title of the first vacancy
	var firstVacancyTitle = await driver.findElement(By.css('.vacancy-item .position-name'));
	
	// check that it is for a frontend developer
	assert.equal(await firstVacancyTitle.getText(), "Frontend Developer");
});