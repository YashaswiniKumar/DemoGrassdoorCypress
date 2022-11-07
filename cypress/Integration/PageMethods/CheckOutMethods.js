import CheckOutPage from "../PageObjects/CheckOutPage"
var checkOutPage = new CheckOutPage
class CheckOutMethods
{
    SelectCheckOut()
    {
        
        checkOutPage.GetCartButton().should('be.visible').click()
        //click on the checkout button
        checkOutPage.GetCheckOutButton().click()
    }
    EnterCheckOutFormDetails(fname,lname,email)
    {
        checkOutPage.GetFirstNameTextBox().type('fname')
        checkOutPage.GetLastNameTextBox().type('lname')
        checkOutPage.GetEmailTextBox().type('email')
        //cy.get('.close-holder > .btn').click()
    }
    SelectDeliveryDateTime()
    {
        checkOutPage.GetDeliveryDateTimeButton().click()
        //cy.get('.icon-stopwatch').should('have.text','Set Date and Time of Delivery') //check delivery date and time dialog is opened
        checkOutPage.SelectDeliveryDateTimeRadio().first().check({force:true}) //select first delivery date and time
        checkOutPage.GetOkButton().click()
        //cy.get('input#file').selectFile('PhotoID.JPG')
    }
    ClickBringItButton()
    {
         //click on Bring It button
        checkOutPage.GetBringItButton().contains('Bring It').click()
    }      
      

}export default CheckOutMethods