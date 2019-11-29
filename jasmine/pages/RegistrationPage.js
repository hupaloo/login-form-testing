module.exports =
    class RegistrationPage{
        get bodyForm(){
            return element(
              by.id("signup-form")
            );
        }

        get createMsg(){
            return element(
                by.xpath("//div[contains(@class, 'mb-4 mb-md-8 container-md')]//h1")
            );
        }

        get submitBtn(){
            return element(
              by.css(".btn-mktg.signup-btn.js-octocaptcha-form-submit.width-full")
            );
        }

        get verifyAccSection(){
            return element(
                by.css(".my-3")
            );
        }

        get verifyAccSecText(){
            return element(
              by.css(".f4.mb-3")
            );
        }

        get usernameInputField(){
            return element(
                by.xpath("//input[@id='user_login']")
            );
        }

        get usernameErr(){
            return this.usernameInputField.element(
                by.xpath(".//ancestor::dl")
            );
        }

        get emailInputField(){
            return element(
                by.xpath("//input[@id='user_email']")
            );
        }

        get emailErr(){
            return this.emailInputField.element(
                by.xpath(".//ancestor::dl")
            );
        }

        get pswrdInputField(){
            return element(
                by.xpath("//input[@id='user_password']")
            );
        }

        get pswrdErr(){
            return this.pswrdInputField.element(
                by.xpath(".//ancestor::dl")
            );
        }
    };
