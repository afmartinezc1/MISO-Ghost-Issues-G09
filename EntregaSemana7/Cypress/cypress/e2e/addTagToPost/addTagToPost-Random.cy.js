const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");
const LOREM = Cypress.env("LOREM");
import { faker } from "@faker-js/faker";

describe("Add Tag To Post", () => {
  beforeEach(()=>{
    // Given I navigate to page "<URL>"
    cy.visit(url);
    // And I wait for 3 seconds
    cy.wait(3000);
    // When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).should('be.enabled').type(userName);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).should('be.enabled').type(password);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).should('be.enabled').click();
    // And I wait for 7 seconds
    cy.wait(7000);
  })
  it("Como usuario inicio sesion en ghost, creo un tag y un post, selecciono el post, le agregó el tag y verificó que el tag se agregó correctamente", async () => {
    const title = faker.lorem.words();
    const text = faker.lorem.text().replace(/\n/g, "");
    const color = faker.internet.color();
    const title1 = faker.lorem.words();
    const text1 = faker.lorem.text().replace(/\n/g, "");
    // And I go to the posts view
    cy.get(pageElements.tag.tagView).click();
    // And I click new post
    cy.get(pageElements.tag.newTag).click();
    // And I enter tag name random
    cy.get(pageElements.tag.inputName).should('be.enabled').type(title);
    // And I enter tag color random
    cy.get(pageElements.tag.inputColor).should('be.enabled').type(color.substring(1));
    // And I enter tag description random
    cy.get(pageElements.tag.inputDescription).type(text.substring(0,499));
    // And I save tag changes
    cy.get(pageElements.tag.saveBtn).should('be.enabled').click();
    // And I wait for 3 seconds
    cy.wait(3000);
    // And I go to the tag view
    cy.get(pageElements.tag.tagView).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see tag in tag list with name random, slug random and description random
    cy.get(pageElements.tag.tagList)
    .should('contain', title)
    .and('contain', text);
    // And I go to the posts view
    cy.get(pageElements.post.postView).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click new post
    cy.get(pageElements.post.newPost).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post title random
    cy.get(pageElements.post.postTitle).type(title1);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter post content random
    cy.get(pageElements.post.postContent).type(text1);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click posts to go to previous page
    cy.get(pageElements.post.newPostPreviousPage).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see the first draft post with title random
    cy.get(pageElements.post.firstPostInList)
    .invoke("text")
    .then((text) => {
        expect(text.trim()).to.equal(title1);
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft post
    cy.get(pageElements.post.firstPostInList).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on post settings
    cy.get(pageElements.post.postSettings).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click tags list
    cy.get(pageElements.post.inputTag).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I select tag random
    cy.get(pageElements.post.tagList)
    .contains('li', title)
    .click()
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on close post settings
    cy.get(pageElements.post.closePostSettings).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click posts to go to previous page
    cy.get(pageElements.post.newPostPreviousPage).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on leave modal design button
    cy.get(pageElements.design.leaveBtn).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see the first draft post with title random
    cy.get(pageElements.post.firstPostInList)
    .invoke("text")
    .then((text) => {
        expect(text.trim()).to.equal(title1);
    });
    // And I wait for 2 seconds
    cy.wait(2000);
    // When I click on the first draft post
    cy.get(pageElements.post.firstPostInList).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click on post settings
    cy.get(pageElements.post.postSettings).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see the selected tag random
    cy.get(pageElements.post.selectedTags)
    .should('contain', title)
    
  });
});
