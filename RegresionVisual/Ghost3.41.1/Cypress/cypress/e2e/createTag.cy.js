const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const ScreenShoot = Cypress.env("ScreenShoot");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");

describe("Create Tag", () => {
  beforeEach(()=>{
    // Given I navigate to page "<URL>"
    cy.visit(url);
    // And I wait for 3 seconds
    cy.wait(3000);
    // When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).should('be.enabled').type(userName);
    // And I wait for 2 seconds
    cy.wait(2000);
    cy.screenshot(`${ScreenShoot}/createTag/1_enterEmail`, { overwrite:true });
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).should('be.enabled').type(password);
    // And I wait for 2 seconds
    cy.wait(2000);
    cy.screenshot(`${ScreenShoot}/createTag/2_enterPassword`, { overwrite:true });
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).should('be.enabled').click();
    cy.screenshot(`${ScreenShoot}/createTag/3_clickSignIn`, { overwrite:true });
    // And I wait for 7 seconds
    cy.wait(7000);
    cy.screenshot(`${ScreenShoot}/createTag/4_mainPage`, { overwrite:true });
  })
  it("Como usuario inicio sesion en ghost, creo un tag y reviso que haya quedado en la lista de tags con los datos de entrada dados previamente", async () => {
    // And I go to the tags view
    cy.get(pageElements.tag.tagView).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    cy.screenshot(`${ScreenShoot}/createTag/5_clickTagView`, { overwrite:true });
    // And I click new tag
    cy.get(pageElements.tag.newTag).click();
    cy.screenshot(`${ScreenShoot}/createTag/6_clickNewTag`, { overwrite:true });
    // And I enter tag name "FOO BAR BAZ"
    cy.get(pageElements.tag.inputName).should('be.enabled').type("FOO BAR BAZ");
    cy.screenshot(`${ScreenShoot}/createTag/7_enterTagName`, { overwrite:true });
    // And I enter tag color "8889ec"
    cy.get(pageElements.tag.inputColor).should('be.enabled').type("8889ec");
    cy.screenshot(`${ScreenShoot}/createTag/8_enterTagColor`, { overwrite:true });
    // And I enter tag slug "foo-bar-baz"
    cy.get(pageElements.tag.inputSlug).should('be.enabled')
    .type('{selectall}foo-bar-baz');
    cy.screenshot(`${ScreenShoot}/createTag/9_enterTagSlug`, { overwrite:true });
    // And I enter tag description "<LOREM1>"
    cy.get(pageElements.tag.inputDescription).type(LOREM1);
    cy.screenshot(`${ScreenShoot}/createTag/10_enterTagDescription`, { overwrite:true });
    // And I save tag changes
    cy.get(pageElements.tag.saveBtn).should('be.enabled').click();
    // And I wait for 2 seconds
    cy.wait(2000);
    cy.screenshot(`${ScreenShoot}/createTag/11_clickSaveChanges`, { overwrite:true });
    // And I go to the tag view
    cy.get(pageElements.tag.tagView).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see tag in tag list with name "FOO BAR BAZ", slug "foo-bar-baz" and description "<LOREM1>"
    cy.get(pageElements.tag.tagList)
    .should('contain', 'FOO BAR BAZ')
    .and('contain', 'foo-bar-baz')
    .and('contain', LOREM1);
    cy.screenshot(`${ScreenShoot}/createTag/12_checkTagCreated`, { overwrite:true });
  });
});
