const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
import { faker } from "@faker-js/faker";
describe("Delete page draft", () => {
  it("Como usuario inicio sesion en ghost, creo una page, reviso que esté en la lista de draft pages, creo otra page, reviso que esté en la lista de draft pages, borro esta page, y valido que la primera page de la lista de draft pages sea la primera que cree, con lo cual me cercioro que la segunda page efectivamente fue borrada", async () => {
    const title0 = faker.lorem.words();
    const text0 = faker.lorem.text().replace(/\n/g, "");
    const title1 = faker.lorem.words();
    const text1 = faker.lorem.text().replace(/\n/g, "");
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
    // And I enter page title random0
    cy.get(pageElements.page.pageTitle).type(title0);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page content random0
    cy.get(pageElements.page.pageContent).type(text0);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click pages to go to previous page
    cy.get(pageElements.page.newPagePreviousPage).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see the first draft page with title random0
    cy.get(pageElements.page.firstPageInList)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal(title0);
      });
    // And I click new page
    cy.get(pageElements.page.newPage).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page title random1
    cy.get(pageElements.page.pageTitle).type(title1);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page content random1
    cy.get(pageElements.page.pageContent).type(text1);
    // And I click pages to go to previous page
    cy.get(pageElements.page.newPagePreviousPage).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see the first draft page with title random1
    cy.get(pageElements.page.firstPageInList)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal(title1);
      });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft page
    cy.get(pageElements.page.firstPageInList).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the page title is random1
    cy.get(pageElements.page.pageTitle).should("have.value", title1);
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the page content is random1
    cy.get(pageElements.page.pageContent).should("have.text", text1);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on page settings
    cy.get(pageElements.page.pageSettings).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on delete page
    cy.get(pageElements.page.deletePageBtn).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on confirm page delete
    cy.get(pageElements.page.confirmDeleteBtn).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft page
    cy.get(pageElements.page.firstPageInList).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the page title is random0
    cy.get(pageElements.page.pageTitle).should("have.value", title0);
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the page content is random0
    cy.get(pageElements.page.pageContent).should("have.text", text0);
  });
});
