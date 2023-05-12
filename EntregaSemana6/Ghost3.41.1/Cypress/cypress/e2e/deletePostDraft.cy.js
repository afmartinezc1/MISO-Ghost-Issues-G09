const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");
const LOREM2 = Cypress.env("LOREM2");
const ScreenShoot = Cypress.env("ScreenShoot");
describe("Delete post draft", () => {
  it("Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, creo otro post, reviso que esté en la lista de draft posts, borro este post, y valido que el primer post de la lista de draft posts sea el primero que cree, con lo cual me cercioro que el segundo post efectivamente fue borrado", async () => {
    // Given I navigate to page "<URL>"
    cy.visit(url);
    // And I wait for 3 seconds
    cy.wait(3000);
    // When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    cy.screenshot(`${ScreenShoot}/deletePostDraft/1_enterEmail`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    cy.screenshot(`${ScreenShoot}/deletePostDraft/2_enterPassword`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    cy.screenshot(`${ScreenShoot}/deletePostDraft/3_clickSignIn`, {
      overwrite: true,
    });
    // And I wait for 7 seconds
    cy.wait(7000);
    // And I click new post
    cy.get(pageElements.post.postView).click();
    cy.screenshot(`${ScreenShoot}/deletePostDraft/4_clickPostView`, {
      overwrite: true,
    });
    cy.get(pageElements.post.newPost).click();
    cy.screenshot(`${ScreenShoot}/deletePostDraft/5_clickNewPost1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post title "FOO BAR BAZ"
    cy.get(pageElements.post.postTitle).type("FOO BAR BAZ");
    cy.screenshot(`${ScreenShoot}/deletePostDraft/6_enterPostTitle1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post content "<LOREM1>"
    cy.get(pageElements.post.postContent).type(LOREM1);
    cy.screenshot(`${ScreenShoot}/deletePostDraft/7_enterPostContent1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click posts to go to previous page
    cy.get(pageElements.post.newPostPreviousPage).click();
    cy.screenshot(`${ScreenShoot}/deletePostDraft/8_clickPreviousPage1`, {
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
    cy.screenshot(`${ScreenShoot}/deletePostDraft/9_firstDraftPost1"`, {
      overwrite: true,
    });
    // And I click new post
    cy.get(pageElements.post.newPost).click();
    cy.screenshot(`${ScreenShoot}/deletePostDraft/10_clickNewPost2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post title "BAZ BAR FOO"
    cy.get(pageElements.post.postTitle).type("BAZ BAR FOO");
    cy.screenshot(`${ScreenShoot}/deletePostDraft/11_enterPostTitle2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post content "<LOREM2>"
    cy.get(pageElements.post.postContent).type(LOREM2);
    cy.screenshot(`${ScreenShoot}/deletePostDraft/12_enterPostContent2`, {
      overwrite: true,
    });
    // And I click posts to go to previous page
    cy.get(pageElements.post.newPostPreviousPage).click();
    cy.screenshot(`${ScreenShoot}/deletePostDraft/13_clickPreviousPage2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see the first draft post with title "BAZ BAR FOO"
    cy.get(pageElements.post.firstPostInList)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal("BAZ BAR FOO");
      });
    cy.screenshot(`${ScreenShoot}/deletePostDraft/14_firstDraftPost2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft post
    cy.get(pageElements.post.firstPostInList).click();
    cy.screenshot(`${ScreenShoot}/deletePostDraft/15_clickFirstDraftPost1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the post title is "BAZ BAR FOO"
    cy.get(pageElements.post.postTitle).should("have.value", "BAZ BAR FOO");
    cy.screenshot(`${ScreenShoot}/deletePostDraft/16_checkPostTitle1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the post content is "<LOREM2>"
    cy.get(pageElements.post.postContent).should("have.text", LOREM2);
    cy.screenshot(`${ScreenShoot}/deletePostDraft/17_checkPostContent1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on post settings
    cy.get(pageElements.post.postSettings).click();
    cy.screenshot(`${ScreenShoot}/deletePostDraft/18_clickPostSettings`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on delete post
    cy.get(pageElements.post.deletePostBtn).click();
    cy.screenshot(`${ScreenShoot}/deletePostDraft/19_clickDeletePost`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on confirm post delete
    cy.get(pageElements.post.confirmDeleteBtn).click();
    cy.screenshot(`${ScreenShoot}/deletePostDraft/20_clickConfirmDelete`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft post
    cy.get(pageElements.post.firstPostInList).click();
    cy.screenshot(`${ScreenShoot}/deletePostDraft/21_clickFirstDraftPost2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the post title is "FOO BAR BAZ"
    cy.get(pageElements.post.postTitle).should("have.value", "FOO BAR BAZ");
    cy.screenshot(`${ScreenShoot}/deletePostDraft/22_checkPostTitle2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the post content is "<LOREM1>"
    cy.get(pageElements.post.postContent).should("have.text", LOREM1);
    cy.screenshot(`${ScreenShoot}/deletePostDraft/23_checkPostContent2`, {
      overwrite: true,
    });
  });
});
