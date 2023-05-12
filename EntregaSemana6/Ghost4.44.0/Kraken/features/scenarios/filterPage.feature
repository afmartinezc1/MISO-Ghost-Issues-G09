Feature: Filtrar pages
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, filtrar los pages por estado y por autor y verificar que filtra correctamente
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click SignIn
    And I wait for 7 seconds
    And I go to the pages view
    And I wait for 2 seconds
    And I click filter page by state
    And I wait for 2 seconds
    And I click filter page by state Draft
    And I wait for 2 seconds
    Then I should see pages with estado "DRAFT"
    And I wait for 2 seconds
    And I click filter page by state
    And I wait for 2 seconds
    When I click filter page by state Published
    And I wait for 2 seconds
    Then I should see pages with estado "PUBLISHED"
    And I wait for 2 seconds
    And I click filter page by state
    And I wait for 2 seconds
    When I click filter page by state All
    And I wait for 2 seconds
    And I click filter page by author
    And I wait for 2 seconds
    And I click filter page by author ghost
    And I wait for 2 seconds
    Then I should see pages with author "By Ghost"
    
