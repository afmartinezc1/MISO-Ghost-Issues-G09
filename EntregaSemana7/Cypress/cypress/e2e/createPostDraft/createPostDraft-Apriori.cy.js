const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
describe("Create post draft", () => {
  it("Como usuario inicio sesion en ghost, creo un post, reviso que sea el primero en la lista de draft posts, entro a ese post y reviso que título y contenido sean los ingresados previamente", async () => {
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
      // And I enter post title apriori
      cy.get(pageElements.post.postTitle).type(aprioriData[0].title);
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I enter post content apriori
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
      // Then I should see that the post title is apriori
      cy.get(pageElements.post.postTitle).should(
        "have.value",
        aprioriData[0].title
      );
      // And I wait for 2 seconds
      cy.wait(2000);
      // Then I should see that the post content is apriori
      cy.get(pageElements.post.postContent).should(
        "have.text",
        aprioriData[0].text
      );
    });
  });
});
