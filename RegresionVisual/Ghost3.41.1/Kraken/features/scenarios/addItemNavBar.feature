Feature: NavBar

  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un nuevo item para el navbar, reviso que se vea reflejado en la pagina, lo elimino, y reviso que efectivamente ya no se encuentre
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "addItemNavBar/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "addItemNavBar/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "addItemNavBar/3_clickSignIn"
    And I wait for 5 seconds
    And I click in Design
    And I take screenshot with name "addItemNavBar/4_click in"
    And I wait for 2 seconds
    And I fill name of menu item "new-NavBar-Item"
    And I take screenshot with name "addItemNavBar/5_fillName"
    And I wait for 2 seconds
    And I fill url of menu item "<EXISTING_URL>"
    And I take screenshot with name "addItemNavBar/6_fillUrl"
    And I wait for 2 seconds
    And I save navBar design changes
    And I take screenshot with name "addItemNavBar/7_saveNavBar"
    And I wait for 2 seconds
    And I navigate to page "<BLOG>"
    And I take screenshot with name "addItemNavBar/8_navigateToBlog"
    And I wait for 3 seconds
    And I should see a navBar item with name "new-NavBar-Item"
    And I take screenshot with name "addItemNavBar/9_shouldSeeNavBarItem"
    And I wait for 2 seconds
    And I navigate to page "<URL>"
    And I take screenshot with name "addItemNavBar/10_navigateToGhost"
    And I wait for 3 seconds
    And I click in Design
    And I take screenshot with name "addItemNavBar/11_clickInDesign"
    And I wait for 2 seconds
    And I click in navBar delete button
    And I take screenshot with name "addItemNavBar/12_clickNavBarDelete"
    And I wait for 1 seconds
    And I save navBar design changes
    And I take screenshot with name "addItemNavBar/13_saveNavBar"
    And I wait for 1 seconds
    And I navigate to page "<BLOG>"
    And I take screenshot with name "addItemNavBar/14_navigateToBlog"
    And I wait for 3 seconds
    Then I shouldn't see a navBar item with name "new-NavBar-Item"
    And I take screenshot with name "addItemNavBar/15_shouldntSeeNavBarItem"