import '@cypress/xpath';

describe('CSSLocators', ()=>{

          it("csslocators", ()=>{
                    cy.visit('https://www.automationexercise.com/');
                    cy.get("a[href='/products']").click(); 
                    cy.get('#search_product').type("T-Shirts")
                    cy.get("button[id='submit_search']").click();
                    cy.get('.productinfo > p').contains("T-Shirts") //Accersions


          })
})