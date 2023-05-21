const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
import { faker } from "@faker-js/faker";
describe("Create post sheduled", () => {
  it("Como usuario inicio sesion en ghost, creo una page, programar la publicacion por 5 minutos y verificar que quedó programado", async () => {
    const title = faker.lorem.words();
    const text = faker.lorem.text().replace(/\n/g, "");
    // Given I navigate to page "<URL>"
    cy.visit(url);
    // And I wait for 3 seconds
    cy.wait(3000);
    // When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    // And I wait for 7 seconds
    cy.wait(7000);
    // And I go to the pages view
    cy.get(pageElements.page.pageView).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click new page
    cy.get(pageElements.page.newPage).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page title random
    cy.get(pageElements.page.pageTitle).type(title);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page content random
    cy.get(pageElements.page.pageContent).type(text);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click publish to open dialog
    cy.get(pageElements.post.publishPost).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click calendar for set time
    cy.get(pageElements.post.calendarSheduler).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click shedule publish to confirm
    cy.get(pageElements.post.publishConfirm).click();
    // And I wait for 2 seconds
    cy.wait(2000);
     // And I click posts to go to previous page
     cy.get(pageElements.page.newPagePreviousPage).click();
     // And I wait for 2 seconds
     cy.wait(2000);
    // Then I navigate to post published"
    cy.get(pageElements.post.firstPostInListStatus)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal("Scheduled");
      });
    });
});
