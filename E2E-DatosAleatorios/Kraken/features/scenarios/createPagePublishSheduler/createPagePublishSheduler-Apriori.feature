Feature: Create Post and publish sheduled
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo una page, programar la publicacion por 5 minutos y verificar que quedó programado
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
    And I enter page content a-priori-0
    And I wait for 2 seconds
    And I click publish to show dialog to publish
    And I wait for 2 seconds
    And I click calendar
    And I wait for 2 seconds
    And I click publish to confirm
    And I wait for 1 seconds
    And I click pages to go to previous page
    And I wait for 2 seconds
    Then I should see the first pages with state a-priori "SCHEDULED"
    And I wait for 2 seconds
