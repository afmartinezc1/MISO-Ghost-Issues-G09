Feature: Create Post and publish sheduled
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un post, programar la publicacion por 5 minutos y verificar que quedó programado
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "createPostPublishSheduler/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "createPostPublishSheduler/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "createPostPublishSheduler/3_clickSignIn"
    And I wait for 7 seconds
    And I go to the posts view
    And I take screenshot with name "createPostPublishSheduler/4_clickPostView"
    And I wait for 2 seconds
    And I click new post
    And I take screenshot with name "createPostPublishSheduler/5_clickNewPost"
    And I wait for 2 seconds
    And I enter post title "MY_SECOND_POST"
    And I take screenshot with name "createPostPublishSheduler/6_enterPostTitle"
    And I wait for 2 seconds
    And I enter post content "<LOREM1>"
    And I take screenshot with name "createPostPublishSheduler/7_enterPostContent"
    And I wait for 2 seconds
    And I click publish to show dialog to publish
    And I take screenshot with name "createPostPublishSheduler/8_clickPublishDialog"
    And I wait for 2 seconds
    And I click calendar
    And I take screenshot with name "createPostPublishSheduler/9_clickCalendar"
    And I wait for 2 seconds
    And I click publish to confirm
    And I take screenshot with name "createPostPublishSheduler/10_clickPublishConfirm"
    And I wait for 1 seconds
    And I click posts to go to previous page
    And I take screenshot with name "createPostPublishSheduler/11_clickPostPreviusPage"
    And I wait for 2 seconds
    Then I should see the first post with state "MY_SECOND_POST" "SCHEDULED"
    And I take screenshot with name "createPostPublishSheduler/12_shouldTheFirstPostStateSheduled"
    And I wait for 2 seconds
