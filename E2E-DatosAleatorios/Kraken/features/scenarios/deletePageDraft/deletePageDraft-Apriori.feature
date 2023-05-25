Feature: Delete Page
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo una page, reviso que esté en la lista de draft pages, creo otra page, reviso que esté en la lista de draft pages, borro esta page, y valido que la primera page de la lista de draft pages sea la primera que cree, con lo cual me cercioro que la segunda page efectivamente fue borrada
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
    And I click pages to go to previous page
    And I wait for 2 seconds
    Then I should see the first draft page with title a-priori-0
    And I click new page
    And I wait for 2 seconds
    And I enter page title a-priori-1
    And I wait for 2 seconds
    And I enter page content a-priori-1
    And I click pages to go to previous page
    And I wait for 2 seconds
    Then I should see the first draft page with title a-priori-1
    And I wait for 2 seconds
    When I click on the first draft page
    And I wait for 2 seconds
    Then I should see that the page title is a-priori-1
    And I wait for 2 seconds
    Then I should see that the page content is a-priori-1
    And I wait for 2 seconds
    And I click on page settings
    And I wait for 2 seconds
    And I click on delete page
    And I wait for 2 seconds
    And I click on confirm page delete
    And I wait for 2 seconds
    When I click on the first draft page
    And I wait for 2 seconds
    Then I should see that the page title is a-priori-0
    And I wait for 2 seconds
    Then I should see that the page content is a-priori-0

