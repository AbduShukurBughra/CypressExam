import '@cypress/xpath';

describe('XpathSlector', ()=>{

          it("find of products", ()=>{
                    cy.visit('https://www.automationexercise.com/');
                    cy.xpath("//a[@href='/products']").click(); 
                    cy.xpath("//input[@id='search_product']").type("T-Shirts")
                    cy.xpath("//button[@id='submit_search']").click();
                    cy.get('.productinfo > p').contains("T-Shirts") //Accersions

          })

          it("csslocators", ()=>{
                    cy.visit('https://www.automationexercise.com/');
                    cy.xpath("//a[@href='/products']").click(); 
                    cy.xpath("//input[@id='search_product']").type("T-Shirts")
                    cy.xpath("//button[@id='submit_search']").click();
                    cy.get('.productinfo > p').contains("T-Shirts") //Accersions

          })

})