//<"reference types="Cypress" />
var text = "";
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

//----------------------



Given('A user open the home page',()=>{
    cy.visit('https://www.demoblaze.com/index.html')
});

Then('Verify Page',()=>{
    cy.contains('Home')
});

//--------------------------------------------Sig Up - Registrarse

When('A new user registers', () => {
    cy.get('#signin2').as('username')
    cy.get('#signin2').click() 
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header').should('be.visible') 
   
    cy.get('#sign-username').clear().type(userID_Alpha_Numeric())      
     
    function userID_Alpha_Numeric() {
    
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      
      var export_text = text
      
      
      cy.log(export_text)
     
    return text;
    
    }
   
    cy.get('#sign-password').type('ciro3030')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
    
    
});

//--------------------------------------------Log In - Loguearse
When('A user opens the login page',()=>{
    cy.log(text)    
    cy.get('#login2').click()
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-header').should('be.visible')
    cy.get('#loginusername').clear()
    cy.get('#loginusername').type(text)   
    cy.get('#loginpassword').type('ciro3030')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#nameofuser').should('be.visible')
});

//--------------------VEEERRRRRR --------------------

/**Then('Verify Login', function(){
  cy.get('#nameofuser').invoke('text').as('InvokeText')
  cy.log(this.InvokeText)
});
*/
//-----------------------------------------------------

When('User closes login', () => {
    cy.get('#logout2').click({force:true})
    
});

Then('Verify closes login',()=>{
    cy.contains('Log in')
});

When('A user searches for a notebook', () => {
    cy.get('.list-group-item').contains('Laptops').click()
    cy.get('.card-block > .card-title > .hrefch').contains('Sony vaio i5').click()
});

Then('Verify search notebook',()=>{
    cy.contains('Sony vaio i5')
});

When('A user add notebook to cart', () => {
    cy.get('.col-sm-12 > .btn').click()
});
Then('Verify add notebook',()=>{
    cy.url('/').should('include', '/prod.html?idp_=8#')
});

