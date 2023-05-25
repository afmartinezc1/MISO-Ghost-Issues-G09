const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");
const POST_PUBLICADO=Cypress.env("POST_PUBLICADO");
const PAGE_PUBLICADO=Cypress.env("PAGE_PUBLICADO");
describe("Create post sheduled", () => {
  it("Como usuario inicio sesion en ghost, creo un post, programar la publicacion por 5 minutos y verificar que quedó programado", async () => {
    // Given I navigate to page "<URL>"
    cy.visit(url);
    // And I wait for 3 seconds
    cy.wait(3000);
    // When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    cy.screenshot(`${ScreenShoot}/createPostPublishSheduler/enterEmail`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    cy.screenshot(`${ScreenShoot}/createPostPublishSheduler/enterPassword`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    cy.screenshot(`${ScreenShoot}/createPostPublishSheduler/clickSignIn`, {
      overwrite:true 
     });
    // And I wait for 7 seconds
    cy.wait(7000);
    // And I go to the posts view
    cy.get(pageElements.post.postView).click();
    cy.screenshot(`${ScreenShoot}/createPostPublishSheduler/clickPostView`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click new post
    cy.get(pageElements.post.newPost).click();
    cy.screenshot(`${ScreenShoot}/createPostPublishSheduler/clickNewView`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post title "MY_PRIMER_POST1"
    cy.get(pageElements.post.postTitle).type("MY_SECOND_POST");
    cy.screenshot(`${ScreenShoot}/createPostPublishSheduler/clickPostTitle`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post content "<LOREM1>"
    cy.get(pageElements.post.postContent).type(LOREM1);
    cy.screenshot(`${ScreenShoot}/createPostPublishSheduler/clickPostContent`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click publish to open dialog
    cy.get(pageElements.post.publishPost).click();
    cy.screenshot(`${ScreenShoot}/createPostPublishSheduler/clickPostDialogPublish`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click calendar for set time
    cy.get(pageElements.post.calendarSheduler).click();
    cy.screenshot(`${ScreenShoot}/createPostPublishSheduler/clickPostCalendar`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click shedule publish to confirm
    cy.get(pageElements.post.publishConfirm).click();
    cy.screenshot(`${ScreenShoot}/createPostPublishSheduler/clickPostPublish`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
     // And I click posts to go to previous page
     cy.get(pageElements.post.newPostPreviousPage).click();
     cy.screenshot(`${ScreenShoot}/createPostPublishSheduler/clickPostNewPreviusPost`, {
      overwrite:true 
     });
     // And I wait for 2 seconds
     cy.wait(2000);
    // Then I navigate to post published"
    cy.get(pageElements.post.firstPostInListStatus)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal("Scheduled");
      });
    cy.screenshot(`${ScreenShoot}/createPostPublishSheduler/shouldTheFirstPostStateSheduled`, {
      overwrite:true 
      });
  
  });
});
