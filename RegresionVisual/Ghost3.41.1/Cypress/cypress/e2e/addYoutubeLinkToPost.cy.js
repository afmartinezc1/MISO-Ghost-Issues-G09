const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");
const ScreenShoot = Cypress.env("ScreenShoot");
describe("Add youtube link to post", () => {
  it("Como usuario inicio sesion en ghost, creo un post, incluyo un enlace de un video de youtube, reviso que sea el primero en la lista de draft posts, entro a ese post y reviso que el título sea el ingresado previamente y que ademas haya quedado el video de youtube en un iframe", async () => {
    // Given I navigate to page "<URL>"
    cy.visit(url);
    // And I wait for 3 seconds
    cy.wait(3000);
    // When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/1_enterEmail`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/2_enterPassword`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/3_clickSignIn`, {
      overwrite: true,
    });
    // And I wait for 7 seconds
    cy.wait(7000);
    // And I go to the posts view
    cy.get(pageElements.post.postView).click();
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/4_clickPostView`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click new post
    cy.get(pageElements.post.newPost).click();
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/5_clickNewPost`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on add post extra content
    cy.get(pageElements.post.addExtraContentBtn).click();
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/6_clickExtraContent`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on add post youtube link
    cy.get(pageElements.post.addYoutubeLink).click();
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/7_clickYoutubeLink`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post youtube link "https://www.youtube.com/watch?v=Jn09UdSb3aA"
    cy.get(pageElements.post.youtubeURLInput).type(
      "https://www.youtube.com/watch?v=Jn09UdSb3aA"
    );
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/8_enterYoutubeLink`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on the application body
    cy.get(pageElements.application.body).click();
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/9_clickOnBody`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post title "FOO BAR BAZ"
    cy.get(pageElements.post.postTitle).invoke("val", "");
    cy.get(pageElements.post.postTitle).type("FOO BAR BAZ");
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/10_enterPostTitle`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post content "<LOREM1>"
    cy.get(pageElements.post.postContent).type(LOREM1);
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/11_enterPostContent`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click posts to go to previous page
    cy.get(pageElements.post.newPostPreviousPage).click();
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/12_clickPreviousPage`, {
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
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/13_firstDraftPost`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft post
    cy.get(pageElements.post.firstPostInList).click();
    cy.screenshot(
      `${ScreenShoot}/addYoutubeLinkToPost/14_clickFirstDraftPost`,
      {
        overwrite: true,
      }
    );
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see that the post title is "FOO BAR BAZ"
    cy.get(pageElements.post.postTitle).should("have.value", "FOO BAR BAZ");
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/15_checkPostTitle`, {
      overwrite: true,
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see an iframe with the youtube video
    cy.get(pageElements.application.iframe).should((element) => {
      expect(element).to.not.be.undefined;
    });
    cy.screenshot(`${ScreenShoot}/addYoutubeLinkToPost/16_checkYoutubeLink`, {
      overwrite: true,
    });
  });
});
