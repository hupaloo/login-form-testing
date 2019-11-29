const { browser } = require('protractor');
const EC = require('protractor').ExpectedConditions;
const LoginForm = require('../pages/LoginForm');
const loginForm = new LoginForm();
const RegistrationPage = require('../pages/RegistrationPage');
const regPage = new RegistrationPage();

describe('As a user I', function(){

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('/', 20000, 'Home page is not loaded after 20 sec');
    });

    it(' should be able to sign up with valid data', async function() {
        await loginForm.usernameInputField.sendKeys(loginForm.generateText(20));
        await browser.sleep(1000);
        expect(await loginForm.isFieldErrored(loginForm.usernameErr)).toBe(false, 'Username is not valid');

        await loginForm.emailInputField.sendKeys(loginForm.makeEmail());
        await browser.sleep(1000);
        expect(await loginForm.isFieldErrored(loginForm.emailErr)).toBe(false, 'Email is not valid');

        await loginForm.pswrdInputField.sendKeys(loginForm.generateText(16));
        await browser.sleep(1000);
        expect(await loginForm.isFieldErrored(loginForm.pswrdErr)).toBe(false, 'Password is not valid');

        await loginForm.signUpBtn.click();

        expect(await browser.wait(EC.urlIs('https://github.com/join'), 5000), 'The url don`t change to the reg page url');
        expect(await regPage.createMsg.getText()).toEqual('Create your account', 'Create your account message is not preset on the reg page');
        expect(await regPage.submitBtn.isPresent()).toBe(true), 'Submit button is not preset on the reg page';
        expect(await regPage.verifyAccSecText.getText()).toEqual('Verify your account', 'Verify account message is not preset on the reg page');

    });
});
