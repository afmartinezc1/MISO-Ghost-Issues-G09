const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");

describe("Create page sheduled", () => {
  it("Como usuario inicio sesion en ghost, creo una page, programar la publicacion por 5 minutos y verificar que quedó programado", async () => {
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
    // And I enter page title a-priori
    cy.get(pageElements.page.pageTitle).type(aprioriData[0].title);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page content a-priori
    cy.get(pageElements.page.pageContent).type(aprioriData[0].text);
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
     // And I click page to go to previous page
     cy.get(pageElements.page.newPagePreviousPage).click();
     // And I wait for 2 seconds
     cy.wait(2000);
    // Then I navigate to page published"
    cy.get(pageElements.page.firstPageInListStatus)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal("Scheduled");
      });
    });
  });
});
