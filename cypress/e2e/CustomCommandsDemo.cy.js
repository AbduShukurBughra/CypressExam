/// <reference types="cypress" />
describe('Custom Suite', ()=>{
          it.only('Login Test',()=>{
                    cy.login('admin@yourstore.com','admin');//valid
                    cy.title().should('be.equal','Dashboard / nopCommerce administration')

                    cy.login('admin@yourstore.com','admin12');//invalid password
                    cy.title().should('be.equal','Your store. Login')

                    cy.login('admin@yourstore123.com','admin');//invalid email
                    cy.title().should('be.equal','Your store. Login')

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