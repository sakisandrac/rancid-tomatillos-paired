# Rancid Tomatillos
This application allows users to view a list movies, and get details about each individual movie. Users can also search through movies to by title. Visit us <a href="https://rancid-tomatillos-paired-ashy.vercel.app/">here</a>!

## Technologies Used
React, React router v6, create-react-app, CSS, HTML, JavaScript, Cypress

## Contributors:
<a href="https://github.com/sakisandrac">Saki Chatphatthanasiri</a><br>
<a href="https://github.com/CaliHam">Callihan Herrmann</a>

## Learning Goals:
At the time of this project, we are students at Turing School of Software Engineering in the front end development program, in mod 3. This was our first paired project using React. The goal of this project was to create a full application with React, and use react router v6 to create a single page application with multiple routes. We tested this application with Cypress testing.

## Challenges:
The biggest challenge we faced on this project was testing with Cypress. In order to test our application, we created mock data in a fixture, and intercepted all API calls. We had the biggest issue with timing- sometimes our calls would stub correctly, but other times the fetch requests would still go through. We managed to fix this by implementing aliases and "wait" in our Cypress tests.

## Project Preview
![rancid-preview1](public/rancid-toms.gif)

![rancid-preview2](https://github.com/sakisandrac/rancid-tomatillos-paired/assets/118419729/929d4441-2ccb-4105-a37a-4d6ea14903a6)

## Set up
1. Fork or clone down this respository. 
2. In the terminal, open this app by running the command `cd <project folder name>`
3. Run the command  `npm install` to install dependencies.
4. Run the command `npm start` to start the server.
5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
6. You can also view the project <a href="https://rancid-tomatillos-paired-ashy.vercel.app/">here</a>.
7. Use control C to stop the server.
8. To test, run the command `npm run cypress`.
