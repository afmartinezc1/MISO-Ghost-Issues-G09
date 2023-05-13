const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const ScreenShoot = Cypress.env("ScreenShoot");
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
    cy.screenshot(`${ScreenShoot}/editTag/1_enterEmail`, { overwrite:true });
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).should('be.enabled').type(password);
    // And I wait for 2 seconds
    cy.wait(2000);
    cy.screenshot(`${ScreenShoot}/editTag/2_enterPassword`, { overwrite:true });
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).should('be.enabled').click();
    cy.screenshot(`${ScreenShoot}/editTag/3_clickSignIn`, { overwrite:true });
    // And I wait for 7 seconds
    cy.wait(7000);
    cy.screenshot(`${ScreenShoot}/editTag/4_mainPage`, { overwrite:true });
  })
  it("Como usuario inicio sesion en ghost, creo y selecciono un tag, edito su información y reviso que haya quedado en la lista de tags con los datos editados", async () => {
    // And I go to the tags view
    cy.get(pageElements.tag.tagView).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    cy.screenshot(`${ScreenShoot}/editTag/5_clickTagView`, { overwrite:true });
    // And I click new tag
    cy.get(pageElements.tag.newTag).click();
    cy.screenshot(`${ScreenShoot}/editTag/6_clickNewTag`, { overwrite:true });
    // And I enter tag name "FOO BAR BAZ"
    cy.get(pageElements.tag.inputName).should('be.enabled').type("FOO BAR BAZ");
    cy.screenshot(`${ScreenShoot}/editTag/7_enterTagName`, { overwrite:true });
    // And I enter tag color "8889ec"
    cy.get(pageElements.tag.inputColor).should('be.enabled').type("8889ec");
    cy.screenshot(`${ScreenShoot}/editTag/8_enterTagColor`, { overwrite:true });
    // And I enter tag slug "foo-bar-baz"
    cy.get(pageElements.tag.inputSlug).should('be.enabled')
    .type('{selectall}foo-bar-baz');
    cy.screenshot(`${ScreenShoot}/editTag/9_enterTagSlug`, { overwrite:true });
    // And I enter tag description "<LOREM1>"
    cy.get(pageElements.tag.inputDescription).type(LOREM1);
    cy.screenshot(`${ScreenShoot}/editTag/10_enterTagDescription`, { overwrite:true });
    // And I save tag changes
    cy.get(pageElements.tag.saveBtn).should('be.enabled').click();
    // And I wait for 2 seconds
    cy.wait(2000);
    cy.screenshot(`${ScreenShoot}/editTag/11_clickSaveChanges`, { overwrite:true });
    // And I go to the tag view
    cy.get(pageElements.tag.tagView).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see tag in tag list with name "FOO BAR BAZ", slug "foo-bar-baz" and description "<LOREM1>"
    cy.get(pageElements.tag.tagList)
    .should('contain', 'FOO BAR BAZ')
    .and('contain', 'foo-bar-baz')
    .and('contain', LOREM1);
    cy.screenshot(`${ScreenShoot}/editTag/12_checkTagCreated`, { overwrite:true });
    // And I click a tag with name 'FOO BAR BAZ'
    cy.get(pageElements.tag.tagList)
    .contains('li', 'FOO BAR BAZ')
    .click()
    cy.screenshot(`${ScreenShoot}/editTag/13_clickTagCreated`, { overwrite:true });
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter tag name "BAZ BAR FOO"
    cy.get(pageElements.tag.inputName).should('be.enabled')
    .type('{selectall}BAZ BAR FOO');
    cy.screenshot(`${ScreenShoot}/editTag/14_editTagName`, { overwrite:true });
    // And I enter tag color "a52a2a"
    cy.get(pageElements.tag.inputColor).should('be.enabled').type('{selectall}a52a2a');
    cy.screenshot(`${ScreenShoot}/editTag/15_editTagColor`, { overwrite:true });
    // And I enter tag slug "baz-bar-foo"
    cy.get(pageElements.tag.inputSlug).should('be.enabled')
    .type('{selectall}baz-bar-foo');
    cy.screenshot(`${ScreenShoot}/editTag/16_editTagSlug`, { overwrite:true });
    // And I enter tag description "<LOREM>"
    cy.get(pageElements.tag.inputDescription).type(`{selectall}${LOREM}`);
    cy.screenshot(`${ScreenShoot}/editTag/17_editTagDescription`, { overwrite:true });
    // And I save tag changes
    cy.get(pageElements.tag.saveBtn).should('be.enabled').click();
    // And I wait for 2 seconds
    cy.wait(2000);
    cy.screenshot(`${ScreenShoot}/editTag/18_clickSaveChanges`, { overwrite:true });
    // And I go to the tag view
    cy.get(pageElements.tag.tagView).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see tag in tag list with name "BAZ BAR FOO", slug "baz-bar-foo" and description "<LOREM>"
    cy.get(pageElements.tag.tagList)
    .should('contain', 'BAZ BAR FOO')
    .and('contain', 'baz-bar-foo')
    .and('contain', LOREM);
    cy.screenshot(`${ScreenShoot}/editTag/19_checkTagEdited`, { overwrite:true });
  });
});
