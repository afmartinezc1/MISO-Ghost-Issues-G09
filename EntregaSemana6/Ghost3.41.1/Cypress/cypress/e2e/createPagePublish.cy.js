const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");
const Page_PUBLICADO=Cypress.env("Page_PUBLICADO");
const PAGE_PUBLICADO=Cypress.env("PAGE_PUBLICADO");
describe("Create page published", () => {
  it("Como usuario inicio sesion en ghost, creo una page, publicarlo y entrar el viewsite y verificar que exista", async () => {
    // Given I navigate to page "<URL>"
    cy.visit(url);
    // And I wait for 3 seconds
    cy.wait(3000);
    // When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    cy.screenshot(`${ScreenShoot}/createPagePublish/enterEmail`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    cy.screenshot(`${ScreenShoot}/createPagePublish/enterPassword`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    cy.screenshot(`${ScreenShoot}/createPagePublish/clickSignIn`, {
      overwrite:true 
     });
    // And I wait for 7 seconds
    cy.wait(7000);
    // And I go to the pages view
    cy.get(pageElements.page.pageView).click();
    cy.screenshot(`${ScreenShoot}/createPagePublish/clickPageView`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click new page
    cy.get(pageElements.page.newPage).click();
    cy.screenshot(`${ScreenShoot}/createPagePublish/clickNewView`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page title "MY_PRIMER_PAGE1"
    cy.get(pageElements.page.pageTitle).type("MY_FIRST_PAGE1");
    cy.screenshot(`${ScreenShoot}/createPagePublish/clickPageTitle`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter Page content "<LOREM1>"
    cy.get(pageElements.page.pageContent).type(LOREM1);
    cy.screenshot(`${ScreenShoot}/createPagePublish/clickPageContent`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click publish to open dialog
    cy.get(pageElements.Page.publishPage).click();
    cy.screenshot(`${ScreenShoot}/createPagePublish/clickPageDialogPublish`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click publish to confirm
    cy.get(pageElements.Page.publishConfirm).click();
    cy.screenshot(`${ScreenShoot}/createPagePublish/clickPagePublishConfirm`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I navigate to page published"
    cy.visit(PAGE_PUBLICADO);
    cy.screenshot(`${ScreenShoot}/createPagePublish/navegateToPage`, {
      overwrite:true 
     });
  
  });
});
