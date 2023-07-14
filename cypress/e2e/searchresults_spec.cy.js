describe('Search navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'homepage'
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
    .get('.movie-backdrop-container').find('img')
    .get('.movie-title').contains('h1', 'Black Adam')
  })
  it('Should show an error message if no movie is found', () => {
    cy.get('input[name="search"]').type('twilight{enter}')
    .get('h2').should('have.text', 'Results for "twilight"')
    .get('.error').should('have.text', 'No movies were found, try searching again!')
  })
})