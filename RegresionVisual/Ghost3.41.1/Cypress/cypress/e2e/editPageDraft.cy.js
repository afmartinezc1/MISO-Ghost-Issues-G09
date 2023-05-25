const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");
const LOREM2 = Cypress.env("LOREM2");
const ScreenShoot = Cypress.env("ScreenShoot");
describe("Edit page draft", () => {
  it("Como usuario inicio sesion en ghost, creo una page, reviso que esté en la lista de draft pages, entro de nuevo a la page, edito su título y su contenido, reviso que el título editado sea el que aparece en la primera page de la lista de drafs, entro a ese page y valido que su título y contenido sean los editados", async () => {
    // Given I navigate to page "<URL>"
    cy.visit(url);
    // And I wait for 3 seconds
    cy.wait(3000);
    // When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    cy.screenshot(`${ScreenShoot}/editPageDraft/1_enterEmail`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    cy.screenshot(`${ScreenShoot}/editPageDraft/2_enterPassword`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    cy.screenshot(`${ScreenShoot}/editPageDraft/3_clickSignIn`, {
      overwrite: true,
    });
    // And I wait for 7 seconds
    cy.wait(7000);
    // And I go to the pages view
    cy.get(pageElements.page.pageView).click();
    cy.screenshot(`${ScreenShoot}/editPageDraft/4_clickPageView`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click new page
    cy.get(pageElements.page.newPage).click();
    cy.screenshot(`${ScreenShoot}/editPageDraft/5_clickNewPage`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page title "FOO BAR BAZ"
    cy.get(pageElements.page.pageTitle).type("FOO BAR BAZ");
    cy.screenshot(`${ScreenShoot}/editPageDraft/6_enterPageTitle1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page content "<LOREM1>"
    cy.get(pageElements.page.pageContent).type(LOREM1);
    cy.screenshot(`${ScreenShoot}/editPageDraft/7_enterPageContent1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click pages to go to previous page
    cy.get(pageElements.page.newPagePreviousPage).click();
    cy.screenshot(`${ScreenShoot}/editPageDraft/8_clickPreviousPage1`, {
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
    cy.screenshot(`${ScreenShoot}/editPageDraft/9_firstDraftPage1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft page
    cy.get(pageElements.page.firstPageInList).click();
    cy.screenshot(`${ScreenShoot}/editPageDraft/10_clickFirstDraftPage1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page title "BAZ BAR FOO"
    cy.get(pageElements.page.pageTitle).invoke("val", "");
    cy.get(pageElements.page.pageTitle).type("BAZ BAR FOO");
    cy.screenshot(`${ScreenShoot}/editPageDraft/11_enterPageTitle2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page content "<LOREM2>"
    cy.get(pageElements.page.pageContent).invoke("text", "");
    cy.get(pageElements.page.pageContent).type(LOREM2);
    cy.screenshot(`${ScreenShoot}/editPageDraft/12_enterPageContent2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click pages to go to previous page
    cy.get(pageElements.page.newPagePreviousPage).click();
    cy.screenshot(`${ScreenShoot}/editPageDraft/13_clickPreviousPage2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see the first draft page with title "BAZ BAR FOO"
    cy.get(pageElements.page.firstPageInList)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal("BAZ BAR FOO");
      });
    cy.screenshot(`${ScreenShoot}/editPageDraft/14_firstDraftPage2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft page
    cy.get(pageElements.page.firstPageInList).click();
    cy.screenshot(`${ScreenShoot}/editPageDraft/15_clickFirstDraftPage2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the page title is "BAZ BAR FOO"
    cy.get(pageElements.page.pageTitle).should("have.value", "BAZ BAR FOO");
    cy.screenshot(`${ScreenShoot}/editPageDraft/16_checkPageTitle`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the edited page content is "<LOREM2>"
    cy.get(pageElements.page.pageContent).should("have.text", LOREM2);
    cy.screenshot(`${ScreenShoot}/editPageDraft/17_checkPageContent`, {
      overwrite: true,
    });
  });
});
