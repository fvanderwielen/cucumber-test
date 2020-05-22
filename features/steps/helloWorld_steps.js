const { Before, Given, When, Then, AfterAll  } = require('cucumber');
const assert = require('assert');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

const { Builder, By, until } = require('selenium-webdriver');
 
let driver = new webdriver.Builder()
    .forBrowser('firefox')
    .setChromeOptions(/* ... */)
    .setFirefoxOptions({"alwaysMatch": {"timeouts": {"implicit": 10000}}})
    .build();
    // let driver = new Builder()
        // .forBrowser('chrome')
        // .build();
 
When('we request the politie homepage', {timeout: 2 * 5000}, async function () {
	// Write code here that turns the phrase above into concrete actions
	
	driver.wait(until.elementLocated(By.css('h1')));
 
    await driver.get('http://www.politie.nl');
	
	// return 'pending';
});

 
Then('we should see something', {timeout: 2 * 5000}, async function () {
	var h1 = await driver.findElement(By.css('h1'));
	console.log(await h1.getText());
	assert.equal(await h1.getText(), "Uitgelicht")
	
	
	// Write code here that turns the phrase above into concrete actions
	// return 'pending';
});
	
AfterAll (async function() {
    await driver.close();
});