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
    And I enter tag name "FOO BAR BAZ"
    And I wait for 2 seconds
    And I enter tag color "8889ec"
    And I wait for 2 seconds
    And I enter tag slug "foo-bar-baz"
    And I wait for 2 seconds
    And I enter tag description "<LOREM1>"
    And I wait for 2 seconds
    And I save tag changes
    And I wait for 2 seconds
    And I go to the tags view
    And I wait for 2 seconds
    Then I should see tag in tag list with name "FOO BAR BAZ", slug "foo-bar-baz" and description "<LOREM1>"
