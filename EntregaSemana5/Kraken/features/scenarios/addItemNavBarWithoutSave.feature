Feature: NavBar

  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un nuevo item para el navbar, trato de salir sin guardar los cambios, cancelo la accion y valido que los cambios no se descarten, luego intento de nuevo, descarto la accion y valido que los cambios se hayan descartado 
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click SignIn
    And I wait for 5 seconds
    And I click in Design
    And I wait for 2 seconds
    And I fill name of menu item "new-NavBar-Item"
    And I wait for 2 seconds
    And I click in General
    And I wait for 2 seconds
    And I click on stay modal design button
    And I wait for 2 seconds
    And I should see the new navBar item input with name "new-NavBar-Item"
    And I wait for 2 seconds
    And I click in General 
    And I wait for 2 seconds
    And I click on leave modal design button
    And I wait for 2 seconds
    And I click in Design
    And I wait for 2 seconds
    Then I shouldn't see the new navBar item input with name "new-NavBar-Item"