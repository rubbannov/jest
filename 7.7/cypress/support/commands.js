// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import adminpageSelector from "../fixtures/adminpage.selectors.json";

Cypress.Commands.add("login", (login, password) => {
  cy.get(adminpageSelector.loginField).type(login);
  cy.get(adminpageSelector.passwordField).type(password);
  cy.get(adminpageSelector.loginButton).click();
});

Cypress.Commands.add("selectSeats", (row, seat) => {
  cy.get(
    `.buying-scheme__wrapper > :nth-child(${row}) > :nth-child(${seat})`
  ).click();
});

Cypress.Commands.add("checkNameMovie", (movieName) => {
  cy.contains(movieName).should("be.visible");
});
