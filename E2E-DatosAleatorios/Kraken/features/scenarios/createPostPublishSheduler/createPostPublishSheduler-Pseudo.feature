Feature: Create Post and publish sheduled
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un post, programar la publicacion por 5 minutos y verificar que quedó programado
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
    And I click calendar
    And I wait for 2 seconds
    And I click publish to confirm
    And I wait for 1 seconds
    And I click posts to go to previous page
    And I wait for 2 seconds
    Then I should see the first posts with state pseudo "SCHEDULED"
    And I wait for 2 seconds
    
