module.exports =
    class LoginForm{
        get logFormBody(){
            return element(
                by.xpath("//div[contains(@class, 'rounded-1 text-gray bg-gray-light')]")
            );
        }

        get usernameInputField(){
            return this.logFormBody.element(
                by.name("user[login]")
            );
        }

        get usernameErr(){
            return this.usernameInputField.element(
                by.xpath(".//ancestor::dl")
            );
        }

        get emailInputField(){
            return this.logFormBody.element(
                by.name("user[email]")
            );
        }

        get emailErr(){
            return this.emailInputField.element(
                by.xpath(".//ancestor::dl")
            );
        }

        get pswrdInputField(){
            return this.logFormBody.element(
                by.name("user[password]")
            );
        }

        get pswrdErr(){
            return this.pswrdErr.element(
                by.xpath(".//ancestor::dl")
            );
        }

        get signUpBtn(){
            return this.logFormBody.element(
              by.xpath(".//button[@type='submit']")
            );
        }

        generateText(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        makeEmail(){
            return this.generateText(20) + '@' + this.generateText(5) + '.' + this.generateText(3);
        }

        async isFieldErrored(Element) {
            return (await Element.getAttribute('class')).includes('errored');
        }

    };
