const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const ScreenShoot = Cypress.env("ScreenShoot");
const pageElements = Cypress.env("pageElements");
const EXISTING_URL = Cypress.env("EXISTING_URL");
const BLOG = Cypress.env("BLOG");
describe("Add NavBar item", () => {
  it("Como usuario inicio sesion en ghost, creo un nuevo item para el navbar, reviso que se vea reflejado en la pagina, lo elimino, y reviso que efectivamente ya no se encuentre", async () => {
    //Given I navigate to page "<URL>"
    cy.visit(url);
    //When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).type(userName);
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/addItemNavBar/1_enterEmail`, { overwrite:true });
    //And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).type(password);
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/addItemNavBar/2_enterPassword`, { overwrite:true });
    //And I click SignIn
    cy.get(pageElements.login.loginBtn).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/addItemNavBar/3_clickSignIn`, { overwrite:true });
    //And I wait for 5 seconds
    cy.wait(5000);
    //And I click in Design
    cy.get(pageElements.design.linkSideMenu).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/addItemNavBar/4_click_in_Design`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I fill name of menu item "new-NavBar-Item"
    cy.get(pageElements.design.menuItemNameInput).type("new-NavBar-Item");
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/addItemNavBar/5_fill_name_of_menu_item`, { overwrite:true });
    //And I fill url of menu item "<EXISTING_URL>"
    cy.get(pageElements.design.menuItemUrlInput).type(EXISTING_URL);
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/addItemNavBar/6_fill_url_of_menu_item`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I save navBar design changes
    cy.get(pageElements.design.saveBtn).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/addItemNavBar/7_save_navBar_design_changes`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I navigate to page "<BLOG>"
    cy.visit(BLOG);
    //And I wait for 3 seconds
    cy.wait(2000);
    //And I should see a navBar item with name "new-NavBar-Item"
    cy.get(pageElements.design.lastNavBarItem).should('have.text', 'new-NavBar-Item');
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/addItemNavBar/8_should_see_navBar_item_with_name`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I navigate to page "<URL>"
    cy.visit(url);
    //And I wait for 5 seconds
    cy.wait(5000);
    //And I click in Design
    cy.get(pageElements.design.linkSideMenu).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/addItemNavBar/9_click_in_Design`, { overwrite:true });
    //And I wait for 2 seconds
    cy.wait(2000);
    //And I click in navBar delete button
    cy.get(pageElements.design.deleteButton).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/addItemNavBar/10_click_in_navBar_delete_button`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I save navBar design changes
    cy.get(pageElements.design.saveBtn).click();
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/addItemNavBar/11_save_navBar_design_changes`, { overwrite:true });
    //And I wait for 1 seconds
    cy.wait(1000);
    //And I navigate to page "<BLOG>"
    cy.visit(BLOG);
    //And I wait for 3 seconds
    cy.wait(1000);
    //Then I shouldn't see a navBar item with name "new-NavBar-Item"
    cy.get(pageElements.design.lastNavBarItem).should('not.have.text', 'new-NavBar-Item');
    cy.wait(500);
    cy.screenshot(`${ScreenShoot}/addItemNavBar/12_shouldnt_see_navBar_item_with_name`, { overwrite:true });
  });
});
