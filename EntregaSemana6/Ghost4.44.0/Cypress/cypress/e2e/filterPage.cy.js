const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");
const POST_PUBLICADO=Cypress.env("POST_PUBLICADO");
const PAGE_PUBLICADO=Cypress.env("PAGE_PUBLICADO");
describe("Filtrar pages", () => {
  it("Como usuario inicio sesion en ghost, filtrar ls pages por estado y por autor y verificar que filtra correctamente", async () => {
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
    // And I go to the pages view
    cy.get(pageElements.page.pageView).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click in filter by type
    cy.get(pageElements.post.filterPostState).click();
    // And I wait for 2 seconds
    cy.wait(2000);
     // And I click filter by Draft
     cy.get(pageElements.post.filterPostStateDraft).click();
     // And I wait for 2 seconds
     cy.wait(2000);
    // Then I should see page in post list with state Draft"
    cy.get(pageElements.page.pageList)
    .should('contain', 'Draft');
     // And I wait for 2 seconds
    cy.wait(2000);
    // And I click filter by state
    cy.get(pageElements.post.filterPostState).click();
    // And I wait for 2 seconds
    cy.wait(2000);
     // And I click filter by published
     cy.get(pageElements.post.filterPostStatePublished).click();
     // And I wait for 2 seconds
     cy.wait(2000);
    // Then I should see post in post list with state Published"
    cy.get(pageElements.page.pageList)
    .should('contain', 'Published');
     // And I wait for 2 seconds
     cy.wait(2000);
    // And I click in filter by type
    cy.get(pageElements.post.filterPostState).click();
    // And I wait for 2 seconds
    cy.wait(2000);
      // And I click in filter by state all
    cy.get(pageElements.post.filterPostStateAll).click();
      // And I wait for 2 seconds
    cy.wait(2000);
    // And I click in filter by state author
    cy.get(pageElements.post.filterPostAuthor).click();
    // And I wait for 2 seconds
    cy.wait(2000);
     // And I click in filter by author by Ghost
     cy.get(pageElements.post.filterPostAuthorGhost).click();
     // And I wait for 2 seconds
     cy.wait(2000);
     // Then I should see page in post list with author Ghost"
    cy.get(pageElements.page.pageList)
    .then(()=>{
      if(pageElements.page.pageList.lenght>1){
      should('contain', 'By Ghost');
    }
    })
   
    
  });
});
