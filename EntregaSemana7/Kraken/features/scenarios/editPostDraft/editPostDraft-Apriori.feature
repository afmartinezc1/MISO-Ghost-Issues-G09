Feature: Edit Post
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, entro de nuevo al post, edito su título y su contenido, reviso que el título editado sea el que aparece en el primer post de la lista de drafs, entro a ese post y valido que su título y contenido sean los editados
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click SignIn
    And I wait for 7 seconds
    And I click new post
    And I wait for 2 seconds
    And I enter post title a-priori-0
    And I wait for 2 seconds
    And I enter post content a-priori-0
    And I wait for 2 seconds
    And I click posts to go to previous page
    And I wait for 2 seconds
    Then I should see the first draft post with title a-priori-0
    And I wait for 2 seconds
    When I click on the first draft post
    And I wait for 2 seconds
    And I enter post title a-priori-1
    And I wait for 2 seconds
    And I enter post content a-priori-1
    And I wait for 2 seconds
    And I click posts to go to previous page
    And I wait for 2 seconds
    Then I should see the first draft post with title a-priori-1
    And I wait for 2 seconds
    When I click on the first draft post
    And I wait for 2 seconds
    Then I should see that the post title is a-priori-1
    And I wait for 2 seconds
    Then I should see that the edited post content is a-priori-1_a-priori-0

