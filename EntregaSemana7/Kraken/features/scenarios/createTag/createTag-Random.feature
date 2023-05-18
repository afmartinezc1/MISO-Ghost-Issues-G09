Feature: Create Tag
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un tag y reviso que haya quedado en la lista de tags con los datos de entrada dados previamente
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click SignIn
    And I wait for 7 seconds
    And I go to the tags view
    And I wait for 2 seconds
    And I click new tag
    And I wait for 2 seconds
    And I enter tag name random "$name_0"
    And I wait for 2 seconds
    And I enter tag color random
    And I wait for 2 seconds
    And I enter tag slug random "$$name_0"
    And I wait for 2 seconds
    And I enter tag description random "$string_0"
    And I wait for 2 seconds
    And I save tag changes
    And I wait for 2 seconds
    And I go to the tags view
    And I wait for 2 seconds
    Then I should see tag in tag list with name random "$$name_0", slug random "$$name_0" and description random "$$string_0"
