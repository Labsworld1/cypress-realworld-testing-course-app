describe('Subscribe to Newsletter', () => {
    beforeEach('Visit the home page', () => {
      cy.visit('http://localhost:3000/')
    })

    it('Verify users can subscribe with valid email', ( )=> {
        cy.getByData('email-input')
        .clear()
        .type('azeezlameed@email.com')
        cy.getByData('submit-button').click()
        cy.getByData("success-message")
        .should('exist')
        .contains('azeezlameed@email.com has been successfully subscribed')
    
      })
    
    it('Verify users cannot subscribe with invalid email', ( )=> {
        cy.getByData('email-input')
        .clear()
        .type('azeezlameed')
        cy.getByData('submit-button').click()
        cy.getByData("success-message")
        .should('not.exist')
    
      })

      it('Verify users cannot subscribe with an existing email', ( )=> {
        cy.getByData('email-input')
        .clear()
        .type('john@example.com')
        cy.getByData('submit-button').click()
        cy.getByData("server-error-message")
        .should('exist')
        .contains('Error: john@example.com already exists. Please use a different email address.')
    
      })


})
