const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");

describe("Create page with url published", () => {
  it("Como usuario inicio sesion en ghost, creo una page, publicarlo regresar a la lista de pages y verificar que este publicado, luego entro al page y verifico la url", async () => {

    cy.pseudoData().then((response) => {
    const [data] = response.body;
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
    // And I enter page title pseudo
    cy.get(pageElements.page.pageTitle).type(data.title);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter page content pseudo
    cy.get(pageElements.page.pageContent).type(data.url);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click publish to open dialog
    cy.get(pageElements.post.publishPost).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click publish to confirm
    cy.get(pageElements.post.publishConfirm).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click pages to go to previous page
    cy.get(pageElements.page.newPagePreviousPage).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click  the page published pseudo
    cy.get(pageElements.page.pageList)
        .contains('li', data.title)
        .click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should the page published pseudo"
    cy.get(pageElements.page.pageContent)
        .invoke("text")
        .then((text) => {
            expect(text.trim()).to.equal(data.url);
        });
  });
  });
});
