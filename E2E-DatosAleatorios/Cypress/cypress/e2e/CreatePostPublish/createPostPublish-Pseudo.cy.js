const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");

describe("Create post published", () => {
  it("Como usuario inicio sesion en ghost, creo un post, publicarlo regresar a la lista de posts y verificar que este publicado", async () => {
    cy.pseudoData().then((response) => {
      const [data0] = response.body;
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
      cy.get(pageElements.post.postView).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I click new page
      cy.get(pageElements.post.newPost).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I enter page title pseudo
      cy.get(pageElements.post.postTitle).type(data0.title);
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I enter post content pseudo
      cy.get(pageElements.post.postContent).type(data0.text);
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I click publish to open dialog
      cy.get(pageElements.post.publishPost).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I click publish to confirm
      cy.get(pageElements.post.publishConfirm).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // And I click pages to go to previous page
      cy.get(pageElements.post.newPostPreviousPage).click();
      // And I wait for 2 seconds
      cy.wait(2000);
      // Then I should see the post published pseudo"
      cy.get(pageElements.post.postList)
          .should('contain', data0.title)
          .and('contain', "Published")
    });
    });
  });
  