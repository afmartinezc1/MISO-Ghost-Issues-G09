Feature: Delete Post
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, creo otro post, reviso que esté en la lista de draft posts, borro este post, y valido que el primer post de la lista de draft posts sea el primero que cree, con lo cual me cercioro que el segundo post efectivamente fue borrado
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "deletePostDraft/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "deletePostDraft/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "deletePostDraft/3_clickSignIn"
    And I wait for 7 seconds
    And I click new post
    And I take screenshot with name "deletePostDraft/4_clickNewPost1"
    And I wait for 2 seconds
    And I enter post title "FOO BAR BAZ"
    And I take screenshot with name "deletePostDraft/5_enterPostTitle1"
    And I wait for 2 seconds
    And I enter post content "<LOREM1>"
    And I take screenshot with name "deletePostDraft/6_enterPostContent1"
    And I wait for 2 seconds
    And I click posts to go to previous page
    And I take screenshot with name "deletePostDraft/7_clickPreviousPage1"
    And I wait for 2 seconds
    Then I should see the first draft post with title "FOO BAR BAZ"
    And I take screenshot with name "deletePostDraft/8_firstDraftPost1"
    And I click new post
    And I take screenshot with name "deletePostDraft/9_clickNewPost2"
    And I wait for 2 seconds
    And I enter post title "BAZ BAR FOO"
    And I take screenshot with name "deletePostDraft/10_enterPostTitle2"
    And I wait for 2 seconds
    And I enter post content "<LOREM2>"
    And I take screenshot with name "deletePostDraft/11_enterPostContent2"
    And I click posts to go to previous page
    And I take screenshot with name "deletePostDraft/12_clickPreviousPage2"
    And I wait for 2 seconds
    Then I should see the first draft post with title "BAZ BAR FOO"
    And I take screenshot with name "deletePostDraft/13_firstDraftPost2"
    And I wait for 2 seconds
    When I click on the first draft post
    And I take screenshot with name "deletePostDraft/14_clickFirstDraftPost1"
    And I wait for 2 seconds
    Then I should see that the post title is "BAZ BAR FOO"
    And I take screenshot with name "deletePostDraft/15_checkPostTitle1"
    And I wait for 2 seconds
    Then I should see that the post content is "<LOREM2>"
    And I take screenshot with name "deletePostDraft/16_checkPostContent1"
    And I wait for 2 seconds
    And I click on post settings
    And I take screenshot with name "deletePostDraft/17_clickPostSettings"
    And I wait for 2 seconds
    And I click on delete post
    And I take screenshot with name "deletePostDraft/18_clickDeletePost"
    And I wait for 2 seconds
    And I click on confirm post delete
    And I take screenshot with name "deletePostDraft/19_clickConfirmDelete"
    And I wait for 2 seconds
    When I click on the first draft post
    And I take screenshot with name "deletePostDraft/20_clickFirstDraftPost2"
    And I wait for 2 seconds
    Then I should see that the post title is "FOO BAR BAZ"
    And I take screenshot with name "deletePostDraft/21_checkPostTitle2"
    And I wait for 2 seconds
    Then I should see that the post content is "<LOREM1>"
    And I take screenshot with name "deletePostDraft/22_checkPostContent2"



