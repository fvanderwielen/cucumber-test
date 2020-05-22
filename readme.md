This project is a basic setup of Cucumber and (Selenium) Webdriver, to learn how to get started.

# Installation

0. You will need a latest stable version of Git Node (with NPM, which comes with by default), and Firefox: https://nodejs.org/en/ https://www.mozilla.org/en-US/exp/firefox/new/
1. check out this repository
2. run npm install
3. install the appropriate webdriver executable: 
    1. download the (zipped) gecko webdriver executable to somewhere, easiest is to download it to the folder of this project, download link: https://github.com/mozilla/geckodriver/releases/tag/v0.26.0
	2. make sure that the executable can be found on the path when running the cucumber test, easiest is to unzip the executable in the root filder of this project
	3. you should now have a file called `geckodriver.exe` next to this readme
4. you should now be ready to go to run the test
	
# Usage

This is a standard cucumber package, so it runs as one, which means running the following command from a command linke prompt

On Windows:
```
.\node_modules\.bin\cucumber-js
```
On UNIX-like systems:
```
./node_modules/.bin/cucumber-js
```


Alternatively, let NPM run it for you, I have added this command as a script:
```
npm run test
```

