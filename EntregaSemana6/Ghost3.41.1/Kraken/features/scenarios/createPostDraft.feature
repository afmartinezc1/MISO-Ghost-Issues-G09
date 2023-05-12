Feature: Create Post
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un post, reviso que sea el primero en la lista de draft posts, entro a ese post y reviso que título y contenido sean los ingresados previamente
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "createPostDraft/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "createPostDraft/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "createPostDraft/3_clickSignIn"
    And I wait for 7 seconds
    And I go to the posts view
    And I take screenshot with name "createPostDraft/4_clickPostView"
    And I wait for 2 seconds
    And I click new post
    And I take screenshot with name "createPostDraft/5_clickNewPost"
    And I wait for 2 seconds
    And I enter post title "FOO BAR BAZ"
    And I take screenshot with name "createPostDraft/6_enterPostTitle"
    And I wait for 2 seconds
    And I enter post content "<LOREM1>"
    And I take screenshot with name "createPostDraft/7_enterPostContent"
    And I wait for 2 seconds
    And I click posts to go to previous page
    And I take screenshot with name "createPostDraft/8_clickPreviousPage"
    And I wait for 2 seconds
    Then I should see the first draft post with title "FOO BAR BAZ"
    And I take screenshot with name "createPostDraft/9_firstDraftPost"
    And I wait for 2 seconds
    When I click on the first draft post
    And I take screenshot with name "createPostDraft/10_clickFirstDraftPost"
    And I wait for 2 seconds
    Then I should see that the post title is "FOO BAR BAZ"
    And I take screenshot with name "createPostDraft/11_checkPostTitle"
    And I wait for 2 seconds
    Then I should see that the post content is "<LOREM1>"
    And I take screenshot with name "createPostDraft/12_checkPostContent"
