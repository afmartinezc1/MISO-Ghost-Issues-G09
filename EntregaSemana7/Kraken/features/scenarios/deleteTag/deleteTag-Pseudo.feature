Feature: Delete Tag
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo y selecciono un tag, lo elimino y reviso que se haya removido de la lista de tags
    Given I navigate to page "<URL>"
    And I get pseudoData from api
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
    And I enter tag name pseudo-0
    And I wait for 2 seconds
    And I enter tag color pseudo-0
    And I wait for 2 seconds
    And I enter tag slug pseudo-0
    And I wait for 2 seconds
    And I enter tag description pseudo-0
    And I wait for 2 seconds
    And I save tag changes
    And I wait for 2 seconds
    And I go to the tags view
    And I wait for 2 seconds
    Then I should see tag in tag list with name pseudo-0, slug pseudo-0 and description pseudo-0
    And I click a tag with name pseudo-0, slug pseudo-0 and description pseudo-0
    And I wait for 2 seconds
    And I click on delete tag
    And I wait for 2 seconds
    And I click on confirm tag delete
    And I wait for 2 seconds
    Then I should not see tag in tag list with name pseudo-0, slug pseudo-0 and description pseudo-0
