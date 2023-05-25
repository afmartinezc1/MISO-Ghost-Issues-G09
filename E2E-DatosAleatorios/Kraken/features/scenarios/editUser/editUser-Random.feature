Feature: Edit Staff

  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, entro a staff, y modifico algunos de los atributos del usuario. Luego valido que estos atributos se hayan modificado correctamente
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click SignIn    
    And I wait for 5 seconds
    And I click in Staff
    And I wait for 2 seconds
    And I click in author user to modify
    And I wait for 1 seconds
    And I fill user full name in staff with text "$name_1"
    And I wait for 1 seconds
    And I fill user location in staff with text "$url_1"
    And I wait for 1 seconds
    And I fill user biography in staff with text "$name_2"
    And I wait for 1 seconds
    And I save user edit staff changes
    And I wait for 2 seconds
    And I click in Staff
    And I wait for 2 seconds
    And I should see user full name in staff list with text "$$name_1"
    And I wait for 2 seconds
    And I click in author user to modify
    And I wait for 2 seconds
    And I should see user full name in edit user with text "$$name_1"
    And I wait for 1 seconds
    And I should see user location in edit user with text "$$url_1"
    And I wait for 1 seconds
    Then I should see user biography in edit user with text "$$name_2"