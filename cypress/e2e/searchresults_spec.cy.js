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

})