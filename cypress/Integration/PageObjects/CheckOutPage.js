/// <reference types="Cypress" />
class CheckOutPage
{
    //Get cart button
    GetCartButton(){return cy.get('.h-cart-btn'); }
    //Get check out button
    GetCheckOutButton(){return cy.get('.checkout-btn');}
    //Get first name, last name and email text box
    GetFirstNameTextBox(){return cy.get('input[placeholder="First Name"]');}
    GetLastNameTextBox(){return cy.get('input[placeholder="Last Name"]');}
    GetEmailTextBox(){return cy.get('input[placeholder="Email"]');}
    //get delivery date and time
    GetDeliveryDateTimeButton(){return cy.get('#delivery-date-time button');}
    SelectDeliveryDateTimeRadio(){return cy.get('input[name="deliveryDateTime"]');}
    GetOkButton(){return  cy.get('button.ok-btn ');}
    //get photo upload input
    GetPhotoIdUploadInput(){return cy.get('input#file');}
    //place order button
    GetBringItButton(){return cy.get('button');}
}
export default CheckOutPage