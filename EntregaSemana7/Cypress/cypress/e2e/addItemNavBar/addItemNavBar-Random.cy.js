const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const EXISTING_URL = Cypress.env("EXISTING_URL");
const BLOG = Cypress.env("BLOG");
describe("Add NavBar item", () => {
  it("Como usuario inicio sesion en ghost, creo un nuevo item para el navbar, reviso que se vea reflejado en la pagina, lo elimino, y reviso que efectivamente ya no se encuentre", async () => {
    console.log(faker.lorem.words());
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
    //And I fill name of menu item apriori
    cy.get(pageElements.design.menuItemNameInput).type(pseudoData.title_two);
    //And I fill url of menu item apriori
    cy.get(pageElements.design.menuItemUrlInput).type(pseudoData.url);
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I save navBar design changes
    cy.get(pageElements.design.saveBtn).click();
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I navigate to page "<BLOG>"
    cy.visit(BLOG);
    //And I wait for 3 seconds
    cy.wait(2000);
    //And I should see a navBar item with name apriori
    cy.get(pageElements.design.lastNavBarItem).should(
      "have.text",
      pseudoData.title_two
    );
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I navigate to page "<URL>"
    cy.visit(url);
    //And I wait for 5 seconds
    cy.wait(5000);
    //And I click in Design
    cy.get(pageElements.design.linkSideMenu).click();
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click in navBar delete button
    cy.get(pageElements.design.deleteButton).click();
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I save navBar design changes
    cy.get(pageElements.design.saveBtn).click();
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I navigate to page "<BLOG>"
    cy.visit(BLOG);
    //And I wait for 3 seconds
    cy.wait(1000);
    //Then I shouldn't see a navBar item with name apriori
    cy.get(pageElements.design.lastNavBarItem).should(
      "not.have.text",
      pseudoData.title_two
    );
  });
});
