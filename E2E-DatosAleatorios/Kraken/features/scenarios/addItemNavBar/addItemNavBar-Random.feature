Feature: NavBar

  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un nuevo item para el navbar, reviso que se vea reflejado en la pagina, lo elimino, y reviso que efectivamente ya no se encuentre
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
    And I fill name of menu item "$name_1"
    And I wait for 2 seconds
    And I fill url of menu item "$url_1"
    And I wait for 2 seconds
    And I save navBar design changes
    And I wait for 2 seconds
    And I navigate to page "<BLOG>"
    And I wait for 3 seconds
    And I should see a navBar item with name "$$name_1"
    And I wait for 2 seconds
    And I navigate to page "<URL>"
    And I wait for 3 seconds
    And I click in Design
    And I wait for 2 seconds
    And I click in navBar delete button
    And I wait for 1 seconds
    And I save navBar design changes
    And I wait for 1 seconds
    And I navigate to page "<BLOG>"
    And I wait for 3 seconds
    Then I shouldn't see a navBar item with name "$$name_1"