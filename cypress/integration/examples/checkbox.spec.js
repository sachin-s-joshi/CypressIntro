/// <reference types="cypress" /> 

context('Writing First code in Cypress', () => {

    it('Simple Form', ()=>{

        cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo')
        .get('#user-message')
        .type('Test submit')
        .type('{enter}')
        .get('#showInput')
        .click()
        
        cy.get('#message')
        .should('contain','Test');
    })

    it('selecting single checkbox', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/checkbox-demo')
            .get('#isAgeSelected')
            .click()
            .should('be.checked');
    })

    it('Multiple Checkboxes', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/checkbox-demo')
            .get('#ex1-check1')
            .click()
            .should('be.checked')
            .get('#ex1-check2')
            .click()
            .should('be.checked')

    })
})
