describe('Error handling', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'homepage'
    }).as('getHomepage')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/888', {
      statusCode: 404,
      body: {}
    }).as('getInvalidMovie')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      body: {}
    }).as('serverError')
  });
  it('Should display an error message when a user types in the wrong address', () => {
    cy.visit('http://localhost:3000/888')
    cy.wait('@getInvalidMovie')
    cy.get('.App').find('.error')
  })
  it('Should display an error image when a user types in the wrong address with two "/"', () => {
    cy.visit('http://localhost:3000/movies/potato')
    cy.window().then((win) => {
      if (win.fetch) {
        cy.wait('@serverError')
      }
    })
    .get('.App').find('.error-img')
  })
  it('Should display an error message if movies are not found', () => {
    cy.visit('http://localhost:3000')
    cy.window().then((win) => {
      if (win.fetch) {
        cy.wait('@serverError')
      }
    })
    cy.get('.error').should('have.text', 'Sorry! Error: Internal Server Error. Please try again later.')
  })
})