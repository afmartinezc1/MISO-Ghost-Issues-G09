const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const ScreenShoot = Cypress.env("ScreenShoot");
const pageElements = Cypress.env("pageElements");
const EXISTING_URL = Cypress.env("EXISTING_URL");
const BLOG = Cypress.env("BLOG");
const LOREM = Cypress.env("LOREM");
describe("change password Staff", () => {
  it("Como usuario inicio sesion en ghost, entro a staff, y modifico la contraseña de un usuario, me deslogueo e ingreso con la nueva", async () => {
    //Given I navigate to page "<URL>"
    cy.visit(url);
    //When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/1_enterEmail`, { overwrite:true });
    //And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/2_enterPassword`, { overwrite:true });
    //And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/3_clickSignIn`, { overwrite:true });
    //And I wait for 5 seconds
    cy.wait(5000);
    //And I click in Staff
    cy.get(pageElements.staff.linkSideMenu).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/4_clickStaff`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click in author user to modify
    cy.get(pageElements.staff.userToEdit).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/5_selectUserToEdit`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I fill user new password in staff with text "MISOTest.2023"
    cy.get(pageElements.staff.inputPassword).type("MISOTest.2023");
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/6_fillNewPassword`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I fill user new password verification in staff with text "MISOTest.2023"
    cy.get(pageElements.staff.inputPasswordVerification).type("MISOTest.2023");
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/7_fillNewPasswordVerification`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I save user new password staff changes
    cy.get(pageElements.staff.saveNewPassBtn).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/8_saveNewPasswordChanges`, { overwrite:true });
    //And I wait for 3 seconds
    cy.wait(1000);
    //And I click user profile sideBar
    cy.get(pageElements.staff.userProfile).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/9_clickUserProfile`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click user sign out
    cy.get(pageElements.staff.signout).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/10_clickSignOut`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I enter email "ghost-author@example.com"
    cy.get(pageElements.login.userInput).type("ghost-author@example.com");
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/11_enterNewEmail`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I enter password "MISOTest.2023"
    cy.get(pageElements.login.passInput).type("MISOTest.2023");
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/12_enterNewPassword`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I click SignIn  
    cy.get(pageElements.login.loginBtn).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/13_clickSignIn`, { overwrite:true });
    //And I wait for 5 seconds  
    cy.wait(5000);
    //Then I shouldn see a sideNav page title
    cy.get(pageElements.application.siteTitle).should('exist');
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUserPassword/14_verifyPageTitle`, { overwrite:true });
  });
});
