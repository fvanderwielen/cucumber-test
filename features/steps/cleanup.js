// cucumber imports
const { Before, Given, When, Then, AfterAll  } = require('cucumber');
	
	
const driver = require('./driver-builder.js');
	
// like a step definition declaration, the below is found by cucumber JS, and it is run when all found tests are done
AfterAll (async function() {
    await driver.close();
});