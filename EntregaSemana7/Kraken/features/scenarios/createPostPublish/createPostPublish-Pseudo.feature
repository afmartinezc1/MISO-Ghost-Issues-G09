Feature: Create Post and publish
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un post, publicarlo y entrar el viewsite y verificar que exista
    Given I navigate to page "<URL>"
    And I get pseudoData from api
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click SignIn
    And I wait for 7 seconds
    And I go to the posts view
    And I wait for 2 seconds
    And I click new post
    And I wait for 2 seconds
    And I enter post title pseudo-0
    And I wait for 2 seconds
    And I enter post content pseudo-0
    And I wait for 2 seconds
    And I click publish to show dialog to publish
    And I wait for 2 seconds
    When I click publish to confirm
    And I wait for 2 seconds
    And I click posts to go to previous page
    And I wait for 2 seconds
    Then I should see the page published pseudo
    And I wait for 2 seconds

