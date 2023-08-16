describe('Visit the homepage', () => {
  beforeEach('Visit the home page', () => {
    cy.visit('http://localhost:3000/')
  })
  it('Assert Homepage text', () => {
    cy.get('[data-test="hero-heading"] > .block')
    .should('exist')
    .contains('Testing Next.js Applications with Cypress')
  })

  it('Verify the feature on the homepage', ( )=> {
  //4 courses feature
    cy.get('dt')
    .eq(0)
    .contains('4 Courses')
  
  //25+ lesson features 
    cy.get('dt')
    .eq(1)
    .contains('25+ Lessons')
  
  //Free and open source features
    cy.get('dt')
    .eq(2)
    .contains('Free and Open Source')
  })

  it('Verify users can subscribe', ( )=> {
    cy.get('[data-test="email-input"]')
    .clear()
    .type('azeezlameed@email.com')
    cy.get('[data-test="submit-button"]').click()
    cy.get('[data-test="success-message"]')
    .contains('azeezlameed@email.com has been successfully subscribed')

  })
})