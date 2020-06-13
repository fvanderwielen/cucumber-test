
// webdriver imports
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const { Builder, By, until, Capabilities } = require('selenium-webdriver');


// cucumber import
const {setDefaultTimeout} = require('cucumber');
// webdriver seems too slow on my computer, so we tell cucumber to wait longer than normally
setDefaultTimeout(10 * 1000);
// see also https://stackoverflow.com/questions/49862078/protractor-and-cucumber-function-timed-out-using-async-await


// make a driver to be use
module.exports = new webdriver.Builder()
    .forBrowser('firefox')
	// .withCapabilities( new Capabilities().setPageLoadStrategy("EAGER") ) //this is where we ask for speedier pageload returns
    .setFirefoxOptions({"alwaysMatch": {"timeouts": {"implicit": 10000}}})
    .build();