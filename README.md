Project description: testing Githab registration form with JS/Protractor in Chrome Browser (with directConnect: true)
<br>
Files description:
<br>
loginForm_01_spec.js - check that registration form elements are preset on the https://github.com/ page
<br>
loginForm_02_spec.js - check that user can register with entering valid data (also check that data is valid ) on the https://github.com/ page
<br>
loginForm_03_spec.js - check that user can register with entering valid data (also check that data is valid ) on the https://github.com/join page
<br>
conf.js - configuration file
<br><br>
Feel free to clone the project and check how it works:
1) Clone the project
2) Install dependencies (run command npm install)
3) Run command npm test to run all 3 tests
<br>
3) b. Run command node node_modules/protractor/built/cli.js ./jasmine/conf.js --specs jasmine/specs/loginForm_0*_spec.js to run specified test
