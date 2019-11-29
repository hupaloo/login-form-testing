const { browser } = require('protractor');
const EC = require('protractor').ExpectedConditions;
const LoginForm = require('../pages/LoginForm');
const loginForm = new LoginForm();

describe('As a user I', function(){

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('/', 20000, 'Home page is not loaded after 20 sec');
    });

    it(' should be able to see the registration form', async function() {
        expect(loginForm.logFormBody.isPresent()).toBe(true, 'Login page is not displayed');
        expect(loginForm.emailInputField.isPresent()).toBe(true, 'Email input field is not displayed');
        expect(loginForm.usernameInputField.isPresent()).toBe(true, 'Password input field is not displayed');
        expect(loginForm.pswrdInputField.isPresent()).toBe(true, 'Close button is not displayed');
        expect(loginForm.signUpBtn.isPresent()).toBe(true, 'Login button is not displayed');
    });
});
