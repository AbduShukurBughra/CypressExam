
describe ("Assertion demo", ()=> {
      it("Implicit assertions", ()=>{
          cy.visit('https://opensource-demo.orangehrmlive.com/')

          //should  and
          // cy.url().should('include','orangehrmlive.com')
          // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          // cy.url().should('contain','orange')

          // cy.url().should('include','orangehrmlive.com')
          // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          // .should('contain','orange')

          cy.url().should('include','orangehrmlive.com')
          .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          .and('contain','orange')
          .and('not.contain','greenhrm')

          cy.title().should('include','Orange')
          .and('eq','OrangeHRM')
          .and('contain','HRM')

          cy.get('.orangehrm-login-branding > img').should('be.visible')
          .and('exist')

          cy.xpath("//a").should('have.length','5')

          cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
          cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','Admin');

      })    

      it("Explicit assertions", ()=>{
          cy.visit('https://opensource-demo.orangehrmlive.com/');
          cy.get("input[placeholder='Username']").type('Admin');
          cy.xpath("//input[@placeholder='Password']").type('admin123');
          cy.get("button[type='submit']").click();

          let expName = "Kim Collings";

          cy.get(".oxd-userdropdown-name").then((x)=>{

                    let actName=x.text()

                    //BDD Style
                    expect(actName).to.equal(expName)
                    // expect(actName).to.not.equal(expName)

                    //TDD Style
                    assert.equal(actName,expName)
                    // assert.notEqual(actName,expName)

          })



      })    


})