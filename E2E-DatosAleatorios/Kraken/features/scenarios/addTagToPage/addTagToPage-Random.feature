Feature: Add Tag to page
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un tag y un page, selecciono el page, le agregó el tag y verificó que el tag se agregó correctamente
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
    And I go to the pages view
    And I wait for 2 seconds
    And I click new page
    And I wait for 2 seconds
    And I enter page title random "$name_1"
    And I wait for 2 seconds
    And I enter page content "$string_1"
    And I wait for 2 seconds
    And I click pages to go to previous page
    And I wait for 2 seconds
    Then I should see the first draft page with title random "$$name_1"
    And I wait for 2 seconds
    When I click on the first draft page
    And I wait for 2 seconds
    And I click on post settings
    And I wait for 2 seconds
    And I click tags list
    And I wait for 2 seconds
    And I select tag random "$$name_0"
    And I wait for 2 seconds
    And I click on close post settings
    And I wait for 2 seconds
    And I click pages to go to previous page
    And I wait for 2 seconds
    And I click on leave modal design button
    And I wait for 2 seconds
    Then I should see the first draft page with title random "$$name_1"
    And I wait for 2 seconds
    When I click on the first draft page
    And I wait for 2 seconds
    And I click on post settings
    And I wait for 2 seconds
    Then I should see the selected tag random "$$name_0"
