describe('Visit the homepage', () => {
  beforeEach('Visit the home page', () => {
    cy.visit('http://localhost:3000/')
  })

  context('Hero Section', () => {
    it('Assert Homepage text', () => {
      cy.getByData('hero-heading')
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
  })

  context('Courses Section', () => {
    it('First Course: Testing Your First Next.js Application ', () => {
      cy.getByData('course-0')
      .find('a')
      .eq(3)
      .click()
      cy.location('pathname').should('eq', '/testing-your-first-application')
      cy.get('h1')
      .should('exist')
      .contains('Testing Your First Next.js Application')
    })

    it('Second Course: Testing Foundations', () => {
      cy.getByData('course-1')
      .find('a')
      .eq(3)
      .click()
      cy.location('pathname').should('eq', '/testing-foundations')
      cy.get('h1')
      .should('exist')
      .contains('Testing Foundations')
    })

    it('Third Course: Cypress Fundamentals', () => {
      cy.getByData('course-2')
      .find('a')
      .eq(3)
      .click()
      cy.location('pathname').should('eq', '/cypress-fundamentals')
      cy.get('h1')
      .should('exist')
      .contains('Cypress Fundamentals')
    })

  })
  
})