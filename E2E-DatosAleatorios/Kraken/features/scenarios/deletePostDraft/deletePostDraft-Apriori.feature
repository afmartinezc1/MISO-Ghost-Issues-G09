Feature: Delete Post
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, creo otro post, reviso que esté en la lista de draft posts, borro este post, y valido que el primer post de la lista de draft posts sea el primero que cree, con lo cual me cercioro que el segundo post efectivamente fue borrado
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
    And I click new post
    And I wait for 2 seconds
    And I enter post title a-priori-1
    And I wait for 2 seconds
    And I enter post content a-priori-1
    And I click posts to go to previous page
    And I wait for 2 seconds
    Then I should see the first draft post with title a-priori-1
    And I wait for 2 seconds
    When I click on the first draft post
    And I wait for 2 seconds
    Then I should see that the post title is a-priori-1
    And I wait for 2 seconds
    Then I should see that the post content is a-priori-1
    And I wait for 2 seconds
    And I click on post settings
    And I wait for 2 seconds
    And I click on delete post
    And I wait for 2 seconds
    And I click on confirm post delete
    And I wait for 2 seconds
    When I click on the first draft post
    And I wait for 2 seconds
    Then I should see that the post title is a-priori-0
    And I wait for 2 seconds
    Then I should see that the post content is a-priori-0


