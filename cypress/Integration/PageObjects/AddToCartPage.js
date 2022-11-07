/// <reference types="Cypress" />
class AddToCartPage
{
    //product selector 
    GetProductSelected() { return cy.get('.product-name-weight p');} 
    
    GetProductSelectedName(){ return cy.get('.product-name');}
    //add to cart button
    GetAddtoCartButton(){ return cy.get('.btn.plus-btn');}
    //address verification text box
    GetAddressVerificationTextbox(){ return cy.get('#autocompleteQuery');}

    GetAddressItemView(){ return cy.get('.cs-address-item');}
    //product pop up
    GetProductPopUpDisplayed(){ return cy.get(':nth-child(2) > .modal > .modal-dialog > .modal-content > .modal-body');}
    //ok button selector
    GetokButton(){ return cy.get('button');}
    //close button
    GetProductDialogCloseButton(){ return cy.get('#modal-root .modal-header button.btn-outline-primary');}
      

}export default AddToCartPage