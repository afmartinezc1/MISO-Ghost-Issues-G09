Feature: Create Post inside page and publish
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo una page con un post, la publico y verifico que el post exista
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
    And I enter page title "MY_SECOND_PAGE"
    And I wait for 2 seconds
    And I enter page content "<POST_PUBLICADO>"
    And I wait for 2 seconds
    And I click publish to show dialog to publish
    And I wait for 2 seconds
    When I click publish to confirm
    And I wait for 2 seconds
    Then I navigate to page "<PAGE_PUBLICADO>"
    And I wait for 2 seconds
