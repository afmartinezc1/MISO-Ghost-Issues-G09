const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
describe("Edit post draft", () => {
  it("Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, entro de nuevo al post, edito su título y su contenido, reviso que el título editado sea el que aparece en el primer post de la lista de drafs, entro a ese post y valido que su título y contenido sean los editados", async () => {
    cy.aprioriData().then((aprioriData) => {
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
      // And I enter post title apriori1
      cy.get(pageElements.post.postTitle).type(aprioriData[0].title);
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I enter post content apriori1
      cy.get(pageElements.post.postContent).type(aprioriData[0].text);
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
          expect(text.trim()).to.equal(aprioriData[0].title);
        });
      // And I wait for 2 seconds
      cy.wait(2000);
      // When I click on the first draft post
      cy.get(pageElements.post.firstPostInList).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I enter post title apriori2
      cy.get(pageElements.post.postTitle).invoke("val", "");
      cy.get(pageElements.post.postTitle).type(aprioriData[1].title);
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I enter post content apriori2
      cy.get(pageElements.post.postContent).invoke("text", "");
      cy.get(pageElements.post.postContent).type(aprioriData[1].text);
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I click posts to go to previous page
      cy.get(pageElements.post.newPostPreviousPage).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // Then I should see the first draft post with title apriori2
      cy.get(pageElements.post.firstPostInList)
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal(aprioriData[1].title);
        });
      // And I wait for 2 seconds
      cy.wait(2000);
      // When I click on the first draft post
      cy.get(pageElements.post.firstPostInList).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // Then I should see that the post title is apriori2
      cy.get(pageElements.post.postTitle).should(
        "have.value",
        aprioriData[1].title
      );
      // And I wait for 2 seconds
      cy.wait(2000);
      // Then I should see that the edited post content is apriori2
      cy.get(pageElements.post.postContent).should(
        "have.text",
        aprioriData[1].text
      );
    });
  });
});
