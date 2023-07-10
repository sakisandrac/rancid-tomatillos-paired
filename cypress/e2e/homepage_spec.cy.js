describe('Homepage navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Should load the homepage with all movies', () => {
    cy.get('main').contains('h1', 'Rancid Tomatillos')
    .get('.movie-title-homepage').first().should('have.text', 'Black Adam')
    .get('.movie-title-homepage').last().should('have.text', 'X')
  })
  it('Should load the homepage with nav bar details', () => {
    cy.get('marquee').contains('p', 'Explore Great Movies Today!')
    .get('.nav-bar').find('img')
  })
})