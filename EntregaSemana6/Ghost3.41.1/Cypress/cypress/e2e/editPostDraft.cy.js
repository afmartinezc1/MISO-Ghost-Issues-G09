const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");
const LOREM2 = Cypress.env("LOREM2");
const ScreenShoot = Cypress.env("ScreenShoot");
describe("Edit post draft", () => {
  it("Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, entro de nuevo al post, edito su título y su contenido, reviso que el título editado sea el que aparece en el primer post de la lista de drafs, entro a ese post y valido que su título y contenido sean los editados", async () => {
    // Given I navigate to page "<URL>"
    cy.visit(url);
    // And I wait for 3 seconds
    cy.wait(3000);
    // When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    cy.screenshot(`${ScreenShoot}/editPostDraft/1_enterEmail`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    cy.screenshot(`${ScreenShoot}/editPostDraft/2_enterPassword`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    cy.screenshot(`${ScreenShoot}/editPostDraft/3_clickSignIn`, {
      overwrite: true,
    });
    // And I wait for 7 seconds
    cy.wait(7000);
    // And I go to the posts view
    cy.get(pageElements.post.postView).click();
    cy.screenshot(`${ScreenShoot}/editPostDraft/4_clickPostView`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click new post
    cy.get(pageElements.post.newPost).click();
    cy.screenshot(`${ScreenShoot}/editPostDraft/5_clickNewPost`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post title "FOO BAR BAZ"
    cy.get(pageElements.post.postTitle).type("FOO BAR BAZ");
    cy.screenshot(`${ScreenShoot}/editPostDraft/6_enterPostTitle1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post content "<LOREM1>"
    cy.get(pageElements.post.postContent).type(LOREM1);
    cy.screenshot(`${ScreenShoot}/editPostDraft/7_enterPostContent1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click posts to go to previous page
    cy.get(pageElements.post.newPostPreviousPage).click();
    cy.screenshot(`${ScreenShoot}/editPostDraft/8_clickPreviousPage1`, {
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
    cy.screenshot(`${ScreenShoot}/editPostDraft/9_firstDraftPost1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft post
    cy.get(pageElements.post.firstPostInList).click();
    cy.screenshot(`${ScreenShoot}/editPostDraft/10_clickFirstDraftPost1`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post title "BAZ BAR FOO"
    cy.get(pageElements.post.postTitle).invoke("val", "");
    cy.get(pageElements.post.postTitle).type("BAZ BAR FOO");
    cy.screenshot(`${ScreenShoot}/editPostDraft/11_enterPostTitle2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post content "<LOREM2>"
    cy.get(pageElements.post.postContent).invoke("text", "");
    cy.get(pageElements.post.postContent).type(LOREM2);
    cy.screenshot(`${ScreenShoot}/editPostDraft/12_enterPostContent2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click posts to go to previous page
    cy.get(pageElements.post.newPostPreviousPage).click();
    cy.screenshot(`${ScreenShoot}/editPostDraft/13_clickPreviousPage2`, {
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
    cy.screenshot(`${ScreenShoot}/editPostDraft/14_firstDraftPost2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft post
    cy.get(pageElements.post.firstPostInList).click();
    cy.screenshot(`${ScreenShoot}/editPostDraft/15_clickFirstDraftPost2`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the post title is "BAZ BAR FOO"
    cy.get(pageElements.post.postTitle).should("have.value", "BAZ BAR FOO");
    cy.screenshot(`${ScreenShoot}/editPostDraft/16_checkPostTitle`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the edited post content is "<LOREM2>""
    cy.get(pageElements.post.postContent).should("have.text", LOREM2);
    cy.screenshot(`${ScreenShoot}/editPostDraft/17_checkPostContent`, {
      overwrite: true,
    });
  });
});
