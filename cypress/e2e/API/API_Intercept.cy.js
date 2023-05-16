
describe('Learning API Intercept', function() {
          it("Simple API Intercept/ Spy API request",()=>{
                    cy.visit('https://dummyapi.io/explorer')
                    cy.intercept({
                              path:'/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'
                    }).as('comments')

                    cy.get('.flex > :nth-child(5)').click();
                    cy.wait('@comments').then(intercept =>{
                    expect(intercept.response.body.limit).equal(10);
                    })
          })


          it("Mock API Response",()=>{
                    cy.visit('https://dummyapi.io/explorer')
                    cy.intercept('GET','/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{limit:10, Name:'Testing Funda'}).as('comments')
                    
                    cy.get('.flex > :nth-child(5)').click();
                    cy.wait('@comments').then(intercept =>{
                    expect(intercept.response.body.limit).equal(10);
                    expect(intercept.response.body.Name).equal('Testing Funda');
                    })
          })

          it.only("Data-Driven Mock API Response using Intercept",()=>{
                    cy.visit('https://dummyapi.io/explorer')
                    cy.intercept('GET','/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{fixture:'example.json'}).as('comments')
                    cy.get('.flex > :nth-child(5)').click();
                    cy.wait('@comments').then(intercept =>{
                    expect(intercept.response.body.password).equal('admin');
                    })
          })
});