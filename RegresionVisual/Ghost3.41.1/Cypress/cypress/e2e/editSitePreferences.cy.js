const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const ScreenShoot = Cypress.env("ScreenShoot");
const pageElements = Cypress.env("pageElements");
const EXISTING_URL = Cypress.env("EXISTING_URL");
const BLOG = Cypress.env("BLOG");
describe("Edit General Settings", () => {
  it("Como usuario inicio sesion en ghost, entro en las opciones generales del sitio, cambio el titulo y la descripcion, guardo cambios y valido que estos se vean reflejados en el blog", async () => {
    //Given I navigate to page "<URL>"
    cy.visit(url);
    //When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editSitePreferences/1_enterEmail`, { overwrite:true });
    //And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editSitePreferences/2_enterPassword`, { overwrite:true });
    //And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editSitePreferences/3_clickSignIn`, { overwrite:true });
    //And I wait for 5 seconds
    cy.wait(5000);
    //And I click in General
    cy.get(pageElements.general.linkSideMenu).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editSitePreferences/4_clickGeneral`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click on general settings title description expand button
    cy.get(pageElements.general.expandTitleBtn).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editSitePreferences/5_expandSettings`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I clear general settings site title
    cy.get(pageElements.general.titleSettingsInput).invoke('val', '');
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editSitePreferences/6_clearSiteTitle`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I fill general settings site title with text "New Site Title"
    cy.get(pageElements.general.titleSettingsInput).type("New Site Title");
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editSitePreferences/7_fillSiteTitle`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I clear general settings site description
    cy.get(pageElements.general.descriptionSettingsInput).invoke('val', '');
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editSitePreferences/8_clearSiteDescription`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I fill general settings site description with text "New Site Description"
    cy.get(pageElements.general.descriptionSettingsInput).type("New Site Description");
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editSitePreferences/9_fillSiteDescription`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I save general settings changes
    cy.get(pageElements.general.saveBtn).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editSitePreferences/10_saveSettings`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I should see the new site title with text "New Site Title"
    cy.get(pageElements.application.siteTitle).should('have.text', 'New Site Title');
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editSitePreferences/11_verifySiteTitle`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I navigate to page "<BLOG>"
    cy.visit(BLOG);
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editSitePreferences/12_navigateToBlog`, { overwrite:true });
    //And I wait for 3 seconds
    cy.wait(3000);
    //Then I should see the new site description with text "New Site Description"
    cy.get(pageElements.application.siteDescription).should('have.text', 'New Site Description');
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editSitePreferences/13_verifySiteDescription`, { overwrite:true });
  });
});
