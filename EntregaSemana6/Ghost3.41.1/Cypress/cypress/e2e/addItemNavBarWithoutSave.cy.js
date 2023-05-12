const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const EXISTING_URL = Cypress.env("EXISTING_URL");
const BLOG = Cypress.env("BLOG");
describe("Add NavBar item without save", () => {
  it("Como usuario inicio sesion en ghost, creo un nuevo item para el navbar, trato de salir sin guardar los cambios, cancelo la accion y valido que los cambios no se descarten, luego intento de nuevo, descarto la accion y valido que los cambios se hayan descartado", async () => {
    //Given I navigate to page "<URL>"
    cy.visit(url);
    //When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    //And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    //And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    //And I wait for 5 seconds
    cy.wait(5000);
    //And I click in Design
    cy.get(pageElements.design.linkSideMenu).click();
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I fill name of menu item "new-NavBar-Item"
    cy.get(pageElements.design.menuItemNameInput).type("new-NavBar-Item");
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click in General
    cy.get(pageElements.general.linkSideMenu).click();
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click on stay modal design button
    cy.get(pageElements.design.stayBtn).click();
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I should see the new navBar item input with name "new-NavBar-Item"
    cy.get(pageElements.design.menuItemNameInput).should('have.value', 'new-NavBar-Item');
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click in General 
    cy.get(pageElements.general.linkSideMenu).click();
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click on leave modal design button
    cy.get(pageElements.design.leaveBtn).click()
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click in Design
    cy.get(pageElements.design.linkSideMenu).click();
    //And I wait for 2 seconds
    cy.wait(2000);
    //Then I shouldn't see the new navBar item input with name "new-NavBar-Item"
    cy.get(pageElements.design.menuItemNameInput).should('not.have.value', 'new-NavBar-Item');
  });
});
