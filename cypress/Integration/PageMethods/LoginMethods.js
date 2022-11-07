import LoginPage from "../PageObjects/LoginPage";
var loginPage = new LoginPage()

class LoginMethods
{
    confirmAge()
    {
        loginPage.getAgeConfirmationCheckBox().click({force:true})
        loginPage.getConfirmAgeYesButton().click()
    }
    login(phoneNumer,otp)
    {   
        loginPage.getLoginLink().click()
        loginPage.getPhoneNumberTextBoxsocator().should('be.visible').type(phoneNumer)
        loginPage.getVerificationByCodeButton().click()
        loginPage.getOtpInputTextBox().type(otp)
    }

}
export default LoginMethods