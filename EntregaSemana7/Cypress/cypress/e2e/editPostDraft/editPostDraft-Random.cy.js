const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
import { faker } from "@faker-js/faker";
describe("Edit post draft", () => {
  it("Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, entro de nuevo al post, edito su título y su contenido, reviso que el título editado sea el que aparece en el primer post de la lista de drafs, entro a ese post y valido que su título y contenido sean los editados", async () => {
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
    // And I go to the posts view
    cy.get(pageElements.post.postView).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click new post
    cy.get(pageElements.post.newPost).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post title random0
    cy.get(pageElements.post.postTitle).type(title0);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post content random0
    cy.get(pageElements.post.postContent).type(text0);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click posts to go to previous page
    cy.get(pageElements.post.newPostPreviousPage).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see the first draft post with title apriori
    cy.get(pageElements.post.firstPostInList)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal(title0);
      });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft post
    cy.get(pageElements.post.firstPostInList).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post title random1
    cy.get(pageElements.post.postTitle).invoke("val", "");
    cy.get(pageElements.post.postTitle).type(title1);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post content random1
    cy.get(pageElements.post.postContent).invoke("text", "");
    cy.get(pageElements.post.postContent).type(text1);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click posts to go to previous page
    cy.get(pageElements.post.newPostPreviousPage).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see the first draft post with title random1
    cy.get(pageElements.post.firstPostInList)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal(title1);
      });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft post
    cy.get(pageElements.post.firstPostInList).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the post title is random1
    cy.get(pageElements.post.postTitle).should("have.value", title1);
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the edited post content is random1
    cy.get(pageElements.post.postContent).should("have.text", text1);
  });
});
