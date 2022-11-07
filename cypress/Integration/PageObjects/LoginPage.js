 /// <reference types="Cypress" />
 class LoginPage
 {
    //Age confirmation
    getAgeConfirmationCheckBox(){return cy.get('#ageConfirmationPopupCheckBox'); }
    //confirm age yes button
    getConfirmAgeYesButton(){return cy.get('.age-yes-btn');}
    //Login Locator
    getLoginLink(){ return cy.get('[href="/login"]');}
    //Phone Number Text box
    getPhoneNumberTextBoxsocator(){return  cy.get('input[type="tel"]'); }
    //Button Veification by code
    getVerificationByCodeButton(){return cy.get('button[data-cy="viaButton"]');}
    //Input otp Text box
    getOtpInputTextBox(){return cy.get('input[placeholder="Enter Verification Code"]');}

 }
 export default LoginPage;
