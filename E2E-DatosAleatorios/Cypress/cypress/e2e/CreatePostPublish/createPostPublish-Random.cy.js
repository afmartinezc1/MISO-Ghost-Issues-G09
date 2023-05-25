const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
import { faker } from "@faker-js/faker";
describe("Create page published", () => {
  it("Como usuario inicio sesion en ghost, creo un post, publicarlo regresar a la lista de posts y verificar que este publicado", async () => {
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
    // And I go to the posts view
    cy.get(pageElements.post.postView).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click new post
    cy.get(pageElements.post.newPost).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post title random
    cy.get(pageElements.post.postTitle).type(title);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post content random
    cy.get(pageElements.post.postContent).type(text);
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
    // And I click posts to go to previous page
    cy.get(pageElements.post.newPostPreviousPage).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see the post published random
    cy.get(pageElements.post.postList)
        .should('contain', title)
        .and('contain', "Published")
  });
});
