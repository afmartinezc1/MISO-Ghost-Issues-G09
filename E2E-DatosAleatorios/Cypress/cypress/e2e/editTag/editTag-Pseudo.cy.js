const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");
const LOREM = Cypress.env("LOREM");

describe("Edit Tag", () => {
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
  it("Como usuario inicio sesion en ghost, creo y selecciono un tag, edito su información y reviso que haya quedado en la lista de tags con los datos editados", async () => {
    cy.pseudoData().then((response) => {
        const [data0, data1] = response.body;
        // And I go to the posts view
        cy.get(pageElements.tag.tagView).click();
        // And I click new post
        cy.get(pageElements.tag.newTag).click();
        // And I enter tag name pseudo-0
        cy.get(pageElements.tag.inputName).should('be.enabled').type(data0.title_two);
        // And I enter tag color pseudo-0
        cy.get(pageElements.tag.inputColor).should('be.enabled').type(data0.color.substring(1));
        // And I enter tag description pseudo-0
        cy.get(pageElements.tag.inputDescription).type(data0.text.substring(0,500));
        // And I save tag changes
        cy.get(pageElements.tag.saveBtn).should('be.enabled').click();
        // And I wait for 3 seconds
        cy.wait(3000);
        // And I go to the tag view
        cy.get(pageElements.tag.tagView).click();
        // And I wait for 2 seconds
        cy.wait(2000);
        // Then I should see tag in tag list with name pseudo-0, slug pseudo-0 and description pseudo-0
        cy.get(pageElements.tag.tagList)
        .should('contain', data0.title_two)
        .and('contain', data0.text.substring(0,500));
        // And I click a tag with name pseudo-0
        cy.get(pageElements.tag.tagList)
        .contains('li', data0.title_two)
        .click()
        // And I wait for 2 seconds
        cy.wait(2000);
        // And I enter tag name pseudo-1
        cy.get(pageElements.tag.inputName).should('be.enabled')
        .type(`{selectall}${data1.title_two}`);
        // And I enter tag slug pseudo-1
        cy.get(pageElements.tag.inputSlug).should('be.enabled')
        .type(`{selectall}${data1.title_two}`);
        // And I enter tag color pseudo-1
        cy.get(pageElements.tag.inputColor).should('be.enabled')
        .type(`{selectall}${data1.color.substring(1)}`);
        // And I enter tag description pseudo-1
        cy.get(pageElements.tag.inputDescription)
        .type(`{selectall}${data1.text.substring(0,500)}`);
        // And I save tag changes
        cy.get(pageElements.tag.saveBtn).should('be.enabled').click();
        // And I wait for 3 seconds
        cy.wait(3000);
        // And I go to the tag view
        cy.get(pageElements.tag.tagView).click();
        // And I wait for 2 seconds
        cy.wait(2000);
        // Then I should see tag in tag list with name pseudo-1 and description pseudo-1
        cy.get(pageElements.tag.tagList)
        .should('contain', data1.title_two)
        .and('contain', data1.text.substring(0,500));
    });
  });
});
