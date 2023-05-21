Feature: Create Page and publish
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo una page, la publico resgreso a viewsite de pages se busca la pagina publicada entro en ella y verifico la url
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
    And I click new page
    And I wait for 2 seconds
    And I enter page title a-priori-0
    And I wait for 2 seconds
    And I enter page url a-priori-0
    And I wait for 2 seconds
    And I click publish to show dialog to publish
    And I wait for 2 seconds
    When I click publish to confirm
    And I wait for 2 seconds
    And I click pages to go to previous page
    And I wait for 2 seconds
    And  I click page published url a-priori
    And I wait for 2 seconds
    Then I should see the page published url a-priori
    And I wait for 2 seconds
  
