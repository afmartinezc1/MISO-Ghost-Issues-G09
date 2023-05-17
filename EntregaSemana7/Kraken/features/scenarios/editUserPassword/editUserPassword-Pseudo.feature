Feature: change password Staff

  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, entro a staff, y modifico la contraseña de un usuario, me deslogueo e ingreso con la nueva
    Given I navigate to page "<URL>"
    And I get pseudoData from api
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
    And I fill user email in staff with text pseudo
    And I wait for 1 seconds
    And I fill user new password in staff with text pseudo
    And I wait for 1 seconds
    And I fill user new password verification in staff with text pseudo
    And I wait for 1 seconds
    And I save user new password staff changes
    And I wait for 2 seconds
    And I save user edit staff changes
    And I wait for 2 seconds
    And I click user profile sideBar
    And I wait for 3 seconds
    And I click user sign out
    And I wait for 2 seconds
    And I enter email pseudo
    And I wait for 2 seconds
    And I enter password pseudo
    And I wait for 2 seconds
    And I click SignIn    
    And I wait for 5 seconds
    Then I shouldn see a sideNav page title