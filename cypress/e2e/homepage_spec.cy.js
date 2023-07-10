describe('Homepage navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Should load the homepage with all page info', () => {
    cy.get('main').contains('h1', 'Rancid Tomatillos')
    
  })
  // test the nav 
})