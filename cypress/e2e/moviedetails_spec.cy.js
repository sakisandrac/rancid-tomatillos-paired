describe('Movie Details Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('figure').first().click()
  })

  it('Should be able to see movie details page', () => {
    cy.get('h1').should('have.text', 'Rancid Tomatillos')
    .get('.movie-backdrop-container').find('img')
    .get('.movie-title').contains('p', 'Black Adam')
    .get('.movie-details-container').contains('p', 'Release Date: 2022-10-19')
    .get('p').last().should('have.text', 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
  })

  it('Should load the movie detials page with nav bar details', () => {
    cy.get('marquee').contains('p', 'Explore Great Movies Today!')
    .get('.nav-bar').find('img')
  })

  //user clicks on the movie page, and sees the movie title, movie image, and movie deatils box
  
  //movie details box contains rating, runtime, release date and summary
  
  //user can click the back button and be brought back to the homepage 

  //user will see nav bar
})