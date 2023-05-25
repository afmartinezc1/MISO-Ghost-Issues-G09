const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");
const ScreenShoot = Cypress.env("ScreenShoot");
describe("Create post draft", () => {
  it("Como usuario inicio sesion en ghost, creo un post, reviso que sea el primero en la lista de draft posts, entro a ese post y reviso que título y contenido sean los ingresados previamente", async () => {
    // Given I navigate to page "<URL>"
    cy.visit(url);
    // And I wait for 3 seconds
    cy.wait(3000);
    // When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    cy.screenshot(`${ScreenShoot}/createPostDraft/1_enterEmail`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    cy.screenshot(`${ScreenShoot}/createPostDraft/2_enterPassword`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    cy.screenshot(`${ScreenShoot}/createPostDraft/3_clickSignIn`, {
      overwrite: true,
    });
    // And I wait for 7 seconds
    cy.wait(7000);
    // And I go to the posts view
    cy.get(pageElements.post.postView).click();
    cy.screenshot(`${ScreenShoot}/createPostDraft/4_clickPostView`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click new post
    cy.get(pageElements.post.newPost).click();
    cy.screenshot(`${ScreenShoot}/createPostDraft/5_clickNewPost`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post title "FOO BAR BAZ"
    cy.get(pageElements.post.postTitle).type("FOO BAR BAZ");
    cy.screenshot(`${ScreenShoot}/createPostDraft/6_enterPostTitle`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post content "<LOREM1>"
    cy.get(pageElements.post.postContent).type(LOREM1);
    cy.screenshot(`${ScreenShoot}/createPostDraft/7_enterPostContent`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click posts to go to previous page
    cy.get(pageElements.post.newPostPreviousPage).click();
    cy.screenshot(`${ScreenShoot}/createPostDraft/8_clickPreviousPage`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see the first draft post with title "FOO BAR BAZ"
    cy.get(pageElements.post.firstPostInList)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal("FOO BAR BAZ");
      });
    cy.screenshot(`${ScreenShoot}/createPostDraft/9_firstDraftPost`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft post
    cy.get(pageElements.post.firstPostInList).click();
    cy.screenshot(`${ScreenShoot}/createPostDraft/10_clickFirstDraftPost`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the post title is "FOO BAR BAZ"
    cy.get(pageElements.post.postTitle).should("have.value", "FOO BAR BAZ");
    cy.screenshot(`${ScreenShoot}/createPostDraft/11_checkPostTitle`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the post content is "<LOREM1>"
    cy.get(pageElements.post.postContent).should("have.text", LOREM1);
    cy.screenshot(`${ScreenShoot}/createPostDraft/12_checkPostContent`, {
      overwrite: true,
    });
  });
});
