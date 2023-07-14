describe('Search navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'homepage'
    })
      .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
        statusCode: 200,
        fixture: 'moviedetails'
      })
  })
  it('Should use the searchbar to search for a movie', () => {
    cy.get('input[name="search"]')
    .should('be.visible')
    .type('adam{enter}')
    .should('have.value','adam')
    .url().should('include', 'search')
    .url().should('include', 'adam')
    .get('h2').should('have.text', 'Results for "adam"')
    .get('figure').find('img')
    .get('.movie-title-homepage').should('have.text', 'Black Adam')
  })
  it('Should click the movie to view details', () => {
    cy.get('input[name="search"]').type('adam{enter}')
    .should('have.value','adam')
    .get('figure').click()
    .url().should('include', '/436270')
    .get('.back-btn').first().should('have.text', 'Back to Home')
    .get('.back-btn').last().should('have.text', 'Back to Search')
    .get('.movie-backdrop-container').find('img')
    .get('.movie-title').contains('h1', 'Black Adam')
  })
  it('Should be able to navigate back to search results', () => {
    cy.get('input[name="search"]').type('adam{enter}')
    .should('have.value','adam')
    .get('figure').click()
    .url().should('include', '/436270')
    .get('.movie-backdrop-container').find('img')
    .get('.movie-title').contains('h1', 'Black Adam')
    .get('.back-btn').last().should('have.text', 'Back to Search').click()
    .get('h2').should('have.text', 'Results for "adam"')
    .get('figure').find('img')
    .get('.movie-title-homepage').should('have.text', 'Black Adam')
  })
  it('Should be able to navigate back to home after clicking a searched movie', () => {
    cy.get('input[name="search"]').type('adam{enter}')
    .get('h2').should('have.text', 'Results for "adam"')
    .get('.back-btn').first().should('have.text', 'Back to Home').click()
    .get('figure').first().find('img')
    .get('.movie-title-homepage').first().should('have.text', 'Black Adam')
    .get('figure').last().find('img')
    .get('.movie-title-homepage').last().should('have.text', 'X')
  })
  it('Should show an error message if no movie is found', () => {
    cy.get('input[name="search"]').type('twilight{enter}')
    .get('h2').should('have.text', 'Results for "twilight"')
    .get('.error').should('have.text', 'No movies were found, try searching again!')
  })
})