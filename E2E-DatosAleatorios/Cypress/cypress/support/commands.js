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
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

// Cypress.Commands.add("aprioriData", () => {
//   cy.fixture("a-priori-data").then((aprioriData) => {
//     return aprioriData[Math.floor(Math.random() * aprioriData.length)];
//   });
// });

const objectsAreEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every((key) => obj1[key] === obj2[key]);
};

Cypress.Commands.add("aprioriData", () => {
  cy.fixture("a-priori-data").then((aprioriData) => {
    const data1 = aprioriData[Math.floor(Math.random() * aprioriData.length)];
    let data2;
    do {
      data2 = aprioriData[Math.floor(Math.random() * aprioriData.length)];
    } while (objectsAreEqual(data1, data2));
    return [data1, data2];
  });
});

Cypress.Commands.add("pseudoData", () => {
  return cy.request("https://my.api.mockaroo.com/ghost_data.json?key=0d001640");
});
