Feature: NavBar

  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un nuevo item para el navbar, trato de salir sin guardar los cambios, cancelo la accion y valido que los cambios no se descarten, luego intento de nuevo, descarto la accion y valido que los cambios se hayan descartado 
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "addItemNavBarWithoutSave/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "addItemNavBarWithoutSave/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn    
    And I take screenshot with name "addItemNavBarWithoutSave/3_clickSignIn"
    And I wait for 5 seconds
    And I click in Design
    And I take screenshot with name "addItemNavBarWithoutSave/4_clickDesign"
    And I wait for 2 seconds
    And I fill name of menu item "new-NavBar-Item"
    And I take screenshot with name "addItemNavBarWithoutSave/5_fillNameOfMenuItem"
    And I wait for 2 seconds
    And I click in General
    And I take screenshot with name "addItemNavBarWithoutSave/6_clickGeneral"
    And I wait for 2 seconds
    And I click on stay modal design button
    And I take screenshot with name "addItemNavBarWithoutSave/7_clickStayModal"
    And I wait for 2 seconds
    And I should see the new navBar item input with name "new-NavBar-Item"
    And I take screenshot with name "addItemNavBarWithoutSave/8_shouldSeeNewNavBar"
    And I wait for 2 seconds
    And I click in General 
    And I take screenshot with name "addItemNavBarWithoutSave/9_clickGeneral"
    And I wait for 2 seconds
    And I click on leave modal design button
    And I take screenshot with name "addItemNavBarWithoutSave/10_clickLeaveModal"
    And I wait for 2 seconds
    And I click in Design
    And I take screenshot with name "addItemNavBarWithoutSave/11_clickDesign"
    And I wait for 2 seconds
    Then I shouldn't see the new navBar item input with name "new-NavBar-Item"
    And I take screenshot with name "addItemNavBarWithoutSave/12_shouldntSeeNewNavBar"