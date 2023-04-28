

describe("handle dropdown", ()=>{

          it.skip('Dropdown with select', ()=>{

                    cy.visit("https://www.zoho.com/commerce/free-demo.html")

                    cy.get('#zcf_address_country')
                    .select('Bolivia')
                    .should('have.value', 'Bolivia')
          });

          it.skip('Dropdown without select', ()=>{

                    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

                    cy.get('#select2-billing_country-container').click();

                    cy.get('input[role="combobox"]').type("Italy").type('{enter}')

                    cy.get('#select2-billing_country-container')
                    .should('have.text','Italy')
          });

          it.skip('Auto Suggest Dropdown', ()=>{

                    cy.visit("https://www.wikipedia.org/");

                    cy.xpath("//input[@id='searchInput']").type("Istanbul");
                    
                    cy.get('.suggestion-title').contains('Istanbul Technical University').click();
          });

          it('Dynamic Dropdown', ()=>{

                    cy.visit("https://www.google.com/");

                    cy.get('#APjFqb').type('cypress automation')

                    cy.wait(3000)

                    // cy.get('div.wM6W7d>span').should('have.length',11)

                    cy.get('div.wM6W7d>span').each(($el, index, $list) => {
                              if($el.text()=='cypress automation tool')
                              {
                                        cy.wrap($el).click()
                              }
                    })

                    cy.get('#APjFqb').should('have.value','cypress automation tool')

          })
})