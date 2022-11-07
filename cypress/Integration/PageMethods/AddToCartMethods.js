import AddToCartPage from "../PageObjects/AddToCartPage";
var addToCartPage = new AddToCartPage()
class AddToCartMethods
{
    SelectProductwithAddress(productName,address)
    {
        //select the product
        addToCartPage.GetProductSelected().contains(productName).click()
        //verify that product is selected
        addToCartPage.GetProductSelectedName().should('have.text',productName)
        //click on add to cart button
        addToCartPage.GetAddtoCartButton().should('be.visible').click({force:true})
        //enter pin code for delivery
        addToCartPage.GetAddressVerificationTextbox().type(address).tab().tab()
        addToCartPage.GetAddressItemView().should('be.visible').click()
        cy.wait(2000)
        //click on the plus sign to add to cart
        addToCartPage.GetAddtoCartButton().should('be.visible').click({force:true}) //click plus
        addToCartPage.GetProductPopUpDisplayed().should('be.visible') //verify pop up is displayed
        //click ok to apply 
        addToCartPage.GetokButton().contains('Ok').click()  //click plus   
        //click on product dialog close button
        addToCartPage.GetProductDialogCloseButton().should('be.visible').click()

    }
    SelectProduct(productName)
    {
        //select the product
        addToCartPage.GetProductSelected().contains(productName).click()
        //verify that product is selected
        addToCartPage.GetProductSelectedName().should('have.text',productName)
        //click on add to cart button
        addToCartPage.GetAddtoCartButton().should('be.visible').click({force:true})
        cy.wait(2000)
        //verify pop up is displayed
        addToCartPage.GetProductPopUpDisplayed().should('be.visible') 
        //click ok to apply 
        addToCartPage.GetokButton().contains('Ok').click()    
        //click on product dialog close button
        addToCartPage.GetProductDialogCloseButton().should('be.visible').click()
    }

      
}export default AddToCartMethods