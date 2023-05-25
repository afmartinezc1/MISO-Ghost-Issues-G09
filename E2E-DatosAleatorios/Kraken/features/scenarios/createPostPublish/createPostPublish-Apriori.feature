Feature: Create Post and publish
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un post, regresarse al viewsite y verificar que se creó con el estado publicado
    Given I navigate to page "<URL>"
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
    And I enter post title a-priori-0
    And I wait for 2 seconds
    And I enter post content a-priori-0
    And I wait for 2 seconds
    And I click publish to show dialog to publish
    And I wait for 2 seconds
    When I click publish to confirm
    And I wait for 2 seconds
    And I click posts to go to previous page
    And I wait for 2 seconds
    Then I should see the post published a-priori
    And I wait for 2 seconds

