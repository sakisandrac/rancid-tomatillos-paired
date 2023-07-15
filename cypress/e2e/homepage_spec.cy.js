describe('Homepage navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'homepage'
    })
  });
  it('Should load the homepage with all movies', () => {
    cy.url().should('include', '/')
    .get('figure').first().find('img')
    .get('.movie-title-homepage').first().should('have.text', 'Black Adam')
    .get('figure').last().find('img')
    .get('.movie-title-homepage').last().should('have.text', 'X')
  })
  it('Should load the homepage with nav bar details', () => {
    cy.get('marquee').contains('p', 'Explore Great Movies Today!')
    .get('.nav-bar').find('img')
    .get('input[name="search"]').should('be.visible')
    .get('.search-btn').find('img')
  })
})
