# Frontend for Phrases-store Application

This is the frontend for the Phrases-store application. It provides the ability to add and display phrases. The Phrases-store Node/Express backend is required for this application to function normally. This app was bootstrapped with [React Boiler Plate](https://github.com/react-boilerplate/react-boilerplate).

## Stories

This application fulfills the following stories:

- One page shall have UI to input a string which saves to a database of your choice.

- One page shall display all strings stored on the database.

- User shall be able to navigate between the two pages.

- The application need not be fully styled, but should be laid out in a meaningful way.

- The application should utilize a Node / Express server.

- Styled Components - Use at least one styled component. The component must have a prop passed into the Styled Component for conditional rendering.

- Unit Tests - Write tests for one container. Full test coverage is not required.

## Prerequisites

You will need to install the following before proceeding.

- Node v10.14.1 + npm

## Setup

To install application

1. Install the Node/Express backend server first. Follow the instructions on the repo readme file.

   [[Backend Link]](https://github.com/wongco/phrases-store-backend)

2. Start the locally installed backend server.

3. git clone this repo to your local environment

   `git clone git@github.com:wongco/phrases-store-frontend.git`

4. change into the repo directory and install packages using

   `cd phrases-store-frontend`

   `npm install`

5. startup server

   `npm start`

6. Default frontend URL is located at:

   [http://localhost:3000/](http://localhost:3000/)

## Running Tests + Coverage Report

In the root folder, run:

    `npm test`

## Built / Leverages

- Bootstrapped with [React Boiler Plate](https://github.com/react-boilerplate/react-boilerplate)
- React
- React Router
- Redux
- Redux Saga
- Reselect
- Styled Components
- Axios

### Testing stack:

- jest - Testing Library
- enzyme - Testing Library

## Potential Improvements

- Add pagination and view limit options
- Integration and E2E tests

## Author

WongCo - https://github.com/wongco
