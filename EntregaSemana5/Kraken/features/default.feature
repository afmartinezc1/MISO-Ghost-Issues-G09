Feature: Login
  
  @user2 @web
  Scenario: Como usuario inicio sesion en ghost, creo un post, y reviso que este en draft
    Given I navigate to page "http://localhost:2369/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click SignIn
    And I wait for 7 seconds
    And I click new post
    And I wait for 2 seconds
    And I enter title "<TITLE>"
    And I wait for 2 seconds
    And I enter content "<CONTENT>"
    And I wait for 2 seconds
    And I click post to go to previous page
    And I wait for 2 seconds
    Then I should see the draft post with title "<TITLE>"
