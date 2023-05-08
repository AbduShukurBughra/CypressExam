/// <reference types='Cypress' />
import LoginPage from './PageObjects/LoginPage';


describe('Test Suite',()=>{
          it('Valid Login Test',()=>{
                    const login = new LoginPage()
                    login.visit()
                    login.fillEmail('admin@yourstore.com')
                    login.fillPassword('admin')
                    login.submit()
                    cy.title().should('be.equal','Dashboard / nopCommerce administration')
          })
})