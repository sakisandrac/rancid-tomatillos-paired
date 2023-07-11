describe('Homepage navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'homepage'
    })
  });
  it('Should load the homepage with all movies', () => {
    //add check for url - .url().should('include', '/')
    cy.get('main').contains('h1', 'Rancid Tomatillos')
    .get('figure').first().find('img')
    .get('.movie-title-homepage').first().should('have.text', 'Black Adam')
    .get('figure').last().find('img')
    .get('.movie-title-homepage').last().should('have.text', 'X')
  })
  it('Should load the homepage with nav bar details', () => {
    cy.get('marquee').contains('p', 'Explore Great Movies Today!')
    .get('.nav-bar').find('img')
  })
  // add check for sad path
})