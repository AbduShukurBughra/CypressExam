
describe('Handling Tables',(()=>{
          beforeEach('Login',()=>{
                    cy.visit("https://demo.opencart.com/admin/index.php")
                    cy.get('#input-username').type('demo')
                    cy.get('#input-password').type('demo')
                    cy.get("button[type='submit']").click();
                    
                    cy.get('.btn-close').click();
                    //Customers --> Customers

                    cy.get('#menu-customer>a').click();//Customer main menu
                    // cy.get('menu-customer>ul>li:first-child').click(); //Customers sub/child item

          });

          it('Check Number Rows & Columns',()=>{
          //         cy.get("table[class='table table-responsive]")  

          });

          it('Check cell data from specific row & Column',()=>{

          });

          it('Read all the rows and columns data in the first page',()=>{

          });

          it('Paginations',()=>{

          });
}))