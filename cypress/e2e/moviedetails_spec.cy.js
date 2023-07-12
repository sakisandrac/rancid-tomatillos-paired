describe('Movie Details Page', () => {

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
    .get('figure').first().click()
  })

  it('Should be able to see movie details page', () => {
    cy.url().should('include', '/436270')
    .get('.movie-backdrop-container').find('img')
    .get('.movie-title').contains('p', 'Black Adam')
    .get('.movie-details').contains('p', 'Action')
    .get('.movie-details-container').contains('p', 'Release Date: 2022-10-19')
    .get('p').last().should('have.text', 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
  })

  it('Should be able to click back button to go back to homepage', () => {
    cy.get('button').click()
    .get('.movies-container').find('.poster')
    .url().should('include', '/')
  })

  it('Should load the movie detials page with nav bar details', () => {
    cy.get('marquee').contains('p', 'Explore Great Movies Today!')
    .get('.nav-bar').find('img')
  })

})

describe('Movie Details Error', () => {
  it('Should display an error if movie details are not found', () => {
    cy.visit('http://localhost:3000/')
    .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'homepage'
    })
    .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 500,
      body: {}
    })
    .get('figure').first().click()
    .get('.error').should('have.text', 'Sorry! Error: Internal Server Error. Please try again later.')
  })
})