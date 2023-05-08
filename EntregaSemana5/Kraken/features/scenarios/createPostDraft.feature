Feature: Create Post
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un post, reviso que sea el primero en la lista de draft posts, entro a ese post y reviso que título y contenido sean los ingresados previamente
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
    And I enter post title "FOO BAR BAZ"
    And I wait for 2 seconds
    And I enter post content "<LOREM1>"
    And I wait for 2 seconds
    And I click posts to go to previous page
    And I wait for 2 seconds
    Then I should see the first draft post with title "FOO BAR BAZ"
    And I wait for 2 seconds
    When I click on the first draft post
    And I wait for 2 seconds
    Then I should see that the post title is "FOO BAR BAZ"
    And I wait for 2 seconds
    Then I should see that the post content is "<LOREM1>"
