const { browser } = require('protractor');
const EC = require('protractor').ExpectedConditions;
const LoginForm = require('../pages/LoginForm');
const loginForm = new LoginForm();
const RegistrationPage = require('../pages/RegistrationPage');
const regPage = new RegistrationPage();

describe('As a user I', function(){

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://github.com/join', 20000, 'Home page is not loaded after 20 sec');
    });

    it(' should be able to register my account in the register page', async function() {

        expect(await regPage.createMsg.getText()).toEqual('Create your account', 'Create message is not preset on the reg page');
        expect(await regPage.submitBtn.isPresent()).toBe(true), 'Submit button is not preset on the reg page';
        expect(await regPage.verifyAccSecText.getText()).toEqual('Verify your account', 'Verify account message is not preset on the reg page');
        expect(await regPage.usernameInputField.isPresent()).toBe(true), 'Username field is not preset on the reg page';
        expect(await regPage.emailInputField.isPresent()).toBe(true), 'Email field is not preset on the reg page';
        expect(await regPage.pswrdInputField.isPresent()).toBe(true), 'Password field is not preset on the reg page';

        await browser.wait(EC.presenceOf(regPage.usernameInputField), 10000);
        await regPage.usernameInputField.sendKeys(loginForm.generateText(20));
        await browser.sleep(1000);
        expect(await loginForm.isFieldErrored(regPage.usernameErr)).toBe(false, 'Wrong username');

        await regPage.emailInputField.sendKeys(loginForm.makeEmail());
        await browser.sleep(1000);
        expect(await loginForm.isFieldErrored(regPage.emailErr)).toBe(false, 'Wrong email');

        await regPage.pswrdInputField.sendKeys(loginForm.generateText(16));
        await browser.sleep(1000);
        expect(await loginForm.isFieldErrored(regPage.pswrdErr)).toBe(false, 'Wrong password');

        await regPage.submitBtn.click();

        expect(await regPage.createMsg.getText()).toEqual('Create your account', 'Create message is not preset on the reg page');
        expect(await regPage.submitBtn.isPresent()).toBe(true), 'Submit button is not preset on the reg page';
        expect(await regPage.verifyAccSecText.getText()).toEqual('Verify your account', 'Verify account message is not preset on the reg page');

    });
});
