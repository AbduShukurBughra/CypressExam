describe('Fixture Demo Test Suite', () => {

          before(function () {
                    cy.fixture('example').then(function (data) {
                              this.data = data
                    })

          })
          it('Fixture Demo Test', () => {
                    cy.visit('https://admin-demo.nopcommerce.com/login')
                    cy.get('#Email').clear().type(this.data.email) //email
                    cy.get('#Password').clear().type(this.data.password)
                    cy.get('button[type="submit"]').click();
          })
})