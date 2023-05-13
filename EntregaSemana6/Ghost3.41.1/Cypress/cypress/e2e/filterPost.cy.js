const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");
const POST_PUBLICADO=Cypress.env("POST_PUBLICADO");
const PAGE_PUBLICADO=Cypress.env("PAGE_PUBLICADO");
describe("Filtrar post", () => {
  it("Como usuario inicio sesion en ghost, filtrar los post por estado y por autor y verificar que filtra correctamente", async () => {
    // Given I navigate to page "<URL>"
    cy.visit(url);
    // And I wait for 3 seconds
    cy.wait(3000);
    // When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    cy.screenshot(`${ScreenShoot}/filterPost/enterEmail`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    cy.screenshot(`${ScreenShoot}/filterPost/enterPaswword`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    cy.screenshot(`${ScreenShoot}/filterPost/clickSignIn`, {
      overwrite:true 
     });
    // And I wait for 7 seconds
    cy.wait(7000);
    // And I go to the posts view
    cy.get(pageElements.post.postView).click();
    cy.screenshot(`${ScreenShoot}/filterPost/clickPostView`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click in filter by type
    cy.get(pageElements.post.filterPostState).click();
    cy.screenshot(`${ScreenShoot}/filterPost/clickFilterPostByState`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
     // And I click filter by Draft
     cy.get(pageElements.post.filterPostStateDraft).click();
     cy.screenshot(`${ScreenShoot}/filterPost/clickFilterPostByStateDraft`, {
      overwrite:true 
     });
     // And I wait for 2 seconds
     cy.wait(2000);
    // Then I should see post in post list with state Draft"
    cy.get(pageElements.post.postList)
    .should('contain', 'Draft');
    cy.screenshot(`${ScreenShoot}/filterPost/shouldSeePostWithStateDraft`, {
      overwrite:true 
     });
     // And I wait for 2 seconds
    cy.wait(2000);
    // And I click filter by state
    cy.get(pageElements.post.filterPostState).click();
    cy.screenshot(`${ScreenShoot}/filterPost/clickFilterPostByState`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
     // And I click filter by published
     cy.get(pageElements.post.filterPostStatePublished).click();
     cy.screenshot(`${ScreenShoot}/filterPost/clickFilterPostByStatePublished`, {
      overwrite:true 
     });
     // And I wait for 2 seconds
     cy.wait(2000);
    // Then I should see post in post list with state Published"
    cy.get(pageElements.post.postList)
    .should('contain', 'Published');
    cy.screenshot(`${ScreenShoot}/filterPost/shouldSeePostWithStatePublished`, {
      overwrite:true 
     });
     // And I wait for 2 seconds
     cy.wait(2000);
    // And I click in filter by type
    cy.get(pageElements.post.filterPostState).click();
    cy.screenshot(`${ScreenShoot}/filterPost/clickFilterPostByState`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
      // And I click in filter by state all
    cy.get(pageElements.post.filterPostStateAll).click();
    cy.screenshot(`${ScreenShoot}/filterPost/clickFilterPostByStateAll`, {
      overwrite:true 
     });
      // And I wait for 2 seconds
    cy.wait(2000);
    // And I click in filter by state author
    cy.get(pageElements.post.filterPostAuthor).click();
    cy.screenshot(`${ScreenShoot}/filterPost/clickFilterPostByAuthor`, {
      overwrite:true 
     });
    // And I wait for 2 seconds
    cy.wait(2000);
     // And I click in filter by author by Ghost
     cy.get(pageElements.post.filterPostAuthorGhost).click();
     cy.screenshot(`${ScreenShoot}/filterPost/clickFilterPostByAuthorGhost`, {
      overwrite:true 
     });
     // And I wait for 2 seconds
     cy.wait(2000);
     // Then I should see post in post list with author Ghost"
    cy.get(pageElements.post.postList)
    .should('contain', 'By Ghost');
    cy.screenshot(`${ScreenShoot}/filterPost/shouldSeePostWithAuthorGhost`, {
      overwrite:true 
     });
  
  });
});
