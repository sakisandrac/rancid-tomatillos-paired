describe('Error handling', () => {
  beforeEach(() => {
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

describe('Movie Details Error', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'homepage'
    })
    .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 500,
      body: {}
    })
  })

  it('Should display an error if movie details are not found', () => {
    cy.get('figure').first().click()
    .get('.error').should('have.text', 'Sorry! Error: Internal Server Error. Please try again later.')
  })

  it('Should display no results found if invalid tile was searched', () => {
    cy.get('figure').first().click()
    .get('input').type('asd')
    .get('.search-btn').click()
    .get('h2').should('have.text', 'Results for "asd"')
    .url().should('include', 'search/asd')
    .get('.error').should('have.text', 'No movies were found, try searching again!')
  })

})