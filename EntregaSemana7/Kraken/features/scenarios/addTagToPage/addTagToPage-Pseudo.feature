Feature: Add Tag to page
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un tag y un page, selecciono el page, le agregó el tag y verificó que el tag se agregó correctamente
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
    And I go to the pages view
    And I wait for 2 seconds
    And I click new page
    And I wait for 2 seconds
    And I enter page title pseudo-0
    And I wait for 2 seconds
    And I enter page content pseudo-0
    And I wait for 2 seconds
    And I click pages to go to previous page
    And I wait for 2 seconds
    Then I should see the first draft page with title pseudo-0
    And I wait for 2 seconds
    When I click on the first draft page
    And I wait for 2 seconds
    And I click on post settings
    And I wait for 2 seconds
    And I click tags list
    And I wait for 2 seconds
    And I select tag pseudo-0
    And I wait for 2 seconds
    And I click on close post settings
    And I wait for 2 seconds
    And I click pages to go to previous page
    And I wait for 2 seconds
    And I click on leave modal design button
    And I wait for 2 seconds
    Then I should see the first draft page with title pseudo-0
    And I wait for 2 seconds
    When I click on the first draft page
    And I wait for 2 seconds
    And I click on post settings
    And I wait for 2 seconds
    Then I should see the selected tag pseudo-0
