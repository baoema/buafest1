//<"reference types="Cypress" />

import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given('A user open the home page',()=>{
    cy.visit('https://www.demoblaze.com/index.html')
});

Then('Verify Page',()=>{
    cy.contains('Home')
});

When('A new user registers', () => {
    cy.get('#signin2').click() 
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header').should('be.visible') 
    cy.get('#sign-username').clear().type('March20')
    cy.get('#sign-username').then($username=>{
        const smallModalText = $username.text();
        cy.log(smallModalText)
    })
    cy.get('#sign-password').type('ciro3030')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()   
});


When('A user opens the login page',()=>{
    cy.get('#login2').click()
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-header').should('be.visible')
    cy.get('#loginusername').clear()
    cy.get('#sign-username').invoke('text').as('InvokeText')
    cy.get('#loginpassword').type('ciro3030')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
});

//--------------------VEEERRRRRR --------------------
//Then('Verify Login',()=>{
  //  cy.get('#nameofuser').invoke('text')
    //cy.get('#nameofuser').contains('InvokeText')
//});

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

