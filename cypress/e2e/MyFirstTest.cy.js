describe('My First Test', () => {
  it.only('Test1', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRM')
  })

  it('Test2', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRM123')
  })
})