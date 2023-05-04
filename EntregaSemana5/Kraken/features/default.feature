Feature: Login

  @user1 @web
  Scenario: Como usuario inicio sesion en ghost
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click SignIn
    Then I wait for 7 seconds
