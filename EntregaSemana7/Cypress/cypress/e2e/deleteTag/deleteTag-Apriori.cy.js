const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");
const LOREM = Cypress.env("LOREM");

describe("Delete Tag", () => {
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
  it("Como usuario inicio sesion en ghost, creo y selecciono un tag, lo elimino y reviso que se haya removido de la lista de tags", async () => {
    cy.aprioriData().then((aprioriData) => {
        // And I go to the posts view
        cy.get(pageElements.tag.tagView).click();
        // And I click new post
        cy.get(pageElements.tag.newTag).click();
        // And I enter tag name a-priori-0
        cy.get(pageElements.tag.inputName).should('be.enabled').type(aprioriData[0].title_two);
        // And I enter tag color "8889ec"
        cy.get(pageElements.tag.inputColor).should('be.enabled').type(aprioriData[0].color.substring(1));
        // And I enter tag description a-priori-0
        cy.get(pageElements.tag.inputDescription).type(aprioriData[0].text.substring(0,500));
        // And I save tag changes
        cy.get(pageElements.tag.saveBtn).should('be.enabled').click();
        // And I wait for 3 seconds
        cy.wait(3000);
        // And I go to the tag view
        cy.get(pageElements.tag.tagView).click();
        // And I wait for 2 seconds
        cy.wait(2000);
        // Then I should see tag in tag list with name a-priori-0, slug a-priori-0 and description a-priori-0
        cy.get(pageElements.tag.tagList)
        .should('contain', aprioriData[0].title_two)
        .and('contain', aprioriData[0].text.substring(0,500));
        // And I click a tag with name a-priori-0
        cy.get(pageElements.tag.tagList)
        .contains('li', aprioriData[0].title_two)
        .click()
        // And I wait for 2 seconds
        cy.wait(2000);
        // And I click on delete tag
        cy.get(pageElements.tag.deleteTagBtn).should('be.enabled').click();
        // And I wait for 3 seconds
        cy.wait(3000);
        //  And I click on confirm tag delete
        cy.get(pageElements.tag.confirmDeleteBtn).should('be.enabled').click();
        // And I wait for 3 seconds
        cy.wait(3000);
        // And I go to the tag view
        cy.get(pageElements.tag.tagView).click();
        // And I wait for 2 seconds
        cy.wait(2000);
        // Then I should not see tag in tag list with name a-priori-0, slug a-priori-0 and description a-priori-0
        cy.get(pageElements.tag.tagList)
        .not(`:contains(${aprioriData[0].title_two})`);
    });
  });
});
