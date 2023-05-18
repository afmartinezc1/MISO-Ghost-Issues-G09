const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
import { faker } from "@faker-js/faker";
describe("change password Staff", () => {
  it("Como usuario inicio sesion en ghost, entro a staff, y modifico la contraseña de un usuario, me deslogueo e ingreso con la nueva", async () => {
    const fakePassword = faker.internet.password();
    const email = faker.internet.email();
    //Given I navigate to page "<URL>"
    cy.visit(url);
    //When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    //And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    //And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    //And I wait for 5 seconds
    cy.wait(5000);
    //And I click in Staff
    cy.get(pageElements.staff.linkSideMenu).click();
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click in author user to modify
    cy.get(pageElements.staff.userToEdit).click();
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I clear user location in staf
    cy.get(pageElements.staff.inputMail).invoke("val", "");
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I fill user email in staff with text a-priori
    cy.get(pageElements.staff.inputMail).type(email);
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I fill user new password in staff with text fakePassword
    cy.get(pageElements.staff.inputPassword).type(fakePassword);
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I fill user new password verification in staff with text fakePassword
    cy.get(pageElements.staff.inputPasswordVerification).type(
      fakePassword
    );
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I save user new password staff changes
    cy.get(pageElements.staff.saveNewPassBtn).click();
    //And I wait for 3 seconds
    cy.wait(1000);
    //And I save user edit staff changes
    cy.get(pageElements.staff.saveBtn).click();
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click user profile sideBar
    cy.get(pageElements.staff.userProfile).click();
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click user sign out
    cy.get(pageElements.staff.signout).click();
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I enter email "ghost-author@example.com"
    cy.get(pageElements.login.userInput).type(email);
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I enter password fakePassword
    cy.get(pageElements.login.passInput).type(fakePassword);
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    //And I wait for 5 seconds
    cy.wait(5000);
    //Then I shouldn see a sideNav page title
    cy.get(pageElements.application.siteTitle).should("exist");
  });
});
