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
  })
})