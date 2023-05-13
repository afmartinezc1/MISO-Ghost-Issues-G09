Feature: Create Post and publish
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un post, publicarlo y entrar el viewsite y verificar que exista
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "createPostPublish/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "createPostPublish/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "createPostPublish/3_clickSignIn"
    And I wait for 7 seconds
    And I go to the posts view
    And I take screenshot with name "createPostPublish/4_clickPostView"
    And I wait for 2 seconds
    And I click new post
    And I take screenshot with name "createPostPublish/5_clickNewPost"
    And I wait for 2 seconds
    And I enter post title "MY_FIRST_POST"
    And I take screenshot with name "createPostPublish/6_enterPostTitle"
    And I wait for 2 seconds
    And I enter post content "<LOREM1>"
    And I take screenshot with name "createPostPublish/7_enterPostContent"
    And I wait for 2 seconds
    And I click publish to show dialog to publish
    And I take screenshot with name "createPostPublish/8_clickPublishDialog"
    And I wait for 2 seconds
    When I click publish to confirm
    And I take screenshot with name "createPostPublish/9_clickPublishConfirm"
    And I wait for 2 seconds
    Then I navigate to page "<POST_PUBLICADO>"
    And I take screenshot with name "createPostPublish/10_navegateToPage"
    And I wait for 2 seconds

