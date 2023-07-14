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
    .get('.movie-title').contains('h1', 'Black Adam')
    .get('.movie-details').contains('p', 'Action')
    .get('.movie-details-container').contains('p', 'Release Date: 2022-10-19')
    .get('p').last().should('have.text', 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
  })

  it('Should be able to click back button to go back to homepage from details page', () => {
    cy.get('.back-btn').click()
    .get('.movies-container').find('.poster')
    .url().should('include', '/')
  })

  it('Should load the movie detials page with nav bar details', () => {
    cy.get('marquee').contains('p', 'Explore Great Movies Today!')
    .get('.nav-bar').find('img')
  })

  it('Should be able to use search bar on movie details page', () => {
    cy.get('input').type('black')
    .get('.search-btn').click()
    .get('h2').should('have.text', 'Results for "black"')
    .get('.search-results-container').find('img').should('have.attr', 'id').should('include', '436270')
    .get('.movie-title-homepage').should('have.text', 'Black Adam')
    .url().should('include', 'search/black')
  })


  it('Should be able to click on movie poster from results to go to movie details page', () => {
    cy.get('input').type('black')
    .get('.search-btn').click()
    .get('h2').should('have.text', 'Results for "black"')
    .url().should('include', 'search/black')
    .get('.poster').click()
    .url().should('include', '/436270')
    .get('h1').should('have.text', 'Black Adam')
  })

  it('Should be able to go back to homepage from search results page', () => {
    cy.get('input').type('black')
    .get('.search-btn').click()
    .get('h2').should('have.text', 'Results for "black"')
    .get('.back-btn').click()
    .url().should('include', '/')
  })

  it('Should be able to go back to search page from search results page', () => {
    cy.get('input').type('black')
    .get('.search-btn').click()
    .get('h2').should('have.text', 'Results for "black"')
    .get('.poster').click()
    .get('h1').should('have.text', 'Black Adam')
    .get('.back-results').click()
    .url().should('include', 'search/black')
  })
})

describe('Movie Details Error', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'homepage'
    })
    .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 500,
      body: {}
    })
  })

  it('Should display an error if movie details are not found', () => {
    cy.get('figure').first().click()
    .get('.error').should('have.text', 'Sorry! Error: Internal Server Error. Please try again later.')
  })

  it('Should display no results found if invalid tile was searched', () => {
    cy.get('figure').first().click()
    .get('input').type('asd')
    .get('.search-btn').click()
    .get('h2').should('have.text', 'Results for "asd"')
    .url().should('include', 'search/asd')
    .get('.error').should('have.text', 'No movies were found, try searching again!')
  })

})