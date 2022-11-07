/// <reference types="Cypress" />
import LoginMethods from "../PageMethods/LoginMethods"
import AddToCartMethods from "../PageMethods/AddToCartMethods";
import CheckOutMethods from "../PageMethods/CheckOutMethods";
import data from '../../fixtures/example.json'
describe('Grassdoor Demo End to End Scenario', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  var loginMethods = new LoginMethods()
  var addToCartMethods = new AddToCartMethods()
  var checkOutMethods = new CheckOutMethods()
  //Hooks
  before(function(){

    cy.fixture('/example.json').then(function(data){
      this.data= data
    })
  })
  beforeEach(function(){

      //visit the base url
      cy.visit(Cypress.env('base_url'))
      //login
      loginMethods.confirmAge()
      loginMethods.login(data.phoneNumber,data.otp)
   
  })
  it('Add products to cart and checkout', () => {

      //Select the product with product name
      addToCartMethods.SelectProductwithAddress(data.product1,data.address)
      //select another product
      addToCartMethods.SelectProduct(data.product2)
      //goto checkout
      checkOutMethods.SelectCheckOut()
      //enter the required details  
      checkOutMethods.EnterCheckOutFormDetails(data.firstName,data.lastName,data.email)
      //select delivery date and time
      checkOutMethods.SelectDeliveryDateTime()
      //click and place order
      checkOutMethods.ClickBringItButton()
      
  })

})