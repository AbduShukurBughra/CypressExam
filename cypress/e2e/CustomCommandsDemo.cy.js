/// <reference types="cypress" />
describe('Custom Suite', ()=>{
          it('Login Test',()=>{
                    login('admin@yourstore.com','admin');
                    cy.title().should('be.equal','Dashboard / nopCommerce administration')

          })

          it('Add customer',()=>{
                    //Login script
                    cy.visit('https://admin-demo.nopcommerce.com/login')
                    cy.get("input[id=Email]").clear().type('admin@yourstore.com')
                    cy.get("input[id=Password]").clear().type('admin')
                    cy.get("button[type=submit]").click();

                    //  Script for adding new customers
                    cy.log("Adding new customers...")



          })

          it('Edit customer',()=>{
                    cy.visit('https://admin-demo.nopcommerce.com/login')
                    cy.get("input[id=Email]").clear().type('admin@yourstore.com')
                    cy.get("input[id=Password]").clear().type('admin')
                    cy.get("button[type=submit]").click();

                    // Script for Editing customers
                    cy.log("Editing customers...")
          })
})