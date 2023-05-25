Feature: Edit Staff

  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, entro a staff, y modifico algunos de los atributos del usuario. Luego valido que estos atributos se hayan modificado correctamente
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "editUser/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "editUser/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn    
    And I take screenshot with name "editUser/3_clickSignIn"
    And I wait for 5 seconds
    And I click in Settings
    And I wait for 2 seconds
    And I click in Staff
    And I take screenshot with name "editUser/4_clickInStaff"
    And I wait for 2 seconds
    And I click in author user to modify
    And I take screenshot with name "editUser/5_clickInUsertoModify"
    And I wait for 1 seconds
    And I fill user full name in staff with text "Zyra"
    And I take screenshot with name "editUser/6_fillUserName"
    And I wait for 1 seconds
    And I fill user location in staff with text "New zeland"
    And I take screenshot with name "editUser/7_fillUserLocation"
    And I wait for 1 seconds
    And I fill user biography in staff with text "<LOREM>"
    And I take screenshot with name "editUser/8_fillUserBiography"
    And I wait for 1 seconds
    And I save user edit staff changes
    And I take screenshot with name "editUser/9_saveUserChanges"
    And I wait for 2 seconds
    And I click in Settings
    And I wait for 2 seconds
    And I click in Staff
    And I take screenshot with name "editUser/10_clickInStaff"
    And I wait for 2 seconds
    And I should see user full name in staff list with text "Zyra"
    And I take screenshot with name "editUser/11_shouldSeeUserName"
    And I wait for 2 seconds
    And I click in author user to modify
    And I take screenshot with name "editUser/12_clickInUsertoModify"
    And I wait for 2 seconds
    And I should see user full name in edit user with text "Zyra"
    And I take screenshot with name "editUser/13_shouldSeeUserName"
    And I wait for 1 seconds
    And I should see user location in edit user with text "New zeland"
    And I take screenshot with name "editUser/14_shouldSeeUserLocation"
    And I wait for 1 seconds
    Then I should see user biography in edit user with text "<LOREM>"
    And I take screenshot with name "editUser/15_shouldSeeUserBiography"
