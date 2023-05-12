const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");
const ScreenShoot = Cypress.env("ScreenShoot");
describe("Create page draft", () => {
  it("Como usuario inicio sesion en ghost, creo una page, reviso que sea el primero en la lista de draft pages, entro a esa page y reviso que título y contenido sean los ingresados previamente", async () => {
    // Given I navigate to page "<URL>"
    cy.visit(url);
    // And I wait for 3 seconds
    cy.wait(3000);
    // When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    cy.screenshot(`${ScreenShoot}/createPageDraft/1_enterEmail`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    cy.screenshot(`${ScreenShoot}/createPageDraft/2_enterPassword`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    cy.screenshot(`${ScreenShoot}/createPageDraft/3_clickSingIn`, {
      overwrite: true,
    });
    // And I wait for 7 seconds
    cy.wait(7000);
    // And I go to the pages view
    cy.get(pageElements.page.pageView).click();
    cy.screenshot(`${ScreenShoot}/createPageDraft/4_clickPageView"`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click new page
    cy.get(pageElements.page.newPage).click();
    cy.screenshot(`${ScreenShoot}/createPageDraft/5_clickNewPage`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page title "FOO BAR BAZ"
    cy.get(pageElements.page.pageTitle).type("FOO BAR BAZ");
    cy.screenshot(`${ScreenShoot}/createPageDraft/6_enterPageTitle`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page content "<LOREM1>"
    cy.get(pageElements.page.pageContent).type(LOREM1);
    cy.screenshot(`${ScreenShoot}/createPageDraft/7_enterPageContent`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click pages to go to previous page
    cy.get(pageElements.page.newPagePreviousPage).click();
    cy.screenshot(`${ScreenShoot}/createPageDraft/8_clickPreviousPage`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see the first draft page with title "FOO BAR BAZ"
    cy.get(pageElements.page.firstPageInList)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal("FOO BAR BAZ");
      });
    cy.screenshot(`${ScreenShoot}/createPageDraft/9_firstDraftPage`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft page
    cy.get(pageElements.page.firstPageInList).click();
    cy.screenshot(`${ScreenShoot}/createPageDraft/10_clickFirstDraftPage`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the page title is "FOO BAR BAZ"
    cy.get(pageElements.page.pageTitle).should("have.value", "FOO BAR BAZ");
    cy.screenshot(`${ScreenShoot}/createPageDraft/11_checkPageTitle`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the page content is "<LOREM1>"
    cy.get(pageElements.page.pageContent).should("have.text", LOREM1);
    cy.screenshot(`${ScreenShoot}/createPageDraft/12_checkPageContent`, {
      overwrite: true,
    });
  });
});
