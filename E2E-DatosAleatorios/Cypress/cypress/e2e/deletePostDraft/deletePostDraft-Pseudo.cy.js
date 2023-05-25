const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
describe("Delete post draft", () => {
  it("Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, creo otro post, reviso que esté en la lista de draft posts, borro este post, y valido que el primer post de la lista de draft posts sea el primero que cree, con lo cual me cercioro que el segundo post efectivamente fue borrado", async () => {
    cy.pseudoData().then((response) => {
      const [data0, data1] = response.body;
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
      // And I enter post title pseudo0
      cy.get(pageElements.post.postTitle).type(data0.title);
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I enter post content pseudo0
      cy.get(pageElements.post.postContent).type(data0.text);
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I click posts to go to previous page
      cy.get(pageElements.post.newPostPreviousPage).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // Then I should see the first draft post with title pseudo0
      cy.get(pageElements.post.firstPostInList)
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal(data0.title);
        });
      // And I click new post
      cy.get(pageElements.post.newPost).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I enter post title pseudo1
      cy.get(pageElements.post.postTitle).type(data1.title);
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I enter post content pseudo1
      cy.get(pageElements.post.postContent).type(data1.text);
      // And I click posts to go to previous page
      cy.get(pageElements.post.newPostPreviousPage).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // Then I should see the first draft post with title pseudo1
      cy.get(pageElements.post.firstPostInList)
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal(data1.title);
        });
      // And I wait for 2 seconds
      cy.wait(2000);
      // When I click on the first draft post
      cy.get(pageElements.post.firstPostInList).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // Then I should see that the post title is pseudo1
      cy.get(pageElements.post.postTitle).should("have.value", data1.title);
      // And I wait for 2 seconds
      cy.wait(2000);
      // Then I should see that the post content is pseudo1
      cy.get(pageElements.post.postContent).should("have.text", data1.text);
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
      // Then I should see that the post title is pseudo0
      cy.get(pageElements.post.postTitle).should("have.value", data0.title);
      // And I wait for 2 seconds
      cy.wait(2000);
      // Then I should see that the post content is pseudo0
      cy.get(pageElements.post.postContent).should("have.text", data0.text);
    });
  });
});
