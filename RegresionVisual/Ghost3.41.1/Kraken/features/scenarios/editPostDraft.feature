Feature: Edit Post
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un post, reviso que esté en la lista de draft posts, entro de nuevo al post, edito su título y su contenido, reviso que el título editado sea el que aparece en el primer post de la lista de drafs, entro a ese post y valido que su título y contenido sean los editados
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "editPostDraft/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "editPostDraft/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "editPostDraft/3_clickSignIn"
    And I wait for 7 seconds
    And I click new post
    And I take screenshot with name "editPostDraft/4_clickNewPost"
    And I wait for 2 seconds
    And I enter post title "FOO BAR BAZ"
    And I take screenshot with name "editPostDraft/5_enterPostTitle1"
    And I wait for 2 seconds
    And I enter post content "<LOREM1>"
    And I take screenshot with name "editPostDraft/6_enterPostContent1"
    And I wait for 2 seconds
    And I click posts to go to previous page
    And I take screenshot with name "editPostDraft/7_clickPreviousPage1"
    And I wait for 2 seconds
    Then I should see the first draft post with title "FOO BAR BAZ"
    And I take screenshot with name "editPostDraft/8_firstDraftPost1"
    And I wait for 2 seconds
    When I click on the first draft post
    And I take screenshot with name "editPostDraft/9_clickFirstDraftPost1"
    And I wait for 2 seconds
    And I enter post title "BAZ BAR FOO"
    And I take screenshot with name "editPostDraft/10_enterPostTitle2"
    And I wait for 2 seconds
    And I enter post content "<LOREM2>"
    And I take screenshot with name "editPostDraft/11_enterPostContent2"
    And I wait for 2 seconds
    And I click posts to go to previous page
    And I take screenshot with name "editPostDraft/12_clickPreviousPage2"
    And I wait for 2 seconds
    Then I should see the first draft post with title "BAZ BAR FOO"
    And I take screenshot with name "editPostDraft/13_firstDraftPost2"
    And I wait for 2 seconds
    When I click on the first draft post
    And I take screenshot with name "editPostDraft/14_clickFirstDraftPost2"
    And I wait for 2 seconds
    Then I should see that the post title is "BAZ BAR FOO"
    And I take screenshot with name "editPostDraft/15_checkPostTitle"
    And I wait for 2 seconds
    Then I should see that the edited post content is "<LOREM2>""<LOREM1>"
    And I take screenshot with name "editPostDraft/16_checkPostContent"

