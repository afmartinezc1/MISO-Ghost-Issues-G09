Feature: Edit Tag
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo y selecciono un tag, edito su información y reviso que haya quedado en la lista de tags con los datos editados
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
    And I click a tag with name "FOO BAR BAZ", slug "foo-bar-baz" and description "<LOREM1>"
    And I wait for 2 seconds
    And I enter tag name "BAZ BAR FOO"
    And I wait for 2 seconds
    And I enter tag color "a52a2a"
    And I wait for 2 seconds
    And I enter tag slug "baz-bar-foo"
    And I wait for 2 seconds
    And I enter tag description "<LOREM>"
    And I wait for 2 seconds
    And I save tag changes
    And I wait for 2 seconds
    And I go to the tags view
    And I wait for 2 seconds
    Then I should see tag in tag list with name "BAZ BAR FOO", slug "baz-bar-foo" and description "<LOREM>"
