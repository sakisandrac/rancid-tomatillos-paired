describe('Homepage navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'homepage'
    })
  });
  it('Should load the homepage with all movies', () => {
    cy.get('main').contains('h1', 'Rancid Tomatillos')
    .url().should('include', '/')
    .get('figure').first().find('img')
    .get('.movie-title-homepage').first().should('have.text', 'Black Adam')
    .get('figure').last().find('img')
    .get('.movie-title-homepage').last().should('have.text', 'X')
  })
  it('Should load the homepage with nav bar details', () => {
    cy.get('marquee').contains('p', 'Explore Great Movies Today!')
    .get('.nav-bar').find('img')
  })
})

describe('Error handling', () => {
  it('Should display an error image when a user types in the wrong address', () => {
    cy.visit('http://localhost:3000/movies')
    .get('.App').find('.error')
  })
  it('Should display an error image when a user types in the wrong address with two "/"', () => {
    cy.visit('http://localhost:3000/movies/potato')
    .get('.App').find('.error-img')
  })
  it('Should display an error image when a user types in the wrong address with movie id', () => {
    cy.visit('http://localhost:3000/8')
    .get('.App').find('.error')
  })
  it('Should display an error if movies are not found', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      body: {}
    })
   cy.get('.error').should('have.text', 'Sorry! Error: Internal Server Error. Please try again later.')
  })
})