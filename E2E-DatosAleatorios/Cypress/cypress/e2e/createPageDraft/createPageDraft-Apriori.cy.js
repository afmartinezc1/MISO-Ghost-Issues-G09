const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
describe("Create page draft", () => {
  it("Como usuario inicio sesion en ghost, creo una page, reviso que sea el primero en la lista de draft pages, entro a esa page y reviso que título y contenido sean los ingresados previamente", async () => {
    cy.aprioriData().then((aprioriData) => {
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
      // And I enter page title apriori
      cy.get(pageElements.page.pageTitle).type(aprioriData[0].title);
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I enter page content apriori
      cy.get(pageElements.page.pageContent).type(aprioriData[0].text);
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I click pages to go to previous page
      cy.get(pageElements.page.newPagePreviousPage).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // Then I should see the first draft page with title apriori
      cy.get(pageElements.page.firstPageInList)
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal(aprioriData[0].title);
        });
      // And I wait for 2 seconds
      cy.wait(2000);
      // When I click on the first draft page
      cy.get(pageElements.page.firstPageInList).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // Then I should see that the page title is apriori
      cy.get(pageElements.page.pageTitle).should(
        "have.value",
        aprioriData[0].title
      );
      // And I wait for 2 seconds
      cy.wait(2000);
      // Then I should see that the page content is apriori
      cy.get(pageElements.page.pageContent).should(
        "have.text",
        aprioriData[0].text
      );
    });
  });
});
