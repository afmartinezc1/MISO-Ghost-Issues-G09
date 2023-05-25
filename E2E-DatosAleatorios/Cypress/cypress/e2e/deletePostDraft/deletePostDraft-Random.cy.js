const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
import { faker } from "@faker-js/faker";
describe("Delete post draft", () => {
  it("Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, creo otro post, reviso que esté en la lista de draft posts, borro este post, y valido que el primer post de la lista de draft posts sea el primero que cree, con lo cual me cercioro que el segundo post efectivamente fue borrado", async () => {
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
    // And I click new post
    cy.get(pageElements.post.postView).click();
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
    // Then I should see the first draft post with title random0
    cy.get(pageElements.post.firstPostInList)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal(title0);
      });
    // And I click new post
    cy.get(pageElements.post.newPost).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post title random1
    cy.get(pageElements.post.postTitle).type(title1);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post content random1
    cy.get(pageElements.post.postContent).type(text1);
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
    // Then I should see that the post content is random1
    cy.get(pageElements.post.postContent).should("have.text", text1);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on post settings
    cy.get(pageElements.post.postSettings).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on delete post
    cy.get(pageElements.post.deletePostBtn).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on confirm post delete
    cy.get(pageElements.post.confirmDeleteBtn).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft post
    cy.get(pageElements.post.firstPostInList).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the post title is random0
    cy.get(pageElements.post.postTitle).should("have.value", title0);
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the post content is random0
    cy.get(pageElements.post.postContent).should("have.text", text0);
  });
});
