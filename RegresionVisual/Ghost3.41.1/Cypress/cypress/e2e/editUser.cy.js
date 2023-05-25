const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const ScreenShoot = Cypress.env("ScreenShoot");
const pageElements = Cypress.env("pageElements");
const EXISTING_URL = Cypress.env("EXISTING_URL");
const BLOG = Cypress.env("BLOG");
const LOREM = Cypress.env("LOREM");
describe("Edit Staff", () => {
  it("Como usuario inicio sesion en ghost, entro a staff, y modifico algunos de los atributos del usuario. Luego valido que estos atributos se hayan modificado correctamente", async () => {
    //Given I navigate to page "<URL>"
    cy.visit(url);
    //When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/1_enterEmail`, { overwrite:true });
    //And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/2_enterPassword`, { overwrite:true });
    //And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/3_clickSignIn`, { overwrite:true });
    //And I wait for 5 seconds
    cy.wait(5000);
    //And I click in Staff
    cy.get(pageElements.staff.linkSideMenu).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/4_clickStaff`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click in author user to modify
    cy.get(pageElements.staff.userToEdit).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/5_selectUserToEdit`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I clear user full name 
    cy.get(pageElements.staff.inputName).invoke('val', '');
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/6_clearFullName`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I fill user full name in staff with text "Zyra"
    cy.get(pageElements.staff.inputName).type("Zyra");
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/7_fillFullName`, { overwrite:true });
    //And I clear user location in staf
    cy.get(pageElements.staff.inputLocation).invoke('val', '');
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/8_clearLocation`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I fill user location in staff with text "New zeland"
    cy.get(pageElements.staff.inputLocation).type("New zeland");
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/9_fillLocation`, { overwrite:true });
    //And I clear user location in staf
    cy.get(pageElements.staff.inputBio).invoke('val', '');
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/10_clearBio`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I fill user biography in staff with text "<LOREM>"
    cy.get(pageElements.staff.inputBio).type(LOREM);
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/11_fillBio`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I save user edit staff changes
    cy.get(pageElements.staff.saveBtn).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/12_saveUserChanges`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click in Staff
    cy.get(pageElements.staff.linkSideMenu).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/13_clickStaff`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I should see user full name in staff list with text "Zyra"
    cy.get(pageElements.staff.userEditedName).should('have.text', 'Zyra');
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/14_verifyUserFullName`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click in author user to modify
    cy.get(pageElements.staff.userToEdit).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/15_selectUserToEdit`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I should see user full name in edit user with text "Zyra"
    cy.get(pageElements.staff.inputName).should('have.value', 'Zyra');
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/16_verifyFullNameInEditUser`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I should see user location in edit user with text "New zeland"
    cy.get(pageElements.staff.inputLocation).should('have.value', 'New zeland');
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/17_verifyLocationInEditUser`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //Then I should see user biography in edit user with text "<LOREM>"
    cy.get(pageElements.staff.inputBio).should('have.value', LOREM);
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/editUser/18_verifyBioInEditUser`, { overwrite:true });
  });
});
